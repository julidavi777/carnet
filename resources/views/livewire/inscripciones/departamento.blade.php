<div>
    <x-flowbite.label for="departamento_residencia">
        Departamento <span>*</span> 
    </x-flowbite.label>

    
    <x-flowbite.select :id="'departamento_residencia'" wire:model="departamento" required >
        <option value="0">-- Seleccione -- </option>

        @foreach ($departamentos as $item)
            <option value="{{ $item->departamento }}">
                {{ $item->departamento }}
            </option>
        @endforeach
    </x-flowbite.select>

    <div wire:loading.delay wire:target="departamento">
        <x-load-button> 
            Cargando municipios ... 
        </x-load-button>
    </div>

    @push('scripts')
        <script>
            document.getElementById('departamento_residencia').addEventListener('change', ()=>{
                Livewire.emit('eliminar-municipios')
            });
        </script>
    @endpush
</div>
