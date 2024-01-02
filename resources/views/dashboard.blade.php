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

                    <x-cabeceras.form-tabla-cuadro :accion="route('dashboard')" />
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
