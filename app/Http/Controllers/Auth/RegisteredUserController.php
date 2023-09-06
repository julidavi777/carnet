<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $email = Str::lower($request->input('email'));
        $request->merge([ 'email' => $email ]);

        $error_mensajes = [
            'legal_id.required' => 'El documento es requerido',
            'legal_id.numeric' => 'El documento debe ser numérico',
            'legal_id.digits_between' => 'El documento debe tener entre 5 y 12 dígitos',

            'phone_number.required' => 'El número de contacto es requerido',
            'phone_number.numeric' => 'El número de contacto debe ser numérico',
            'phone_number.digits_between' => 'El número de contacto debe tener entre 7 y 10 dígitos',

            'torneo_seleccionado.numeric' => 'Error en el torneo',
            'torneo_seleccionado.digits_between' => 'Error en el torneo',
        ];

        $validated = $request->validate([
            'legal_id' => ['required', 'numeric', 'digits_between:5,12'],
            'name' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'numeric', 'digits_between:7,10'],
            'torneo_seleccionado' => ['nullable', 'numeric'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ], $error_mensajes);
        //dd($validated['email']);
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'legal_id' => $validated['legal_id'],
            'phone_number' => $validated['phone_number'],
            'id_torneo_seleccionado' => (isset($validated['torneo_seleccionado'])) ? $validated['torneo_seleccionado'] : null,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
