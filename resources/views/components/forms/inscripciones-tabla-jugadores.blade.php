<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Lista de jugadores
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                A continuación, se listan los jugadores y el monto total a pagar, 
                el administrador verificará que el pago se haya efectuado correctamente.
            </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" class="px-6 py-4">Nombre jugador</th>
            <th scope="col" class="px-6 py-4">Torneo</th>
            <th scope="col" class="px-6 py-4">Categoría</th>
            <th scope="col" class="px-6 py-4">Subtotal costo inscripción</th>
            <th scope="col" class="px-6 py-4">Acción</th>
        </thead>
        @if (!empty($datos))
            <tbody>
                <tr>
                    <td class="px-6 py-4">Yisus</td>
                    <td class="px-6 py-4">Heaven</td>
                    <td class="px-6 py-4">mediano</td>
                    <td class="px-6 py-4">$ 2.000.000</td>
                    <td class="flex flex-col px-5 py-4">
                        <button class="btnEliminar mb-1 font-medium text-red-600 dark:text-red-500 hover:underline">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base" colspan="3">Total</th>
                    <td class="px-6 py-3">$ 401.000.000</td>
                </tr>
            </tfoot>
        @endif
    </table>
</div>