<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceOrder extends Model
{
    use HasFactory;
    
    /**
    * The attributes that are mass assignable.
    *
    * @var string[]
    */
   protected $fillable = [
       'invoice_id',
       'product_id',
       'country_id',
       'quantity',
       'price',
       'gst',
       'invoice_date',
       'due_date',
       'shipping_date',
       'state',
       'house_address',
       'city',
       'postcode',
       'created_at',
       'updated_at',
   ];

   public function invoices() {
    return $this->belongsTo(Invoice::class, 'invoice_id');
   }

   public function products() {
    return $this->belongsTo(Product::class, "product_id");
   }
}
