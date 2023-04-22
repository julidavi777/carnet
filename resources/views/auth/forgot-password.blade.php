<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <h1 class="text-4xl text-center text-gray-900 pt-2 font-medium">{{ __('Zolve')}}</h1>
            <div class="pt-1 mb-3 text-center">
                <span class="-mt-2 text-sm opacity-80">{{ __('Forgot your password?') }}</span>
            </div>
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            {{ __('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.') }}
        </div>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label for="email" class="mb-3" :value="__('Email')" />

                <x-input id="email" class="block w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-button>
                    {{ __('Email Password Reset Link') }}
                </x-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
