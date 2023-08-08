import Jugador from './DataJugador';

/**
 * INICIO - Campos del modal
 */

// Documento

document.addEventListener('alpine:init', () => {
    Alpine.data('documento', () => ({
        documento_jugador: '',

        setDocumentoJugador: 
        {
            ['@keyup.enter']()
            {
                const getDatosJugador = new Jugador(this.documento_jugador);

                getDatosJugador.datosJugador;
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