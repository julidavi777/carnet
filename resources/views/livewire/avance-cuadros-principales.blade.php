<div wire:poll.60s="getCuadrosPrincipales">
    {{-- <div wire:poll.60s> 1 min --}}
    <div class="grid grid-cols-{{$filas}} p-6">

        @for ($i = 0; $i <= $filas - 1; $i++)

            <div class="columna-{{$i + 1}} grid gap-4 h-auto content-center justify-items-center">

                @for ($j = 0; $j <= count($cuadros_principales[$i]) - 1; $j++)

                    @if(is_array($cuadros_principales[$i][$j]))
                        @php
                            $nombre_uno = explode(':', $cuadros_principales[$i][$j][0]);
                            $nombre_dos = explode(':', $cuadros_principales[$i][$j][1]);

                            if((is_numeric($nombre_uno[0]) && is_numeric($nombre_dos[0])) || $nombre_dos[0] === 'bye'){
                                $color = 'amber';
                            }else{
                                $color = 'lime';
                            }
                        @endphp

                        <x-cuadros.cuadro class="cuadro-{{$j + 1}}" color="{{ $color }}">
                            <x-slot name="jugador1">{{ $nombre_uno[0] }}</x-slot>
                            <x-slot name="puntaje1">{{ $nombre_uno[1] ?? '' }}</x-slot>
                            <x-slot name="jugador2">{{ $nombre_dos[0] }}</x-slot>
                            <x-slot name="puntaje2">{{ $nombre_dos[1] ?? '' }}</x-slot>
                        </x-cuadros.cuadro>
                    @else
                        @php
                            $nombre = explode(':', $cuadros_principales[$i][$j]);

                            if(is_numeric($nombre[0])){
                                $color = 'amber';
                            }else{
                                $color = 'lime';
                            }
                        @endphp
                        <x-cuadros.cuadro class="cuadro-{{$j + 1}}" color="{{ $color }}">
                            <x-slot name="jugador1">{{ $nombre[0] }}</x-slot>
                            <x-slot name="puntaje1">{{ $nombre[1] ?? '' }}</x-slot>
                            <x-slot name="jugador2"></x-slot>
                            <x-slot name="puntaje2"></x-slot>
                        </x-cuadros.cuadro>
                    @endif

                @endfor

            </div>

        @endfor

    </div>
</div>
