<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
       'gst',
       'total_price',
   ];

   public function invoices() {
    return $this->belongsTo(Invoice::class, 'invoice_id');
   }

   public function products() {
    return $this->belongsTo(Product::class, "product_id");
   }

   public function scopeNewAnalytics ($query) {
       return $query->whereBetween('created_at', [now()->subDays(14), now()])
       ->select(DB::raw('DATE(created_at) as date'), DB::raw('sum(price * quantity) as total'))
        ->groupBy('date')
        ->orderBy('date', 'ASC')
       ->get();
   }

   public function scopeOldAnalytics($query) {
       $lastTwoWeeks = now()->subDays(14);
       $lastFourWeeks = Carbon::parse($lastTwoWeeks)->subDays(14);

       return $query->whereBetween('created_at', [$lastFourWeeks, $lastTwoWeeks])
           ->select(DB::raw('count(*) as total'))
           ->groupBy('created_at')
           ->get();
   }
}
