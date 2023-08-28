<div>
    <x-flowbite.label for="{{ $idComponente }}">
        {{ $tituloComponente }} <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="$idComponente" :isDisabled="$isPais">

        <option>-- Seleccione --</option>

        @foreach ($paises as $pais)
            <option value="{{ trim($pais->pais_id) }}" @if( trim($pais->pais_id) == 'COL') selected @endif >
                {{ trim($pais->nombre) }}
            </option>

        @endforeach

    </x-flowbite.select>  
</div>