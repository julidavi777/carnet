<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use App\Services\TorneosService;
use App\Services\Usuarios\JugadorService;
use App\Services\Inscripciones\CategoriasService;

class InscripcionesTablaJugadores extends Component
{
    public $datos;
    public $datos_tabla;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($datos)
    {
        $this->datos = $datos;
        $this->datos_tabla = $this->getDatosTabla($this->datos);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.inscripciones-tabla-jugadores');
    }

    private function getDatosTabla(array $jugadores)
    {
        $tabla = [];

        foreach($jugadores as $jugador)
        {
            if(!is_array($jugador))
            {
                $tabla[] = $jugador;
                continue;
            }

            $torneo = ucfirst(strtolower(TorneosService::getNombreTorneo($jugador['torneo_id'])));
            $nombre_jugador = JugadorService::getNombreJugador($jugador['jugador_id']);
            $categoria = [];
            $categoria_eliminar = [];
            $subtotal = $jugador['subtotal'];

            foreach($jugador['categoria'] as $id => $precio)
            {
                $nombre_categoria = ucfirst( strtolower(CategoriasService::getNombreCategoria($id)) );
                $categoria[] = $nombre_categoria. ' ('. $precio. ')';

                $categoria_eliminar[] = $id;
            }

            $dato_jugador['torneo'] = $torneo;
            $dato_jugador['nombre_jugador'] = $nombre_jugador;
            $dato_jugador['categoria'] = $categoria;
            $dato_jugador['subtotal'] = $subtotal;
            $dato_jugador['eliminar'] = [
                'torneo_id' => $jugador['torneo_id'],
                'jugador_id' => $jugador['jugador_id'],
            ];

            $tabla[] = $dato_jugador;
        }

        return $tabla;
    }
}
