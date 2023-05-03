<div>
    <x-flowbite.label for="pais-residencia">
        Pais residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'pais-residencia'" required>
        <option>-- Seleccione --</option>
        @foreach ($paises as $pais)
            <option value="{{ $pais->nombre }}" @if($pais->nombre === 'Colombia') selected @endif >
                {{ $pais->nombre }}
            </option>
        @endforeach
    </x-flowbite.select>  
</div>