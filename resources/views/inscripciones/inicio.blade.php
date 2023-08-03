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
                    <x-flowbite.button data-modal-target="inscribirUsuario" data-modal-toggle="inscribirUsuario" type="button">
                        Inscribir jugador
                    </x-flowbite.button>
                    
                    <x-flowbite.modal :idModal="'inscribirUsuario'">
                        <x-slot name="tituloModal">
                            Inscribir jugador
                        </x-slot>

                        <x-slot name="cuerpoModal">
                            <form class="h-80 overflow-y-auto">
                                <div class="grid gap-6 mb-6 px-10 md:grid-cols-2">
                                    <div class="mb-2">
                                        <x-flowbite.label for="numero-identificacion">
                                            Número de identificacion <span>*</span> 
                                        </x-flowbite.label>
                                        
                                        <x-flowbite.input type="number" :id="'numero-identificacion'" required/>
                                    </div>
        
                                    <div class="mb-2">
                                        <x-flowbite.label for="fecha-nacimiento">
                                            Fecha nacimiento <span>*</span> 
                                        </x-flowbite.label>
        
                                        <x-flowbite.input datepicker datepicker-format="dd/mm/yyyy" type="text" 
                                            :id="'fecha-nacimiento'" placeholder="dd/mm/aaaa" required/>
                                    </div>

                                    @push('scripts')
                                        <script src="{{ asset('js/datepicker.js') }}"></script>
                                    @endpush
        
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
                                            <option selected>-- Seleccione --</option>
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

                                            @push('scripts')
                                                <script>
                                                    //const prefijo_pais = "+";
                                                    let pais = document.getElementById('pais-residencia'); 
                                                    let selected = pais.selectedOptions;
                                                    let pais_defecto = selected[0].label;
        
                                                    //getSoloColombia(pais_defecto, (prefijo_pais + selected[0].dataset.phoneCode));
                                                    getSoloColombia(pais_defecto);
        
                                                    pais.addEventListener('change', () => {
                                                        //getSoloColombia(selected[0].label, (prefijo_pais + selected[0].dataset.phoneCode));
                                                        getSoloColombia(selected[0].label);
                                                    });
        
                                                    function getSoloColombia(pais)
                                                    {
                                                        let div_class_property = (pais == 'Colombia') ? 'visible' : 'invisible';
                                                        let solo_colombia = document.getElementById('solo-colombia');

                                                        //document.getElementById('codigo_pais').innerText = codigo_pais;
                                                        //document.getElementById('codigo_tel').value = codigo_pais;

                                                        ( solo_colombia.classList.remove('visible') || solo_colombia.classList.remove('invisible') );

                                                        solo_colombia.classList.add(div_class_property);

                                                        console.log(pais, solo_colombia.className);
                                                    }
        
                                                </script>
                                            @endpush
                                        </div>

                                        <div id="solo-colombia" class="col-span-2 grid grid-cols-2 gap-6">
                                            <div>
                                                <livewire:inscripciones.departamento />
                                            </div>
            
                                            <div>
                                                <livewire:inscripciones.municipio />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </x-slot>

                        <x-slot name="footerModal">
                            <x-flowbite.button data-modal-hide="inscribirUsuario" type="button">
                                Crear
                            </x-flowbite.button>

                            <x-flowbite.button data-modal-hide="inscribirUsuario" type="button" :color="'gray'">
                                Cancelar
                            </x-flowbite.button>
                        </x-slot>
                    </x-flowbite.modal>


                    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Documento de identidad
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nombres
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Apellidos
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Género
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nacionalidad
                                    </th>
                                    <th scope="col" class="px-6 py-3" colspan="2">
                                        País y ciudad de residencia
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Club
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Fecha nacimiento
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody id="table-tbody">
                                @push('scripts')
                                    <script>
                                        /*
                                        const options = {
                                            method: "GET",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                        };
                                        */
                                        let ruta = "{{ route('inscripciones.lista.jugadores') }}";

                                        fetch(ruta)
                                        .then(response => response.json())
                                        .then(jugadores => {
                                            let datos_jugadores = eval(jugadores);

                                            createTBody(datos_jugadores);
                                        });

                                        function createTBody(lista_judadores)
                                        {
                                            lista_judadores.forEach(jugador => {
                                                const tabla_tbody = document.getElementById('table-tbody');
                                                const tbody_tr = document.createElement('tr');
    
                                                tbody_tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700', 'hover:bg-gray-50', 'dark:hover:bg-gray-600');

                                                // c15_jugador_id
                                                const tbody_th_c15_jugador_id = document.createElement('th');

                                                tbody_th_c15_jugador_id.classList.add('px-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');
                                                tbody_th_c15_jugador_id.setAttribute('scope', 'row');
                                                tbody_th_c15_jugador_id.textContent = jugador.c15_jugador_id;


                                                tbody_tr.appendChild(tbody_th_c15_jugador_id);

                                                // c15_jugador_nombres
                                                const tbody_td_c15_jugador_nombres = document.createElement('td');

                                                tbody_td_c15_jugador_nombres.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_nombres.textContent = jugador.c15_jugador_nombres;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_nombres);

                                                // c15_jugador_apellidos
                                                const tbody_td_c15_jugador_apellidos = document.createElement('td');

                                                tbody_td_c15_jugador_apellidos.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_apellidos.textContent = jugador.c15_jugador_apellidos;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_apellidos);

                                                // c15_jugador_genero
                                                const tbody_td_c15_jugador_genero = document.createElement('td');

                                                tbody_td_c15_jugador_genero.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_genero.textContent = jugador.c15_jugador_genero;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_genero);

                                                // c15_jugador_nacionalidad
                                                const tbody_td_c15_jugador_nacionalidad = document.createElement('td');

                                                tbody_td_c15_jugador_nacionalidad.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_nacionalidad.textContent = jugador.c15_jugador_nacionalidad;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_nacionalidad);

                                                // c15_jugador_pais_residencia
                                                const tbody_td_c15_jugador_pais_residencia = document.createElement('td');

                                                tbody_td_c15_jugador_pais_residencia.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_pais_residencia.textContent = jugador.c15_jugador_pais_residencia;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_pais_residencia);

                                                // c15_jugador_ciudad_residencia
                                                const tbody_td_c15_jugador_ciudad_residencia = document.createElement('td');

                                                tbody_td_c15_jugador_ciudad_residencia.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_ciudad_residencia.textContent = jugador.c15_jugador_ciudad_residencia;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_ciudad_residencia);

                                                //c15_jugador_club_id
                                                const tbody_td_c15_jugador_club_id = document.createElement('td');

                                                tbody_td_c15_jugador_club_id.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_club_id.textContent = jugador.c15_jugador_club_id;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_club_id);

                                                //c15_jugador_fecha_nacimiento
                                                const tbody_td_c15_jugador_fecha_nacimiento = document.createElement('td');

                                                tbody_td_c15_jugador_fecha_nacimiento.classList.add('px-6', 'py-4');
                                                tbody_td_c15_jugador_fecha_nacimiento.textContent = jugador.c15_jugador_fecha_nacimiento;

                                                tbody_tr.appendChild(tbody_td_c15_jugador_fecha_nacimiento);

                                                // Actions
                                                const tbody_td_acciones = document.createElement('td');

                                                tbody_td_acciones.classList.add('px-6', 'py-4');

                                                // Editar
                                                const td_editar = document.createElement('a');

                                                td_editar.classList.add('font-medium', 'text-blue-600', 'dark:text-blue-500', 'hover:underline');

                                                td_editar.textContent = 'Editar';
                                                td_editar.setAttribute('href', '#');

                                                tbody_td_acciones.appendChild(td_editar);

                                                tbody_tr.appendChild(tbody_td_acciones);

                                                tabla_tbody.appendChild(tbody_tr);
                                            });
                                        }
                                    </script>
                                @endpush
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</x-app-layout>