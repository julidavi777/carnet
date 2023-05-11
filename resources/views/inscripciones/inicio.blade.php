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


                    <!-- Modal toggle -->
                    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Toggle modal
                    </button>
                    
                    <!-- Main modal -->
                    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-2xl max-h-full">
                            <!-- Modal content -->
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Terms of Service
                                    </h3>
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <!-- Modal body -->
                                <div class="p-6 space-y-6">
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                    </p>
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                    </p>
                                </div>
                                <!-- Modal footer -->
                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                    <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        </div>
    </div>
</x-app-layout>