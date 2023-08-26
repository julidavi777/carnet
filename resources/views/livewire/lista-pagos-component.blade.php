<div>
    <div class="relative overflow-x-auto">
        <!-- Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Lista de pagos
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    A continuación, se listan las inscripciones que pasaron al pago
                    y también el estado en el que se encuentra la misma.
                </p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <th scope="col" class="px-6 py-4">Torneo</th>
                <th scope="col" class="px-6 py-4">ID Pago</th>
                <th scope="col" class="px-6 py-4">Total</th>
                <th scope="col" class="px-6 py-4">Estado</th>
                <th scope="col" class="px-6 py-4">Valor pagado</th>
                <th scope="col" class="px-6 py-4">Acción</th>
            </thead>
            <tbody>
                @if(!empty($datos_tabla))
                    @foreach ($datos_tabla as $datos)
                        <tr>
                            <td class="px-6 py-4">{{ $datos['torneo_id'] }}</td>
                            <td class="px-6 py-4">{{ $datos['id_pago'] }}</td>
                            <td class="px-6 py-4">$ {{ $datos['valor'] }}</td>
                            <td class="px-6 py-4">
    
                                <div class="flex items-center">
                                    @if($datos['pago_estado'] !== 'A')
                                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Pendiente
                                    @else
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Aprobado
                                    @endif
                                </div>
                            </td>
                            <td class="px-6 py-4">$ {{ $datos['valor_pagado'] ?? 0 }}</td>
                            <td class="flex flex-col px-5 py-4">
    
                                <!-- Modal toggle -->
                                <button 
                                    @if(!$ariaHidden)
                                        data-modal-target="defaultModal" 
                                        data-modal-toggle="defaultModal"
                                    @endif
                                    class="mb-1 font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                                    type="button"
                                    wire:click="$emit('showJugadores', {{ $datos['id_pago'] }})"
                                >
                                    Ver detalle
                                </button>
      
                            </td>
                        </tr>
                    @endforeach
                @endif
            </tbody>
        </table>
    </div>
    {{-- Modal para las ver los jugadores asociados a los pagos --}}
    <!-- Main modal -->
    <div id="defaultModal" tabindex="-1" aria-hidden="{{ $ariaHidden }}" class="{{ $backdropClasses }} {{ $showModal }} ">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Lista de jugadores inscritos
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                    {{-- data-modal-hide="defaultModal" --}}
                        wire:click="closeModal"
                    >
                        <svg class="w-3 h-3" aria-hidden="{{ $ariaHidden }}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    @if(count($jugadores) > 0)
                        @foreach ($jugadores as $jugador)
                            Nombre jugador: {{ $jugador->nombre_jugador }} <br>
                            Documento jugador: {{ $jugador->id_jugador }} <br>
                            Categoría: {{ $jugador->nombre_categoria }} <br>
                            Costo inscripción: {{ $jugador->valor_inscripcion }} <br>
                            Género: {{ $jugador->genero }} <br>
                            Club: {{ $jugador->club }} <br>
                            Ranking: {{ $jugador->ranking }} <br>
                            Lugar de residencia: ( {{ $jugador->pais }} - {{ $jugador->depto }} - {{ $jugador->ciudad }} ) <br>
                            <hr>
                        @endforeach
                    @endif
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button 
                        {{-- data-modal-hide="defaultModal" --}}
                        wire:click="closeModal"
                        type="button" class="text-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Decline
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
