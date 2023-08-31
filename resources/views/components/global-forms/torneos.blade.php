<div class="{{ $clases }}">

    <x-flowbite.select :id="$torneoId" class="{{ $clases }}" :is-register="$isRegister" :is-disabled="$isReadOnly" required>

        @if (count($lista_torneos) > 0)
            <option value="0">Seleccionar Torneo </option>

            @foreach ($lista_torneos as $torneo)

                <option value="{{ $torneo->c20_torneo_id }}" @if($torneoSeleccionado == $torneo->c20_torneo_id) selected @endif>
                    {{ ucfirst( strtolower($torneo->c20_torneo_edicion) ) }}
                </option>

            @endforeach
        @else
            <option value="" selected>No hay torneos disponible por el momento.</option>
        @endif
        
    </x-flowbite.select>

</div>