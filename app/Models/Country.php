<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'phone',
        'code',
        'name',
        'symbol',
        'capital',
        'currency',
        'continent',
        'continent_code',
        'alpha_3',
    ];

    public function customers () {
        return $this->hasMany(Customer::class, 'id');
    }
}
