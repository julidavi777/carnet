<div class="mt-4">
    <!-- Do what you can, with what you have, where you are. - Theodore Roosevelt -->
    <x-label class="mb-2" for="torneo_seleccionado" :value="__('Torneos')" />

    <select class="w-full p-1.5 text-gray-700 hover:bg-blue-350 border border-gray-300 transition duration-300 ease-in" name="torneo_seleccionado" id="torneo_seleccionado">
        
        @if (count($torneos) > 0)
            <option value="0">---  Seleccionar  ----</option>

            @foreach ($torneos as $torneo)
                <option value="{{ $torneo->c20_torneo_id }}">{{ ucfirst( strtolower($torneo->c20_torneo_edicion) ) }}</option>
            @endforeach
        @else
            <option value="" selected>No hay torneos disponible por el momento.</option>
        @endif

    </select>
</div>