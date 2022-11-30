<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'customer_id',
        'product_id',
        'customer_email', 
        'invoice_date',
        'invoice_due',
        'billing_address',
        'shipping_address',
        'shipping_date',
        'tracking_number',
        'service_date',
        'service_description',
        'service_quantity',
        'total_amount',
    ];

    public function products () {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function customers () {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function scopeSearch ($query, $input) {
        // return $query->where('tracking_number', 'LIKE', '%' .$input. '')
        // ->orWhereHas('customers', function($q) use ($input) {
        //     return $q->where('first_name', 'LIKE', '%' . $input . '%')
        //     ->orWhere('surname', 'LIKE', '%' . $input . '%')
        //     ->orWhere('email', 'LIKE', '%' . $input . '%')
        //     ->orWhere('phone', 'LIKE', '%' . $input . '%');
        // });
        return $query->where('tracking_number', 'LIKE', '%' .$input. '%');
    }
}
