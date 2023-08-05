<div>
    {{-- Care about people's approval and you will be their prisoner. --}}

    @if($view_select)

        <x-flowbite.label for="municipio_residencia">
            Municipio <span>*</span> 
        </x-flowbite.label>

        <x-flowbite.select :id="'municipio_residencia'" required>

            <option value="0" selected>-- Seleccione --</option>
            
            @foreach ($municipios as $municipio)

                <option value="{{ $municipio->id }}">
                    {{ ucfirst( strtolower( $municipio->nombre ) ) }}
                </option>

            @endforeach

        </x-flowbite.select>
    @else
        <x-load-button id="load_municipio" class="mt-6" >
            Cargando municipios ... 
        </x-load-button>
    @endif
</div>
