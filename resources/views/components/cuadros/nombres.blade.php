@props([
    'margin' => false
])

@php
    $clase = ($margin) ? 'mb-3' : '';
@endphp

<div {{ $attributes->merge(['class' => $clase]) }}>
    <h3 class="font-mono font-semibold">
        {{ $jugador }}
    </h3>
    <p class="diagonal-fractions text-center text-xl">
        {{ $slot ?? '' }}
    </p>
</div>