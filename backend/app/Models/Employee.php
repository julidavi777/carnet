<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Employee extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'surname',
        'id_card',
        'type_id',
        'address',
        'phone',
        'email',
        'cv_file',
        'medical_exam_file',
        'followup_stands_file',
        'history_file',
        'study_stands_file',
        'id_card_file',
        'work_certificate_file',

    ];

   
}
