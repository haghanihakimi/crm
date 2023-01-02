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
       'quantity',
       'price',
       'gst'
   ];

   public function invoices() {
    return $this->belongsTo(Invoice::class, 'invoice_id');
   }

   public function products() {
    return $this->belongsTo(Product::class, "product_id");
   }
}
