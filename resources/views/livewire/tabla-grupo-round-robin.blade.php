<div wire:poll.60s="getTablaRoundRobin">
    {{-- <div wire:poll.300s> 5 min --}}
    <table>
        <thead>
            <tr>
                <th>Grupo</th>
                <th>Sec</th>
                <th>Nombre</th>
                <th>Academia</th>

                <!-- Inicio var -->
                @for ($i = 0; $i <= $total_jugadores - 1; $i++)
                    <th colspan="4">{{ ($i + 1) }}</th>
                @endfor

                <th>PG</th>
                <th>% SET</th>
                <th>% GAME</th>
                <th>Pos</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($datos_grupo as $dato_grupo)
                <tr>
                    @foreach ($dato_grupo as $item)
                        <td>{{ $item }}</td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
