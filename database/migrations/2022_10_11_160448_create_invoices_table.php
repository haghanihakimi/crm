<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->foreignId('customer_id')->references("id")->on('customers')->onDelete('cascade');
            $table->foreignId('product_id')->references("id")->on('products')->onDelete('cascade');
            $table->string('customer_email')->nullable();
            $table->date('invoice_date')->nullable();
            $table->date('invoice_due')->nullable();
            $table->text('billing_address')->nullable();
            $table->text('shipping_address')->nullable();
            $table->date('shipping_date')->nullable();
            $table->integer('tracking_number')->nullable();
            $table->date('service_date')->nullable();
            $table->text('service_description')->nullable();
            $table->double('service_quantity', 12, 2)->nullable();
            $table->double('total_amount', 12, 2)->nullable();
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
