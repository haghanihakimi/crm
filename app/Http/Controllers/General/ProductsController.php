<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Models\Brand;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * List of products view
     * @return Inertia\Inertia
     */
    public function index (Request $request) {
        $request->validate([
            'page' => ['nullable', 'numeric', 'min:1', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'sort' => ['nullable', 'string', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u']
        ]);

        return Inertia::render('Products/ViewProductsList', [
            'params' => $request->input(),
            'products' => $this->listProducts($request->input('sort')),
        ]);
    }

    /**
     * List all get products, sort products
     * @return Collection
     */
    private function listProducts($sort) {
        $products = Product::with('brands')->paginate(15);

        $this->sortProducts($sort, $products);

        return $products;
    }

    /**
     * Get list of products and sort them
     * @return Collection
     */
    private function sortProducts($sort, $products) {
        switch ($sort) {
            case 'az':
                $sortedResult = $products->getCollection()->sortBy('name')->values();
                $products->setCollection($sortedResult);
                break;
            case 'za':
                $sortedResult = $products->getCollection()->sortByDesc('name')->values();
                $products->setCollection($sortedResult);
                break;
            case 'expensive':
                $sortedResult = $products->getCollection()->sortByDesc('price')->values();
                $products->setCollection($sortedResult);
                break;
            case 'cheap':
                $sortedResult = $products->getCollection()->sortBy('price')->values();
                $products->setCollection($sortedResult);
                break;
            case 'oldest':
                $sortedResult = $products->getCollection()->sortByDesc('created_at')->values();
                $products->setCollection($sortedResult);
                break;
            case 'newest':
                $sortedResult = $products->getCollection()->sortBy('created_at')->values();
                $products->setCollection($sortedResult);
                break;
            default:
                $sortedResult = $products->getCollection()->sortBy('id')->values();
                $products->setCollection($sortedResult);
                break;
        }
        return false;
    }

    /**
     * Display page to view and edit selected product
     * @return Inertia\Inertia
     */
    public function viewProductEdit ($product) {
        return Inertia::render('Products/ViewProductEdit', [
            'product' => Product::find($product),
            'brands' => Brand::select('id', 'name')->paginate(300),
        ]);
    }

    public function saveProductEdit ($product, Request $request) {
        $request->validate([
            'id' => ['required', 'numeric', 'min:1'],
            'brand' => ['required', 'numeric', 'min:1'],
            'name' => ['required', 'string', 'min:5'],
            'sku' => ['required', 'alpha_num'],
            'description' => ['nullable', 'string', 'max:500'],
            'price' => ['required', 'numeric', 'min: 0'],
            'sale_price' => ['nullable', 'numeric', 'min: 0']
        ]);

        $product = Product::find($product);

        $product->brand_id = $request->brand;
        $product->name = $request->name;
        $product->sku = $request->sku;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->sale_price = $request->sale_price;

        if ($product->save()) {
            return back()->with('message', ['product_successfully_saved' => 'Product changes successfully saved.']);
        }
        return back()->with('message', ['product_updated_failed' => 'Updating product failed. Please try again later.']);
    }

    /**
     * Display page to create new product
     * @return Inertia\Inertia
     */
    public function viewCreateProduct () {
        return Inertia::render('Products/ViewCreateProduct', [
            'brands' => Brand::select('id', 'name')->orderBy('name', 'ASC')->paginate(300),
        ]);
    }

    public function createProduct (Request $request) {
        $request->validate([
            'brand' => ['nullable', 'numeric', 'min:1'],
            'name' => ['required', 'string', 'min:5'],
            'sku' => ['nullable', 'alpha_num'],
            'description' => ['nullable', 'string', 'max:500'],
            'price' => ['required', 'numeric', 'min:0'],
            'sale_price' => ['nullable', 'numeric', 'min:0']
        ]);
        
        $product = Product::create([
            'brand_id' => $request->brand,
            'name' => $request->name,
            'sku' => $request->sku, 
            'description' => $request->description,
            'price' => $request->price,
            'sale_price' => $request->sale_price,
        ]);

        if ($product) {
            return back()->with('message', ['product_successfully_create' => "New product successfully created."]);
        }
        return back()->with('message', ['product_create_failed' => "Creating new product failed. Please try again later."]);
    }

    /**
     * A function to search through all products on Create New Invoice page.
     */
    public function searchProducts(Request $request){
        $request->validate([
            'keywords' => ['required', 'string', 'min:1']
        ]);

        $products = Product::search($request->input('keywords'))
        ->select('id', 'name', 'sku')
        ->limit(10)
        ->orderBy('id', 'ASC')
        ->get();

        return response()->json($products);
    }
}
