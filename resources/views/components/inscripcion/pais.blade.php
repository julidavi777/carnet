<div>
    <x-flowbite.label for="pais-residencia">
        Pais residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'pais-residencia'" required>
        @foreach ($paises as $pais)
            @php $nombre_pais = trim($pais->nombre) @endphp
            {{-- <option value="{{ $pais->nombre }}" data-phone-code="{{ $pais->phone_code }}" @if($pais->nombre === 'Colombia') selected @endif > --}}
            <option value="{{ $nombre_pais }}" @if($nombre_pais === 'Colombia') selected @endif >
                {{ $nombre_pais }}
            </option>
        @endforeach
    </x-flowbite.select>  
</div>