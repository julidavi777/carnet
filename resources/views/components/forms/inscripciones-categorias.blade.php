<div class="{{ $clases }}" :id="$categoriaId">
    <fieldset>
        <legend class="mb-4 text-md">Seleccione categoria/s</legend>

        @foreach ($categorias as $categoria)
            @php
                $id_categoria = $categoria->c11_categoria_id;
                $nombre_categoria = ucfirst( strtolower($categoria->c11_categoria_nombre));
                $costo_inscripcion = number_format($categoria->c11_costo_inscripcion);
            @endphp
            {{-- checked --}}
            <div class="flex mb-4">
                <div class="flex items-center h-5">
                    <input id="categoria_{{ $id_categoria }}" 
                    name="categoria_inscripcion[]" 
                    aria-describedby="{{ $id_categoria }}-text" 
                    type="checkbox" 
                    value="{{ $id_categoria }}" 
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    >
                </div>
                <div class="ml-2">
                    <label for="categoria_{{ $id_categoria }}" class="text-base font-medium text-gray-900 dark:text-gray-300">
                        {{ $nombre_categoria }}
                    </label>
                    <p id="{{ $id_categoria }}-text" class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        ${{ $costo_inscripcion }}
                    </p>
                </div>
            </div>

        @endforeach
        {{--
            <div class="flex items-center">
                <input id="international-shipping-disabled" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" disabled>
                <label for="international-shipping-disabled" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Eligible for international shipping (disabled)</label>
            </div>
        --}}
    </fieldset>

</div>