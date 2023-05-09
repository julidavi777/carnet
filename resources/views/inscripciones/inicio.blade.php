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

                            <div class="residencia col-span-2">
                                <div class="mb-6 ">
                                    <x-inscripcion.pais />

                                    @push('scripts')
                                        <script>
                                            const prefijo_pais = "+";
                                            let pais = document.getElementById('pais-residencia'); 
                                            let selected = pais.selectedOptions;
                                            let pais_defecto = selected[0].label;

                                            getSoloColombia(pais_defecto, (prefijo_pais + selected[0].dataset.phoneCode));

                                            pais.addEventListener('change', () => {
                                                getSoloColombia(selected[0].label, (prefijo_pais + selected[0].dataset.phoneCode));
                                            });

                                            function getSoloColombia(pais, codigo_pais)
                                            {
                                                document.getElementById('codigo_pais').innerText = codigo_pais;
                                                document.getElementById('codigo_tel').value = codigo_pais;

                                                if(pais !== 'Colombia')
                                                    document.getElementById('solo-colombia').hidden = true;
                                                else
                                                    document.getElementById('solo-colombia').hidden = false;
                                            }

                                        </script>
                                    @endpush
                                </div>

                                <div id="solo-colombia">
                                    <div class="mb-6">
                                        <livewire:inscripciones.departamento />
                                    </div>
    
                                    <div class="mb-6">
                                        <livewire:inscripciones.municipio />
                                    </div>
                                </div>
                            </div>

                            <div class="mb-6">
                                <x-flowbite.label for="telefono-contacto">
                                    Número de celular
                                </x-flowbite.label>

                                <div class="flex">

                                    <span id="codigo_pais" class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> </span>

                                    <x-flowbite.input class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        type="number" :id="'telefono-contacto'" required />

                                    <input type="hidden" id="codigo_tel" name="codigo_tel" />
                                </div>

                            </div>

                            <div class="mb-6">
                                <x-flowbite.label for="email">
                                    Correo electrónico
                                </x-flowbite.label>
                                
                                <x-flowbite.input type="email" :id="'email'" required/>
                            </div>

                            <div class="mb-6">
                                <x-inscripcion.club />
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