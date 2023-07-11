<?php

namespace App\Http\Controllers;

use App\Models\ApuActivity;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ApuActivityController extends Controller
{
    public function index()
    {
        $apuActivities = ApuActivity::all();

        return response()->json($apuActivities);
    }

    public function show($id)
    {
        $apuActivity = ApuActivity::findOrFail($id);

        return response()->json($apuActivity);
    }

    public function store(Request $request)
    {
        try {
            $this->validate($request, [
                'cap' => 'required|integer',
                'description' => 'required|string',
                'unit' => 'required|string',
                'quantity' => 'required|integer',
                'unit_value' => 'required|integer',
                'customer_id' => 'required|integer',
                'chapter_id' => 'required|integer',
            ]);

            $apuActivity = ApuActivity::create([
                'cap' => $request->input('cap'),
                'description' => $request->input('description'),
                'unit' => $request->input('unit'),
                'quantity' => $request->input('quantity'),
                'unit_value' => $request->input('unit_value'),
                'customer_id' => $request->input('customer_id'),
                'chapter_id' => $request->input('chapter_id'),
            ]);

            return response()->json($apuActivity, 201);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $this->validate($request, [
                'cap' => 'integer',
                'description' => 'string',
                'unit' => 'string',
                'quantity' => 'integer',
                'unit_value' => 'integer',
                'customer_id' => 'integer',
                'chapter_id' => 'integer',
            ]);

            $apuActivity = ApuActivity::findOrFail($id);
            $apuActivity->cap = $request->input('cap', $apuActivity->cap);
            $apuActivity->description = $request->input('description', $apuActivity->description);
            $apuActivity->unit = $request->input('unit', $apuActivity->unit);
            $apuActivity->quantity = $request->input('quantity', $apuActivity->quantity);
            $apuActivity->unit_value = $request->input('unit_value', $apuActivity->unit_value);
            $apuActivity->customer_id = $request->input('customer_id', $apuActivity->customer_id);
            $apuActivity->chapter_id = $request->input('chapter_id', $apuActivity->chapter_id);
            $apuActivity->save();

            return response()->json($apuActivity);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

   /*  public function destroy($id)
    {
        $apuActivity = ApuActivity::findOrFail($id);
        $apuActivity->delete();

        return response()->json(['message' => 'Apu Activity deleted successfully']);
    } */
}
