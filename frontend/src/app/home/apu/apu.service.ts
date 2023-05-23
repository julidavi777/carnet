import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApuService {
  
  readonly chapters = [
    {
      "no": 742001,
      "consecutivo": 1,
      "capitulo": "PRELIMINARES"
    },
    {
      "no": 742002,
      "consecutivo": 2,
      "capitulo": "EXCAVACIONES Y RELLENOS"
    },
    {
      "no": 742003,
      "consecutivo": 3,
      "capitulo": "CIMENTACIÓN"
    },
    {
      "no": 742004,
      "consecutivo": 4,
      "capitulo": "ESTRUCTURA EN CONCRETO"
    },
    {
      "no": 742005,
      "consecutivo": 5,
      "capitulo": "ACERO DE REFUERZO"
    },
    {
      "no": 742006,
      "consecutivo": 6,
      "capitulo": "ESTRUCTURA METÁLICA"
    },
    {
      "no": 742007,
      "consecutivo": 7,
      "capitulo": "INSTALACIONES HIDROSANITARIAS"
    },
    {
      "no": 742008,
      "consecutivo": 8,
      "capitulo": "INSTALACIONES ELECTRICAS"
    },
    {
      "no": 742009,
      "consecutivo": 9,
      "capitulo": "MAMPOSTERIA"
    },
    {
      "no": 742010,
      "consecutivo": 10,
      "capitulo": "PAÑETES"
    },
    {
      "no": 742011,
      "consecutivo": 11,
      "capitulo": "PISOS BASES"
    },
    {
      "no": 742012,
      "consecutivo": 12,
      "capitulo": "PISOS ACABADOS"
    },
    {
      "no": 742013,
      "consecutivo": 13,
      "capitulo": "CUBIERTA"
    },
    {
      "no": 742014,
      "consecutivo": 14,
      "capitulo": "CARPINTERIA METALICA"
    },
    {
      "no": 742015,
      "consecutivo": 15,
      "capitulo": "CARPINTERIA MADERA"
    },
    {
      "no": 742016,
      "consecutivo": 16,
      "capitulo": "PUERTAS Y VENTANAS"
    },
    {
      "no": 742017,
      "consecutivo": 17,
      "capitulo": "CIELO RASO"
    },
    {
      "no": 742018,
      "consecutivo": 18,
      "capitulo": "ENCHAPES Y ACCESORIOS"
    },
    {
      "no": 742019,
      "consecutivo": 19,
      "capitulo": "INSTALACIONES DE GAS NATURAL"
    },
    {
      "no": 742020,
      "consecutivo": 20,
      "capitulo": "INSTALACIONES GASES MEDICINALES"
    },
    {
      "no": 742021,
      "consecutivo": 21,
      "capitulo": "INSTALACIONES MECANICAS"
    },
    {
      "no": 742022,
      "consecutivo": 22,
      "capitulo": "APARATOS SANITARIOS"
    },
    {
      "no": 742023,
      "consecutivo": 23,
      "capitulo": "GRIFERIA"
    },
    {
      "no": 742024,
      "consecutivo": 24,
      "capitulo": "CERRAJERIA"
    },
    {
      "no": 742025,
      "consecutivo": 25,
      "capitulo": "MUEBLES"
    },
    {
      "no": 742026,
      "consecutivo": 26,
      "capitulo": "VIDRIOS Y ESPEJOS"
    },
    {
      "no": 742027,
      "consecutivo": 27,
      "capitulo": "PINTURA"
    },
    {
      "no": 742028,
      "consecutivo": 28,
      "capitulo": "SEÑALIZACION"
    },
    {
      "no": 742029,
      "consecutivo": 29,
      "capitulo": "OBRAS EXTERIORES"
    },
    {
      "no": 742030,
      "consecutivo": 30,
      "capitulo": "EQUIPOS ESPECIALES"
    },
    {
      "no": 742040,
      "consecutivo": 40,
      "capitulo": "GENERALES Y VARIOS"
    }
  ]

  readonly supplies = [
    {
      "code": "1",
      "description": "a.c.p.m.",
      "type": "Mat",
      "unidad": "gal",
      "value": "6,901.00"
    },
    {
      "code": "2",
      "description": "abrazadera ajustable amarre",
      "type": "Mat",
      "unidad": "und",
      "value": "7,725.00"
    },
    {
      "code": "3",
      "description": "acarreo dist. > 2 km (m3/km)",
      "type": "Mdo",
      "unidad": "m3",
      "value": "4,448.00"
    },
    {
      "code": "4",
      "description": "accesorio sanit 4``",
      "type": "Mat",
      "unidad": "und",
      "value": "7,429.00"
    },
    {
      "code": "5",
      "description": "accesorio de cobre 1 1/2``",
      "type": "Mat",
      "unidad": "und",
      "value": "5,614.00"
    },
    {
      "code": "6",
      "description": "accesorio de cobre 1 1/4``",
      "type": "Mat",
      "unidad": "und",
      "value": "5,006.00"
    },
    {
      "code": "7",
      "description": "accesorio de cobre 1/2``",
      "type": "Mat",
      "unidad": "und",
      "value": "2,689.00"
    },
    {
      "code": "8",
      "description": "accesorio de cobre 1``",
      "type": "Mat",
      "unidad": "und",
      "value": "3,698.00"
    },
    {
      "code": "243",
      "description": "codo sanitario pvc cxc de 45° de 3",
      "type": "Mat",
      "unidad": "und",
      "value": "5,562.00"
    },
    {
      "code": "244",
      "description": "codo sanitario pvc cxc de 45° de 4",
      "type": "Mat",
      "unidad": "und",
      "value": "9,710.00"
    },
    {
      "code": "245",
      "description": "colma limpiador (16 kg)",
      "type": "Mat",
      "unidad": "kg",
      "value": "13,502.00"
    },
    {
      "code": "246",
      "description": "colombinas plasticas",
      "type": "Mat",
      "unidad": "und",
      "value": "5,665.00"
    },
    {
      "code": "247",
      "description": "comision topografia (1 top 1 cad)",
      "type": "Mdo",
      "unidad": "dd",
      "value": "123,600.00"
    },
    {
      "code": "248",
      "description": "comision topografia (1top. 1cad. 1",
      "type": "Mdo",
      "unidad": "hh",
      "value": "11,733.00"
    },
    {
      "code": "249",
      "description": "compresor 1/2 hp",
      "type": "Equ",
      "unidad": "dd",
      "value": "38,629.00"
    },
    {
      "code": "250",
      "description": "compresor de 2 martillos",
      "type": "Equ",
      "unidad": "hh",
      "value": "35,844.00"
    },
    {
      "code": "251",
      "description": "concreto 1:2:3 elaborado en obra (2500psi)",
      "type": "Mat",
      "unidad": "m3",
      "value": "219,035.00"
    },
    {
      "code": "252",
      "description": "concreto 1:2:4 elaborado en obra",
      "type": "Mat",
      "unidad": "m3",
      "value": "226,932.00"
    },
    {
      "code": "253",
      "description": "concreto 3000  psi elaborado en obra",
      "type": "Mat",
      "unidad": "m3",
      "value": "267,800.00"
    },
    {
      "code": "254",
      "description": "concreto corriente 1500 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "266,800.00"
    },
    {
      "code": "255",
      "description": "concreto corriente 2000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "283,040.00"
    },
    {
      "code": "256",
      "description": "concreto corriente 2500 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "300,440.00"
    },
    {
      "code": "257",
      "description": "concreto corriente 3000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "313,200.00"
    },
    {
      "code": "258",
      "description": "concreto corriente 3500 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "332,920.00"
    },
    {
      "code": "259",
      "description": "concreto corriente 4000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "346,840.00"
    },
    {
      "code": "260",
      "description": "concreto elaborado en obra (2500psi)",
      "type": "Mat",
      "unidad": "m3",
      "value": "244,750.00"
    },
    {
      "code": "261",
      "description": "concreto fluído 3000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "336,400.00"
    },
    {
      "code": "262",
      "description": "concreto grava fina 2000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "294,640.00"
    },
    {
      "code": "263",
      "description": "concreto grava fina 3000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "323,640.00"
    },
    {
      "code": "264",
      "description": "concreto grava fina 4000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "358,440.00"
    },
    {
      "code": "265",
      "description": "concreto gravilla fina  - ocre",
      "type": "Mat",
      "unidad": "m3",
      "value": "387,440.00"
    },
    {
      "code": "266",
      "description": "concreto pavimento mr-41kg/cm2",
      "type": "Mat",
      "unidad": "m3",
      "value": "349,160.00"
    },
    {
      "code": "267",
      "description": "concreto pavimento mr-45 kg/cm2",
      "type": "Mat",
      "unidad": "m3",
      "value": "371,200.00"
    },
    {
      "code": "268",
      "description": "concreto tornillo 3500 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "380,480.00"
    },
    {
      "code": "269",
      "description": "cono trafico de 1,00 m.",
      "type": "Mat",
      "unidad": "und",
      "value": "39,140.00"
    },
    {
      "code": "270",
      "description": "cono trafico de 70 cms",
      "type": "Mat",
      "unidad": "und",
      "value": "28,840.00"
    },
    {
      "code": "271",
      "description": "contenedor bodega 20",
      "type": "Equ",
      "unidad": "ms",
      "value": "391,895.00"
    },
    {
      "code": "272",
      "description": "contenedor de raices",
      "type": "Mat",
      "unidad": "und",
      "value": "123,600.00"
    },
    {
      "code": "273",
      "description": "copa mant.lavam.orina.ducha antiv.",
      "type": "Mat",
      "unidad": "und",
      "value": "50,182.00"
    },
    {
      "code": "274",
      "description": "cornisa yeso",
      "type": "Mat",
      "unidad": "ml",
      "value": "22,343.00"
    },
    {
      "code": "275",
      "description": "correas estr.metalica",
      "type": "Mat",
      "unidad": "kg",
      "value": "3,838.00"
    },
    {
      "code": "276",
      "description": "cortadora de ladrillo",
      "type": "Equ",
      "unidad": "dd",
      "value": "30,000.00"
    },
    {
      "code": "277",
      "description": "cortina enrrollable",
      "type": "Mat",
      "unidad": "m2",
      "value": "78,703.00"
    },
    {
      "code": "278",
      "description": "cortinas en tela rhino aseptica con malla de 50 cm",
      "type": "Mat",
      "unidad": "und",
      "value": "49,111.00"
    },
    {
      "code": "279",
      "description": "cortinero metalico",
      "type": "Mat",
      "unidad": "ml",
      "value": "50,058.00"
    },
    {
      "code": "280",
      "description": "cortinero plastico",
      "type": "Mat",
      "unidad": "ml",
      "value": "19,931.00"
    },
    {
      "code": "281",
      "description": "costo adicional bombeo",
      "type": "Equ",
      "unidad": "m3",
      "value": "34,800.00"
    },
    {
      "code": "282",
      "description": "cuadrilla acabados",
      "type": "Mdo",
      "unidad": "hc",
      "value": "25,750.00"
    },
    {
      "code": "283",
      "description": "cuadrilla carpinterias",
      "type": "Mdo",
      "unidad": "hc",
      "value": "20,469.00"
    },
    {
      "code": "284",
      "description": "cuadrilla para pavimento asfaltico",
      "type": "Mdo",
      "unidad": "hc",
      "value": "36,633.00"
    },
    {
      "code": "285",
      "description": "cuadrilla electricos",
      "type": "Mdo",
      "unidad": "hc",
      "value": "25,586.00"
    },
    {
      "code": "286",
      "description": "cuadrilla redes hidrosanitarias",
      "type": "Mdo",
      "unidad": "hh",
      "value": "16,455.00"
    },
    {
      "code": "287",
      "description": "cubeta semicircular(94122-207)tramontina 34x14 cms",
      "type": "Mat",
      "unidad": "und",
      "value": "127,257.00"
    },
    {
      "code": "288",
      "description": "cubierta arqu.     2.44 m",
      "type": "Mat",
      "unidad": "und",
      "value": "23,454.00"
    },
    {
      "code": "289",
      "description": "cubierta en policarbonato alveolar 8 mm",
      "type": "Mat",
      "unidad": "und",
      "value": "360,500.00"
    },
    {
      "code": "290",
      "description": "cubierta trapezoidal acesco 1.83 cal 30",
      "type": "Mat",
      "unidad": "und",
      "value": "16,399.00"
    },
    {
      "code": "291",
      "description": "cúpula tragante c 6x4",
      "type": "Mat",
      "unidad": "und",
      "value": "12,978.00"
    },
    {
      "code": "292",
      "description": "deck en madera teka",
      "type": "Mat",
      "unidad": "m2",
      "value": "245,140.00"
    },
    {
      "code": "293",
      "description": "demolicion placa contrapiso 0.10 m.",
      "type": "Mdo",
      "unidad": "m2",
      "value": "25,750.00"
    },
    {
      "code": "294",
      "description": "demolicion vigas y columnas",
      "type": "Mdo",
      "unidad": "m3",
      "value": "130,810.00"
    },
    {
      "code": "295",
      "description": "desagüe lavamanos sencillo",
      "type": "Mat",
      "unidad": "und",
      "value": "8,137.00"
    },
    {
      "code": "296",
      "description": "desagüe poceta lavapl.",
      "type": "Mat",
      "unidad": "und",
      "value": "8,343.00"
    },
    {
      "code": "297",
      "description": "desagüe/sifon plast. orinal",
      "type": "Mat",
      "unidad": "und",
      "value": "8,601.00"
    },
    {
      "code": "298",
      "description": "descapote",
      "type": "Mdo",
      "unidad": "m2",
      "value": "18,215.00"
    },
    {
      "code": "299",
      "description": "desmoldatoc",
      "type": "Mat",
      "unidad": "kg",
      "value": "17,109.00"
    },
    {
      "code": "300",
      "description": "desmonte cubierta",
      "type": "Mdo",
      "unidad": "m2",
      "value": "4,120.00"
    },
    {
      "code": "301",
      "description": "desmonte puerta marco y hoja",
      "type": "Mdo",
      "unidad": "und",
      "value": "6,180.00"
    },
    {
      "code": "302",
      "description": "desmonte ventaneria",
      "type": "Mdo",
      "unidad": "m2",
      "value": "6,180.00"
    },
    {
      "code": "303",
      "description": "diagonal varilla 5/8 cps",
      "type": "Mat",
      "unidad": "und",
      "value": "5,449.00"
    },
    {
      "code": "304",
      "description": "dilatación  bronce pc13",
      "type": "Mat",
      "unidad": "ml",
      "value": "5,480.00"
    },
    {
      "code": "305",
      "description": "dilatacion aluminio x 6 ml",
      "type": "Mat",
      "unidad": "ml",
      "value": "10,638.00"
    },
    {
      "code": "306",
      "description": "dilatación en bronce pc09",
      "type": "Mat",
      "unidad": "ml",
      "value": "6,118.00"
    },
    {
      "code": "307",
      "description": "dilatacion tp blanca plastica",
      "type": "Mat",
      "unidad": "ml",
      "value": "956.00"
    },
    {
      "code": "308",
      "description": "dinamita negra",
      "type": "Mat",
      "unidad": "kg",
      "value": "30,900.00"
    },
    {
      "code": "309",
      "description": "diseño piso comedor niños",
      "type": "Mat",
      "unidad": "und",
      "value": "257,500.00"
    },
    {
      "code": "310",
      "description": "disolvente thinner",
      "type": "Mat",
      "unidad": "gal",
      "value": "11,330.00"
    },
    {
      "code": "311",
      "description": "dispensador de jabon manos libres",
      "type": "Mat",
      "unidad": "und",
      "value": "175,100.00"
    },
    {
      "code": "312",
      "description": "dispensador de jabon muro-meson",
      "type": "Mat",
      "unidad": "und",
      "value": "143,685.00"
    },
    {
      "code": "313",
      "description": "dispensador de toallas 2 paquetes",
      "type": "Mat",
      "unidad": "und",
      "value": "86,417.00"
    },
    {
      "code": "314",
      "description": "dispensador papel jumbo met.",
      "type": "Mat",
      "unidad": "und",
      "value": "93,352.00"
    },
    {
      "code": "315",
      "description": "div. baño alum. anodiz. con panel acrilico 4mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "130,051.00"
    },
    {
      "code": "316",
      "description": "division baño vidrio templado",
      "type": "Mat",
      "unidad": "m2",
      "value": "200,850.00"
    },
    {
      "code": "317",
      "description": "division vidrio templado 8 mm modular",
      "type": "Mat",
      "unidad": "m2",
      "value": "180,601.00"
    },
    {
      "code": "318",
      "description": "division wc coll roll.c.20 pint. electrostatica",
      "type": "Mat",
      "unidad": "m2",
      "value": "188,006.00"
    },
    {
      "code": "319",
      "description": "division wc coll rolled c.20 cantiliver+ puerta +",
      "type": "Mat",
      "unidad": "m2",
      "value": "249,623.00"
    },
    {
      "code": "320",
      "description": "division wc perf. en al. anodiz. panel acrilico 4",
      "type": "Mat",
      "unidad": "m2",
      "value": "141,671.00"
    },
    {
      "code": "321",
      "description": "domo burbuja acrílico 1.00x1.00 esp 3mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "213,519.00"
    },
    {
      "code": "322",
      "description": "ducha tipo grival  linea professional SSB ref: 274020001",
      "type": "Mat",
      "unidad": "und",
      "value": "273,000.00"
    },
    {
      "code": "323",
      "description": "ducha gaviota mc con sb cr",
      "type": "Mat",
      "unidad": "und",
      "value": "231,750.00"
    },
    {
      "code": "324",
      "description": "ducha iris sin sb 8 cr",
      "type": "Mat",
      "unidad": "und",
      "value": "75,190.00"
    },
    {
      "code": "325",
      "description": "durmiente - ordinario 3 m",
      "type": "Equ",
      "unidad": "und",
      "value": "3,399.00"
    },
    {
      "code": "326",
      "description": "durmiente 3 m",
      "type": "Equ",
      "unidad": "ml",
      "value": "1,133.00"
    },
    {
      "code": "327",
      "description": "elastocrete - piso gimnasios",
      "type": "Mat",
      "unidad": "m2",
      "value": "358,440.00"
    },
    {
      "code": "328",
      "description": "emulsion asfaltica sika (caneca-5 gls.) x 18 kilos",
      "type": "Mat",
      "unidad": "canec",
      "value": "48,390.00"
    },
    {
      "code": "329",
      "description": "enchape azulejos 10 x 10",
      "type": "Mat",
      "unidad": "m2",
      "value": "28,840.00"
    },
    {
      "code": "330",
      "description": "ensayo densidad terreno",
      "type": "Mdo",
      "unidad": "und",
      "value": "22,702.00"
    },
    {
      "code": "331",
      "description": "entramado madera  para cubierta",
      "type": "Mat",
      "unidad": "m2",
      "value": "31,017.00"
    },
    {
      "code": "332",
      "description": "equipo carpint.formaleta",
      "type": "Equ",
      "unidad": "dd",
      "value": "23,690.00"
    },
    {
      "code": "333",
      "description": "equipo complementario calderas (bombas, válvulas,",
      "type": "Equ",
      "unidad": "und",
      "value": "5,108,800.00"
    },
    {
      "code": "334",
      "description": "equipo contra incendio",
      "type": "Equ",
      "unidad": "und",
      "value": "12,102,500.00"
    },
    {
      "code": "335",
      "description": "equipo de bombeo hidroneumatico",
      "type": "Equ",
      "unidad": "und",
      "value": "576,800.00"
    },
    {
      "code": "336",
      "description": "equipo de bombeo presion constante sin variacion",
      "type": "Equ",
      "unidad": "und",
      "value": "7,725,000.00"
    },
    {
      "code": "337",
      "description": "equipo de laboratorio de suelos",
      "type": "Equ",
      "unidad": "dd",
      "value": "54,693.00"
    },
    {
      "code": "338",
      "description": "equipo de presion marca barnes hidroacumulador 300",
      "type": "Equ",
      "unidad": "und",
      "value": "8,755,000.00"
    },
    {
      "code": "339",
      "description": "equipo de soldadura eléctrica",
      "type": "Equ",
      "unidad": "dd",
      "value": "40,170.00"
    },
    {
      "code": "340",
      "description": "equipo de topografia",
      "type": "Equ",
      "unidad": "dd",
      "value": "37,080.00"
    },
    {
      "code": "341",
      "description": "esferas reflectivas",
      "type": "Mat",
      "unidad": "kg",
      "value": "3,605.00"
    },
    {
      "code": "342",
      "description": "esmalte acualux",
      "type": "Mat",
      "unidad": "gal",
      "value": "68,142.00"
    },
    {
      "code": "343",
      "description": "esmalte horneable liso",
      "type": "Mat",
      "unidad": "gal",
      "value": "69,525.00"
    },
    {
      "code": "344",
      "description": "esmalte mate supersintético",
      "type": "Mat",
      "unidad": "gal",
      "value": "69,368.00"
    },
    {
      "code": "345",
      "description": "esmalte sintético pintulux",
      "type": "Mat",
      "unidad": "gal",
      "value": "69,368.00"
    },
    {
      "code": "346",
      "description": "espejo 4 mm. biselado",
      "type": "Mat",
      "unidad": "m2",
      "value": "43,878.00"
    },
    {
      "code": "347",
      "description": "esquinero trapezoidal exterior",
      "type": "Mat",
      "unidad": "und",
      "value": "9,626.00"
    },
    {
      "code": "348",
      "description": "esterilla de gúadua",
      "type": "Mat",
      "unidad": "m2",
      "value": "3,090.00"
    },
    {
      "code": "349",
      "description": "estopa",
      "type": "Mat",
      "unidad": "kg",
      "value": "3,605.00"
    },
    {
      "code": "350",
      "description": "estructura met.  para cub. s/esp.",
      "type": "Mat",
      "unidad": "kg",
      "value": "6,695.00"
    },
    {
      "code": "351",
      "description": "estructura soporte de cubierta a-37",
      "type": "Mat",
      "unidad": "m2",
      "value": "127,068.00"
    },
    {
      "code": "352",
      "description": "estuco veneciano interstuc cuñete 5 gl",
      "type": "Mat",
      "unidad": "gal",
      "value": "36,050.00"
    },
    {
      "code": "353",
      "description": "estufa 4 puestos a gas/encendido eléctrico g-504 e",
      "type": "Mat",
      "unidad": "und",
      "value": "352,466.00"
    },
    {
      "code": "354",
      "description": "excavacion a mano en tierra (incl. retiro)",
      "type": "Mat",
      "unidad": "m3",
      "value": "8,765.00"
    },
    {
      "code": "355",
      "description": "excavacion mecanica p/subrasante",
      "type": "Mat",
      "unidad": "dd",
      "value": "48,888.00"
    },
    {
      "code": "356",
      "description": "fachada flotante aluminioanodiz., cristal iport.",
      "type": "Mat",
      "unidad": "m2",
      "value": "254,925.00"
    },
    {
      "code": "357",
      "description": "fijamix alfa",
      "type": "Mat",
      "unidad": "kg",
      "value": "9,389.00"
    },
    {
      "code": "358",
      "description": "finisher",
      "type": "Mat",
      "unidad": "hh",
      "value": "84,460.00"
    },
    {
      "code": "359",
      "description": "fique",
      "type": "Mat",
      "unidad": "kg",
      "value": "2,884.00"
    },
    {
      "code": "360",
      "description": "flanche lam. galv. 0.20m. cal. 20",
      "type": "Mat",
      "unidad": "ml",
      "value": "3,914.00"
    },
    {
      "code": "361",
      "description": "flotador metálico 2``",
      "type": "Mat",
      "unidad": "und",
      "value": "182,619.00"
    },
    {
      "code": "362",
      "description": "fluxometro",
      "type": "Mat",
      "unidad": "und",
      "value": "489,456.00"
    },
    {
      "code": "363",
      "description": "flux-orinal t-teu2aars-1 m/libres electrico",
      "type": "Mat",
      "unidad": "und",
      "value": "1,203,555.00"
    },
    {
      "code": "364",
      "description": "flux-sanitario t-tet2ars-3 m/libres electrico",
      "type": "Mat",
      "unidad": "und",
      "value": "1,266,488.00"
    },
    {
      "code": "365",
      "description": "formaleta",
      "type": "Equ",
      "unidad": "ms",
      "value": "7,725.00"
    },
    {
      "code": "366",
      "description": "formaleta columnas",
      "type": "Equ",
      "unidad": "ms",
      "value": "12,360.00"
    },
    {
      "code": "367",
      "description": "formaleta entrepiso",
      "type": "Equ",
      "unidad": "ms",
      "value": "5,768.00"
    },
    {
      "code": "368",
      "description": "formaleta muros",
      "type": "Equ",
      "unidad": "ms",
      "value": "6,695.00"
    },
    {
      "code": "369",
      "description": "formaleta sumideros",
      "type": "Equ",
      "unidad": "und",
      "value": "15,708.00"
    },
    {
      "code": "370",
      "description": "formaleta tapas",
      "type": "Equ",
      "unidad": "m2",
      "value": "7,004.00"
    },
    {
      "code": "371",
      "description": "formatablex r 19 mm 1.53 x 2.44",
      "type": "Mat",
      "unidad": "und",
      "value": "118,284.00"
    },
    {
      "code": "372",
      "description": "formica f-6 postformable",
      "type": "Mat",
      "unidad": "und",
      "value": "65,836.00"
    },
    {
      "code": "373",
      "description": "fortec decor  0.91",
      "type": "Mat",
      "unidad": "und",
      "value": "60,770.00"
    },
    {
      "code": "374",
      "description": "frescasa de 2-1/2 m2",
      "type": "Mat",
      "unidad": "rl",
      "value": "108,042.00"
    },
    {
      "code": "375",
      "description": "gabinete metalico baño 1,00x2,00 h=2,00 m.",
      "type": "Mat",
      "unidad": "und",
      "value": "219,699.00"
    },
    {
      "code": "376",
      "description": "gabinetes contra incendio clase iii (suministro e",
      "type": "Mat",
      "unidad": "und",
      "value": "1,014,550.00"
    },
    {
      "code": "377",
      "description": "gancho teja eternit 55 mm",
      "type": "Mat",
      "unidad": "und",
      "value": "361.00"
    },
    {
      "code": "378",
      "description": "ganchos  tipo clip",
      "type": "Mat",
      "unidad": "und",
      "value": "1,365.00"
    },
    {
      "code": "379",
      "description": "geotextil no tejido 3000",
      "type": "Mat",
      "unidad": "m2",
      "value": "5,860.00"
    },
    {
      "code": "380",
      "description": "geotextil nt - 1600 proteccion flujo hidrico",
      "type": "Mat",
      "unidad": "m2",
      "value": "2,987.00"
    },
    {
      "code": "381",
      "description": "geotextil tejido 2100",
      "type": "Mat",
      "unidad": "m2",
      "value": "4,538.00"
    },
    {
      "code": "382",
      "description": "grafil  9.0.mm",
      "type": "Mat",
      "unidad": "kg",
      "value": "2,900.00"
    },
    {
      "code": "383",
      "description": "grama",
      "type": "Mat",
      "unidad": "m2",
      "value": "4,635.00"
    },
    {
      "code": "384",
      "description": "granito gris claro",
      "type": "Mat",
      "unidad": "ml",
      "value": "111,936.00"
    },
    {
      "code": "385",
      "description": "granito negro absoluto",
      "type": "Mat",
      "unidad": "m2",
      "value": "771,841.00"
    },
    {
      "code": "386",
      "description": "granito travertino peruano no. 3",
      "type": "Mat",
      "unidad": "bto",
      "value": "23,900.00"
    },
    {
      "code": "387",
      "description": "grapa industrial",
      "type": "Mat",
      "unidad": "lb",
      "value": "4,620.00"
    },
    {
      "code": "388",
      "description": "Grapas colgar orinal/lavam",
      "type": "Mat",
      "unidad": "und",
      "value": "5,086.00"
    },
    {
      "code": "389",
      "description": "grauting-fluidoconcreto",
      "type": "Mat",
      "unidad": "m3",
      "value": "444,478.00"
    },
    {
      "code": "390",
      "description": "gravilla de 3/4",
      "type": "Mat",
      "unidad": "m3",
      "value": "35,535.00"
    },
    {
      "code": "391",
      "description": "gravilla de rio",
      "type": "Mat",
      "unidad": "m3",
      "value": "83,636.00"
    },
    {
      "code": "392",
      "description": "gravilla mona  1 1/2   25 k.",
      "type": "Mat",
      "unidad": "bto",
      "value": "39,861.00"
    },
    {
      "code": "393",
      "description": "grifería antivandálica para lavamanos de sobrepone",
      "type": "Mat",
      "unidad": "und",
      "value": "152,728.00"
    },
    {
      "code": "394",
      "description": "grifería antivandalica para orinal ref. do-1701510",
      "type": "Mat",
      "unidad": "und",
      "value": "173,040.00"
    },
    {
      "code": "395",
      "description": "grifería antivandalica para sanitario fluxometro r",
      "type": "Mat",
      "unidad": "und",
      "value": "204,734.00"
    },
    {
      "code": "396",
      "description": "griferia desague",
      "type": "Mat",
      "unidad": "und",
      "value": "34,711.00"
    },
    {
      "code": "397",
      "description": "griferia -lava.t-tel3dac-1  m./libres  pilas",
      "type": "Mat",
      "unidad": "und",
      "value": "1,206,130.00"
    },
    {
      "code": "398",
      "description": "griferia lavamanos antiv.pared",
      "type": "Mat",
      "unidad": "und",
      "value": "155,395.00"
    },
    {
      "code": "399",
      "description": "griferia lavamanos cirugia",
      "type": "Mat",
      "unidad": "und",
      "value": "112,734.00"
    },
    {
      "code": "400",
      "description": "grifería para duchas de emergencia en laboratorios",
      "type": "Mat",
      "unidad": "und",
      "value": "705,592.00"
    },
    {
      "code": "401",
      "description": "grifería para duchas ref: galaxia mezcladora ssb",
      "type": "Mat",
      "unidad": "und",
      "value": "85,748.00"
    },
    {
      "code": "402",
      "description": "grifería para lavamanos de minusválidos antivandal",
      "type": "Mat",
      "unidad": "und",
      "value": "196,215.00"
    },
    {
      "code": "403",
      "description": "griferia para lavamanos ref. galaxia",
      "type": "Mat",
      "unidad": "und",
      "value": "92,700.00"
    },
    {
      "code": "404",
      "description": "grifería para pozuelos en laboratorios  galaxia cromo",
      "type": "Mat",
      "unidad": "und",
      "value": "49,007.00"
    },
    {
      "code": "405",
      "description": "griferia tipo push antivandalico para sanitario",
      "type": "Mat",
      "unidad": "und",
      "value": "111,229.00"
    },
    {
      "code": "406",
      "description": "guardaescoba cedro 8 cm.",
      "type": "Mat",
      "unidad": "ml",
      "value": "8,961.00"
    },
    {
      "code": "407",
      "description": "guardaescoba vinisol 6.8 cm",
      "type": "Mat",
      "unidad": "ml",
      "value": "1,933.00"
    },
    {
      "code": "408",
      "description": "herram.electricas",
      "type": "Equ",
      "unidad": "und",
      "value": "1,952.00"
    },
    {
      "code": "409",
      "description": "herramienta menor",
      "type": "Equ",
      "unidad": "und",
      "value": "5,768.00"
    },
    {
      "code": "410",
      "description": "hidrante 2 salidas de 4``",
      "type": "Mat",
      "unidad": "und",
      "value": "1,843,700.00"
    },
    {
      "code": "411",
      "description": "hidrofugo en muros de ladrillo exteriores",
      "type": "Mat",
      "unidad": "m2",
      "value": "9,579.00"
    },
    {
      "code": "412",
      "description": "hidrosolve aditivo",
      "type": "Mat",
      "unidad": "lt",
      "value": "7,767.00"
    },
    {
      "code": "413",
      "description": "hiero varilla  3/8`` x 6 m.",
      "type": "Mat",
      "unidad": "ml",
      "value": "2,987.00"
    },
    {
      "code": "414",
      "description": "hierro cuadrado 9 mm",
      "type": "Mat",
      "unidad": "und",
      "value": "8,109.00"
    },
    {
      "code": "415",
      "description": "hipermanto morter plas rollo 10 m2",
      "type": "Mat",
      "unidad": "m2",
      "value": "20,742.00"
    },
    {
      "code": "416",
      "description": "hoja puerta doble con hoja en vidrio temp. lam. de",
      "type": "Mat",
      "unidad": "und",
      "value": "940,844.00"
    },
    {
      "code": "417",
      "description": "hoja puerta entamb. triplex  0.90 con cerradura y",
      "type": "Mat",
      "unidad": "und",
      "value": "151,641.00"
    },
    {
      "code": "418",
      "description": "hora ayudante",
      "type": "Mdo",
      "unidad": "hc",
      "value": "2,535.00"
    },
    {
      "code": "419",
      "description": "icopor 10cm",
      "type": "Mat",
      "unidad": "m2",
      "value": "13,596.00"
    },
    {
      "code": "420",
      "description": "igas gris (30 kg)",
      "type": "Mat",
      "unidad": "kg",
      "value": "12,546.00"
    },
    {
      "code": "421",
      "description": "impermeabilizante concreto 3000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "19,278.00"
    },
    {
      "code": "422",
      "description": "impermeabilizante concreto 4000 psi",
      "type": "Mat",
      "unidad": "m3",
      "value": "24,334.00"
    },
    {
      "code": "423",
      "description": "impermeabilizante en frio emulplas cuñete 5gl",
      "type": "Mat",
      "unidad": "gal",
      "value": "28,840.00"
    },
    {
      "code": "424",
      "description": "impersan 160",
      "type": "Mat",
      "unidad": "kg",
      "value": "14,832.00"
    },
    {
      "code": "425",
      "description": "impersan mortero",
      "type": "Mat",
      "unidad": "kg",
      "value": "1,046.00"
    },
    {
      "code": "426",
      "description": "increment.bombeo concreto",
      "type": "Mat",
      "unidad": "m3",
      "value": "38,768.00"
    },
    {
      "code": "427",
      "description": "incrustaciones baño (juego)",
      "type": "Mat",
      "unidad": "jgo",
      "value": "35,517.00"
    },
    {
      "code": "428",
      "description": "instalación piso vinilo con pegante",
      "type": "Mdo",
      "unidad": "m2",
      "value": "2,833.00"
    },
    {
      "code": "429",
      "description": "instalación guardaescoba vinilo con pegante",
      "type": "Mdo",
      "unidad": "ml",
      "value": "876.00"
    },
    {
      "code": "430",
      "description": "juego de accesorios allegro x 5 piezas azul oscuro",
      "type": "Mat",
      "unidad": "und",
      "value": "30,667.00"
    },
    {
      "code": "431",
      "description": "junta expansión pvc 3``",
      "type": "Mat",
      "unidad": "und",
      "value": "19,673.00"
    },
    {
      "code": "432",
      "description": "junta expansión pvc 4``",
      "type": "Mat",
      "unidad": "und",
      "value": "22,351.00"
    },
    {
      "code": "433",
      "description": "kit mezclador lavaplatos galaxia cromo grival",
      "type": "Mat",
      "unidad": "und",
      "value": "64,642.00"
    },
    {
      "code": "434",
      "description": "ladrillo 10x20",
      "type": "Mat",
      "unidad": "und",
      "value": "464.00"
    },
    {
      "code": "435",
      "description": "ladrillo adobe 15x20x40",
      "type": "Mat",
      "unidad": "und",
      "value": "2,266.00"
    },
    {
      "code": "436",
      "description": "ladrillo curvo 6x12x24.5",
      "type": "Mat",
      "unidad": "und",
      "value": "510.00"
    },
    {
      "code": "437",
      "description": "ladrillo estructural h1 arcillas de soacha",
      "type": "Mat",
      "unidad": "und",
      "value": "922.00"
    },
    {
      "code": "438",
      "description": "ladrillo prensado liviano santafé",
      "type": "Mat",
      "unidad": "und",
      "value": "510.00"
    },
    {
      "code": "439",
      "description": "ladrillo prensado macizo santafé",
      "type": "Mat",
      "unidad": "und",
      "value": "526.00"
    },
    {
      "code": "440",
      "description": "ladrillo recocido oscuro 20*6*10",
      "type": "Mat",
      "unidad": "und",
      "value": "304.00"
    },
    {
      "code": "441",
      "description": "ladrillo tolete comun",
      "type": "Mat",
      "unidad": "und",
      "value": "376.00"
    },
    {
      "code": "442",
      "description": "ladrillo tolete comun recocido",
      "type": "Mat",
      "unidad": "und",
      "value": "340.00"
    },
    {
      "code": "443",
      "description": "lamina acrilica lisa transparente  3mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "70,881.00"
    },
    {
      "code": "444",
      "description": "lámina alfajor 3.0 x 1",
      "type": "Mat",
      "unidad": "und",
      "value": "175,100.00"
    },
    {
      "code": "445",
      "description": "lámina alfajor 3/16`` 3.0 x 1   6 mm",
      "type": "Mat",
      "unidad": "und",
      "value": "384,705.00"
    },
    {
      "code": "446",
      "description": "lámina antiruido aislante 20 db",
      "type": "Mat",
      "unidad": "m2",
      "value": "49,440.00"
    },
    {
      "code": "447",
      "description": "lámina cold rolled cal.16",
      "type": "Mat",
      "unidad": "und",
      "value": "60,296.00"
    },
    {
      "code": "448",
      "description": "lámina cold rolled cal.18",
      "type": "Mat",
      "unidad": "und",
      "value": "48,306.00"
    },
    {
      "code": "449",
      "description": "lámina de plomo 2 mm.",
      "type": "Mat",
      "unidad": "und",
      "value": "62,130.00"
    },
    {
      "code": "450",
      "description": "lámina de tablex 1.22*2.44 12mm",
      "type": "Mat",
      "unidad": "und",
      "value": "97,850.00"
    },
    {
      "code": "451",
      "description": "lamina de yeso sheetrock 1/2 x 1,22 x 2,44",
      "type": "Mat",
      "unidad": "und",
      "value": "20,085.00"
    },
    {
      "code": "452",
      "description": "lámina de yeso w/r 1/2",
      "type": "Mat",
      "unidad": "und",
      "value": "30,591.00"
    },
    {
      "code": "453",
      "description": "lámina de zinc h=2 mt",
      "type": "Mat",
      "unidad": "und",
      "value": "14,935.00"
    },
    {
      "code": "454",
      "description": "lamina dry wall 1/2`` superplaca",
      "type": "Mat",
      "unidad": "und",
      "value": "22,104.00"
    },
    {
      "code": "455",
      "description": "lamina dry wall 15 mm. superplaca 1.22*2.44",
      "type": "Mat",
      "unidad": "und",
      "value": "18,643.00"
    },
    {
      "code": "456",
      "description": "lámina dry wall gyplac rh",
      "type": "Mat",
      "unidad": "und",
      "value": "40,624.00"
    },
    {
      "code": "457",
      "description": "lámina dry wall gyplac st",
      "type": "Mat",
      "unidad": "und",
      "value": "30,849.00"
    },
    {
      "code": "458",
      "description": "lámina galvanizada .16",
      "type": "Mat",
      "unidad": "und",
      "value": "126,052.00"
    },
    {
      "code": "459",
      "description": "lámina galvanizada .22",
      "type": "Mat",
      "unidad": "und",
      "value": "58,665.00"
    },
    {
      "code": "460",
      "description": "lámina galvanizada .26",
      "type": "Mat",
      "unidad": "und",
      "value": "38,831.00"
    },
    {
      "code": "461",
      "description": "lamina galvanizada cal.20   0,30 m",
      "type": "Mat",
      "unidad": "ml",
      "value": "13,493.00"
    },
    {
      "code": "462",
      "description": "lámina maciza policarbonato 3mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "148,660.00"
    },
    {
      "code": "463",
      "description": "lamina plomo 1.5 mm ancho 060 m",
      "type": "Mat",
      "unidad": "ml",
      "value": "83,636.00"
    },
    {
      "code": "464",
      "description": "lámina plomo de 3mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "89,610.00"
    },
    {
      "code": "465",
      "description": "lámina policarbonato 6mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "60,553.00"
    },
    {
      "code": "466",
      "description": "lamina yeso superboard 1.22x2.44 17mm",
      "type": "Mat",
      "unidad": "und",
      "value": "78,795.00"
    },
    {
      "code": "467",
      "description": "laminas de aluzinc e = 5 mm",
      "type": "Mat",
      "unidad": "m2",
      "value": "56,650.00"
    },
    {
      "code": "468",
      "description": "lavaescobas prefabricado 0.80 x 0.45",
      "type": "Mat",
      "unidad": "und",
      "value": "120,025.00"
    },
    {
      "code": "469",
      "description": "lavamanos  acuacer blanco",
      "type": "Mat",
      "unidad": "und",
      "value": "58,504.00"
    },
    {
      "code": "470",
      "description": "lavamanos avanti con pedestal",
      "type": "Mat",
      "unidad": "und",
      "value": "118,759.00"
    },
    {
      "code": "471",
      "description": "lavamanos de colgar aquajet confort blanco",
      "type": "Mat",
      "unidad": "und",
      "value": "275,999.00"
    },
    {
      "code": "472",
      "description": "lavamanos de incrustar",
      "type": "Mat",
      "unidad": "und",
      "value": "85,490.00"
    },
    {
      "code": "473",
      "description": "lavamanos esferico redondo d-42 f-19 socoda acer/i",
      "type": "Mat",
      "unidad": "und",
      "value": "143,376.00"
    },
    {
      "code": "474",
      "description": "lavamanos quirurgico",
      "type": "Mat",
      "unidad": "und",
      "value": "6,458,100.00"
    },
    {
      "code": "475",
      "description": "lavamanos sobreponer corona elite",
      "type": "Mat",
      "unidad": "und",
      "value": "186,019.00"
    },
    {
      "code": "476",
      "description": "lavamanos sobreponer corona stilo",
      "type": "Mat",
      "unidad": "und",
      "value": "181,692.00"
    },
    {
      "code": "477",
      "description": "lavamanos stilo 07451-118",
      "type": "Mat",
      "unidad": "und",
      "value": "172,800.00"
    },
    {
      "code": "478",
      "description": "lavamanos verona de colgar h.i. blanco primera",
      "type": "Mat",
      "unidad": "und",
      "value": "58,710.00"
    },
    {
      "code": "479",
      "description": "lavaojos",
      "type": "Mat",
      "unidad": "und",
      "value": "3,419,600.00"
    },
    {
      "code": "480",
      "description": "lavaplatos econ. socoda sencillo 60x40 poc/cen. ac",
      "type": "Mat",
      "unidad": "und",
      "value": "77,250.00"
    },
    {
      "code": "481",
      "description": "lavaplatos economico socoda 60 x 40 poc/centro alu",
      "type": "Mat",
      "unidad": "und",
      "value": "61,800.00"
    },
    {
      "code": "482",
      "description": "lija",
      "type": "Mat",
      "unidad": "pl",
      "value": "1,133.00"
    },
    {
      "code": "483",
      "description": "lija de agua 965 super",
      "type": "Mat",
      "unidad": "und",
      "value": "1,149.00"
    },
    {
      "code": "484",
      "description": "limpiador pvc",
      "type": "Mat",
      "unidad": "gal",
      "value": "97,649.00"
    },
    {
      "code": "485",
      "description": "limpiador pvc 1/4``",
      "type": "Mat",
      "unidad": "und",
      "value": "14,935.00"
    },
    {
      "code": "486",
      "description": "limpiador pvc 1/8",
      "type": "Mat",
      "unidad": "und",
      "value": "56,650.00"
    },
    {
      "code": "487",
      "description": "limpiador pvc x 12 onzas",
      "type": "Mat",
      "unidad": "oz",
      "value": "13,011.00"
    },
    {
      "code": "488",
      "description": "listello color  25 x 8 cms",
      "type": "Mat",
      "unidad": "ml",
      "value": "17,201.00"
    },
    {
      "code": "489",
      "description": "listello color  30 x 6 cms",
      "type": "Mat",
      "unidad": "ml",
      "value": "17,613.00"
    }
   ];

   constructor() { }


}
