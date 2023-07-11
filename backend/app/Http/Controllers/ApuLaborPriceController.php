<?php

namespace App\Http\Controllers;

use App\Models\ApuLaborAnalysisItem;
use App\Models\ApuLaborPrice;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ApuLaborPriceController extends Controller
{
    public function index()
    {
        $apuLaborAnalysisItems = ApuLaborPrice::all();

        return response()->json($apuLaborAnalysisItems);
    }

    public function show($id)
    {
        $apuLaborAnalysisItem = ApuLaborPrice::findOrFail($id);

        return response()->json($apuLaborAnalysisItem);
    }

    public function store(Request $request)
    {
        try {
            $this->validate($request, [
                'description' => 'required|string',
                'unit' => 'required|string',
                'unit_price_eje_value' => 'integer',
                'unit_price_bogota_value' => 'integer',
                'unit_price_medellin_value' => 'integer',
                'chapter_id' => 'required|integer',
            ]);

            $apuLaborAnalysisItem = ApuLaborPrice::create([
                'description' => $request->input('description'),
                'unit' => $request->input('unit'),
                'unit_price_eje_value' => $request->input('unit_price_eje_value'),
                'unit_price_bogota_value' => $request->input('unit_price_bogota_value'),
                'unit_price_medellin_value' => $request->input('unit_price_medellin_value'),
                'chapter_id' => $request->input('chapter_id'),
            ]);

            return response()->json($apuLaborAnalysisItem, 201);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $this->validate($request, [
                'description' => 'string',
                'unit' => 'string',
                'unit_price_eje_value' => 'integer',
                'unit_price_bogota_value' => 'integer',
                'unit_price_medellin_value' => 'integer',
                'chapter_id' => 'integer',
            ]);

            $apuLaborAnalysisItem = ApuLaborPrice::findOrFail($id);
            $apuLaborAnalysisItem->description = $request->input('description', $apuLaborAnalysisItem->description);
            $apuLaborAnalysisItem->unit = $request->input('unit', $apuLaborAnalysisItem->unit);
            $apuLaborAnalysisItem->unit_price_eje_value = $request->input('unit_price_eje_value', $apuLaborAnalysisItem->unit_price_eje_value);
            $apuLaborAnalysisItem->unit_price_bogota_value = $request->input('unit_price_bogota_value', $apuLaborAnalysisItem->unit_price_bogota_value);
            $apuLaborAnalysisItem->unit_price_medellin_value = $request->input('unit_price_medellin_value', $apuLaborAnalysisItem->unit_price_medellin_value);
            $apuLaborAnalysisItem->chapter_id = $request->input('chapter_id', $apuLaborAnalysisItem->chapter_id);
            $apuLaborAnalysisItem->save();

            return response()->json($apuLaborAnalysisItem);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /* public function destroy($id)
    {
        $apuLaborAnalysisItem = ApuLaborAnalysisItem::findOrFail($id);
        $apuLaborAnalysisItem->delete();

        return response()->json(['message' => 'Apu Labor Analysis Item deleted successfully']);
    } */
}
