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
    <!-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> -->
    <link rel="stylesheet" href="{{ asset('css/index.css') }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/a23e6feb03.js"></script>

    @routes

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="stylesheet" href="{{ asset('css/flowbite.css') }}">

    @stack('styles')

    @livewireStyles
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/flowbite.css') }}">

</head>

<body class="font-sans bg-gray-100">

    <nav class="bg-white">

        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <button id="sidebarBtn" class="px-4 py-2 text-gray-700 text-2xl rounded-lg hover:bg-gray-200">
                        <i class="fas fa-bars"></i>
                    </button>
                    <form method="GET" class="w-full invisible sm:visible">
                        <div class="relative text-gray-500 ml-6 px-3 pt-1">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" class="py-2 text-md text-gray-900 w-full
                rounded-md pl-10 bg-transparent placeholder-gray-800 focus:outline-none
                focus:bg-white focus:text-gray-800" placeholder="Search...">
                        </div>
                    </form>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <div class="ml-3 relative">
                        <div>
                            <button class="text-xl text-gray-800 px-4 py-2 focus:outline-none" id="notificationsBtn"><i class="far fa-bell"></i></button>
                        </div>

                        <div id="notificationsDiv" class="hidden origin-top-right absolute right-0 mt-2 w-64
              rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none">
                            <p class="p-2 text-sm text-gray-700">Not results...</p>
                        </div>
                    </div>

                    <div class="ml-3 relative">
                        <div>
                            <button class="text-xl text-gray-800 pr-4 py-2 focus:outline-none" id="colorsBtn"><i class="fas fa-palette"></i></button>
                        </div>

                        <div id="colorsDiv" class="hidden origin-top-right absolute right-0  w-20
              rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none z-10">
                            <p class="p-2 text-sm text-gray-700">Colors:</p>
                            <div class="py-2">
                                <button class="bg-blue-500 w-12 h-8 rounded block mx-auto my-1" onclick="setColor('bg-blue-500')"></button>
                                <button class="bg-indigo-500 w-12 h-8 rounded block mx-auto my-1" onclick="setColor('bg-indigo-500')"></button>
                                <button class="bg-green-500 w-12 h-8 rounded block mx-auto my-1" onclick="setColor('bg-green-500')"></button>
                                <button class="bg-red-500 w-12 h-8 rounded block mx-auto my-1" onclick="setColor('bg-red-500')"></button>
                                <button class="bg-gray-800 w-12 h-8 rounded block mx-auto my-1" onclick="setColor('bg-gray-800')"></button>
                            </div>
                        </div>
                    </div>

                    <div class="ml-3 relative">
                        <div>
                            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="profileBtn">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            </button>
                        </div>

                        <div id="profileDiv" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            @auth
                            <form action="{{route('logout')}}">
                                @csrf
                                <x-header-dropdown-link href="#" iconClass="fas fa-sign-out-alt" text="sign out" onclick="event.preventDefault(); this.closest('form').submit" />
                            </form>
                            @endauth

                            <a href="#" class="block px-4 py-2 text-sm text-gray-700">
                                <i class="fas fa-sign-out-alt mr-2"></i>Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>


    <main class="flex bg-gray-100">

        <aside class="bg-slate-800">
            <div class="p-6">
                <a href="" class="text-white text-3xl font-semibold hover:text-gray-300">
                    <i class="fas fa-user-cog mr-3"></i>Admin
                </a>
            </div>
            <nav class="text-white text-base font-semibold pt-3  pl-2">
                <a href="" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    <i class="fas fa-tachometer-alt mr-3"></i>
                    Inicio
                </a>
                
                <x-sidebar.dropdown title="Jugadores" iconClass="fa-regular fa-user-group" >
                    <x-sidebar.sidebar-link href="#" text="administrar jugadores" iconClass="fa-regular fa-user-pen"></x-sidebar.sidebar-link>
                </x-sidebar.dropdown>

                <a href="" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i class="fas fa-table mr-3"></i>
                    Jugadores
                    administrarJugadores route('inscripciones.inicio') .active = 'request()->routeIs('inscipciones.inicio')'
                </a>
                @auth
                @endauth
                <a href="" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i class="fas fa-align-left mr-3"></i>
                    Grupos Round Robin
                </a>
                @auth
                //este tambien dropdown
                <a href="" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i class="fas fa-tablet-alt mr-3"></i>
                    Admininstrar Torneo
                </a>
                @if(Auth::user()->id_perfil == 'A')
                añadir puntuacion
                seleccion parejas
                inscritos parejas
                @endif

                //tambien
                <a href="" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i class="fas fa-calendar mr-3"></i>
                    Consultas

                    ranking
                    inscipciones torneo
                </a>

                <a href="" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i class="fas fa-cogs mr-3"></i>
                    Avance cuadros Principales por categoría
                </a>
                @endauth
            </nav>
        </aside>

        <div class="w-full flex flex-col h-screen overflow-y-hidden">


            <!-- Mobile Header & Nav -->
            <header id="sidebarMobile" class="w-full py-5 px-6 sm:hidden">
                <!-- Dropdown Nav -->
                <nav class="text-white text-base font-semibold">
                    <a href="" class="block active-nav-link text-white py-4 pl-6">
                        <i class="fas fa-tachometer-alt mr-3"></i>
                        Inicio
                    </a>
                    <a href="" class="block text-white opacity-75 hover:opacity-100 py-4 pl-6">
                        <i class="fas fa-table mr-3"></i>
                        Jugadores
                    </a>
                    <a href="" class="block text-white opacity-75 hover:opacity-100 py-4 pl-6 ">
                        <i class="fas fa-align-left mr-3"></i>
                        Grupos Round Robin
                    </a>
                    <a href="" class="block text-white opacity-75 hover:opacity-100 py-4 pl-6">
                        <i class="fas fa-tablet-alt mr-3"></i>
                        Administrar Torneo
                    </a>
                    <a href="" class="block text-white opacity-75 hover:opacity-100 py-4 pl-6">
                        <i class="fas fa-calendar mr-3"></i>
                        Consultas
                    </a>
                    <a href="" class="block text-white opacity-75 hover:opacity-100 py-4 pl-6">
                        <i class="fas fa-cogs mr-3"></i>
                        Avance cuadros principales
                    </a>
                </nav>
            </header>

            <div class="w-full overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6">
                    <slot></slot>
                </main>
            </div>

        </div>

    </main>

</body>
<link rel="stylesheet" href="{{ mix('css/app.css') }}">
<script src="{{ asset('js/app.js') }}" defer></script>
<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2"></script>
<script src="{{ asset('js/index.js') }}" defer></script>



</html>