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

            <div class="flex bg-white overflow-hidden shadow-sm sm:rounded-lg">

                {{-- <x-auth-validation-errors class="mb-4" :errors="$errors" /> --}}

                <div class="p-6 bg-white border-r-2 border-gray-200">

                    <form action="{{ route('inscripciones.inscripcion') }}" method="post" id="inscripciones-jugador">
                        @csrf
                        <x-flowbite.label for="torneo_inscripcion">
                            Torneo
                        </x-flowbite.label>
    
                        <x-forms.inscripciones torneo-id='torneo_inscripcion' torneo-abierto='true' required />
    
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
                    <x-forms.inscripciones-tabla-jugadores :datos="$data" />

                    {{-- Tabla para las inscripciones y que hayan realizado el pago --}}

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                Lista de inscripciones
                                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                    A continuación, se listan las inscripciones que pasaron al pago
                                    y también el estado en el que se encuentra la misma.
                                </p>
                            </caption>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" class="px-6 py-4">Nombre jugador</th>
                                <th scope="col" class="px-6 py-4">Torneo</th>
                                <th scope="col" class="px-6 py-4">Categoría</th>
                                <th scope="col" class="px-6 py-4">Costo inscripción</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-6 py-4">Yisus</td>
                                    <td class="px-6 py-4">Heaven</td>
                                    <td class="px-6 py-4">mediano</td>
                                    <td class="px-6 py-4">$ 2.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</x-app-layout>