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
                            <a href="" class="btnEliminar mb-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Ver detalle
                            </a>
                        </td>
                    </tr>
                @endforeach
            @endif
        </tbody>
    </table>
</div>
