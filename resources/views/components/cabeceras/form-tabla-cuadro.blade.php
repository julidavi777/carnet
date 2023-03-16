@props(['accion'])

<form {{ $attributes->merge(['action' => $accion]) }} method="POST">
    <div class="flex">
        @csrf
        <div class="mr-2 flex-auto">
            <label for="torneo">Torneo</label>
            <input class="w-full" type="number" name="torneo" id="torneo" placeholder="ej: 123" value="{{ old('torneo') }}" required>
        </div>
        <div class="mr-2 flex-auto">
            <label for="categoria">Categoría</label>
            <select class="w-full" name="categoria" id="categoria">
                <option value="1" {{ old('categoria') == 1 ? 'selected' : '' }} >Bola Roja</option>
                <option value="2" {{ old('categoria') == 2 ? 'selected' : '' }} >Bola Naranja</option>
                <option value="3" {{ old('categoria') == 3 ? 'selected' : '' }} >Bola Amarilla</option>
                <option value="4" {{ old('categoria') == 4 ? 'selected' : '' }} >Bola Verde</option>
            </select>
        </div>
        <div class="mr-2 flex-auto">
            <label for="genero">Género</label>
            <select class="w-full" name="genero" id="genero">
                <option value="T" {{ old('genero') == 'T' ? 'selected' : '' }} >Multigenero</option>
                <option value="M" {{ old('genero') == 'M' ? 'selected' : '' }} >Masculino</option>
                <option value="F" {{ old('genero') == 'F' ? 'selected' : '' }} >Femenino</option>
            </select>
        </div>
        <div class="mr-2 flex-auto">
            <label for="modalidad">Modalidad</label>
            <select class="w-full" name="modalidad" id="modalidad">
                <option value="I" {{ old('modalidad') == 'I' ? 'selected' : '' }} >Individuales</option>
                <option value="D" {{ old('modalidad') == 'D' ? 'selected' : '' }} >Dobles</option>
            </select>
        </div>
        <div class="mr-2 flex-auto">
            <label for="cuadro">Cuadro</label>
            <select class="w-full" name="cuadro" id="cuadro">
                <option value="G" {{ old('cuadro') == 'G' ? 'selected' : '' }} >General RR</option>
                <option value="A" {{ old('cuadro') == 'A' ? 'selected' : '' }} >Cuadro A</option>
                <option value="B" {{ old('cuadro') == 'B' ? 'selected' : '' }} >Cuadro B</option>
            </select>
        </div>
        <div class="mt-5 w-48 text-center">
            <button type="submit" class="py-2 px-5 text-white bg-lime-600 rounded-full">
                Recuperar datos
            </button>
        </div>
    </div>
</form>