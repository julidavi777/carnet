<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <h1 class="text-4xl text-center text-gray-900 pt-2 font-medium">{{ __('Zolve')}}</h1>
            <div class="pt-1 mb-3 text-center">
                <span class="text-sm opacity-80">{{__('Register')}}</span>
            </div>
        </x-slot>

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <div class="px-8 pb-4">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <!-- Documento Identidad -->
                <div class="">
                    <x-label class="mb-2" for="legal_id" :value="__('Documento Identidad')" />
    
                    <x-input id="legal_id" class="block w-full" type="number" name="legal_id" :value="old('legal_id')" required autofocus />
                </div>
    
                <!-- Name -->
                <div class="mt-4">
                    <x-label class="mb-2" for="name" :value="__('Nombre completo')" />
    
                    <x-input id="name" class="block w-full" type="text" name="name" :value="old('name')" required autofocus />
                </div>
    
                <!-- Teléfono -->
                <div class="mt-4">
                    <x-label class="mb-2" for="phone_number" :value="__('Número de contacto')" />
    
                    <x-input id="phone_number" class="block w-full" type="text" name="phone_number" :value="old('phone_number')" required autofocus />
                </div>
    
                <!-- Torneos -->
                <x-forms.registro-usuario />
    
                <!-- Email Address -->
                <div class="mt-4">
                    <x-label class="mb-2" for="email" :value="__('Email')" />
    
                    <x-input id="email" class="block w-full" type="email" name="email" :value="old('email')" required />
                </div>
    
                <!-- Password -->
                <div class="mt-4">
                    <x-label class="mb-2" for="password" :value="__('Password')" />
    
                    <x-input id="password" class="block w-full"
                                    type="password"
                                    name="password"
                                    required autocomplete="new-password" />
                </div>
    
                <!-- Confirm Password -->
                <div class="mt-4">
                    <x-label class="mb-2" for="password_confirmation" :value="__('Confirm Password')" />
    
                    <x-input id="password_confirmation" class="block w-full"
                                    type="password"
                                    name="password_confirmation" required />
                </div>
                
                <div class="text-center mt-4">
                    <x-button>
                        {{ __('Register') }}
                    </x-button>
                </div>
                <div class="text-center mt-4">
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                        {{ __('Already registered?') }}
                    </a>
                </div>
            </form>
        </div>
    </x-auth-card>
</x-guest-layout>
