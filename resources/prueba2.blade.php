<!-- dashboard.blade.php -->

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    @routes

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="stylesheet" href="{{ asset('css/flowbite.css') }}">

    @stack('styles')

    @livewireStyles
    <!-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> -->
    <!-- <link rel="stylesheet" href="{{ asset('css/flowbite.css') }}"> -->

</head>

<body class="font-sans bg-gray-100">

<button @click="toggleSidebar" class="text-gray-300 hover:text-white focus:outline-none">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
</button>
    <!-- Sidebar -->
    <div class="flex bg-gray-800 text-white min-h-screen sidebar-collapsed">

        <!-- Sidebar -->
        <div class="w-64 p-4 bg-gray-700">
            <!-- Título del Sidebar -->
            <div class="mb-4 text-2xl font-bold">Tenis y valores</div>

            <!-- Jugadores -->
          

            <div class="cursor-pointer sidebar-text">
                <div class="flex items-center justify-between p-2 text-gray-300 hover:text-white hover:bg-gray-600">
                    <span>Grupos Round Robin</span>
                </div>
            </div>

            <!-- Administración -->
            <div x-data="{ open: false }">
                <div @click="open = !open" class="cursor-pointer sidebar-text">
                    <div class="flex items-center justify-between p-2 text-gray-300 hover:text-white hover:bg-gray-600">
                        <span>Administrar Torneo</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <div x-show="open" @click.away="open = false" class="mt-2 space-y-2">
                    <a href="#" class="block px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-600">Añadir Puntuación</a>
                    <a href="#" class="block px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-600">Selección Parejas</a>
                    <a href="#" class="block px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-600">Inscritos Parejas</a>
                    <hr>
                </div>
            </div>
            <!-- Consultas -->
            <div x-data="{ open: false }">
                <div @click="open = !open" class="cursor-pointer sidebar-text">
                    <div class="flex items-center justify-between p-2 text-gray-300 hover:text-white hover:bg-gray-600">
                        <span>Consultas</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <div x-show="open" @click.away="open = false" class="mt-2 space-y-2">
                    <a href="#" class="block px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-600">Ranking</a>
                    <a href="#" class="block px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-600">Inscripciones Torneo</a>
                    <hr>
                </div>
            </div>

            <!-- Dropdown 2 (Repite la estructura para más dropdowns) -->

            <div class="cursor-pointer sidebar-text">
                <div class="flex items-center justify-between p-2 text-gray-300 hover:text-white hover:bg-gray-600">
                    <span>Avance Cuadro Principales Por Categoría</span>
                </div>
            </div>

        </div>

        <!-- Contenido principal -->
        <div class="flex-1">
            @include('layouts.navigation')
            <div class="p-4">
                <!-- Aquí va tu contenido principal -->
                <main>
                    {{$slot}}
                </main>
                @yield('content')
            </div>
        </div>
    </div>
  

</body>
<link rel="stylesheet" href="{{ mix('css/app.css') }}">
<script src="{{ asset('js/app.js') }}" defer></script>
<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2"></script>
<script src="{{ asset('js/index.js') }}" defer></script>



</html>