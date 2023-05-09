<div>
    <x-flowbite.label for="pais-residencia">
        Pais residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'pais-residencia'" required>
        @foreach ($paises as $pais)
            <option value="{{ $pais->nombre }}" data-phone-code="{{ $pais->phone_code }}" @if($pais->nombre === 'Colombia') selected @endif >
                {{ $pais->nombre }}
            </option>
        @endforeach
    </x-flowbite.select>  
</div>