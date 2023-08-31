<div class="p-6 bg-white border-b border-gray-200">
    <!-- Validation Errors -->
    <x-inscripcion.validacion-inscripcion :errors="$errors" />
    {{-- <x-auth-validation-errors class="mb-4" :errors="$errors" /> --}}

    <!-- Validation Success -->
    @if (session('success_jugador'))
        <div id="alert-border" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ml-3 text-sm font-medium">
              {{ session('success_jugador') }}
            </div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border" aria-label="Close">
              <span class="sr-only">Dismiss</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
        </div>
    @endif

    <!-- Modal toggle -->
    <x-flowbite.button class="mb-6" data-modal-target="inscribirUsuario" data-modal-toggle="inscribirUsuario" type="button">
        Asignar/Actualizar jugador
    </x-flowbite.button>
    
    <x-flowbite.modal :idModal="'inscribirUsuario'" data-modal-backdrop="static">
        <x-slot name="tituloModal">
            Asignación/Actualización jugador
        </x-slot>

        <x-slot name="cuerpoModal">

            <form method="POST" action="{{ route('inscripciones.asignar.jugador') }}" id="formulario-jugador" class="h-80 overflow-y-auto">
                @csrf

                <div class="grid gap-6 mb-6 px-10 md:grid-cols-2">

                    <input type="hidden" name="documento_anterior" class="formulario-input" id="documento_anterior" value="0">

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

                        <x-flowbite.input datepicker datepicker-format="yyyy-mm-dd" type="text" 
                            :id="'fecha_nacimiento'" placeholder="aaaa-mm-dd" required/>
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

                            <x-inscripcion.pais :titulo="'Nacionalidad'" :id="'nacionalidad'" />

                        </div>

                        <div class="mb-2">

                            <x-inscripcion.pais :titulo="'Pais residencia'" :id="'pais_residencia'" is-pais="true" />

                        </div>
                        
                        <div id="solo-colombia" class="col-span-2 grid grid-cols-2 gap-6">
                            <livewire:inscripciones.departamento />

                            <div>
                                {{-- Care about people's approval and you will be their prisoner. --}}
                                <x-flowbite.label for="municipio_residencia">
                                    Municipio <span>*</span>
                                </x-flowbite.label>
                        
                                <x-flowbite.select :id="'municipio_residencia'" required>
                        
                                    <option value="0" selected>-- Seleccione --</option>
                        
                                </x-flowbite.select>
                            </div>
                            {{--
                            <x-load-button id="load_municipio" class="mt-6">
                                Cargando municipios ...
                            </x-load-button>
                            --}}
                        </div>

                        @push('scripts')
                            <script>
                                let organizarFrases = (palabra) => {
                                    //split the above string into an array of strings 
                                    //whenever a blank space is encountered
                                    let letras = palabra.split(" ");

                                    //loop through each element of the array and capitalize the first letter.
                                    for (var i = 0; i < letras.length; i++)
                                    {
                                        letras[i] = letras[i].charAt(0).toUpperCase() + letras[i].slice(1).toLowerCase() ;
                                    }

                                    //Join all the elements of the array back into a string 
                                    //using a blankspace as a separator 
                                    return letras.join(" ");
                                };

                                const departamento = document.getElementById('departamento_residencia');

                                departamento.addEventListener('change', () => {
                                    
                                    fetch( route('inscripciones.municipios.jugador', [ departamento.value ] ))
                                    .then(data => data.json())
                                    .then(municipios => {
                                    
                                        const selectMunicipio = document.getElementById('municipio_residencia');
                                        
                                        removeAllOptions(selectMunicipio);
                                    
                                        JSON.parse(municipios).forEach(municipio => {
                                            const optionSelectMunicipio = document.createElement('option');
                                            
                                            optionSelectMunicipio.value = municipio.id;
                                            optionSelectMunicipio.text = organizarFrases(municipio.nombre);
                                            
                                            selectMunicipio.appendChild(optionSelectMunicipio);
                                        });
                                    
                                    });
                                });
                                    
                                function removeAllOptions(selectBox)
                                {
                                    while (selectBox.options.length > 0)
                                    {
                                        selectBox.remove(0);
                                    }
                                }
                                                
                            </script>
                        @endpush
                    </div>

                </div>
            </form>
            {{-- El jugador ya se encuentra asignado al usuario responsable: id --}}
            @push('scripts')
                <script>
                    const form_jugador = document.getElementById('formulario-jugador');
                    const button_form = document.getElementById('btn-formulario-jugador')

                    button_form.addEventListener('click', (e) => {
                        //fetch(route(''))
                        form_jugador.submit();
                    });
                </script>
            @endpush
        </x-slot>

        <x-slot name="footerModal">
            <x-flowbite.button type="button" id="btn-formulario-jugador" form="formulario-jugador">
                Enviar
            </x-flowbite.button>

            <x-flowbite.button class="close-modal" data-modal-hide="inscribirUsuario" type="button" :color="'gray'">
                Cancelar
            </x-flowbite.button>
        </x-slot>
    </x-flowbite.modal>

    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">

        <table class="w-full relative overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap text-right">
                        Documento de identidad
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Apellidos
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Nombres
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Género
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Dpto. y Mpio. de residencia
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Club
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Fecha nacimiento
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap text-center">
                        {{-- clase que fija la columna -> sticky top-0 right-0 --}}
                        Acciones
                    </th>
                </tr>
            </thead>

            <tbody id="table-tbody"> </tbody>
        </table>

    </div>

</div>