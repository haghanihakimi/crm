<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class Customer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'country_id',
        'first_name',
        'surname',
        'gender',
        'email',
        'phone',
        'company',
        'street',
        'city',
        'postcode',
        'state',
        'country',
    ];

    public function countries () {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function invoiceCustomers() {
        return $this->hasMany(InvoiceCustomers::class, 'customer_id');
    }

    public function scopeAnalytics ($query) {
        $month = Carbon::parse(now())->endOfMonth()->toDateString();
        $formatMonth = Carbon::parse($month)->format('d');
        $halfMonth = Carbon::parse(now())->format('d') >= 15;
        return $query->whereBetween('created_at', [now()->subMonth($halfMonth ? 0 : 1), now()])->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as total'))
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get();
    }

    public function scopeSearch ($query, $input) {
        return $query->where('first_name', 'LIKE', '%' .$input. '%')
        ->orWhere('surname', 'LIKE', '%' .$input. '%')
        ->orWhere('phone', 'LIKE', '%' .$input. '%')
        ->orWhere('email', 'LIKE', '%'.$input.'%');
    }

    public function scopeFindDuplicateCustomer ($query, $input) {
        return $query->where('email', $input->email)
        ->orWhere('phone', 'RLIKE', '[[:<:]]'.$input->phone);
    }
}
