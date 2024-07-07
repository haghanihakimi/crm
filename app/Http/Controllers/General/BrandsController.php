<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\Brand;
use Inertia\Inertia;

class BrandsController extends Controller
{
    /**
     * List of Brands view
     * @return Inertia\Inertia
     */
    public function index (Request $request) {
        $request->validate([
            'page' => ['nullable', 'numeric', 'min:1', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'sort' => ['nullable', 'string', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u']
        ]);

        $authenticate = Auth::guard('web')->check();
        $user = Auth::guard('web')->user();

        return Inertia::render('Brands/ViewBrandsList', [
            'params' => $request->input(),
            'brands' => $this->listBrands($request->input('sort')),
        ]);
    }

    /**
     * List all get brands, sort brands
     * @return Collection
     */
    private function listBrands($sort) {
        $user = Auth::guard('web')->user();
        
        $brands = Brand::select('id', 'name', 'logo_path', 'created_at')->paginate(15);

        $this->sortBrands($sort, $brands);

        return $brands;
    }

    /**
     * Displays a page to create new brand
     * @return Inertia\Inertia
     */
    public function newBrandView () {
        return Inertia::render('Brands/CreateBrand');
    }

    /**
     * New Brand Page to create and add new brand to record
     * @return Inertia\Inertia
     */
    public function newBrandCreate(Request $request) {
        $this->newBrandValidateInputs($request);

        $brand = Brand::create([
            'name' => Str::of($request->name)->ucfirst(),
            'logo_path' => null,
            'description' => $request->description
        ]);

        if ($brand) {
            $file = null;

            $request->file('logo')->storeAs(
                'public/brands/logo/'.$brand->id, $file = $request->file('logo')->hashName()
            );
            $brand->logo_path = $file;
            if ($brand->save()) {
                return back()->with('message', ['brand_successfuly_created' => $brand->name." successfully added to record."]);
            }
            return back()->with('message', ['brand_creation_failed' => 'Uploading brand logo failed. Please try again later.']);
        }
        return back()->with('message', ['brand_creation_failed' => 'New brand wast not created. Please try again later.']);
    }

    /**
     * Get list of brands and sort them
     * @return Collection
     */
    private function sortBrands($sort, $brands) {
        switch ($sort) {
            case 'az':
                $sortedResult = $brands->getCollection()->sortBy('name')->values();
                $brands->setCollection($sortedResult);
                break;
            case 'za':
                $sortedResult = $brands->getCollection()->sortByDesc('name')->values();
                $brands->setCollection($sortedResult);
                break;
            case 'oldest':
                $sortedResult = $brands->getCollection()->sortByDesc('created_at')->values();
                $brands->setCollection($sortedResult);
                break;
            case 'newest':
                $sortedResult = $brands->getCollection()->sortBy('created_at')->values();
                $brands->setCollection($sortedResult);
                break;
            default:
                $sortedResult = $brands->getCollection()->sortBy('id')->values();
                $brands->setCollection($sortedResult);
                break;
        }
        return false;
    }

    /**
     * Display data related to selected brand
     * @return Inertia\Inertia
     */
    public function viewBrandEdit ($brand) {

        return Inertia::render('Brands/ViewEditBrand', [
            'brand' => Brand::find($brand),
        ]);
    }

    /**
     * Submit brand new information and save changes
     * @return response
     */
    public function editBrand ($brand, Request $request) {
        //Validate all inputs on Edit Brand page
        $this->editBrandValidateInputs($request);
        
        //If validation PASSED, select targeted brand from DB
        $brand = Brand::find($request->id);

        //$file value keeps null and then if user selects a logo image then it will be equal to hashed name of same image after uploading
        $file = null;
        
        //Check if Logo Input File has any file selected
        if ($request->hasFile('logo')) {
            Storage::deleteDirectory('public/brands/logo/'.$brand->id);

            $request->file('logo')->storeAs(
                'public/brands/logo/'.$brand->id, $file = $request->file('logo')->hashName()
            );
        }

        //Update all necessary fields of Brand table
        $brand->name = $request->name;
        $brand->logo_path = !empty($file) ? $file : $request->logo_path;
        $brand->description = $request->description;
        
        //Check if Brand changes can be saved
        if ($brand->save()) {
            return back()->with('message', ['brand_successfully_updated' => $brand->name." successfully updated."]);
        }
        return back()->with('message', ['brand_updates_failure' => $brand->name." update failed. Please try again later."]);
    }

    /**
     * Permanently delte brand
     */
    public function destroy($brand) {
        try {            
            $brand = Brand::find($brand);
        
            if ($brand->delete()) {
                return back()->with('message', ['brand_delete' => $brand->name.' deleted from record.']);
            }
            return back()->with('message', ['brand_delete' => 'Brand deletion failed.']);
        } catch (\Exception $e) {
            return back()->with('message', ['brand_delete' => $e->getMessage()]);
        } 
    }

    //Validation for New Brand Form inputs
    private function newBrandValidateInputs ($request) {
        return $request->validate([
            'name' => ['required', 'string', 'min:1', 'max:64', 'regex:/(^([a-zA-Z0-9 ]+)(\d+)?$)/u'],
            'logo' => ['required', 'mimes:jpg,jpeg,png','max:512'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

    //Validation for Edit Brand Form inputs
    private function editBrandValidateInputs ($request) {
        $logo_validations = empty($request->logo_path) ? 'required' : 'nullable';
        return $request->validate([
            'id' => ['required', 'numeric', 'min:1'],
            'name' => ['required', 'string', 'min:1', 'max:64', 'regex:/(^([a-zA-Z0-9 ]+)(\d+)?$)/u'],
            'logo_path' => ['nullable', 'string'],
            'logo' => [$logo_validations, 'mimes:jpg,jpeg,png','max:512'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }
}
