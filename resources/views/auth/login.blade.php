<x-guest-layout>
    <x-auth-card>
        {{--
            <x-slot name="logo">
                <a href="/">
                    <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
                </a>
            </x-slot>
        --}}
        <x-slot name="logo">
            <h1 class="text-4xl text-center text-gray-900 pt-2 font-medium">{{ __('Sign In')}}</h1>
            <div class="pt-3 text-center">
                <span class="-mt-2 text-sm opacity-80">{{__('Welcome Back!')}}</span>
            </div>
        </x-slot>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <div class="px-8">
            <form method="POST" class="mt-5" action="{{ route('login') }}">
                @csrf
    
                <!-- Document 
                     <div class="mb-6">
                     <x-input id="documento" class="block w-full" type="text"
                     name="documento" :value="old('documento')" placeholder="{{__('Document')}}"
                     required /> -->
                <div class="mb-6">
                    <x-input id="email" class="block w-full" type="text"
                             name="email" :value="old('email')" placeholder="{{__('Email')}}"
                             required />
    
                </div>
                <!-- Password -->
                <div class="mb-6 relative">
                    <x-input id="password" class="block w-full" type="password"
                             name="password" placeholder="{{__('messages.pwd')}}"
                             required autocomplete="current-password" :pwd="true" />
                </div>
                <div class="flex justify-center mt-5">
                    <x-button>
                        {{ __('Log in') }}
                    </x-button>
                </div>
    
                <!-- Remember Me && Forgot you password -->
                <div class="block mt-6 mb-2 text-center text-xs opacity-80">
                    {{--
                    <label for="remember_me">
                        <input id="remember_me" type="checkbox" class="border-gray-300 text-blue-450 shadow-sm focus:border-blue-350 focus:ring focus:ring-blue-200 focus:ring-opacity-50" name="remember">
                        <span class="ml-2 text-sm">{{ __('Remember me') }}</span>
                    </label>
                    --}}
                    <div class="">
                        @if (Route::has('password.request'))
                            <a class="text-sm hover:text-gray-500" href="{{ route('password.request') }}">
                                {{ __('Forgot your password?') }}
                            </a>
                        @endif
                    </div>
                </div>
            </form>
        </div>
    </x-auth-card>
    <script>
        function mostrarPwd(){
            let tipo = document.getElementById('password');

            tipo.type = (tipo.type === 'password') ? 'text' : 'password'
        }
    </script>
</x-guest-layout>
