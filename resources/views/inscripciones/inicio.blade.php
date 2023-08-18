<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Administrar jugadores') }}
        </h2>
    </x-slot>
    <div class="py-12">
        @push('styles')
            <style>
                span {
                    color: red;
                }
            </style>
        @endpush

        <div class="max-w-max mx-auto sm:px-6 lg:px-8">

            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <!-- Validation Errors -->
                <x-auth-validation-errors class="mb-4" :errors="$errors" />

                @include('inscripciones.tab-jugadores')
            </div>
        </div>
    </div>

    @push('scripts')
        <script src="{{ asset('js/inscripciones/Jugador.js') }}"></script>
    @endpush

</x-app-layout>