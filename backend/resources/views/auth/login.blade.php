<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Inicio de Sesión</title>
  <!-- Enlace al archivo CSS de Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Contenedor principal para centrar el contenido -->
  <div class="container mt-5">
    <!-- Fila y columna para centrar el formulario de inicio de sesión -->
    <div class="row justify-content-center">
      <div class="col-md-4">
        <!-- Tarjeta con el formulario de inicio de sesión -->
        <div class="card">
            
          <div class="card-body">
            <div class="logo-container text-center mb-4">
                <ion-img class="logo" src="../../assets/icon/Logo_Cubikar_5.png"></ion-img>
              </div>
            <!-- Título del formulario -->
            <p class="text-center">Ingresa tu correo y contraseña</p>
            <!-- Formulario -->
            <form method="POST" action="{{ route('login')}}">
                @csrf
                @method('POST')
              <!-- Campo de correo electrónico -->
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
              </div>
              <!-- Campo de contraseña -->
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
              </div>
              <!-- Botón de inicio de sesión -->
              <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Enlace al archivo JavaScript de Bootstrap (bundle) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>