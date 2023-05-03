<div>
    {{-- Care about people's approval and you will be their prisoner. --}}
    <x-flowbite.label for="club">
        Club <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'club'" required>

        <option>-- Seleccione --</option>

        @foreach ($clubes as $club)
            <option value="{{ $club->c10_club_id }}">{{ $club->c10_club_nombre }}</option>
        @endforeach

    </x-flowbite.select> 
</div>