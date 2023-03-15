<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Grupos Round Robin') }}
        </h2>
    </x-slot>
    @push('styles')
        <style>
            table {
                display: block;
                padding: 2rem;
                overflow-x: auto;
                white-space: nowrap;
            }
            table td {
                padding: 15px;
            }
            table thead tr {
                background-color: #54585d;
                color: #ffffff;
                border: 1px solid #54585d;
            }
            table tbody tr td {
                color: #636363;
                border: 1px solid #dddfe1;
            }
            table tbody tr {
                background-color: #f9fafb;
            }
            table tbody tr:nth-child(odd) {
                background-color: #ffffff;
            }
        </style>
    @endpush
    <div class="py-12">
        <div class="max-w-max mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">

                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />

                    <form action="{{ route('dashboard') }}" method="POST">
                        <div class="flex">
                            @csrf
                            <div class="mr-2 flex-auto">
                                <label for="torneo">Torneo</label>
                                <input class="w-full" type="number" name="torneo" id="torneo" placeholder="ej: 123" value="{{ old('torneo') }}" required>
                            </div>
                            <div class="mr-2 flex-auto">
                                <label for="categoria">Categoría</label>
                                <select class="w-full" name="categoria" id="categoria">
                                    <option value="1" {{ old('categoria') == 1 ? 'selected' : '' }} >Bola Roja</option>
                                    <option value="2" {{ old('categoria') == 2 ? 'selected' : '' }} >Bola Naranja</option>
                                    <option value="3" {{ old('categoria') == 3 ? 'selected' : '' }} >Bola Amarilla</option>
                                    <option value="4" {{ old('categoria') == 4 ? 'selected' : '' }} >Bola Verde</option>
                                </select>
                            </div>
                            <div class="mr-2 flex-auto">
                                <label for="genero">Género</label>
                                <select class="w-full" name="genero" id="genero">
                                    <option value="T" {{ old('genero') == 'T' ? 'selected' : '' }} >Multigenero</option>
                                    <option value="M" {{ old('genero') == 'M' ? 'selected' : '' }} >Masculino</option>
                                    <option value="F" {{ old('genero') == 'F' ? 'selected' : '' }} >Femenino</option>
                                </select>
                            </div>
                            <div class="mr-2 flex-auto">
                                <label for="modalidad">Modalidad</label>
                                <select class="w-full" name="modalidad" id="modalidad">
                                    <option value="I" {{ old('modalidad') == 'I' ? 'selected' : '' }} >Individuales</option>
                                    <option value="D" {{ old('modalidad') == 'D' ? 'selected' : '' }} >Dobles</option>
                                </select>
                            </div>
                            <div class="mr-2 flex-auto">
                                <label for="cuadro">Cuadro</label>
                                <select class="w-full" name="cuadro" id="cuadro">
                                    <option value="G" {{ old('cuadro') == 'G' ? 'selected' : '' }} >General RR</option>
                                    <option value="A" {{ old('cuadro') == 'A' ? 'selected' : '' }} >Cuadro A</option>
                                    <option value="B" {{ old('cuadro') == 'B' ? 'selected' : '' }} >Cuadro B</option>
                                </select>
                            </div>
                            <div class="mt-5 w-48 text-center">
                                <button type="submit" class="py-2 px-5 text-white bg-lime-600 rounded-full">
                                    Recuperar datos
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                @if($total_grupos > 0)
                <!-- Tablas -->
                <div>
                    @for ($i = 1; $i <= $total_grupos; $i++)

                        <livewire:tabla-grupo-round-robin :datos="$datos" :grupo="$i" :wire:key="$i"/>

                    @endfor
                </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
