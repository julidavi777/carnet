<div>
    <x-flowbite.label for="departamento-residencia">
        Departamento <span>*</span> 
    </x-flowbite.label>

    
    <x-flowbite.select :id="'departamento-residencia'" wire:model="departamento" required >
        <option>-- Seleccione -- </option>

        @foreach ($departamentos as $item)
            <option value="{{ $item->departamento }}">
                {{ $item->departamento }}
            </option>
        @endforeach
    </x-flowbite.select>

    <div wire:loading.delay wire:target="departamento" class="mt-4">
        <x-load-button> 
            Cargando municipios ... 
        </x-load-button>
    </div>

    @push('scripts')
        <script>
            document.getElementById('departamento-residencia').addEventListener('change', ()=>{
                Livewire.emit('eliminar-municipios')
            });
        </script>
    @endpush
</div>
