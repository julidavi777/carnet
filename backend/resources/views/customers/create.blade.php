@extends('layouts.app')
@section('content')

<form action="{{url('/customers')}}" method="post" enctype="multipart/form-data">
    @csrf

@include('customers.form', ['mode'=>'Crear', 'action'=>''])

@endsection