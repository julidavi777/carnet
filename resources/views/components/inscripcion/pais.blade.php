<div>
    <x-flowbite.label for="pais-residencia">
        Pais residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'pais-residencia'" required>
        <option selected>-- Seleccione --</option>
        <option value="pais">Pais</option>
    </x-flowbite.select>  
</div>