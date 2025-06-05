<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function index()
    {
        return Event::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:420',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:50',
            'image' => 'nullable|string',
        ]);

        $event = Event::create($validated);
        return response()->json($event, 201);
    }

    public function show($id)
    {
        return Event::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $event = Event::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:420',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:50',
            'image' => 'nullable|string',
        ]);

        $event->update($validated);
        return response()->json($event);
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return response()->json(null, 204);
    }
}
