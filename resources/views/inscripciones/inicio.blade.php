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
                        Inscribir usuario
                    </x-flowbite.button>
                    
                    <x-flowbite.modal :idModal="'inscribirUsuario'">
                        <x-slot name="tituloModal">
                            Inscribir usuario
                        </x-slot>

                        <x-slot name="cuerpoModal">
                            <form class="h-80 overflow-y-auto">
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
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-all" class="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-2" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple Watch
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $179
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        iPad
                                    </th>
                                    <td class="px-6 py-4">
                                        Gold
                                    </td>
                                    <td class="px-6 py-4">
                                        Tablet
                                    </td>
                                    <td class="px-6 py-4">
                                        $699
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple iMac 27"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        PC Desktop
                                    </td>
                                    <td class="px-6 py-4">
                                        $3999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</x-app-layout>