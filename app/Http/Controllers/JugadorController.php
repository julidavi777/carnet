<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\Inscripciones\DepartamentoMunicipioService;

class JugadorController extends Controller
{
    public function index()
    {
        return view('inscripciones.inicio');
    }

    protected function getListaJugadores()
    {
        /**
         * Relacionar en producción las tablas clubes con jugador
         */
        $jugadores = DB::table('t15_jugadores')
            ->select('c15_jugador_id', 'c15_jugador_fecha_nacimiento', 'c15_jugador_nombres', 'c15_jugador_apellidos', 
                'c15_jugador_genero', 'c.c10_club_nombre AS c15_club_nombre', 'c15_jugador_responsable_id', 
                'p.pais_id AS c15_jugador_pais', 'd.nombre AS c15_jugador_departamento', 'm.nombre AS c15_jugador_municipio')
            ->join('t10_clubes AS c', 'c10_club_id', 'c15_jugador_club_id')
            ->join('paises AS p', 'pais_id', 'c15_jugador_pais_id')
            ->leftJoin('departamentos AS d', 'd.id' , 'c15_jugador_departamento_id')
            ->leftJoin('municipios AS m', 'm.id' , 'c15_jugador_municipio_id')
            ->where('c15_jugador_responsable_id', Auth::id())
            ->orderBy('c15_jugador_apellidos')
            ->get()
            ->toJson();

        return response()->json($jugadores);
    }

    public function getDataJugador(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'documento' => 'required|numeric',
            'is_input_form' => 'required|boolean'
        ], 
        [
            'documento.required' => 'El campo es requerido',
            'documento.numeric' => 'El campo debe ser numérico',
            'is_input_form.required' => 'Error ...',
            'is_input_form.boolean' => 'Error ...'
        ]);

        if($validator->fails()){
            return response()->json(
                $validator->errors()
            , 400);
        }

        $validated = $validator->validated();

        $jugador = DB::table('t15_jugadores')
        //->join('t10_clubes', 'c10_club_id', 'c15_jugador_club_id')
        ->where('c15_jugador_id', $validated['documento']);

        if((int)$validated['is_input_form'] == 1) // count($jugador->toArray()) == 1
        {
            $jugador->where('c15_jugador_responsable_id', Auth::id());

            if ($jugador->get()->count() == 0)

                return response()->json(
                    [
                        'error' => 'El jugador ya se encuentra asignado a un responsable, 
                            contactese con el administrador'
                    ],
                    400
                );
        }

        return response()->json($jugador->get()->toJson());
    }

    protected function asignarJugador(Request $request)
    {
        //dd($request->all());
        $validated = $request->validate([
            'documento_anterior' => [ 'nullable', 'numeric' ],
            'documento' => [ 'required', 'numeric' ],
            'nombres' => [ 'required', 'string' ],
            'apellidos' => [ 'required', 'string' ],
            'genero' => [ 'required', 'string', 'size:1' ],
            'club' => [ 'required', 'numeric', 'min:2' ],
            'nacionalidad' => [ 'required', 'string', 'max:15' ],
            'fecha_nacimiento' => [ 'nullable', 'date_format:Y-m-d' ],
            'pais_residencia' => [ 'nullable', 'string', 'size:3' ],
            'departamento_residencia' => [ 'nullable', 'numeric', 'min:2' ],
            'municipio_residencia' => [ 'nullable', 'numeric', 'min:4' ]
        ]);

        if($validated['documento_anterior'] == 0)
        {
            $check_responsable = DB::table('t15_jugadores')
            ->select('c15_jugador_responsable_id as responsable')
            ->where('c15_jugador_id', $validated['documento'])
            ->get()
            ->toArray();

            if(Auth::id() !== $check_responsable[0]->responsable)
                return back()->withErrors([
                    'Error' => 'El jugador ya se encuentra asignado a un responsable, 
                    por favor, contactese con un administrador.'
                ]);

            $campos_insert['c15_jugador_id'] = $validated['documento'];
        }

        if($validated['documento_anterior'] == $validated['documento'] )
        {
            $campos_insert['c15_jugador_id'] = $validated['documento_anterior'];
        }
        else
        {
            $check_responsable = DB::table('t15_jugadores')
            ->where('c15_jugador_id', $validated['documento'])
            ->get()
            ->count();

            if($check_responsable > 0)
                return back()->withErrors([
                    'Error' => 'El documento ya se encuentra registrado y no es posible cambiarlo,
                        por favor, contactese con un administrador.'
                ]);

            $campos_insert['c15_jugador_id'] = $validated['documento'];
        }

        $campos_insert['c15_jugador_apellidos'] = $validated['apellidos'];
        $campos_insert['c15_jugador_nombres'] = $validated['nombres'];
        $campos_insert['c15_jugador_genero'] = $validated['genero'];
        $campos_insert['c15_jugador_nacionalidad'] = $validated['nacionalidad'];
        $campos_insert['c15_jugador_club_id'] = $validated['club'];
        $campos_insert['c15_jugador_fecha_nacimiento'] = $validated['fecha_nacimiento'];
        $campos_insert['c15_jugador_responsable_id'] = Auth::id();
        $campos_insert['c15_jugador_departamento_id'] = $validated['departamento_residencia'];
        $campos_insert['c15_jugador_municipio_id'] = $validated['municipio_residencia'];
        $campos_insert['c15_jugador_pais_id'] = 'COL';
        //$campos_insert['c15_jugador_pais_id'] = $validated['pais_residencia'];

        DB::table('t15_jugadores')
        ->updateOrInsert(
            [ 'c15_jugador_id' => $campos_insert['c15_jugador_id'] ],
            $campos_insert
        );

        return back()->with('success_jugador', 'Se ha asignado/actualizado el jugador correctamente');
    }

    protected function getMunicipios($departamento)
    {
        return response()->json(DepartamentoMunicipioService::getMunicipios($departamento));
    }

    protected function deleteJugador(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'documento' => 'required|numeric'
        ], 
        [
            'documento.required' => 'El campo es requerido',
            'documento.numeric' => 'El campo debe ser numérico'
        ]);

        if($validator->fails()){
            return response()->json(
                $validator->errors()
            , 400);
        }

        $validated = $validator->validated();

        DB::table('t15_jugadores')
        ->where('c15_jugador_id', $validated['documento'])
        ->update([
            'c15_jugador_responsable_id' => null
        ]);

        return response()->json([
            'message' => 'Eliminado correctamente'
        ]);
    }
}
