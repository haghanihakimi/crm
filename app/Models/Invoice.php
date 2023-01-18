<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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

    public function products () {
        return $this->hasManyThrough(InvoiceOrder::class, Product::class, 'id', 'invoice_id');
    }

    public function customers () {
        return $this->hasManyThrough(InvoiceCustomer::class, Customer::class, 'id', 'invoice_id');
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

    public function scopeNewAnalytics ($query) {
        return $query->join('invoice_orders', function($join) {
            $join->on('invoices.id', '=', 'invoice_orders.invoice_id')
            ->whereBetween('invoice_orders.created_at', [now()->subDays(14), now()]);
        })
        ->select(DB::raw('DATE(invoice_orders.created_at) as date'), DB::raw('sum(total_price) as total'))
        ->groupBy('date')
        ->orderBy('date', 'ASC')
        ->get();
    }

    public function scopeOldAnalytics($query) {
        return $query->join('invoice_orders', function($join) {
                $lastTwoWeeks = now()->subDays(14);
                $lastFourWeeks = Carbon::parse($lastTwoWeeks)->subDays(14);
                $join->on('invoices.id', '=', 'invoice_orders.invoice_id')
                ->whereBetween('invoice_orders.created_at', [$lastFourWeeks, $lastTwoWeeks]);
            })
            ->select(DB::raw('sum(total_price) as total'))
            ->groupBy('invoice_orders.created_at')
            ->get();
    }
}
