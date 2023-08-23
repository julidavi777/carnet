<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Lista de inscripciones
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                A continuación, se listan los jugadores que están inscritos y el monto total a pagar, 
                el administrador verificará que el pago se haya efectuado correctamente.
                POR FAVOR LEER Y TENER EN CUENTA EL 
                <a href="{{ asset('storage/instructivo.png') }}" target="_blank" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                    SIGUIENTE INSTRUCTIVO
                </a> 
                ANTES DE PASAR AL PAGO
            </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" class="px-6 py-4">Torneo</th>
            <th scope="col" class="px-6 py-4">Nombre jugador</th>
            <th scope="col" class="px-6 py-4">Categoría(s)</th>
            <th scope="col" class="px-6 py-4">Subtotal costo inscripción</th>
            <th scope="col" class="px-6 py-4">Acción</th>
        </thead>

        <tbody>
            @if (!empty($datos_tabla))

                @foreach ($datos_tabla as $data)

                    @if(!is_array($data))

                        <tfoot>
                            <form action="{{ route('inscripciones.pago') }}" method="POST">
                                @csrf
                                <input type="hidden" name="torneo_id" value="{{ $data_inscripcion['torneo_id'] }}">
                                <input type="hidden" name="responsable_id" value="{{ $data_inscripcion['responsable_id'] }}">
                                <input type="hidden" name="estado" value="{{ $data_inscripcion['estado'] }}">
                                <input type="hidden" name="valor" value="{{ $data_inscripcion['valor'] }}">

                                <tr class="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" class="px-6 py-3 text-base" colspan="3">Total</th>
                                    <td class="px-6 py-3">$ {{ number_format($data) }}</td>
                                    <td class="">
                                        <x-flowbite.button type="submit" :color="'green'">
                                            Pasar al pago
                                        </x-flowbite.button>
                                    </td>
                                </tr>
                            </form>
                        </tfoot>

                    @else

                        <tr>
                            <td class="px-6 py-4">
                                {{ $data['torneo'] }}
                            </td>

                            <td class="px-6 py-4">
                                {{ $data['nombre_jugador'] }}
                            </td>

                            <td class="px-6 py-4">
                                @foreach ($data['categoria'] as $categoria)
                                    {{ $categoria }} <br>
                                @endforeach
                            </td>

                            <td class="px-6 py-4">
                                $ {{ number_format($data['subtotal']) }}
                            </td>

                            <td class="flex flex-col px-5 py-4">
                                <a href="{{ route('inscripciones.delete', $data['eliminar']) }}" class="btnEliminar mb-1 font-medium text-red-600 dark:text-red-500 hover:underline">
                                    Eliminar
                                </a>
                            </td>
                        </tr>

                    @endif

                @endforeach
            @else
                <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="px-6 py-3 text-base"></th>
                        <td class="px-6 py-3" colspan="4">No hay jugadores agregados a la tabla por el momento.</td>
                    </tr>
                </tfoot>
            @endif 
        </tbody>
    </table>
</div>