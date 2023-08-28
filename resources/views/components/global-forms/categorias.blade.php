<div>
    <x-flowbite.label for="categoria">
        Categorías 
    </x-flowbite.label>

    <x-flowbite.select :id="'categoria'" required>

        @if(count($categorias) > 0)

            @foreach ($categorias as $categoria)

                <option value="{{ $categoria->c11_categoria_id }}" {{ old('categoria') == $categoria->c11_categoria_id ? 'selected' : '' }} >
                    {{ ucfirst( strtolower($categoria->c11_categoria_nombre) ) }}
                </option>

            @endforeach

        @endif

    </x-flowbite.select>
</div>