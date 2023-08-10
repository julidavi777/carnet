<div>
        <x-flowbite.label for="departamento_residencia">
            Departamento <span>*</span>
        </x-flowbite.label>

        <x-flowbite.select :id="'departamento_residencia'" wire:model="departamentoId" required>
            <option value="0">-- Seleccione -- </option>

            @foreach ($departamentos as $item)

                <option value="{{ $item->id }}">
                    {{ $item->nombre }}
                </option>

            @endforeach

        </x-flowbite.select>
    </div>