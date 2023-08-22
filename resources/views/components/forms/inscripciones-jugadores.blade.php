<div>
    <x-flowbite.select :id="'jugador_inscripcion'" class="border-none" required>

        <option value="0">---  Seleccionar  ----</option>

        @foreach ($listaJugadores as $jugador)

            @php $nombre_jugador = ucfirst( strtolower($jugador->c15_jugador_nombres. ' '. $jugador->c15_jugador_apellidos) )  @endphp

            <option value="{{ $jugador->c15_jugador_id }}" >
                {{ $nombre_jugador }}
            </option>

        @endforeach

    </x-flowbite.select>
</div>