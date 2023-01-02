<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Carbon\Carbon;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('country_id')->references("id")->on('countries')->onDelete('cascade');
            $table->string('tracking_number')->unique();
            $table->date('invoice_date')->default(now());
            $table->date('due_date')->default(now());
            $table->date('shipping_date')->nullable();
            $table->string('state')->nullable();
            $table->string('house_address')->nullable();
            $table->string('city')->nullable();
            $table->string('postcode')->nullable();
            $table->enum('auto_mail', ["on", "off", "timed"])->default("off");
            $table->dateTime('auto_mail_time', $precision = 0)->nullable();
            $table->boolean('auto_mail_status')->default(false);
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
        Schema::dropIfExists('invoices');
    }
};
