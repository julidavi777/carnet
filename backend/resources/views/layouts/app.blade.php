<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Cubikar') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
</head>

<body>

 <div id="app">
      
        
    <div class="main-container bg-light d-flex ">
      <div class="sidebar px-2 bg-dark" id="side_nav">
        <div class="header-box px-3 pt-3 pb-4">
          <div class="row"></div>
          <h1 class="fs-4">
            <span class="col-6text-dark rounded shadow px2 me-2"
              ><img width="200" src="{{ asset('./assets/icon/Logo_Cubikar_2.png') }}" alt="Cubikar logo" />
            </span>
          </h1>

          <button
            class="btn d-md-none d-block close-btn px-1 py-0 text-white"
          ></button>
        </div>

        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Administración
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li><a class="dropdown-item" href="/users">Usuarios</a></li>
            <li><a class="dropdown-item" href="/roles">Roles</a></li>
          </ul>
        </div>
        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gestión Humana
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li><a class="dropdown-item" href="/employees">Empleados</a></li>
            <li><a class="dropdown-item" href="/roles">Roles</a></li>
          </ul>
        </div>
        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Clientes
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li><a class="dropdown-item" href="client/create">Crear Clientes</a></li>
            <li><a class="dropdown-item" href="client">Clientes</a></li>
          </ul>
        </div>
        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Oportunidad Comercial
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li>
              <a class="dropdown-item" href="oportunity/create">Crear Oportunidad </a>
            </li>
            <li>
              <a class="dropdown-item" href="oportunities">Oportunidades Comerciales</a>
            </li>
          </ul>
        </div>
        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Informes / Indicadores
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li>
              <a class="dropdown-item" href="selled">Historico de venta</a>
            </li>
          </ul>
        </div>
        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gestión de Proyectos
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li>
              <a class="dropdown-item" href="#">Ofertas Adjudicadas</a>
            </li>
          </ul>
        </div>
        <div class="dropdown mb-2">
          <button
            class="btn btn-secondary dropdown-toggle py-3 w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Presupuesto General
          </button>
          <ul class="dropdown-menu dropdown-menu-dark mx-auto w-100">
            <li>
              <a class="dropdown-item" href="#">Administrar Capitulación</a>
              <a class="dropdown-item" href="#">Administrar Actividades</a>
              <a class="dropdown-item" href="#">Administrar Materiales</a>
              <a class="dropdown-item" href="#">Administrar Herramientas</a>
              <a class="dropdown-item" href="#"
                >Precios de Transporte</a
              >
              <a class="dropdown-item" href="#"
                >Precios de Mano de Obra</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="content">
          <nav class="w-100 navbar navbar-expand-md navbar-dark bg-white text-dark mb- shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ asset('./assets/icon/Logo_Cbk_4.png') }}" alt="Logo de museion" height="100">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto">
                        {{-- <a class="nav-link" href="{{ route('') }}">{{ __('Empleados') }}</a> --}}

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="{{ route('login') }}">{{ __('Iniciar Sesión') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Registrate aquí') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Libros
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('') }}">
                                        {{ __('lista de libros') }}
                                    </a>
                                    <a class="dropdown-item" href="{{ route('') }}">
                                        {{ __('Crear Libro') }}
                                    </a>
                                </div>


                            </li>

                            {{-- Users dropdown --}}
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                  document.getElementById('logout-form').submit();">
                                        {{ __('Cerrar sesión') }}
                                    </a>

                                    <a class="dropdown-item" href="{{ route('users.index') }}">
                                        {{ __('lista de usuarios') }}
                                    </a>
                                  
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav> 
        <div class="bg-white p-3 m-3">
            @yield('content')

        </div>
      </div>
    </div>

        <main class="py-4">
           
        </main>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</html>