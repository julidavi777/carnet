@props(['color'])

<div {{ $attributes->merge(['class' => 'p-4 w-3/5 rounded-lg bg-'. $color.'-400']) }}>

    <x-cuadros.nombres :margin="true">
        <x-slot name="jugador">
            {{ $jugador1 }}
        </x-slot>
            {{ $puntaje1 }}
    </x-cuadros.nombres>

    <x-cuadros.nombres>
        <x-slot name="jugador">
            {{ $jugador2 }}
        </x-slot>
            {{ $puntaje2 }}
    </x-cuadros.nombres>
</div>