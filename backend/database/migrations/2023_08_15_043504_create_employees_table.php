<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname')->nullable();
            $table->string('id_card')->nullable();
            $table->enum('type_id',['CC','CE','PPORT'])->nullable();
            $table->string('address')->unique();
            $table->bigInteger('phone')->unique();
            $table->string('email')->unique();
            $table->string('cv_file');
            $table->string('medical_exam_file');
            $table->string('followup_stands_file');
            $table->string('history_file');
            $table->string('study_stands_file');
            $table->string('id_card_file');
            $table->string('work_certificate_file');
            $table->timestamps();
    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
