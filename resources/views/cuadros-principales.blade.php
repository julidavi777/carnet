<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Avance cuadros principales por categoria') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-max mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />

                    <x-cabeceras.form-tabla-cuadro :accion="route('cuadros.principales')" />
                </div>
                <div class="grid grid-cols-4 p-6">
                    <div class="columna-1 grid gap-4 h-auto content-center justify-items-center">

                        <x-cuadros.cuadro class="cuadro-1" color="amber">
                            <x-slot name="jugador1">Nombre jugador 1</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 2</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>

                        <x-cuadros.cuadro class="cuadro-2" color="lime">
                            <x-slot name="jugador1">Nombre jugador 3</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 4</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>

                        <div class="cuadro-3">
                            <div>
                                <h3>Nombre jugador 5</h3>
                                <p></p>
                            </div>
                            <div>
                                <h3>Nombre jugador 6</h3>
                                <p></p>
                            </div>
                        </div>
                        <div class="cuadro-4">
                            <div>
                                <h3>Nombre jugador 7</h3>
                                <p></p>
                            </div>
                            <div>
                                <h3>Nombre jugador 8</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="columna-2 grid gap-4 h-auto content-center justify-items-center">
                        <div class="cuadro-1">
                            <div>
                                <h3>Nombre jugador 1</h3>
                                <p></p>
                            </div>
                            <div>
                                <h3>Nombre jugador 3</h3>
                                <p>15/10 12/15 15/11</p>
                            </div>
                        </div>
                        <div class="cuadro-2">
                            <div>
                                <h3>Nombre jugador 5</h3>
                                <p>15/10 15/10</p>
                            </div>
                            <div>
                                <h3>Nombre jugador 8</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="columna-3 grid gap-4 h-auto content-center justify-items-center">
                        <div class="cuadro-1">
                            <div>
                                <h3>Nombre jugador 1</h3>
                                <p>15/10 15/13</p>
                            </div>
                            <div>
                                <h3>Nombre jugador 5</h3>
                                <p>15/1 15/3</p>
                            </div>
                        </div>
                    </div>
                    <div class="columna-4 grid gap-4 h-auto content-center justify-items-center">
                        <div class="cuadro-1">
                            <div>
                                <h3>Nombre jugador 1</h3>
                                <p>15/13 10/15 16/14</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
