<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;

class ChapterController extends Controller
{
    public function index()
    {
        $chapters = Chapter::all();
        return response()->json($chapters);
    }

    public function show($id)
    {
        $chapter = Chapter::findOrFail($id);
        return response()->json($chapter);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $chapter = Chapter::create($data);
        return response()->json($chapter, 201);
    }

    public function update(Request $request, $id)
    {
        $chapter = Chapter::findOrFail($id);
        $chapter->update($request->all());
        return response()->json($chapter);
    }

    public function destroy($id)
    {
        $chapter = Chapter::findOrFail($id);
        $chapter->delete();
        return response()->json(null, 204);
    }
}
