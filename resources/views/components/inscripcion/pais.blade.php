<div>
    <x-flowbite.label for="pais_residencia">
        Pais residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'pais_residencia'" disabled>

        <option>-- Seleccione --</option>

        @foreach ($paises as $pais)
            {{-- <option value="{{ $pais->nombre }}" data-phone-code="{{ $pais->phone_code }}" @if($pais->nombre === 'Colombia') selected @endif > --}}
            <option value="{{ trim($pais->pais_id) }}" @if( trim($pais->pais_id) == 'COL') selected @endif >
                {{ trim($pais->nombre) }}
            </option>

        @endforeach

    </x-flowbite.select>  
</div>