@extends('layouts.app')
@section('content')

<form action="{{url('/employees/'. $employee->id)}}" method="PATCH" enctype="multipart/form-data">
    @csrf
    @method('PATCH')

@include('employees.form', ['mode'=>'Editar', 'action'=>''])

@endsection