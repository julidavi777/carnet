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
                    @if(!empty($filas))
                        @dd($filas, $datos)
                    @endif
                    <div class="columna-1 grid gap-4 h-auto content-center justify-items-center">

                        <x-cuadros.cuadro class="cuadro-1" color="amber">
                            <x-slot name="jugador1">Nombre jugador 1 Apellido jugador</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 2</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>

                        <x-cuadros.cuadro class="cuadro-2">
                            <x-slot name="jugador1">Nombre jugador 3</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 4</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>

                        <x-cuadros.cuadro class="cuadro-3">
                            <x-slot name="jugador1">Nombre jugador 5</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 6</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>

                        <x-cuadros.cuadro class="cuadro-4" color="amber">
                            <x-slot name="jugador1">Nombre jugador 3</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 4</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>
                    </div>

                    <div class="columna-2 grid gap-4 h-auto content-center justify-items-center">
                        <x-cuadros.cuadro class="cuadro-1">
                            <x-slot name="jugador1">Nombre jugador 1</x-slot>
                            <x-slot name="puntaje1"></x-slot>
                            <x-slot name="jugador2">Nombre  jugador 3</x-slot>
                            <x-slot name="puntaje2">15/10 12/15 15/11</x-slot>
                        </x-cuadros.cuadro>

                        <x-cuadros.cuadro class="cuadro-2">
                            <x-slot name="jugador1">Nombre jugador 5</x-slot>
                            <x-slot name="puntaje1">15/10 15/10</x-slot>
                            <x-slot name="jugador2">Nombre  jugador 8</x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>
                    </div>

                    <div class="columna-3 grid gap-4 h-auto content-center justify-items-center">

                        <x-cuadros.cuadro class="cuadro-1">
                            <x-slot name="jugador1">Nombre jugador 1</x-slot>
                            <x-slot name="puntaje1">15/10 15/13</x-slot>
                            <x-slot name="jugador2">Nombre  jugador 5</x-slot>
                            <x-slot name="puntaje2">15/1 15/3</x-slot>
                        </x-cuadros.cuadro>

                    </div>

                    <div class="columna-4 grid gap-4 h-auto content-center justify-items-center">
                        <x-cuadros.cuadro class="cuadro-1">
                            <x-slot name="jugador1">Nombre jugador 1</x-slot>
                            <x-slot name="puntaje1">15/13 10/15 16/14</x-slot>
                            <x-slot name="jugador2"></x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
