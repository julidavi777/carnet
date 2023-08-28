@props(['accion'])

<form {{ $attributes->merge(['action' => $accion]) }} method="POST">
    <div class="flex">
        @csrf
        <div class="mr-2 flex-auto">
            <x-flowbite.label for="torneo">
                Torneo 
            </x-flowbite.label>
             
            <x-flowbite.input type="number" :id="'torneo'" placeholder="ej: 123" value="{{ old('torneo') }}" required/>
        </div>
        <div class="mr-2 flex-auto">

            <x-global-forms.categorias />

        </div>
        <div class="mr-2 flex-auto">
            <x-flowbite.label for="genero">
                Género 
            </x-flowbite.label>

            <x-flowbite.select :id="'genero'" required>
                <option value="T" {{ old('genero') == 'T' ? 'selected' : '' }} >Multigenero</option>
                <option value="M" {{ old('genero') == 'M' ? 'selected' : '' }} >Masculino</option>
                <option value="F" {{ old('genero') == 'F' ? 'selected' : '' }} >Femenino</option>
            </x-flowbite.select>
        </div>
        <div class="mr-2 flex-auto">
            <x-flowbite.label for="modalidad">
                Modalidad 
            </x-flowbite.label>

            <x-flowbite.select :id="'modalidad'" required>
                <option value="I" {{ old('modalidad') == 'I' ? 'selected' : '' }} >Individuales</option>
                <option value="D" {{ old('modalidad') == 'D' ? 'selected' : '' }} >Dobles</option>
            </x-flowbite.select>
        </div>
        <div class="mr-2 flex-auto">
            <x-flowbite.label for="cuadro">
                Cuadro 
            </x-flowbite.label>

            <x-flowbite.select :id="'cuadro'" required>
                <option value="G" {{ old('cuadro') == 'G' ? 'selected' : '' }} >General RR</option>
                <option value="A" {{ old('cuadro') == 'A' ? 'selected' : '' }} >Cuadro A</option>
                <option value="B" {{ old('cuadro') == 'B' ? 'selected' : '' }} >Cuadro B</option>
            </x-flowbite.select>
        </div>
        <div class="mt-5 w-48 text-center">
            <x-flowbite.button type="submit">
                    Recuperar datos
            </x-flowbite.button>

        </div>
    </div>
</form>