<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\CustomersNormal;
use App\Models\Customer;
use App\Models\User;
use Inertia\Inertia;

class CustomersController extends Controller
{
    /**
     * List of customer view
     * @return Inertia\Inertia
     */
    public function index (Request $request) {
        $request->validate([
            'page' => ['nullable', 'numeric', 'min:1', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'sort' => ['nullable', 'string', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u']
        ]);
        return Inertia::render('Customers/CustomersView', [
            'customers' => $this->listCustomers($request->input('sort')),
            'params' => $request->input(),
        ]);
    }

    /**
     * Add new customer view page
     * @return Inertia\Inertia
     */
    public function viewNewCustomer () {
        return Inertia::render('Customers/CustomersNew');
    }

    /**
     * Edut customer view page
     * @return Inertia\Inertia
     */
    public function editCustomerView ($customer) {
        return Inertia::render('Customers/CustomerEditView', [
            'customer' => Customer::where('id', $customer)->with('countries')->first(),
        ]);
    }

    /**
     * Add new customer view page
     * @return response
     */
    public function newCustomer (Request $request) {

        $this->validateNewCustomer($request, 'unique:users');

        $customer = $this->storeCustomer($request);
        if ($customer) {
            return back()->with('message', ['new_customer_success' => '<strong>'.$customer->first_name.'</strong> successfully added.']);
        }

        return back()->with('message', ['new_customer_failure' => "New customer wasn't added to record."]);
    }

    /**
     * Edit selected customer
     * @return response
     */
    public function editCustomer ($customer_id, Request $request) {
        $this->validateEditCustomer($request);

        $customer = Customer::find($request->customer_id);
        $customer->update([
            'country_id' => $request->country,
            'first_name' => $request->first_name,
            'surname' => $request->surname,
            'phone' => $request->phone,
            'company' => $request->company,
            'street' => $request->street,
            'city' => $request->city,
            'postcode' => $request->postcode,
            'state' => $request->state
        ]);

        if ($customer) {            
            return back()->with('message', ['customer_update_success' => $request->first_name.' profile updated successfully.']);
        }
        return back()->with('message', ['customer_update_failure' => 'Updating customer failed.']);
    }

    /**
     * Delete selected customer
     * @return response
     */
    public function deleteCustomer ($customer_id, Request $request) {
        try {
            $request->validate([
                'customer_id' => ['required', 'numeric', 'min:1']
            ]);
            
            $customer = Customer::find($request->customer_id);
        
            if ($customer->delete()) {
                return back()->with('message', ['customer_delete' => $customer->first_name.' deleted from record.']);
            }
            return back()->with('message', ['customer_delete' => 'Customer deletion failed.']);
        } catch (\Exception $e) {
            return back()->with('message', ['customer_delete' => $e->getMessage()]);
        }
    }

    /**
     * Search through customers
     * @return response|json
     */
    public function searchCustomers (Request $request) {
        $request->validate([
            'keywords' => ['required', 'string', 'min:1']
        ]);

        $customers = Customer::search($request->input('keywords'))
        ->select('id', 'first_name', 'surname', 'email', 'phone')
        ->limit(10)
        ->orderBy('first_name', 'ASC')
        ->get();

        return response()->json($customers);
    }

    /**
     * Fetches and returns list of all customers
     * @return response
     */
    private function listCustomers ($sort) {
        $customers = Customer::with('countries')
        ->paginate(15);

        $this->sortCustomersList($sort, $customers);

        return $customers;
    }

    /**
     * Sorts and filters customers list based on chosen filter
     * @return response
     */
    private function sortCustomersList ($sort, $customers) {
        switch ($sort) {
            case 'az':
                $sortedResult = $customers->getCollection()->sortBy('first_name')->values();
                $customers->setCollection($sortedResult);
                break;
            case 'za':
                $sortedResult = $customers->getCollection()->sortByDesc('first_name')->values();
                $customers->setCollection($sortedResult);
                break;
            case 'oldest':
                $sortedResult = $customers->getCollection()->sortByDesc('created_at')->values();
                $customers->setCollection($sortedResult);
                break;
            case 'newest':
                $sortedResult = $customers->getCollection()->sortBy('created_at')->values();
                $customers->setCollection($sortedResult);
                break;
            default:
                $sortedResult = $customers->getCollection()->sortBy('id')->values();
                $customers->setCollection($sortedResult);
                break;
        }
        return false;
    }

    /**
     * Stores new customer to Customers table
     * @return Illuminate\Support\Facades\Validator
     */
    private function storeCustomer ($request) {
        $customer = Customer::create([
            'country_id' => $request->country,
            'first_name' => Str::ucfirst($request->first_name),
            'surname' => Str::ucfirst($request->surname),
            'email' => Str::ucfirst($request->email),
            'phone' => $request->phone,
            'company' => Str::ucfirst($request->company),
            'street' => Str::ucfirst($request->street),
            'city' => Str::ucfirst($request->city),
            'postcode' => $request->postcode,
            'state' => Str::ucfirst($request->state),
        ]);

        return $customer;
    }

    /**
     * Checks & validates NEW CUSTOMER form fields
     * @return Illuminate\Support\Facades\Validator
     */
    private function validateNewCustomer ($request){
        return $request->validate([
            'first_name' => ['required', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'surname' => ['required', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'company' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'street' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([0-9a-zA-Z ]+)(\d+)?$)/u'],
            'city' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'state' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'postcode' => ['nullable', 'string', 'min:3', 'max:24', 'regex:/(^([0-9 ]+)(\d+)?$)/u'],
            'country' => ['nullable', 'numeric', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'email' => ['required', 'string', 'min:10', 'max:128', 'unique:users'],
            'phone' => ['nullable', 'numeric', 'regex:/(^([0-9]+)(\d+)?$)/u'],
        ]);
    }

    /**
     * Checks & validates Edit Customer form fields
     * @return Illuminate\Support\Facades\Validator
     */
    private function validateEditCustomer ($request){
        return $request->validate([
            'customer_id' => ['required', 'numeric', 'min:1'],
            'first_name' => ['required', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'surname' => ['required', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'company' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z ]+)(\d+)?$)/u'],
            'street' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([0-9a-zA-Z ]+)(\d+)?$)/u'],
            'city' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u'],
            'state' => ['nullable', 'string', 'min:3', 'max:64', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u'],
            'postcode' => ['nullable', 'string', 'min:3', 'max:24', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'country' => ['nullable', 'numeric', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'email' => ['required', 'string', 'min:10', 'max:128', 'unique:users'],
            'phone' => ['nullable', 'numeric', 'regex:/(^([0-9]+)(\d+)?$)/u'],
        ]);
    }
}