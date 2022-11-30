<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Notifications\Channels\DatabaseChannel as IlluminateDatabaseChannel;
use App\Channels\DatabaseChannel;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->instance(IlluminateDatabaseChannel::class, new DatabaseChannel());
        
        // if (env('APP_ENV') === 'production') {
        //     $this->app['request']->server->set('HTTPS', 'on');
        //     URL::forceScheme('https');
        // }
        // if (env('APP_ENV') === 'local') {
        //     URL::forceScheme('https');
        // }
        // if (env('APP_FORCE_HTTPS', false)) {
        //     URL::forceScheme('https');
        // }
    }
}
