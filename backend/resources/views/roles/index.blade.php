@extends('layouts.app')

@section('content')

<div class="container mt-5">
  <h2>Listado de Roles</h2>
  <br>
  <!-- se especifica boton para agregar los Roles  -->
  <button class="btn btn-primary" type="submit">Agregar + </button>
  <br>
  <br>

  <!-- Tabla con clases de Bootstrap para estilo -->
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <!-- Encabezados de las columnas -->
        <th>Nombres</th>
        <th>Fecha de creacion</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Datos del primer usuario -->
        <td>generico.1</td>
        <td></td>
        <td>
        <button class="btn btn-warning"><i class="fas fa-pencil-alt"></i> </button>
        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
        </td> 
      </tr>
      
        
      <!-- Puedes agregar más filas de usuarios aquí -->
    </tbody>
  </table>
</div>

@endsection