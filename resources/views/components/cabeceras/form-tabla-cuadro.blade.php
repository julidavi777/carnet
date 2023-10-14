@props(['accion'])

<form {{ $attributes->merge(['action' => $accion]) }} method="POST">
    <div class="w-50 text-center" >
        <h1 id="title" class="text-2xl font-bold mx-auto mb-5" ></h1>

    </div>
    <div class="flex">
        @csrf
        <div class="mr-2 flex-auto">
            <x-flowbite.label for="torneo" class="hidden ">
                Torneo 
            </x-flowbite.label>
            
            <input type="hidden" name="torneo" id="torneo" value="{{ old('torneo') }}">
            <x-flowbite.input type="hidden" :id="'torneo_text'" value="{{ old('torneo_text') }}" readonly />

            @push('scripts')
                <script>
                    const torneo_select = document.getElementById('torneo_seleccionado');
                    const torneo_hidden = document.getElementById('torneo');
                    const torneo_input = document.getElementById('torneo_text');
                    const title = document.getElementById('title');
                    if(torneo_select.value != 0)
                    {
                        torneo_hidden.value = torneo_select.value;
                        torneo_input.value = torneo_select.selectedOptions[0].text;
                    }
                    const show = () => {
                        torneo_hidden.value = torneo_select.value;
                        console.log(torneo_seleccionado.selectedOptions[0].text);

                        torneo_input.value = torneo_select.selectedOptions[0].text;
                        title.innerText = torneo_select.selectedOptions[0].text;
                    }
                    title.addEventListener('onload', show());
                    torneo_select.addEventListener('change',show());                   

                </script>
            @endpush
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