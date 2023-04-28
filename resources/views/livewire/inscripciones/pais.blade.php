<div>
    {{-- Nothing in the world is as soft and yielding as water. --}}
    <x-flowbite.label for="pais-residencia">
        Pais residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'pais-residencia'" required>
        <option>-- Seleccione --</option>
        @foreach ($paises as $pais)
            <option value="pais" {{ ($pais['name']['common'] === 'Colombia') ? 'selected' : '' }} >
                {{ $pais['name']['common'] }}
            </option>
        @endforeach
    </x-flowbite.select>
</div>
