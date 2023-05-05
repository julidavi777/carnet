<div>
    {{-- Care about people's approval and you will be their prisoner. --}}
    @if($view_select)
        <x-flowbite.label for="municipio-residencia">
            Municipio <span>*</span> 
        </x-flowbite.label>

        <x-flowbite.select :id="'municipio-residencia'" required>
            <option selected>-- Seleccione --</option>
            
            @foreach ($municipios as $municipio)
                <option value="{{ $municipio->municipio }}">
                    {{ $municipio->municipio }}
                </option>
            @endforeach
        </x-flowbite.select> 
    @endif
</div>
