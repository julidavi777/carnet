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
                <tr>
                    @for ($j = 0; $j <= count($dato_grupo) - 1; $j++)
                        @php
                            $count = 0;
                            $posicion = $j;

                            if(empty($dato_grupo[$j]))
                            {
                                $a = 0;

                                while ($a < 4) 
                                {
                                    if(empty($dato_grupo[$posicion + $a]))
                                        $count++;
                                    $a++;
                                }
                            }
                        @endphp

                        @if($count == 4)
                            @php
                                $color = '';

                                switch ($datos[1]) {
                                    case 1:
                                        $color = 'bg-red-600';
                                        break;
                                    case 2:
                                        $color = 'bg-orange-500';
                                        break;
                                    case 3:
                                        $color = 'bg-yellow-300';
                                        break;
                                    case 4:
                                        $color = 'bg-lime-400';
                                        break;
                                }
                            @endphp

                            @for ($k = 0; $k <= $count - 1; $k++)
                                <td class="{{ $color }} border-transparent">{{ $dato_grupo[$posicion] }}</td>

                                @php $posicion++ @endphp
                            @endfor

                            @php $j = $posicion - 1 @endphp
                        @else
                            <td class="">{{ $dato_grupo[$j] }}</td>
                        @endif

                    @endfor
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
