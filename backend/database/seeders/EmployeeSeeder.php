<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Employee::create([
         
         
            'name' => 'Eugenio',
            'surname'=> 'Arbelaez',
            'id_card'=> '1222536',
            'email' => 'eu88@gmail.com',
            'type_id'=> 'CC',
            'address'=> 'thisString',
            'phone'=> '3122253600',
            'cv_file'=> 'thisString',
            'medical_exam_file'=> 'thisString',
            'followup_stands_file'=> 'thisString',
            'history_file'=> 'thisString',
            'study_stands_file'=> 'thisString',
            'id_card_file'=> 'thisString',
            'work_certificate_file'=> 'thisString',
    
        ]);
   

        \App\Models\Employee::factory(10)->create();

    }
}
