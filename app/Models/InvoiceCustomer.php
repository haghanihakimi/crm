<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceCustomer extends Model
{
    use HasFactory;
    
    /**
    * The attributes that are mass assignable.
    *
    * @var string[]
    */
   protected $fillable = [
        'invoice_id',
        'customer_id',
   ];

   public function invoices() {
     return $this->belongsToMany(Invoice::class, 'invoice_id');
   }

   public function customers() {
     return $this->belongsTo(Customer::class, 'customer_id');
   }
}
