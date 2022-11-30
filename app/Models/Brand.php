<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'logo_path',
        'description',
    ];

    public function scopeFindDuplicateBrand ($query, $input) {
        return $query->where('name', 'RLIKE', '^'.$input);
    }
}
