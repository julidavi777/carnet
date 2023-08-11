/** 
 * Función que se usa dos veces para hacer lo mismo, se puede optimizar:
 * 
 *  1) Se usa para obtener los datos cuando da click en el botó de editar.
 *  2) Se usa cuando se consulta el jugador en el input de documento en el modal.
*/

export default class DataJugador
{
    documento;
    isInputForm;
    organizarFrases;
    deleteOptions;

    constructor(documento, is_input_form)
    {
        this.isInputForm = is_input_form;
        this.documento = documento;

        this.deleteOptions = (selectBox) => {
            while (selectBox.options.length > 0) {
                selectBox.remove(0);
            }
        }

        this.organizarFrases = (palabra) => {
            //split the above string into an array of strings 
            //whenever a blank space is encountered
            let letras = palabra.split(" ");

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

    get datosJugador()
    {
        this.#obtenerJugador()
            .then(jugador => {
                if(jugador)
                    this.#organizarDatosEnModal(jugador);
            })
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }

    async #obtenerJugador()
    {
        /*
            const response = await fetch(route('inscripciones.data.jugador') + "?" + new URLSearchParams({
                documento: documento
            }).toString());
        */
        const response = await fetch(route('inscripciones.data.jugador', {
            documento: this.documento,
            is_input_form: this.isInputForm
        }));

        if (response.ok)
            return response.json().then(jugador => JSON.parse(jugador)[0] );

        return response.json().then(mensaje => {

            throw new Error(mensaje.error || mensaje.documento);
        });
    }

    async #organizarDatosEnModal(jugador)
    {
        let datos_jugador = this.#organizarDatosJugador(jugador);

        // Esta variable debería ser global
        const targetEl = document.getElementById('inscribirUsuario');

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
                    if(elemento.id == 'documento_anterior')
                        elemento.value = `${ datos_jugador['documento'] }`;
                    else
                        elemento.value = datos_jugador[elemento.id];
                });

                Array.from(lista_selects).forEach((elemento, key) => {
                    //console.log( elemento.id, datos_jugador[elemento.id], datos_jugador );
                    if(elemento.id == 'departamento_residencia')
                    {
                        fetch( route('inscripciones.municipios.jugador', [ datos_jugador['departamento_residencia'] ] ))
                        .then(data => data.json())
                        .then(municipios => {
                            const selectMunicipio = document.getElementById('municipio_residencia');

                            this.deleteOptions(selectMunicipio);
                            
                            JSON.parse(municipios).forEach(municipio => {

                                const optionSelectMunicipio = document.createElement('option');

                                if(municipio.id == datos_jugador['municipio_residencia'] )
                                    optionSelectMunicipio.selected = true;

                                optionSelectMunicipio.value = municipio.id;
                                optionSelectMunicipio.text = this.organizarFrases(municipio.nombre);

                                selectMunicipio.appendChild(optionSelectMunicipio);
                            });

                        });
                    }

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

    #organizarDatosJugador(jugador)
    {
        return {
            documento: jugador.c15_jugador_id,
            nombres: jugador.c15_jugador_nombres,
            apellidos: jugador.c15_jugador_apellidos,
            genero: jugador.c15_jugador_genero,
            nacionalidad: jugador.c15_jugador_nacionalidad,
            pais_residencia: jugador.c15_jugador_pais_id,
            departamento_residencia: jugador.c15_jugador_departamento_id,
            municipio_residencia: jugador.c15_jugador_municipio_id,
            club: jugador.c15_jugador_club_id,
            fecha_nacimiento: jugador.c15_jugador_fecha_nacimiento
        }
    }
}