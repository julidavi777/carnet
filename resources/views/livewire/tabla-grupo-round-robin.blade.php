<div wire:poll.60s="getTablaRoundRobin">
    {{-- <div wire:poll.60s> 1 min --}}
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
                @php
                    $count = 0;
                @endphp
                <tr>
                    @for ($j = 0; $j <= count($dato_grupo) - 1; $j++)
                        @php
                            /*
                            if(empty($dato_grupo[$j]))
                            {
                                $count = $j;
                                
                                for($k = 1; $k <= 4; $k++)
                                {
                                    dd($j, $count);
                                    $count += $k;
                                }
                            }
                            */
                        @endphp
                        <td class="">{{ $dato_grupo[$j] }}</td>

                    @endfor
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
