<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Customers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();

            $table->integer('identification_type');
            $table->string('identification')->unique();
            $table->string('digit_v')->nullable();
            $table->string('name');
            $table->string('surname');
            $table->string('phone_number');
            $table->string('address');
            $table->string('email');
            $table->string('commercial_contact_1');
            $table->string('commercial_contact_2');
            $table->string('commercial_contact_3');
            $table->string('razon_social');
            $table->string('razon_comercial');
            
            $table->json('rut_file');
            $table->json('camara_commerce_file');
            $table->json('income_statement_file');

            $table->boolean('status')->nullable();
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
        Schema::dropIfExists('customers');
    }
}
