@props(['color' => 'lime'])

@php
 /*
    $clase = '';
    switch($color)
    {
        case 'lime':
            $clase = 'text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800';
            break;
        default:
            $clase = 'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
            break;
    }
*/
@endphp

<button {{ $attributes->merge(['class' => "text-white bg-$color-600 hover:bg-$color-700 focus:outline-none focus:ring-4 focus:ring-$color-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-$color-600 dark:hover:bg-$color-700 dark:focus:ring-$color-800" ])  }}>
    {{ $slot }}
</button>