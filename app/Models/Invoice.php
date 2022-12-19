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
        'country_id',
        'tracking_number',
        'invoice_date',
        'due_date',
        'shipping_date',
        'state',
        'house_address',
        'city',
        'postcode',
    ];

    public function orders () {
        return $this->hasMany(InvoiceOrder::class, 'invoice_id');
    }

    public function customers () {
        return $this->hasMany(InvoiceCustomer::class, 'invoice_id');
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
