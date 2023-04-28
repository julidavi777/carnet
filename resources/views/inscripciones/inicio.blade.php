<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Inscripciones') }}
        </h2>
    </x-slot>
    <div class="py-12">
        @push('styles')
            <style>
                span {
                    color: red;
                }
            </style>
        @endpush
        <div class="max-w-max mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />
                    <form>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div class="mb-6">
                                <x-flowbite.label for="numero-identificacion">
                                    Número de identificacion <span>*</span> 
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="number" :id="'numero-identificacion'" required/>
                            </div>

                            <div class="mb-6">
                                <x-flowbite.label for="fecha-nacimiento">
                                    Fecha nacimiento <span>*</span> 
                                </x-flowbite.label>

                                <x-flowbite.input datepicker datepicker-format="dd/mm/yyyy" type="text" 
                                    :id="'fecha-nacimiento'" placeholder="dd/mm/aaaa" required/>
                            </div>
                            @push('scripts')
                                <script src="{{ asset('js/datepicker.js') }}"></script>
                            @endpush

                            <div class="mb-6">
                                <x-flowbite.label for="nombres">
                                    Nombres <span>*</span> 
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="text" :id="'nombres'" required/>
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="apellidos">
                                    Apellidos <span>*</span> 
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="text" :id="'apellidos'" required/>
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="genero">
                                    Género <span>*</span> 
                                </x-flowbite.label>

                                <x-flowbite.select :id="'genero'" required>
                                    <option selected>-- Seleccione --</option>
                                    <option value="M" >Masculino</option>
                                    <option value="F" >Femenino</option>
                                </x-flowbite.select>                         
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="nacionalidad">
                                    Nacionalidad <span>*</span> 
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="text" :id="'nacionalidad'" required/>
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="telefono-contacto">
                                    Número de celular
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="number" :id="'telefono-contacto'" required/>
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="email">
                                    Correo electrónico
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="email" :id="'email'" required/>
                            </div>
                            <div class="residencia col-span-2 grid grid-cols-2 gap-6">
                                <div class="mb-6">
                                    <livewire:inscripciones.pais />
                                </div>
                                <div class="mb-6">
                                    <livewire:inscripciones.ciudad />
                                </div>
                            </div>
                            <div class="mb-6">
                                <livewire:inscripciones.club />
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="categoria">
                                    Categoría <span>*</span> 
                                </x-flowbite.label>

                                <x-flowbite.select :id="'categoria'" required>
                                    <option selected>-- Seleccione --</option>
                                    <option value="1" {{ old('categoria') == 1 ? 'selected' : '' }} >Bola Roja</option>
                                    <option value="2" {{ old('categoria') == 2 ? 'selected' : '' }} >Bola Naranja</option>
                                    <option value="3" {{ old('categoria') == 3 ? 'selected' : '' }} >Bola Amarilla</option>
                                    <option value="4" {{ old('categoria') == 4 ? 'selected' : '' }} >Bola Verde</option>
                                </x-flowbite.select>
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="ranking">
                                    Ranking <span>*</span> 
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="number" :id="'ranking'" required/>
                            </div>
                            <div class="mb-6">
                                <x-flowbite.label for="puntos">
                                    Puntos
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="number" :id="'puntos'" readonly/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>