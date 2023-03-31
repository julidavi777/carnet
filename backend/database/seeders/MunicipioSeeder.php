<?php

namespace Database\Seeders;

use App\Models\Municipio;
use Illuminate\Database\Seeder;

class MunicipioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['id' => 1, 'name' => 'LETICIA', 'departamento_id' => 1],
            ['id' => 2, 'name' => 'PUERTO NARIÑO', 'departamento_id' => 1],
            ['id' => 3, 'name' => 'MEDELLIN', 'departamento_id' => 2],
            ['id' => 4, 'name' => 'ABEJORRAL', 'departamento_id' => 2],
            ['id' => 5, 'name' => 'ABRIAQUI', 'departamento_id' => 2],
            ['id' => 6, 'name' => 'ALEJANDRIA ', 'departamento_id' => 2],
            ['id' => 7, 'name' => 'AMAGA', 'departamento_id' => 2],
            ['id' => 8, 'name' => 'AMALFI', 'departamento_id' => 2],
            ['id' => 9, 'name' => 'ANDES', 'departamento_id' => 2],
            ['id' => 10, 'name' => 'ANGELOPOLIS', 'departamento_id' => 2],
            ['id' => 11, 'name' => 'ANGOSTURA', 'departamento_id' => 2],
            ['id' => 12, 'name' => 'ANORI', 'departamento_id' => 2],
            ['id' => 13, 'name' => 'SANTA FE DE ANTIOQUIA', 'departamento_id' => 2],
            ['id' => 14, 'name' => 'ANZA     ', 'departamento_id' => 2],
            ['id' => 15, 'name' => 'APARTADO', 'departamento_id' => 2],
            ['id' => 16, 'name' => 'ARBOLETES', 'departamento_id' => 2],
            ['id' => 17, 'name' => 'ARGELIA', 'departamento_id' => 2],
            ['id' => 18, 'name' => 'ARMENIA', 'departamento_id' => 2],
            ['id' => 19, 'name' => 'BARBOSA    ', 'departamento_id' => 2],
            ['id' => 20, 'name' => 'BELMIRA', 'departamento_id' => 2],
            ['id' => 21, 'name' => 'BELLO', 'departamento_id' => 2],
            ['id' => 22, 'name' => 'BETANIA', 'departamento_id' => 2],
            ['id' => 23, 'name' => 'BETULIA', 'departamento_id' => 2],
            ['id' => 24, 'name' => 'CIUDAD BOLIVAR', 'departamento_id' => 2],
            ['id' => 25, 'name' => 'BRICEÑO', 'departamento_id' => 2],
            ['id' => 26, 'name' => 'BURITICA', 'departamento_id' => 2],
            ['id' => 27, 'name' => 'CACERES', 'departamento_id' => 2],
            ['id' => 28, 'name' => 'CAICEDO', 'departamento_id' => 2],
            ['id' => 29, 'name' => 'CALDAS', 'departamento_id' => 2],
            ['id' => 30, 'name' => 'CAMPAMENTO', 'departamento_id' => 2],
            ['id' => 31, 'name' => 'CAÑASGORDAS', 'departamento_id' => 2],
            ['id' => 32, 'name' => 'CARACOLI ', 'departamento_id' => 2],
            ['id' => 33, 'name' => 'CARAMANTA ', 'departamento_id' => 2],
            ['id' => 34, 'name' => 'CAREPA', 'departamento_id' => 2],
            ['id' => 35, 'name' => 'CARMEN DE VIBORAL', 'departamento_id' => 2],
            ['id' => 36, 'name' => 'CAROLINA DEL PRINCIPE', 'departamento_id' => 2],
            ['id' => 37, 'name' => 'CAUCASIA', 'departamento_id' => 2],
            ['id' => 38, 'name' => 'CHIGORODO', 'departamento_id' => 2],
            ['id' => 39, 'name' => 'CISNEROS', 'departamento_id' => 2],
            ['id' => 40, 'name' => 'COCORNA', 'departamento_id' => 2],
            ['id' => 41, 'name' => 'CONCEPCION ', 'departamento_id' => 2],
            ['id' => 42, 'name' => 'CONCORDIA ', 'departamento_id' => 2],
            ['id' => 43, 'name' => 'COPACABANA', 'departamento_id' => 2],
            ['id' => 44, 'name' => 'DABEIBA', 'departamento_id' => 2],
            ['id' => 45, 'name' => 'DON MATIAS    ', 'departamento_id' => 2],
            ['id' => 46, 'name' => 'EBEJICO', 'departamento_id' => 2],
            ['id' => 47, 'name' => 'EL BAGRE', 'departamento_id' => 2],
            ['id' => 48, 'name' => 'ENTRERRIOS', 'departamento_id' => 2],
            ['id' => 49, 'name' => 'ENVIGADO ', 'departamento_id' => 2],
            ['id' => 50, 'name' => 'FREDONIA    ', 'departamento_id' => 2],
            ['id' => 51, 'name' => 'FRONTINO ', 'departamento_id' => 2],
            ['id' => 52, 'name' => 'GIRALDO', 'departamento_id' => 2],
            ['id' => 53, 'name' => 'GIRARDOTA   ', 'departamento_id' => 2],
            ['id' => 54, 'name' => 'GOMEZ PLATA', 'departamento_id' => 2],
            ['id' => 55, 'name' => 'GRANADA', 'departamento_id' => 2],
            ['id' => 56, 'name' => 'GUADALUPE', 'departamento_id' => 2],
            ['id' => 57, 'name' => 'GUARNE   ', 'departamento_id' => 2],
            ['id' => 58, 'name' => 'GUATAPE', 'departamento_id' => 2],
            ['id' => 59, 'name' => 'HELICONIA   ', 'departamento_id' => 2],
            ['id' => 60, 'name' => 'HISPANIA    ', 'departamento_id' => 2],
            ['id' => 61, 'name' => 'ITAGUI', 'departamento_id' => 2],
            ['id' => 62, 'name' => 'ITUANGO', 'departamento_id' => 2],
            ['id' => 63, 'name' => 'JARDIN', 'departamento_id' => 2],
            ['id' => 64, 'name' => 'JERICO', 'departamento_id' => 2],
            ['id' => 65, 'name' => 'LA CEJA', 'departamento_id' => 2],
            ['id' => 66, 'name' => 'LA ESTRELLA ', 'departamento_id' => 2],
            ['id' => 67, 'name' => 'LA PINTADA', 'departamento_id' => 2],
            ['id' => 68, 'name' => 'LA UNION ', 'departamento_id' => 2],
            ['id' => 69, 'name' => 'LIBORINA', 'departamento_id' => 2],
            ['id' => 70, 'name' => 'MACEO  ', 'departamento_id' => 2],
            ['id' => 71, 'name' => 'MARINILLA', 'departamento_id' => 2],
            ['id' => 72, 'name' => 'MONTEBELLO', 'departamento_id' => 2],
            ['id' => 73, 'name' => 'MURINDO', 'departamento_id' => 2],
            ['id' => 74, 'name' => 'MUTATA', 'departamento_id' => 2],
            ['id' => 75, 'name' => 'NARIÑO', 'departamento_id' => 2],
            ['id' => 76, 'name' => 'NECOCLI', 'departamento_id' => 2],
            ['id' => 77, 'name' => 'NECHI', 'departamento_id' => 2],
            ['id' => 78, 'name' => 'OLAYA', 'departamento_id' => 2],
            ['id' => 79, 'name' => 'PEÑOL', 'departamento_id' => 2],
            ['id' => 80, 'name' => 'PEQUE', 'departamento_id' => 2],
            ['id' => 81, 'name' => 'PUEBLORRICO', 'departamento_id' => 2],
            ['id' => 82, 'name' => 'PUERTO BERRIO', 'departamento_id' => 2],
            ['id' => 83, 'name' => 'PUERTO NARE (LA MAGDALENA) *', 'departamento_id' => 2],
            ['id' => 84, 'name' => 'PUERTO TRIUNFO', 'departamento_id' => 2],
            ['id' => 85, 'name' => 'REMEDIOS    ', 'departamento_id' => 2],
            ['id' => 86, 'name' => 'RETIRO ', 'departamento_id' => 2],
            ['id' => 87, 'name' => 'RIONEGRO', 'departamento_id' => 2],
            ['id' => 88, 'name' => 'SABANALARGA   ', 'departamento_id' => 2],
            ['id' => 89, 'name' => 'SABANETA', 'departamento_id' => 2],
            ['id' => 90, 'name' => 'SALGAR ', 'departamento_id' => 2],
            ['id' => 91, 'name' => 'SAN ANDRES', 'departamento_id' => 2],
            ['id' => 92, 'name' => 'SAN CARLOS', 'departamento_id' => 2],
            ['id' => 93, 'name' => 'SAN FRANCISCO', 'departamento_id' => 2],
            ['id' => 94, 'name' => 'SAN JERONIMO', 'departamento_id' => 2],
            ['id' => 95, 'name' => 'SAN JOSE DE LA MONTAÑA', 'departamento_id' => 2],
            ['id' => 96, 'name' => 'SAN JUAN DE URABA', 'departamento_id' => 2],
            ['id' => 97, 'name' => 'SAN LUIS', 'departamento_id' => 2],
            ['id' => 98, 'name' => 'SAN PEDRO', 'departamento_id' => 2],
            ['id' => 99, 'name' => 'SAN PEDRO DE URABA   ', 'departamento_id' => 2],
            ['id' => 100, 'name' => 'SAN RAFAEL    ', 'departamento_id' => 2],
            ['id' => 101, 'name' => 'SAN ROQUE', 'departamento_id' => 2],
            ['id' => 102, 'name' => 'SAN VICENTE', 'departamento_id' => 2],
            ['id' => 103, 'name' => 'SANTA BARBARA', 'departamento_id' => 2],
            ['id' => 104, 'name' => 'SANTA ROSA DE OSOS', 'departamento_id' => 2],
            ['id' => 105, 'name' => 'SANTO DOMINGO', 'departamento_id' => 2],
            ['id' => 106, 'name' => 'EL SANTUARIO', 'departamento_id' => 2],
            ['id' => 107, 'name' => 'SEGOVIA', 'departamento_id' => 2],
            ['id' => 108, 'name' => 'SONSON', 'departamento_id' => 2],
            ['id' => 109, 'name' => 'SOPETRAN', 'departamento_id' => 2],
            ['id' => 110, 'name' => 'TAMESIS', 'departamento_id' => 2],
            ['id' => 111, 'name' => 'TARAZA', 'departamento_id' => 2],
            ['id' => 112, 'name' => 'TARSO', 'departamento_id' => 2],
            ['id' => 113, 'name' => 'TITIRIBI', 'departamento_id' => 2],
            ['id' => 114, 'name' => 'TOLEDO ', 'departamento_id' => 2],
            ['id' => 115, 'name' => 'TURBO', 'departamento_id' => 2],
            ['id' => 116, 'name' => 'URAMITA', 'departamento_id' => 2],
            ['id' => 117, 'name' => 'URRAO', 'departamento_id' => 2],
            ['id' => 118, 'name' => 'VALDIVIA', 'departamento_id' => 2],
            ['id' => 119, 'name' => 'VALPARAISO ', 'departamento_id' => 2],
            ['id' => 120, 'name' => 'VEGACHI', 'departamento_id' => 2],
            ['id' => 121, 'name' => 'VENECIA', 'departamento_id' => 2],
            ['id' => 122, 'name' => 'VIGIA DEL FUERTE', 'departamento_id' => 2],
            ['id' => 123, 'name' => 'YALI    ', 'departamento_id' => 2],
            ['id' => 124, 'name' => 'YARUMAL    ', 'departamento_id' => 2],
            ['id' => 125, 'name' => 'YOLOMBO   ', 'departamento_id' => 2],
            ['id' => 126, 'name' => 'YONDÓ (CASABE)', 'departamento_id' => 2],
            ['id' => 127, 'name' => 'ZARAGOZA', 'departamento_id' => 2],
            ['id' => 128, 'name' => 'ARAUCA', 'departamento_id' => 3],
            ['id' => 129, 'name' => 'ARAUQUITA', 'departamento_id' => 3],
            ['id' => 130, 'name' => 'CRAVO NORTE', 'departamento_id' => 3],
            ['id' => 131, 'name' => 'FORTUL     ', 'departamento_id' => 3],
            ['id' => 132, 'name' => 'PUERTO RONDON ', 'departamento_id' => 3],
            ['id' => 133, 'name' => 'SARAVENA', 'departamento_id' => 3],
            ['id' => 134, 'name' => 'TAME', 'departamento_id' => 3],
            ['id' => 135, 'name' => 'PROVIDENCIA', 'departamento_id' => 4],
            ['id' => 136, 'name' => 'BARRANQUILLA, DISTRITO ESP, INDUSTRIAL Y PORTUARIO', 'departamento_id' => 5],
            ['id' => 137, 'name' => 'BARANOA', 'departamento_id' => 5],
            ['id' => 138, 'name' => 'CAMPO DE LA CRUZ', 'departamento_id' => 5],
            ['id' => 139, 'name' => 'CANDELARIA', 'departamento_id' => 5],
            ['id' => 140, 'name' => 'GALAPA   ', 'departamento_id' => 5],
            ['id' => 141, 'name' => 'JUAN DE ACOSTA', 'departamento_id' => 5],
            ['id' => 142, 'name' => 'LURUACO', 'departamento_id' => 5],
            ['id' => 143, 'name' => 'MALAMBO', 'departamento_id' => 5],
            ['id' => 144, 'name' => 'MANATI', 'departamento_id' => 5],
            ['id' => 145, 'name' => 'PALMAR DE VARELA', 'departamento_id' => 5],
            ['id' => 146, 'name' => 'PIOJO', 'departamento_id' => 5],
            ['id' => 147, 'name' => 'POLO NUEVO    ', 'departamento_id' => 5],
            ['id' => 148, 'name' => 'PONEDERA', 'departamento_id' => 5],
            ['id' => 149, 'name' => 'PUERTO COLOMBIA', 'departamento_id' => 5],
            ['id' => 150, 'name' => 'REPELON', 'departamento_id' => 5],
            ['id' => 151, 'name' => 'SABANAGRANDE', 'departamento_id' => 5],
            ['id' => 152, 'name' => 'SABANALARGA', 'departamento_id' => 5],
            ['id' => 153, 'name' => 'SANTA LUCIA', 'departamento_id' => 5],
            ['id' => 154, 'name' => 'SANTO TOMAS', 'departamento_id' => 5],
            ['id' => 155, 'name' => 'SOLEDAD', 'departamento_id' => 5],
            ['id' => 156, 'name' => 'SUAN', 'departamento_id' => 5],
            ['id' => 157, 'name' => 'TUBARA ', 'departamento_id' => 5],
            ['id' => 158, 'name' => 'USIACURI', 'departamento_id' => 5],
            ['id' => 159, 'name' => 'CARTAGENA DE INDIAS, DISTRITO TURISTICO Y CULTURAL', 'departamento_id' => 6],
            ['id' => 160, 'name' => 'ACHI', 'departamento_id' => 6],
            ['id' => 161, 'name' => 'ALTOS DEL ROSARIO', 'departamento_id' => 6],
            ['id' => 162, 'name' => 'ARENAL', 'departamento_id' => 6],
            ['id' => 163, 'name' => 'ARJONA', 'departamento_id' => 6],
            ['id' => 164, 'name' => 'ARROYOHONDO', 'departamento_id' => 6],
            ['id' => 165, 'name' => 'BARRANCO DE LOBA', 'departamento_id' => 6],
            ['id' => 166, 'name' => 'CALAMAR', 'departamento_id' => 6],
            ['id' => 167, 'name' => 'CANTAGALLO', 'departamento_id' => 6],
            ['id' => 168, 'name' => 'CICUCO', 'departamento_id' => 6],
            ['id' => 169, 'name' => 'CORDOBA', 'departamento_id' => 6],
            ['id' => 170, 'name' => 'CLEMENCIA', 'departamento_id' => 6],
            ['id' => 171, 'name' => 'EL CARMEN DE BOLIVAR', 'departamento_id' => 6],
            ['id' => 172, 'name' => 'EL GUAMO', 'departamento_id' => 6],
            ['id' => 173, 'name' => 'EL PEÑON', 'departamento_id' => 6],
            ['id' => 174, 'name' => 'HATILLO DE LOBA', 'departamento_id' => 6],
            ['id' => 175, 'name' => 'MAGANGUE', 'departamento_id' => 6],
            ['id' => 176, 'name' => 'MAHATES', 'departamento_id' => 6],
            ['id' => 177, 'name' => 'MARGARITA', 'departamento_id' => 6],
            ['id' => 178, 'name' => 'MARIA LA BAJA', 'departamento_id' => 6],
            ['id' => 179, 'name' => 'MONTECRISTO', 'departamento_id' => 6],
            ['id' => 180, 'name' => 'SANTA CRUZ DE MOMPÓX', 'departamento_id' => 6],
            ['id' => 181, 'name' => 'MORALES', 'departamento_id' => 6],
            ['id' => 182, 'name' => 'NOROSÍ *', 'departamento_id' => 6],
            ['id' => 183, 'name' => 'PINILLOS', 'departamento_id' => 6],
            ['id' => 184, 'name' => 'REGIDOR', 'departamento_id' => 6],
            ['id' => 185, 'name' => 'RIO VIEJO', 'departamento_id' => 6],
            ['id' => 186, 'name' => 'SAN CRISTOBAL', 'departamento_id' => 6],
            ['id' => 187, 'name' => 'SAN ESTANISLAO', 'departamento_id' => 6],
            ['id' => 865, 'name' => 'SANTIAGO', 'departamento_id' => 24],
            ['id' => 866, 'name' => 'VALLE DEL GUAMUEZ', 'departamento_id' => 24],
            ['id' => 867, 'name' => 'VILLAGARZON', 'departamento_id' => 24],
            ['id' => 868, 'name' => 'ARMENIA', 'departamento_id' => 25],
            ['id' => 869, 'name' => 'BUENAVISTA ', 'departamento_id' => 25],
            ['id' => 870, 'name' => 'CALARCA', 'departamento_id' => 25],
            ['id' => 871, 'name' => 'CIRCASIA', 'departamento_id' => 25],
            ['id' => 872, 'name' => 'CORDOBA', 'departamento_id' => 25],
            ['id' => 873, 'name' => 'FILANDIA', 'departamento_id' => 25],
            ['id' => 874, 'name' => 'GENOVA', 'departamento_id' => 25],
            ['id' => 875, 'name' => 'LA TEBAIDA', 'departamento_id' => 25],
            ['id' => 876, 'name' => 'MONTENEGRO', 'departamento_id' => 25],
            ['id' => 877, 'name' => 'PIJAO', 'departamento_id' => 25],
            ['id' => 878, 'name' => 'QUIMBAYA', 'departamento_id' => 25],
            ['id' => 879, 'name' => 'SALENTO', 'departamento_id' => 25],
            ['id' => 880, 'name' => 'PEREIRA', 'departamento_id' => 26],
            ['id' => 881, 'name' => 'APIA', 'departamento_id' => 26],
            ['id' => 882, 'name' => 'BALBOA', 'departamento_id' => 26],
            ['id' => 883, 'name' => 'BELEN DE UMBRIA', 'departamento_id' => 26],
            ['id' => 884, 'name' => 'DOSQUEBRADAS', 'departamento_id' => 26],
            ['id' => 885, 'name' => 'GUATICA', 'departamento_id' => 26],
            ['id' => 886, 'name' => 'LA CELIA', 'departamento_id' => 26],
            ['id' => 887, 'name' => 'LA VIRGINIA', 'departamento_id' => 26],
            ['id' => 888, 'name' => 'MARSELLA', 'departamento_id' => 26],
            ['id' => 889, 'name' => 'MISTRATO', 'departamento_id' => 26],
            ['id' => 890, 'name' => 'PUEBLO RICO', 'departamento_id' => 26],
            ['id' => 891, 'name' => 'QUINCHIA', 'departamento_id' => 26],
            ['id' => 892, 'name' => 'SANTA ROSA DE CABAL', 'departamento_id' => 26],
            ['id' => 893, 'name' => 'SANTUARIO', 'departamento_id' => 26],
            ['id' => 894, 'name' => 'BUCARAMANGA', 'departamento_id' => 27],
            ['id' => 895, 'name' => 'AGUADA', 'departamento_id' => 27],
            ['id' => 896, 'name' => 'ALBANIA', 'departamento_id' => 27],
            ['id' => 897, 'name' => 'ARATOCA ', 'departamento_id' => 27],
            ['id' => 898, 'name' => 'BARBOSA', 'departamento_id' => 27],
            ['id' => 899, 'name' => 'BARICHARA', 'departamento_id' => 27],
            ['id' => 900, 'name' => 'BARRANCABERMEJA    ', 'departamento_id' => 27],
            ['id' => 901, 'name' => 'BETULIA ', 'departamento_id' => 27],
            ['id' => 902, 'name' => 'BOLIVAR ', 'departamento_id' => 27],
            ['id' => 903, 'name' => 'CABRERA ', 'departamento_id' => 27],
            ['id' => 904, 'name' => 'CALIFORNIA', 'departamento_id' => 27],
            ['id' => 905, 'name' => 'CAPITANEJO', 'departamento_id' => 27],
            ['id' => 906, 'name' => 'CARCASI    ', 'departamento_id' => 27],
            ['id' => 907, 'name' => 'CEPITA   ', 'departamento_id' => 27],
            ['id' => 908, 'name' => 'CERRITO', 'departamento_id' => 27],
            ['id' => 909, 'name' => 'CHARALA', 'departamento_id' => 27],
            ['id' => 910, 'name' => 'CHARTA', 'departamento_id' => 27],
            ['id' => 911, 'name' => 'CHIMA', 'departamento_id' => 27],
            ['id' => 912, 'name' => 'CHIPATA', 'departamento_id' => 27],
            ['id' => 913, 'name' => 'CIMITARRA', 'departamento_id' => 27],
            ['id' => 914, 'name' => 'CONCEPCION', 'departamento_id' => 27],
            ['id' => 915, 'name' => 'CONFINES ', 'departamento_id' => 27],
            ['id' => 916, 'name' => 'CONTRATACION', 'departamento_id' => 27],
            ['id' => 917, 'name' => 'COROMORO', 'departamento_id' => 27],
            ['id' => 918, 'name' => 'CURITI', 'departamento_id' => 27],
            ['id' => 919, 'name' => 'EL CARMEN', 'departamento_id' => 27],
            ['id' => 920, 'name' => 'EL GUACAMAYO ', 'departamento_id' => 27],
            ['id' => 921, 'name' => 'EL PEÑON', 'departamento_id' => 27],
            ['id' => 922, 'name' => 'EL PLAYON', 'departamento_id' => 27],
            ['id' => 923, 'name' => 'ENCINO', 'departamento_id' => 27],
            ['id' => 924, 'name' => 'ENCISO', 'departamento_id' => 27],
            ['id' => 925, 'name' => 'FLORIAN', 'departamento_id' => 27],
            ['id' => 926, 'name' => 'FLORIDABLANCA ', 'departamento_id' => 27],
            ['id' => 927, 'name' => 'GALAN', 'departamento_id' => 27],
            ['id' => 928, 'name' => 'GAMBITA', 'departamento_id' => 27],
            ['id' => 929, 'name' => 'GIRON ', 'departamento_id' => 27],
            ['id' => 930, 'name' => 'GUACA', 'departamento_id' => 27],
            ['id' => 931, 'name' => 'GUADALUPE', 'departamento_id' => 27],
            ['id' => 932, 'name' => 'GUAPOTA', 'departamento_id' => 27],
            ['id' => 933, 'name' => 'GUAVATA', 'departamento_id' => 27],
            ['id' => 934, 'name' => 'GÜEPSA', 'departamento_id' => 27],
            ['id' => 935, 'name' => 'HATO', 'departamento_id' => 27],
            ['id' => 936, 'name' => 'JESUS MARIA', 'departamento_id' => 27],
            ['id' => 937, 'name' => 'JORDAN', 'departamento_id' => 27],
            ['id' => 938, 'name' => 'LA BELLEZA', 'departamento_id' => 27],
            ['id' => 939, 'name' => 'LANDAZURI', 'departamento_id' => 27],
            ['id' => 940, 'name' => 'LA PAZ', 'departamento_id' => 27],
            ['id' => 941, 'name' => 'LEBRIJA ', 'departamento_id' => 27],
            ['id' => 942, 'name' => 'LOS SANTOS', 'departamento_id' => 27],
            ['id' => 943, 'name' => 'MACARAVITA', 'departamento_id' => 27],
            ['id' => 944, 'name' => 'MALAGA ', 'departamento_id' => 27],
            ['id' => 945, 'name' => 'MATANZA', 'departamento_id' => 27],
            ['id' => 946, 'name' => 'MOGOTES', 'departamento_id' => 27],
            ['id' => 947, 'name' => 'MOLAGAVITA     ', 'departamento_id' => 27],
            ['id' => 948, 'name' => 'OCAMONTE', 'departamento_id' => 27],
            ['id' => 949, 'name' => 'OIBA', 'departamento_id' => 27],
            ['id' => 950, 'name' => 'ONZAGA', 'departamento_id' => 27],
            ['id' => 951, 'name' => 'PALMAR', 'departamento_id' => 27],
            ['id' => 952, 'name' => 'PALMAS DEL SOCORRO', 'departamento_id' => 27],
            ['id' => 953, 'name' => 'PARAMO', 'departamento_id' => 27],
            ['id' => 954, 'name' => 'PIEDECUESTA', 'departamento_id' => 27],
            ['id' => 955, 'name' => 'PINCHOTE', 'departamento_id' => 27],
            ['id' => 956, 'name' => 'PUENTE NACIONAL', 'departamento_id' => 27],
            ['id' => 957, 'name' => 'PUERTO PARRA', 'departamento_id' => 27],
            ['id' => 958, 'name' => 'PUERTO WILCHES', 'departamento_id' => 27],
            ['id' => 959, 'name' => 'RIONEGRO', 'departamento_id' => 27],
            ['id' => 960, 'name' => 'SABANA DE TORRES    ', 'departamento_id' => 27],
            ['id' => 961, 'name' => 'SAN ANDRES ', 'departamento_id' => 27],
            ['id' => 962, 'name' => 'SAN BENITO ', 'departamento_id' => 27],
            ['id' => 963, 'name' => 'SAN GIL', 'departamento_id' => 27],
            ['id' => 964, 'name' => 'SAN JOAQUIN', 'departamento_id' => 27],
            ['id' => 965, 'name' => 'SAN JOSE DE MIRANDA', 'departamento_id' => 27],
            ['id' => 966, 'name' => 'SAN MIGUEL ', 'departamento_id' => 27],
            ['id' => 967, 'name' => 'SAN VICENTE DE CHUCURI', 'departamento_id' => 27],
            ['id' => 968, 'name' => 'SANTA BARBARA', 'departamento_id' => 27],
            ['id' => 969, 'name' => 'SANTA HELENA DEL OPÓN', 'departamento_id' => 27],
            ['id' => 970, 'name' => 'SIMACOTA', 'departamento_id' => 27],
            ['id' => 971, 'name' => 'SOCORRO     ', 'departamento_id' => 27],
            ['id' => 972, 'name' => 'SUAITA', 'departamento_id' => 27],
            ['id' => 973, 'name' => 'SUCRE', 'departamento_id' => 27],
            ['id' => 974, 'name' => 'SURATA', 'departamento_id' => 27],
            ['id' => 975, 'name' => 'TONA    ', 'departamento_id' => 27],
            ['id' => 976, 'name' => 'VALLE SAN JOSE     ', 'departamento_id' => 27],
            ['id' => 977, 'name' => 'VELEZ', 'departamento_id' => 27],
            ['id' => 978, 'name' => 'VETAS', 'departamento_id' => 27],
            ['id' => 979, 'name' => 'VILLANUEVA', 'departamento_id' => 27],
            ['id' => 980, 'name' => 'ZAPATOCA', 'departamento_id' => 27],
            ['id' => 981, 'name' => 'SINCELEJO', 'departamento_id' => 28],
            ['id' => 982, 'name' => 'BUENAVISTA', 'departamento_id' => 28],
            ['id' => 983, 'name' => 'CAIMITO', 'departamento_id' => 28],
            ['id' => 984, 'name' => 'COLOSO', 'departamento_id' => 28],
            ['id' => 985, 'name' => 'COROZAL', 'departamento_id' => 28],
            ['id' => 986, 'name' => 'COVEÑAS', 'departamento_id' => 28],
            ['id' => 987, 'name' => 'CHALAN', 'departamento_id' => 28],
            ['id' => 988, 'name' => 'EL ROBLE', 'departamento_id' => 28],
            ['id' => 989, 'name' => 'GALERAS', 'departamento_id' => 28],
            ['id' => 990, 'name' => 'GUARANDA', 'departamento_id' => 28],
            ['id' => 991, 'name' => 'LA UNION   ', 'departamento_id' => 28],
            ['id' => 992, 'name' => 'LOS PALMITOS', 'departamento_id' => 28],
            ['id' => 993, 'name' => 'MAJAGUAL', 'departamento_id' => 28],
            ['id' => 994, 'name' => 'MORROA', 'departamento_id' => 28],
            ['id' => 995, 'name' => 'OVEJAS', 'departamento_id' => 28],
            ['id' => 996, 'name' => 'SAN ANTONIO DE PALMITO', 'departamento_id' => 28],
            ['id' => 997, 'name' => 'SAMPUES', 'departamento_id' => 28],
            ['id' => 998, 'name' => 'SAN BENITO ABAD       ', 'departamento_id' => 28],
            ['id' => 999, 'name' => 'SAN JUAN DE BETULIA', 'departamento_id' => 28],
            ['id' => 1000, 'name' => 'SAN MARCOS', 'departamento_id' => 28],
            ['id' => 1001, 'name' => 'SAN ONOFRE', 'departamento_id' => 28],
            ['id' => 1002, 'name' => 'SAN PEDRO', 'departamento_id' => 28],
            ['id' => 1003, 'name' => 'SINCE', 'departamento_id' => 28],
            ['id' => 1004, 'name' => 'SUCRE', 'departamento_id' => 28],
            ['id' => 1005, 'name' => 'TOLU', 'departamento_id' => 28],
            ['id' => 1006, 'name' => 'TOLUVIEJO', 'departamento_id' => 28],
            ['id' => 1007, 'name' => 'IBAGUE', 'departamento_id' => 29],
            ['id' => 1008, 'name' => 'ALPUJARRA', 'departamento_id' => 29],
            ['id' => 1009, 'name' => 'ALVARADO', 'departamento_id' => 29],
            ['id' => 1010, 'name' => 'AMBALEMA', 'departamento_id' => 29],
            ['id' => 1011, 'name' => 'ANZOATEGUI', 'departamento_id' => 29],
            ['id' => 1012, 'name' => 'ARMERO (GUAYABAL)', 'departamento_id' => 29],
            ['id' => 1013, 'name' => 'ATACO', 'departamento_id' => 29],
            ['id' => 1014, 'name' => 'CAJAMARCA', 'departamento_id' => 29],
            ['id' => 1015, 'name' => 'CARMEN APICALA', 'departamento_id' => 29],
            ['id' => 1016, 'name' => 'CASABIANCA', 'departamento_id' => 29],
            ['id' => 1017, 'name' => 'CHAPARRAL', 'departamento_id' => 29],
            ['id' => 1018, 'name' => 'COELLO', 'departamento_id' => 29],
            ['id' => 1019, 'name' => 'COYAIMA ', 'departamento_id' => 29],
            ['id' => 1020, 'name' => 'CUNDAY', 'departamento_id' => 29],
            ['id' => 1021, 'name' => 'DOLORES', 'departamento_id' => 29],
            ['id' => 1022, 'name' => 'ESPINAL', 'departamento_id' => 29],
            ['id' => 1023, 'name' => 'FALAN', 'departamento_id' => 29],
            ['id' => 1024, 'name' => 'FLANDES', 'departamento_id' => 29],
            ['id' => 1025, 'name' => 'FRESNO', 'departamento_id' => 29],
            ['id' => 1026, 'name' => 'GUAMO', 'departamento_id' => 29],
            ['id' => 1027, 'name' => 'HERVEO', 'departamento_id' => 29],
            ['id' => 1028, 'name' => 'HONDA', 'departamento_id' => 29],
            ['id' => 1029, 'name' => 'ICONONZO', 'departamento_id' => 29],
            ['id' => 1030, 'name' => 'LERIDA', 'departamento_id' => 29],
            ['id' => 1031, 'name' => 'LIBANO', 'departamento_id' => 29],
            ['id' => 1032, 'name' => 'MARIQUITA', 'departamento_id' => 29],
            ['id' => 1033, 'name' => 'MELGAR', 'departamento_id' => 29],
            ['id' => 1034, 'name' => 'MURILLO', 'departamento_id' => 29],
            ['id' => 1035, 'name' => 'NATAGAIMA', 'departamento_id' => 29],
            ['id' => 1036, 'name' => 'ORTEGA', 'departamento_id' => 29],
            ['id' => 1037, 'name' => 'PALOCABILDO', 'departamento_id' => 29],
            ['id' => 1038, 'name' => 'PIEDRAS', 'departamento_id' => 29],
            ['id' => 1039, 'name' => 'PLANADAS', 'departamento_id' => 29],
            ['id' => 1040, 'name' => 'PRADO', 'departamento_id' => 29],
            ['id' => 1041, 'name' => 'PURIFICACION', 'departamento_id' => 29],
            ['id' => 1042, 'name' => 'RIOBLANCO', 'departamento_id' => 29],
            ['id' => 1043, 'name' => 'RONCESVALLES', 'departamento_id' => 29],
            ['id' => 1044, 'name' => 'ROVIRA', 'departamento_id' => 29],
            ['id' => 1045, 'name' => 'SALDAÑA', 'departamento_id' => 29],
            ['id' => 1046, 'name' => 'SAN ANTONIO', 'departamento_id' => 29],
            ['id' => 1047, 'name' => 'SAN LUIS', 'departamento_id' => 29],
            ['id' => 1048, 'name' => 'SANTA ISABEL', 'departamento_id' => 29],
            ['id' => 1049, 'name' => 'SUAREZ', 'departamento_id' => 29],
            ['id' => 1050, 'name' => 'VALLE DE SAN JUAN', 'departamento_id' => 29],
            ['id' => 1051, 'name' => 'VENADILLO', 'departamento_id' => 29],
            ['id' => 1052, 'name' => 'VILLAHERMOSA', 'departamento_id' => 29],
            ['id' => 1053, 'name' => 'VILLARRICA', 'departamento_id' => 29],
            ['id' => 1054, 'name' => 'CALI', 'departamento_id' => 30],
            ['id' => 1055, 'name' => 'ALCALA', 'departamento_id' => 30],
            ['id' => 1056, 'name' => 'ANDALUCIA', 'departamento_id' => 30],
            ['id' => 1057, 'name' => 'ANSERMANUEVO', 'departamento_id' => 30],
            ['id' => 1058, 'name' => 'ARGELIA', 'departamento_id' => 30],
            ['id' => 1059, 'name' => 'BOLIVAR', 'departamento_id' => 30],
            ['id' => 1060, 'name' => 'BUENAVENTURA', 'departamento_id' => 30],
            ['id' => 1061, 'name' => 'BUGA   ', 'departamento_id' => 30],
            ['id' => 1062, 'name' => 'BUGALAGRANDE', 'departamento_id' => 30],
            ['id' => 1063, 'name' => 'CAICEDONIA ', 'departamento_id' => 30],
            ['id' => 1064, 'name' => 'CALIMA DEL DARIEN', 'departamento_id' => 30],
            ['id' => 1065, 'name' => 'CANDELARIA ', 'departamento_id' => 30],
            ['id' => 1066, 'name' => 'CARTAGO', 'departamento_id' => 30],
            ['id' => 1067, 'name' => 'DAGUA', 'departamento_id' => 30],
            ['id' => 1068, 'name' => 'EL AGUILA ', 'departamento_id' => 30],
            ['id' => 1069, 'name' => 'EL CAIRO', 'departamento_id' => 30],
            ['id' => 1070, 'name' => 'EL CERRITO', 'departamento_id' => 30],
            ['id' => 1071, 'name' => 'EL DOVIO', 'departamento_id' => 30],
            ['id' => 1072, 'name' => 'FLORIDA', 'departamento_id' => 30],
            ['id' => 1073, 'name' => 'GINEBRA', 'departamento_id' => 30],
            ['id' => 1074, 'name' => 'GUACARI', 'departamento_id' => 30],
            ['id' => 1075, 'name' => 'JAMUNDI ', 'departamento_id' => 30],
            ['id' => 1076, 'name' => 'LA CUMBRE', 'departamento_id' => 30],
            ['id' => 1077, 'name' => 'LA UNION', 'departamento_id' => 30],
            ['id' => 1078, 'name' => 'LA VICTORIA', 'departamento_id' => 30],
            ['id' => 1079, 'name' => 'OBANDO', 'departamento_id' => 30],
            ['id' => 1080, 'name' => 'PALMIRA', 'departamento_id' => 30],
            ['id' => 1081, 'name' => 'PRADERA', 'departamento_id' => 30],
            ['id' => 1082, 'name' => 'RESTREPO', 'departamento_id' => 30],
            ['id' => 1083, 'name' => 'RIOFRIO', 'departamento_id' => 30],
            ['id' => 1084, 'name' => 'ROLDANILLO', 'departamento_id' => 30],
            ['id' => 1085, 'name' => 'SAN PEDRO', 'departamento_id' => 30],
            ['id' => 1086, 'name' => 'SEVILLA', 'departamento_id' => 30],
            ['id' => 1087, 'name' => 'TORO', 'departamento_id' => 30],
            ['id' => 1088, 'name' => 'TRUJILLO', 'departamento_id' => 30],
            ['id' => 1089, 'name' => 'TULUA ', 'departamento_id' => 30],
            ['id' => 1090, 'name' => 'ULLOA', 'departamento_id' => 30],
            ['id' => 1091, 'name' => 'VERSALLES', 'departamento_id' => 30],
            ['id' => 1092, 'name' => 'VIJES', 'departamento_id' => 30],
            ['id' => 1093, 'name' => 'YOTOCO', 'departamento_id' => 30],
            ['id' => 1094, 'name' => 'YUMBO', 'departamento_id' => 30],
            ['id' => 1095, 'name' => 'ZARZAL', 'departamento_id' => 30],
            ['id' => 1096, 'name' => 'MITU ', 'departamento_id' => 31],
            ['id' => 1097, 'name' => 'CARURU', 'departamento_id' => 31],
            ['id' => 1098, 'name' => 'TARAIRA', 'departamento_id' => 31],
            ['id' => 1099, 'name' => 'PUERTO CARREÑO', 'departamento_id' => 32],
            ['id' => 1100, 'name' => 'LA PRIMAVERA', 'departamento_id' => 32],
            ['id' => 1101, 'name' => 'SANTA ROSALIA', 'departamento_id' => 32],
            ['id' => 1102, 'name' => 'CUMARIBO', 'departamento_id' => 32]
        ];

        Municipio::insert($data);
    }
}