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
            <x-flowbite.label for="categoria">
                Categoría 
            </x-flowbite.label>

            <x-flowbite.select :id="'categoria'" required>
                <option value="1" {{ old('categoria') == 1 ? 'selected' : '' }} >Bola Roja</option>
                <option value="2" {{ old('categoria') == 2 ? 'selected' : '' }} >Bola Naranja</option>
                <option value="3" {{ old('categoria') == 3 ? 'selected' : '' }} >Bola Amarilla</option>
                <option value="4" {{ old('categoria') == 4 ? 'selected' : '' }} >Bola Verde</option>
            </x-flowbite.select>
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
            <x-flowbite.button type="button" :color="'lime'">
                Recuperar datos
            </x-flowbite.button>

            <button class="text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">
                botón
            </button>
        </div>
    </div>
</form>