<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Access\Response;
use App\Services\TorneosService;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Permisos para inscribir jugadores
        Gate::define('puede-inscribir', function(User $user) 
        {
            if($user->torneo_seleccionado == 0 )
                return Response::deny();
            
            $torneo = TorneosService::getTorneoInfo($user->torneo_seleccionado);

            return ($torneo->estado == 'I') ? Response::allow() : Response::deny();
        });
    }
}
