<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Inscripciones') }}
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="max-w-max mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />

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
                    <div class="mb-6">
                        <x-flowbite.label for="pais-residencia">
                            Pais residencia <span>*</span> 
                        </x-flowbite.label>

                        <x-flowbite.select :id="'pais-residencia'" required>
                            <option selected>-- Seleccione --</option>
                            <option value="pais">Pais</option>
                        </x-flowbite.select>                         
                    </div>
                    <div class="mb-6">
                        <x-flowbite.label for="ciudad-residencia">
                            Ciudad residencia <span>*</span> 
                        </x-flowbite.label>

                        <x-flowbite.select :id="'ciudad-residencia'" required>
                            <option selected>-- Seleccione --</option>
                            <option value="ciudad">Ciudad</option>
                        </x-flowbite.select>                         
                    </div>
                    <div class="mb-6">
                        <x-flowbite.label for="club">
                            Club <span>*</span> 
                        </x-flowbite.label>

                        <x-flowbite.select :id="'club'" required>
                            <option selected>-- Seleccione --</option>
                            <option value="club">Club</option>
                        </x-flowbite.select>                         
                    </div>
                    <div class="mb-6">
                        <x-flowbite.label for="categoria">
                            Categoría <span>*</span> 
                        </x-flowbite.label>

                        <x-flowbite.select :id="'categoria'" required>
                            <option selected>-- Seleccione --</option>
                            <option value="categoria">Categoría</option>
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
                    {{-- 
c15_jugador_id                
c15_jugador_apellidos         
c15_jugador_nombres           
c15_jugador_genero            
c15_jugador_nacionalidad      
c15_jugador_telefono_contacto 
c15_jugador_correo_contacto  
c15_jugador_pais_residencia   
c15_jugador_ciudad_residencia 
c15_jugador_club_id           
c15_jugador_categoria_id      
c15_jugador_ranking           
c15_jugador_fecha_nacimiento 
c15_jugador_punto
--}}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>