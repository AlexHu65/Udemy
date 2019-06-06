/**
 * Created by alejandro.chavez on 8/7/2018.
 */


//Objeto con las propiedades de la calculador

var o = {
    //Almacenar las teclas de la calculadora

    //Se almacenan todos li del dom de las teclas con query selector all
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    tablero: document.querySelector("#operaciones"),
    signosCantidad: 0


};


//Metodos o funciones


var m = {

    inicio: function () {
        //Este ciclo for recorre todos los elementos de las teclas para enviarlos a un nuevo metodo
        for (var i = 0; i < o.teclas.length; i++) {

            o.teclas[i].addEventListener("click", m.oprimirTecla);
            //console.log('tecla: ' , i);
        }
    },
    //Se envia un paramatro a la funcion para detectar la tecla
    oprimirTecla: function (e) {
        //Target es la propiedad del objeto evento, se busca el atributo clase para verificar la clasificacion y enviarlo a otros metodos o acciones

        o.accion = e.target.getAttribute("class");
        //Con esta propiedad se captura el html interno de la tecla a la que se de la click
        o.digito = e.target.innerHTML;
        m.calculadora(o.accion, o.digito);
        // console.log('tecla', a);
    },

    calculadora: function (a, d) {

        switch (a) {

            //agregar los numero al tablero
            case "numero":


                if (o.tablero.innerHTML == 0) {

                    o.tablero.innerHTML = d;
                } else {
                    o.tablero.innerHTML += d;
                }

                // console.log('numero');
                break;

            case "simbolo":

                o.signosCantidad++;

                if (o.signosCantidad == 1) {

                    o.tablero.innerHTML += d;
                }
                //console.log("simbolo");
                break;

            case "decimal":
                console.log("decimal");
                break;

            case "igual":
                console.log("igual");
                break;
        }
    },
};


//El metodo requiere ser disparado por la 'instancia del objecto'
m.inicio();