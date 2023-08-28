<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Inscripciones') }}
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="max-w-max mx-auto sm:px-6 lg:px-8">

            <!-- Validation Errors -->
            <x-inscripcion.validacion-inscripcion :errors="$errors" />

            <!-- Success messages -->
            <x-inscripcion.success-alert />
            @if(session('url'))
                INGRESA A LA SIGUIENTE
                <a href="{{ session('url') }}" target="_blank" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                    PASARELA DE PAGOS
                </a> 
                PARA REALIZAR EL COBRO
            @endif

            <div class="flex bg-white overflow-hidden shadow-sm sm:rounded-lg">

                {{-- <x-auth-validation-errors class="mb-4" :errors="$errors" /> --}}

                <div class="p-6 bg-white border-r-2 border-gray-200">

                    <form action="{{ route('inscripciones.inscripcion') }}" method="post" id="inscripciones-jugador">
                        @csrf
                        <x-flowbite.label for="torneo_inscripcion">
                            Torneo
                        </x-flowbite.label>
    
                        <x-global-forms.torneos torneo-id='torneo_inscripcion' :torneo-abierto="true" :is-register="false" clases="border-none" required />

                        <x-flowbite.label class="mt-4" for="jugador_inscripcion">
                            jugador
                        </x-flowbite.label>
    
                        <x-forms.inscripciones-jugadores jugador-id='jugador_inscripcion'  required/>
    
                        <x-forms.inscripciones-categorias categoria-id='categoria_inscripcion' clases='mt-4' required />
    
                        <div class="text-center">
                            <x-flowbite.button class="mt-4" :color="'purple'" type="submit" id="btn-inscripciones-jugador">
                                Agregar
                            </x-flowbite.button>
                        </div>
                    </form>
                </div>

                <div class="p-6 bg-white border-b border-gray-200">

                    {{-- Tabla para la inscripción de los jugadores y el pago total --}}
                    <x-forms.inscripciones-tabla-jugadores :datos="$data_inscripciones" />

                    {{-- Tabla para las inscripciones y que hayan realizado el pago --}}
                    <livewire:lista-pagos-component :datos="$lista_pagos" />
                </div>
            </div>
        </div>
    </div>
</x-app-layout>