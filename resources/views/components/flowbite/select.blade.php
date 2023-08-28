@props([ 
    'id', 
    'isDisabled',
    'isRegister'
])

@php
    $disabled = (!empty($isDisabled)) ? 'disabled' : '';

    $clase_css = (!empty($isRegister)) ?
        'w-full p-1.5 text-gray-700 hover:bg-blue-350 border border-gray-300 transition duration-300 ease-in' :
        'formulario-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
@endphp

<select {{ $attributes->class($clase_css)
        ->merge(['name' => $id, 'id' => $id]) }} {{ $disabled }}>
    {{ $slot }}
</select>