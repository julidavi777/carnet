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

                    <!-- Modal toggle -->
                    <x-flowbite.button class="mb-6" data-modal-target="inscribirUsuario" data-modal-toggle="inscribirUsuario" type="button">
                        Asignar jugador
                    </x-flowbite.button>
                    
                    <x-flowbite.modal :idModal="'inscribirUsuario'" data-modal-backdrop="static">
                        <x-slot name="tituloModal">
                            Asignar jugador
                        </x-slot>

                        <x-slot name="cuerpoModal">
                            <form id="formulario-jugador" class="h-80 overflow-y-auto">
                                <div class="grid gap-6 mb-6 px-10 md:grid-cols-2">

                                    <div class="mb-2" x-data="documento">

                                        <x-flowbite.label for="numero-identificacion">
                                            Número de identificacion <span>*</span> 
                                        </x-flowbite.label>
                                        
                                        <x-flowbite.input type="number" x-bind="setDocumentoJugador" x-model.number.lazy="documento_jugador" :id="'documento'" required/>

                                        {{-- buscando a: <span x-bind="getDocumentoJugador"></span> --}}
                                    </div>

                                    <div class="mb-2">
                                        <x-flowbite.label for="fecha-nacimiento">
                                            Fecha nacimiento <span>*</span> 
                                        </x-flowbite.label>
        
                                        <x-flowbite.input datepicker datepicker-format="dd/mm/yyyy" type="text" 
                                            :id="'fecha_nacimiento'" placeholder="dd/mm/aaaa" required/>
                                    </div>

                                    <div class="mb-2">
                                        <x-flowbite.label for="nombres">
                                            Nombres <span>*</span> 
                                        </x-flowbite.label>
                                        
                                        <x-flowbite.input type="text" :id="'nombres'" required/>
                                    </div>

                                    <div class="mb-2">
                                        <x-flowbite.label for="apellidos">
                                            Apellidos <span>*</span> 
                                        </x-flowbite.label>
                                        
                                        <x-flowbite.input type="text" :id="'apellidos'" required/>
                                    </div>

                                    <div class="mb-2">
                                        <x-flowbite.label for="genero">
                                            Género <span>*</span> 
                                        </x-flowbite.label>
        
                                        <x-flowbite.select :id="'genero'" required>
                                            <option value="0" selected>-- Seleccione --</option>
                                            <option value="M" >Masculino</option>
                                            <option value="F" >Femenino</option>
                                        </x-flowbite.select>                         
                                    </div>

                                    <div class="mb-2">
                                        <x-inscripcion.club />
                                    </div>

                                    <div class="residencia col-span-2 grid grid-cols-2 gap-6">

                                        <div class="mb-2">
                                            <x-flowbite.label for="nacionalidad">
                                                Nacionalidad <span>*</span> 
                                            </x-flowbite.label>
                                            
                                            <x-flowbite.input type="text" :id="'nacionalidad'" required/>
                                        </div>

                                        <div class="mb-2">

                                            <x-inscripcion.pais />

                                        </div>

                                        <div id="solo-colombia" class="col-span-2 grid grid-cols-2 gap-6">

                                            <livewire:inscripciones.departamento />

                                            <livewire:inscripciones.municipio />

                                        </div>
                                    </div>

                                </div>
                            </form>
                        </x-slot>

                        <x-slot name="footerModal">
                            <x-flowbite.button data-modal-hide="inscribirUsuario" type="button">
                                Crear
                            </x-flowbite.button>

                            <x-flowbite.button class="close-modal" data-modal-hide="inscribirUsuario" type="button" :color="'gray'">
                                Cancelar
                            </x-flowbite.button>
                        </x-slot>
                    </x-flowbite.modal>

                    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">

                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-3">
                                        Documento de identidad
                                    </th>
                                    <th scope="col" class="px-4 py-3">
                                        Nombres
                                    </th>
                                    <th scope="col" class="px-4 py-3">
                                        Apellidos
                                    </th>
                                    <th scope="col" class="px-4 py-3">
                                        Género
                                    </th>
                                    <th scope="col" class="px-4 py-3" colspan="3">
                                        País y ciudad de residencia
                                    </th>
                                    <th scope="col" class="px-4 py-3">
                                        Club
                                    </th>
                                    <th scope="col" class="px-4 py-3">
                                        Fecha nacimiento
                                    </th>
                                    <th scope="col" class="px-4 py-3">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>

                            <tbody id="table-tbody"> </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    </div>

    @push('scripts')
        <script src="{{ asset('js/inscripciones/Jugador.js') }}"></script>
    @endpush

</x-app-layout>