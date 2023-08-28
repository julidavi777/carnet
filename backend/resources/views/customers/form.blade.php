@extends('layouts.app')

@section('content')
<div class="container pb-3 ">
    <h1 id="title">{{$mode}} Clientes</h1>


    @if(count($errors)>0)
    @foreach ($errors->all() as $error )
    <div class="alert alert-danger">
        {{$error}}
    </div>

    @endforeach
    @endif

    @if (Session::has('alert'))
    <div class="alert alert-danger alert-dismissible fade show" role="alert">

        <strong> {{ Session::get('alert') }}</strong>.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif

    <div class="row">
        <div class="mb-3 col-md-6">
                <label for="type_id" class="form-label"><b>Tipo de documento *</b></label>
                <select class="form-select" name="type_id" id="type_id">
                    <option value="hola">--Seleccione una</option>
                    <option value="CC">Cedula de Ciudadanía</option>
                    <option value="CE">Cedula de Extranjería</option>
                    <option value="PPORT">Pasaporte</option>
                </select>
        </div>
        <div class="mb-3 col-md-6">
            <label for="id-card" class="form-label"><b>Número de documento *</b></label>
            <input value="{{isset( $customer->id_card)?$customer->id_card:old('id_card')}}" type="text" class="form-control" id="id-card" required name="id_card" />
        </div>
        <div class="mb-3 col-md-6">
            <label for="name" class="form-label"><b>Nombres </b></label>
            <input value="{{isset( $customer->name)?$customer->name:old('name')}}" type="text" class="form-control" placeholder="Jose" required name="name" id="name" />
        </div>

        <div class="mb-3 col-md-6">
            <label for="surname" class="form-label"><b>Apellido *</b></label>
            <input value="{{isset( $customer->surname)?$customer->surname:old('surname')}}" type="text" class="form-control" id="surname" placeholder="Alvarez" required name="surname" />
        </div>

        <div class="mb-3 col-md-6">
            <label for="phone" class="form-label"><b> Numero de Teléfono *</b></label>
            <input value="{{isset( $customer->phone)?$customer->phone:old('phone')}}" type="text" class="form-control" id="phone" placeholder="3130000000" required name="phone" />
        </div>

        <div class="mb-3 col-md-6">
            <label for="address" class="form-label"><b>Dirección *</b></label>
            <input value="{{isset( $customer->address)?$customer->address:old('address')}}" type="text" class="form-control" id="address" placeholder="Avenida siempreviva 123" required name="address" />
        </div>

       
        <div class="form-group">
      <label for="departamento">Departamento *</label>
      <input type="text" class="form-control" id="departamento" required>
    </div>
    <div class="form-group">
      <label for="municipio">Municipio *</label>
      <input type="text" class="form-control" id="municipio" required>
    </div>
    <div class="form-group">
      <label for="direccion">Dirección *</label>
      <input type="text" class="form-control" id="direccion" required>
    </div>
    <div class="form-group">
      <label for="correoElectronico">Correo electrónico *</label>
      <input type="email" class="form-control" id="correoElectronico" required>
    </div>
    
    <!-- Sección de Información Comercial (Opcional) -->
    <h3>Información Comercial</h3>
    <div  class="row">
      <div class="col-3">
        <button type="submit" class="btn btn-primary">Contacto Comercial # 1</button>
      </div>
      <div class="col-3"><button type="submit" class="btn btn-primary">Contacto Comercial # 2</button></div>
      <div class="col-3"><button type="submit" class="btn btn-primary">Contacto Facturacion</button></div>
      <div class="col-3"><button type="submit" class="btn btn-primary">contacto Pagos / Tesoreria </button></div>

    </div>

    <div class="form-group">
      <label for="razonSocial">Razón social</label>
      <input type="text" class="form-control" id="razonSocial">
    </div>
    <div class="form-group">
      <label for="razonComercial">Razón comercial</label>
      <input type="text" class="form-control" id="razonComercial">
    </div>
    <div class="form-group">
      <label for="rut">RUT</label>
      <input type="text" class="form-control" id="rut">
    </div>
    <div class="form-group">
      <label for="camaraComercio">Cámara de comercio</label>
      <input type="file" class="form-control-file" id="camaraComercio">
    </div>
    <br>
    <div class="form-group">
      <label for="declaracionRenta">Declaración de renta</label>
      <input type="file" class="form-control-file" id="declaracionRenta">
    </div>
</br>
    <div class="form-group">
      <label for="logoCliente">Logo cliente</label>
      <input type="file" class="form-control-file" id="logoCliente">
    </div>
    
    <!-- Botón de Envío -->
    
  </div>
  <button type="submit" class="btn btn-primary m-auto w-30">Guardar</button>
</form>

@endsection
