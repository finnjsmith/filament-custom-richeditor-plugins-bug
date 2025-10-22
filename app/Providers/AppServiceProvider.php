<?php

namespace App\Providers;

use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        FilamentAsset::register([
            Js::make(
                'rich-content-plugins/unique-id',
                resource_path('js/dist/filament/rich-content-plugins/unique-id.js')
            )->loadedOnRequest(),

            Js::make(
                'rich-content-plugins/disable-underline',
                resource_path('js/dist/filament/rich-content-plugins/disable-underline.js')
            )->loadedOnRequest(),
        ]);
    }
}
