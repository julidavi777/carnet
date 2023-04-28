<div>
    <x-flowbite.label for="ciudad-residencia">
        Ciudad residencia <span>*</span> 
    </x-flowbite.label>

    <x-flowbite.select :id="'ciudad-residencia'" required>
        <option selected>-- Seleccione --</option>
        <option value="ciudad">Ciudad</option>
    </x-flowbite.select>  
</div>
