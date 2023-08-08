/** 
 * Función que se usa dos veces para hacer lo mismo, se puede optimizar:
 * 
 *  1) Se usa para obtener los datos cuando da click en el botó de editar.
 *  2) Se usa cuando se consulta el jugador en el input de documento en el modal.
*/
async function getDataJugador(documento) 
{
    /*
    const response = await fetch(route('inscripciones.data.jugador') + "?" + new URLSearchParams({
        documento: documento
    }).toString());
    */
    const response = await fetch(route('inscripciones.data.jugador', {
        documento: documento
    }));

    if (response.ok)
        return response.json().then(jugador => JSON.parse(jugador)[0]);

    return response.json().then(mensaje => { throw new Error(mensaje.documento) });
}

/** 
 * INICIO - Funciones que solo se usa dentro de la función lista_judadores
*/

async function createTBody(judadores) 
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

        // c15_jugador_nombres
        tbodyTD(jugador.nombres, tbody_tr);

        // c15_jugador_apellidos
        tbodyTD(jugador.apellidos, tbody_tr);

        // c15_jugador_genero
        tbodyTD(jugador.genero, tbody_tr);

        // c15_jugador_pais_residencia
        tbodyTD(jugador.pais_residencia, tbody_tr);

        // c15_jugador_departamento_residencia
        tbodyTD(jugador.departamento_residencia, tbody_tr);

        // c15_jugador_ciudad_residencia
        tbodyTD(jugador.ciudad_residencia, tbody_tr);

        // c10_club_nombre
        tbodyTD(jugador.club, tbody_tr);

        //c15_jugador_fecha_nacimiento
        tbodyTD(jugador.fecha_nacimiento, tbody_tr);

        // Actions
        const tbody_td_acciones = document.createElement('td');

        tbody_td_acciones.classList.add('flex', 'flex-col', 'px-5', 'py-4');

        // Editar
        btnAcciones('Editar', jugador.documento, tbody_td_acciones);
        // Inscribir
        btnAcciones('Inscribir', jugador.documento, tbody_td_acciones);
        // Eliminar
        btnAcciones('Eliminar', jugador.documento, tbody_td_acciones);

        tbody_tr.appendChild(tbody_td_acciones);

        tabla_tbody.appendChild(tbody_tr);

    });
}

    /** 
     * INICIO - Funciones que solo se usa dentro de la función createTBody
    */
    function tbodyTD(dato_judador = '', tbody_tr)
    {
        const tbody_td = document.createElement('td');

        tbody_td.classList.add('px-4', 'py-4');
        tbody_td.textContent = dato_judador;

        tbody_tr.appendChild(tbody_td);
    }

    function btnAcciones(accion = '', documento, tbody_td_acciones)
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

    /** 
     * FIN - Funciones que solo se usa dentro del create tbody
    */

async function getListaJuadores(ruta = "") 
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
    let jugadores = await response.json();

    jugadores = JSON.parse(jugadores);

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

function configBtnAcciones()
{
    let btnEditar = document.getElementsByClassName('btnEditar');

    Array.from(btnEditar).forEach((elemento, key) => {

        elemento.addEventListener('click', () => {

            /**
             * Se repite por primera vez.
             */
            getDataJugador(elemento.dataset.jugadorHref)
                .then(jugador => {
                    organizarDatosModal(jugador);
                })
                .catch(error => {
                    alert(error);
                    console.error(error);
                });
        });
    });

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
            */
        });
    });

    let btnEliminar = document.getElementsByClassName('btnEliminar');

    Array.from(btnEliminar).forEach((elemento, key) => {

        elemento.addEventListener('click', () => {

            let documento = elemento.dataset.jugadorHref;

            if (!confirm(`¿Está seguro de eliminar al jugador con el siguiente documento: ${documento}?`))
                return;

            alert('eliminado');
            /*
                getDataJugador()
                .then( jugador => {
                    organizarDatosModal(jugador);
                })
                .catch(error => {
                    alert(error);
                    console.error(error);
                });
            */
        });

    });
}

function lista_judadores() {
    let ruta = route('inscripciones.lista.jugadores');
    console.log(ruta);

    getListaJuadores(ruta)
        .then(jugadores => {
            // Función asíncrona
            createTBody(jugadores);
            configBtnAcciones();
        });
}

lista_judadores();

/** 
 * FIN - Funciones que solo se usa dentro de la función lista_judadores
*/

/** 
 * INICIO - Funciones que solo se usa dentro del modal
*/
function organizarDatosJugador (jugador)
{
    return {
        documento: jugador.c15_jugador_id,
        nombres: jugador.c15_jugador_nombres,
        apellidos: jugador.c15_jugador_apellidos,
        genero: jugador.c15_jugador_genero,
        nacionalidad: jugador.c15_jugador_nacionalidad,
        pais_residencia: jugador.c15_jugador_pais_id,
        departamento_residencia: jugador.c15_jugador_departamento_id,
        ciudad_residencia: jugador.c15_jugador_municipio_id,
        club: jugador.c15_jugador_club_id,
        fecha_nacimiento: jugador.c15_jugador_fecha_nacimiento
    }
}

function organizarDatosModal(jugador)
{
    let datos_jugador = organizarDatosJugador(jugador);

    // set the modal menu element
    const targetEl = document.getElementById('inscribirUsuario');
    //const formulario = document.getElementById('formulario-jugador');

    const lista_inputs = document.getElementsByClassName('formulario-input');
    const lista_selects = document.getElementsByClassName('formulario-select');

    const options = {
        //placement: 'bottom-right',
        backdrop: 'static',
        //backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        closable: true,
        onHide: () => {
            Array.from(lista_inputs).forEach((elemento, key) => {
                //console.log(elemento.value);
                elemento.value = '';
            });

            Array.from(lista_selects).forEach((elemento, key) => {
                if (elemento.id != 'pais_residencia')
                    elemento.value = 0;
            });
        },
        onShow: () => {
            Array.from(lista_inputs).forEach(function (elemento, key) {
                elemento.value = datos_jugador[elemento.id];
            });

            Array.from(lista_selects).forEach((elemento, key) => {
                elemento.value = (datos_jugador[elemento.id] || 0);
            });
        }
    };

    const modal = new Modal(targetEl, options);

    modal.show();

    const closeModal = document.getElementsByClassName('close-modal');

    Array.from(closeModal).forEach((elemento, key) => {
        elemento.addEventListener('click', () => {
            modal.hide();
        });
    });
}

/** 
 * FIN - Funciones que solo se usa dentro del modal
*/

/**
 * INICIO - Campos del modal
 */

// Fecha nacimiento

import 'flowbite/dist/datepicker';

// Documento

document.addEventListener('alpine:init', () => {
    Alpine.data('documento', () => ({
        documento_jugador: '',

        setDocumentoJugador: 
        {
            ['@keyup.enter']()
            {
                getDataJugador(this.documento_jugador)
                .then(jugador => {
                    organizarDatosModal(jugador);
                })
                .catch(error => {
                    alert(error);
                    console.error(error);
                });
            }
        },
        /*
        getDocumentoJugador: 
        {
            ['x-text']()
            {
                return this.documento_jugador;
            }
        }
        */
    }))
})

// País

//const prefijo_pais = "+";
let pais = document.getElementById('pais_residencia'); 
let selected = pais.selectedOptions;
let pais_defecto = selected[0].label;

//getSoloColombia(pais_defecto, (prefijo_pais + selected[0].dataset.phoneCode));
getSoloColombia(pais_defecto);

pais.addEventListener('change', () => {
    //getSoloColombia(selected[0].label, (prefijo_pais + selected[0].dataset.phoneCode));
    getSoloColombia(selected[0].label);
});

function getSoloColombia(pais)
{
    let div_class_property = (pais == 'Colombia') ? 'visible' : 'invisible';
    let solo_colombia = document.getElementById('solo-colombia');

    //document.getElementById('codigo_pais').innerText = codigo_pais;
    //document.getElementById('codigo_tel').value = codigo_pais;

    ( solo_colombia.classList.remove('visible') || solo_colombia.classList.remove('invisible') );

    solo_colombia.classList.add(div_class_property);

    console.log(pais, solo_colombia.className);
}