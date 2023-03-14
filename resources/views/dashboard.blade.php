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
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">

                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />

                    <form action="{{ route('dashboard') }}" method="POST">
                        <div class="flex">
                            @csrf
                            <div class="mr-2">
                                <label for="torneo">Torneo</label>
                                <input class="w-full" type="number" name="torneo" id="torneo" placeholder="ej: 123" value="{{ old('torneo') }}" required>
                            </div>
                            <div class="mr-2">
                                <label for="categoria">Categoría</label>
                                <select class="w-full" name="categoria" id="categoria">
                                    <option value="1" {{ old('categoria') == 1 ? 'selected' : '' }} >Bola Roja</option>
                                    <option value="2" {{ old('categoria') == 2 ? 'selected' : '' }} >Bola Naranja</option>
                                    <option value="3" {{ old('categoria') == 3 ? 'selected' : '' }} >Bola Amarilla</option>
                                    <option value="4" {{ old('categoria') == 4 ? 'selected' : '' }} >Bola Verde</option>
                                </select>
                            </div>
                            <div class="mr-2">
                                <label for="genero">Género</label>
                                <select class="w-full" name="genero" id="genero">
                                    <option value="T" {{ old('genero') == 'T' ? 'selected' : '' }} >Multigenero</option>
                                    <option value="M" {{ old('genero') == 'M' ? 'selected' : '' }} >Masculino</option>
                                    <option value="F" {{ old('genero') == 'F' ? 'selected' : '' }} >Femenino</option>
                                </select>
                            </div>
                            <div class="mr-2">
                                <label for="modalidad">Modalidad</label>
                                <select class="w-full" name="modalidad" id="modalidad">
                                    <option value="I" {{ old('modalidad') == 'I' ? 'selected' : '' }} >Individuales</option>
                                    <option value="D" {{ old('modalidad') == 'D' ? 'selected' : '' }} >Dobles</option>
                                </select>
                            </div>
                            <div class="mr-2">
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
                    <table>
                        <thead>
                            <tr>
                                <th>Grupo</th>
                                <th>Cat</th>
                                <th>Genero</th>
                                <th>Mod</th>
                                <th>Sec</th>
                                <th>Nombre</th>
                                <th>Academia</th>
    
                                <!-- Inicio var -->
                                <th colspan="4">1</th>
                                <th colspan="4">2</th>
                                <th colspan="4">3</th>
                                <th colspan="4">4</th>
                                <!-- Fin var -->
    
                                <th>PG</th>
                                <th>% SET</th>
                                <th>% GAME</th>
                                <th>Pos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>1</td>
                                <td>Quintero Henao Oliver</td>
                                <td>COUNTRY CLUB MEDELLIN</td>
    
                                <!-- INICIO -->
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15/2</td>
                                <td>15/8</td>
                                <td></td>
                                <td></td>
                                <td>10/15</td>
                                <td>13/15</td>
                                <td></td>
                                <td></td>
                                <td>19/17</td>
                                <td>15/12</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>2</td>
                                <td>66 %</td>
                                <td>56 %</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>2</td>
                                <td>De Andrade López Vicente De Jesús</td>
                                <td>LIGA DE TENIS RISARALDA</td>
    
                                <!-- INICIO -->
                                <td>2/15</td>
                                <td>8/15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>18/16</td>
                                <td>17/15</td>
                                <td></td>
                                <td></td>
                                <td>15/4</td>
                                <td>15/1</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>2</td>
                                <td>66 %</td>
                                <td>56 %</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>3</td>
                                <td>Alzate Ramirez Luis Felipe</td>
                                <td>CLUB DEL COMERCIO DE PEREIRA</td>
    
                                <!-- INICIO -->
                                <td>15/10</td>
                                <td>15/13</td>
                                <td></td>
                                <td></td>
                                <td>16/18</td>
                                <td>15/17</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15/17</td>
                                <td>11/15</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>1</td>
                                <td>33 %</td>
                                <td>45 %</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>4</td>
                                <td>Arroyave Yacaman Felipe</td>
                                <td>CLUB CAMPESTRE MEDELLIN</td>
    
                                <!-- INICIO -->
                                <td>17/19</td>
                                <td>12/15</td>
                                <td></td>
                                <td></td>
                                <td>4/15</td>
                                <td>1/15</td>
                                <td></td>
                                <td></td>
                                <td>17/15</td>
                                <td>15/11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>1</td>
                                <td>33 %</td>
                                <td>42 %</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Grupo</th>
                                <th>Cat</th>
                                <th>Genero</th>
                                <th>Mod</th>
                                <th>Sec</th>
                                <th>Nombre</th>
                                <th>Academia</th>
    
                                <!-- Inicio var -->
                                <th colspan="4">1</th>
                                <th colspan="4">2</th>
                                <th colspan="4">3</th>
                                <th colspan="4">4</th>
                                <!-- Fin var -->
    
                                <th>PG</th>
                                <th>% SET</th>
                                <th>% GAME</th>
                                <th>Pos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>1</td>
                                <td>Quintero Henao Oliver</td>
                                <td>COUNTRY CLUB MEDELLIN</td>
    
                                <!-- INICIO -->
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15/2</td>
                                <td>15/8</td>
                                <td></td>
                                <td></td>
                                <td>10/15</td>
                                <td>13/15</td>
                                <td></td>
                                <td></td>
                                <td>19/17</td>
                                <td>15/12</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>2</td>
                                <td>66 %</td>
                                <td>56 %</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>2</td>
                                <td>De Andrade López Vicente De Jesús</td>
                                <td>LIGA DE TENIS RISARALDA</td>
    
                                <!-- INICIO -->
                                <td>2/15</td>
                                <td>8/15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>18/16</td>
                                <td>17/15</td>
                                <td></td>
                                <td></td>
                                <td>15/4</td>
                                <td>15/1</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>2</td>
                                <td>66 %</td>
                                <td>56 %</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>3</td>
                                <td>Alzate Ramirez Luis Felipe</td>
                                <td>CLUB DEL COMERCIO DE PEREIRA</td>
    
                                <!-- INICIO -->
                                <td>15/10</td>
                                <td>15/13</td>
                                <td></td>
                                <td></td>
                                <td>16/18</td>
                                <td>15/17</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15/17</td>
                                <td>11/15</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>1</td>
                                <td>33 %</td>
                                <td>45 %</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>4</td>
                                <td>Arroyave Yacaman Felipe</td>
                                <td>CLUB CAMPESTRE MEDELLIN</td>
    
                                <!-- INICIO -->
                                <td>17/19</td>
                                <td>12/15</td>
                                <td></td>
                                <td></td>
                                <td>4/15</td>
                                <td>1/15</td>
                                <td></td>
                                <td></td>
                                <td>17/15</td>
                                <td>15/11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>1</td>
                                <td>33 %</td>
                                <td>42 %</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Grupo</th>
                                <th>Cat</th>
                                <th>Genero</th>
                                <th>Mod</th>
                                <th>Sec</th>
                                <th>Nombre</th>
                                <th>Academia</th>
    
                                <!-- Inicio var -->
                                <th colspan="4">1</th>
                                <th colspan="4">2</th>
                                <th colspan="4">3</th>
                                <th colspan="4">4</th>
                                <!-- Fin var -->
    
                                <th>PG</th>
                                <th>% SET</th>
                                <th>% GAME</th>
                                <th>Pos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>1</td>
                                <td>Quintero Henao Oliver</td>
                                <td>COUNTRY CLUB MEDELLIN</td>
    
                                <!-- INICIO -->
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15/2</td>
                                <td>15/8</td>
                                <td></td>
                                <td></td>
                                <td>10/15</td>
                                <td>13/15</td>
                                <td></td>
                                <td></td>
                                <td>19/17</td>
                                <td>15/12</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>2</td>
                                <td>66 %</td>
                                <td>56 %</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>2</td>
                                <td>De Andrade López Vicente De Jesús</td>
                                <td>LIGA DE TENIS RISARALDA</td>
    
                                <!-- INICIO -->
                                <td>2/15</td>
                                <td>8/15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>18/16</td>
                                <td>17/15</td>
                                <td></td>
                                <td></td>
                                <td>15/4</td>
                                <td>15/1</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>2</td>
                                <td>66 %</td>
                                <td>56 %</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>3</td>
                                <td>Alzate Ramirez Luis Felipe</td>
                                <td>CLUB DEL COMERCIO DE PEREIRA</td>
    
                                <!-- INICIO -->
                                <td>15/10</td>
                                <td>15/13</td>
                                <td></td>
                                <td></td>
                                <td>16/18</td>
                                <td>15/17</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15/17</td>
                                <td>11/15</td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>1</td>
                                <td>33 %</td>
                                <td>45 %</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>T</td>
                                <td>I</td>
                                <td>4</td>
                                <td>Arroyave Yacaman Felipe</td>
                                <td>CLUB CAMPESTRE MEDELLIN</td>
    
                                <!-- INICIO -->
                                <td>17/19</td>
                                <td>12/15</td>
                                <td></td>
                                <td></td>
                                <td>4/15</td>
                                <td>1/15</td>
                                <td></td>
                                <td></td>
                                <td>17/15</td>
                                <td>15/11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <!-- FIN -->
    
                                <td>1</td>
                                <td>33 %</td>
                                <td>42 %</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
