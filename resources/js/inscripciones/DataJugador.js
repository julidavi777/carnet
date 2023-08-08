export default class DataJugador
{
    documento;

    constructor(documento)
    {
        this.documento = documento;
    }

    async #obtenerJugador()
    {
        /*
            const response = await fetch(route('inscripciones.data.jugador') + "?" + new URLSearchParams({
                documento: documento
            }).toString());
        */
        const response = await fetch(route('inscripciones.data.jugador', {
            documento: this.documento
        }));

        if (response.ok)
            return response.json().then(jugador => JSON.parse(jugador)[0] );

        return response.json().then(mensaje => { throw new Error(mensaje.documento) });
    }

    async #organizarDatosEnModal(jugador)
    {
        let datos_jugador = this.#organizarDatosJugador(jugador);

        // set the modal menu element este modal debería ser global
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

    get datosJugador()
    {
        this.#obtenerJugador()
            .then(jugador => {
                this.#organizarDatosEnModal(jugador);
            })
            .catch(error => {
                alert(error);
                console.error(error);
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
            ciudad_residencia: jugador.c15_jugador_municipio_id,
            club: jugador.c15_jugador_club_id,
            fecha_nacimiento: jugador.c15_jugador_fecha_nacimiento
        }
    }
}