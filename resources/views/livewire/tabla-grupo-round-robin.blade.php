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
            @php $suma = 0 @endphp

            @for ($k = 0; $k <= count($datos_grupo) - 1; $k++)
                @php $suma += 4 @endphp
                <tr>
                    @for ($j = 0; $j <= count($datos_grupo[$k]) - 1; $j++)
                        @php
                            $count = 0;
                            $posicion = $j;

                            if($suma === $j && empty($datos_grupo[$k][$j]))
                            {
                                $a = 0;

                                while ($a < 4) 
                                {
                                    if(empty($datos_grupo[$k][$posicion + $a]))
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

                            @for ($l = 0; $l <= $count - 1; $l++)
                                <td class="{{ $color }} border-transparent"></td>

                                @php $posicion++ @endphp
                            @endfor

                            @php $j = $posicion - 1 @endphp
                        @else
                            <td class="">{{ $datos_grupo[$k][$j] }}</td>
                        @endif

                    @endfor
                </tr>
            @endfor
        </tbody>
    </table>
</div>
