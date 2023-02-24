<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'identification_type',
        'identification',
        'digit_v',
        'name',
        'surname',
        'phone_number',
        'address',
        'email',
        'commercial_contact_1',
        'commercial_contact_2',
        'commercial_contact_3',
        'razon_social',
        'razon_comercial',
        'rut_file',
        'camara_commerce_file',
        'income_statement_file',
    ];

    protected $casts = [
        'rut_file' => 'array',
        'camara_commerce_file' => 'array',
        'income_statement_file' => 'array',
    ];
}
