import Jugador from './DataJugador';

export default class ListaJugadores
{
    ruta;
    organizarFrases;

    constructor()
    {
        this.ruta = route('inscripciones.lista.jugadores');

        // https://flexiple.com/javascript/javascript-capitalize-first-letter/
        this.organizarFrases = (campo_dato_jugador) => {
            //split the above string into an array of strings 
            //whenever a blank space is encountered
            let letras = campo_dato_jugador.split(" ");

            //loop through each element of the array and capitalize the first letter.
            for (var i = 0; i < letras.length; i++)
            {
                letras[i] = letras[i].charAt(0).toUpperCase() + letras[i].slice(1).toLowerCase() ;
            }

            //Join all the elements of the array back into a string 
            //using a blankspace as a separator 
            return letras.join(" ");
        };
    }

    get listadoJugadores()
    {
        this.#obtenerListaJugadores(this.ruta)
            .then(jugadores => {
                // Función asíncrona
                this.#createTBody(jugadores);
                this.#configBtnAcciones();
            })
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }

    async #obtenerListaJugadores(ruta)
    {
        /*
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            };
        */
        const response = await fetch(ruta);
        let lista_judadores = [];
        let jugadores = await response.json().then(jugadores => JSON.parse(jugadores));

        if (!response.ok)
            return response.json().then(mensaje => { throw new Error('Error en el servidor =>' + mensaje) });

        jugadores.forEach(jugador => {

            lista_judadores.push({
                documento: jugador.c15_jugador_id,
                nombres: jugador.c15_jugador_nombres,
                apellidos: jugador.c15_jugador_apellidos,
                genero: jugador.c15_jugador_genero,
                pais_residencia: jugador.c15_jugador_pais,
                departamento_residencia: jugador.c15_jugador_departamento,
                ciudad_residencia: jugador.c15_jugador_municipio,
                club: jugador.c15_club_nombre,
                fecha_nacimiento: jugador.c15_jugador_fecha_nacimiento
            });

        });

        return lista_judadores;
    }

    async #createTBody(judadores) 
    {
        judadores.forEach(jugador => {

            const tabla_tbody = document.getElementById('table-tbody');
            const tbody_tr = document.createElement('tr');

            tbody_tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700', 'hover:bg-gray-50', 'dark:hover:bg-gray-600');

            // c15_jugador_id
            const tbody_th_jugador_documento = document.createElement('th');

            tbody_th_jugador_documento.classList.add('text-right', 'px-4', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');
            tbody_th_jugador_documento.setAttribute('scope', 'row');
            tbody_th_jugador_documento.textContent = jugador.documento;


            tbody_tr.appendChild(tbody_th_jugador_documento);

            // c15_jugador_apellidos
            this.#tbodyTD(jugador.apellidos, tbody_tr);

            // c15_jugador_nombres
            this.#tbodyTD(jugador.nombres, tbody_tr);

            // c15_jugador_genero
            this.#tbodyTD(jugador.genero, tbody_tr);

            // c15_jugador_departamento_residencia
            this.#tbodyTD(jugador.departamento_residencia, tbody_tr, jugador.ciudad_residencia);

            // c10_club_nombre
            this.#tbodyTD(jugador.club, tbody_tr);

            //c15_jugador_fecha_nacimiento
            this.#tbodyTD(jugador.fecha_nacimiento, tbody_tr);

            // Acciones
            const tbody_td_acciones = document.createElement('td');

            tbody_td_acciones.classList.add('flex', 'flex-col', 'px-5', 'py-4');

            // Editar
            this.#btnAcciones('Editar', jugador.documento, tbody_td_acciones);

            /*
            // Inscribir
            this.#btnAcciones('Inscribir', jugador.documento, tbody_td_acciones);
            */

            // Eliminar
            this.#btnAcciones('Eliminar', jugador.documento, tbody_td_acciones);

            tbody_tr.appendChild(tbody_td_acciones);

            tabla_tbody.appendChild(tbody_tr);

        });
    }

    async #configBtnAcciones()
    {
        let btnEditar = document.getElementsByClassName('btnEditar');
    
        Array.from(btnEditar).forEach((elemento, key) => {
    
            elemento.addEventListener('click', () => {
                /**
                 * Se repite por primera vez.
                 */
                const getDatosJugador = new Jugador(elemento.dataset.jugadorHref);

                getDatosJugador.datosJugador;
            });
        });

        /*
            let btnInscribir = document.getElementsByClassName('btnInscribir');
        
            Array.from(btnInscribir).forEach((elemento, key) => {
        
                elemento.addEventListener('click', () => {
        
                    let documento = elemento.dataset.jugadorHref;
        
                    alert(`jugador con documento : ${documento} inscrito correctamente.`);
                    /*
                        getDataJugador()
                        .then( jugador => {
                            organizarDatosModal(jugador);
                        })
                        .catch(error => {
                            alert(error);
                            console.error(error);
                        });
                    /
                });
            });
        */
    
        let btnEliminar = document.getElementsByClassName('btnEliminar');
    
        Array.from(btnEliminar).forEach((elemento, key) => {
    
            elemento.addEventListener('click', () => {
    
                let documento = elemento.dataset.jugadorHref;
    
                if (!confirm(`¿Está seguro de eliminar al jugador con el siguiente documento: ${documento}?`))
                    return;

                fetch( route('jugador.eliminar', { documento: documento }) )
                .then(async response => { 
                    if(response.ok)
                        return await response.json();

                    const mensaje = await response.json();
                    throw new Error(mensaje.documento[0]);
                })
                .then(mensaje => {
                    alert(mensaje.message);

                    location.reload();
                })
                .catch(error => {
                    alert(error);
                });
                
            });
    
        });
    }

    #tbodyTD(dato_judador = '', tbody_tr, municipio = false)
    {
        const tbody_td = document.createElement('td');
        let contenido = (municipio) ? (dato_judador + ' - ' + municipio) : dato_judador;

        tbody_td.classList.add('px-4', 'py-4', 'whitespace-nowrap');
        tbody_td.textContent = this.organizarFrases(contenido);

        tbody_tr.appendChild(tbody_td);
    }

    #btnAcciones(accion = '', documento, tbody_td_acciones)
    {
        const td_btn = document.createElement('button');

        if (accion === 'Editar')
            td_btn.classList.add('btn' + accion, 'mb-1', 'font-medium', 'text-blue-600', 'dark:text-blue-500', 'hover:underline');
        else if (accion === 'Inscribir')
            td_btn.classList.add('btn' + accion, 'mb-1', 'font-medium', 'text-green-600', 'dark:text-green-500', 'hover:underline');
        else if (accion === 'Eliminar')
            td_btn.classList.add('btn' + accion, 'mb-1', 'font-medium', 'text-red-600', 'dark:text-red-500', 'hover:underline');

        td_btn.textContent = accion;
        td_btn.setAttribute('data-jugador-href', documento);

        tbody_td_acciones.appendChild(td_btn);
    }
}