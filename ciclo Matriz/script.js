


a=[];
b=[];
for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 5; x++) {
        const element = array[x];
        a[x] = x;
    }
    console.log(a[x]);
}




let a = "Oliver";

function imprimirCaracteres(cadena){
    for (let index = 0; index < cadena.length; index++) {
       console.log(cadena[index]);
    }
}

imprimirCaracteres2 = function (cadena){
    for (let index = 0; index < cadena.length; index++) {
        console.log(cadena[index]);
     }
}

imprimirCaracteres3 = (cadena) => {
    for (let index = 0; index < cadena.length; index++) {
        console.log(cadena[index]);
     }
} 

imprimirCaracteres(a);
imprimirCaracteres2(a);






c = (cade) => {
    let arra = [];

    for (let index = 0; index < cade.length; index++) {
        arra[index] = cade[index];
     }

     return arra;
}




a.split("");



stringToArray = (cadena) => {
    let arreglo = [];

    for (let x = 0; x < cadena.length; x++) {
        arreglo[index] = cadena[index]
        for (let y = 0; y < array.length; y++) {
            const element = array[y];
            
        }
     }

     return arreglo;
}


var vectorA = [];
var vectorB = [];
for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
        vectorA[x]=x;
        
    }
   
}
return vectorA;

//con numeros acendentes
function muestraFor(contenido1, contenido2,contenido3) {
    var vectorA = [];
    var incremento = 0;
    for (let y = 0; y < contenido1; y++) {
        var vectorB = [];
        for (let x = 0; x < contenido2; x++) { 
            vectorB[x]=incremento++;
        }
     vectorA[y]=vectorB;
    }
    return vectorA;
}
//suma dentro de las  matrices 
function muestraFor(contenido1, contenido2,contenido3) {
    var vectorA = [];
    var incremento = 0;
    for (let y = 0; y < contenido1; y++) {
        var vectorB = [];
        for (let x = 0; x < contenido2; x++) { 
            vectorB[x]=y+x;
        }
     vectorA[y]=vectorB;
    }
    return vectorA;
}
//hacer una matriz bidimencional con parametros para medir su longitud y anchura
function muestraFor(contenido1, contenido2,contenido3) {
    var vectorA = [];
    var vectorB = [];
    for (let y = 0; y < contenido1; y++) {
        for (let x = 0; x < contenido2; x++) {
             vectorB[x] = contenido3;
        }
     vectorA[y]=vectorB
    }
    return vectorA;
}

muestraFor(9,9,f);
//Matriz bidimencinal sin parametros de entrada
function muestraFor() {
    var vectorA = [];
    var vectorB = [];
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
             vectorB[x] = "1,2,3,4,5,6,7,8,9";//solo es el texto que se mostrara en pantalla
        }
     vectorA[y]=vectorB
    }
    return vectorA;
}
//Matriz Tridimencional

function muestraFor(contenido1, contenido2,contenido3) {
    var vectorA = [];
    var vectorB = [];
    var vectorC = [];
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 5; x++) {
             vectorB[x] = x;
             for (let z = 0; z < 6; z++) {
                vectorC[z] = vectorB;
           }
        }
     vectorA[y]=vectorC
    }
    return vectorA;
}
//vector de 4 dimenciones
function muestraFor(contenido1, contenido2,contenido3) {
    var vectorA = [];
    var vectorB = [];
    var vectorC = [];
    var vectorD = [];
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 5; x++) {
             vectorB[x] = x;
             for (let z = 0; z < 6; z++) {
                vectorC[z] = vectorB;
                for (let i = 0; i < 7; i++) {
                    vectorD[i] = vectorC;
               }
           }
        }
     vectorA[y]=vectorD
    }
    return vectorA;
}


function iniciarjuego(jugador1) {
    var vectorA = [];
    var incremento = 0;
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) {
            vectorB[X]=y+X;
        }
        vectorA[y]=vectorB;
    }
    return vectorA;
}
function muestraFor(contenido1, contenido2,contenido3) {
    var vectorA = [];
    var incremento = 0;
    for (let y = 0; y < contenido1; y++) {
        var vectorB = [];
        for (let x = 0; x < contenido2; x++) { 
            vectorB[x]=y+x;
        }
     vectorA[y]=vectorB;
    }
    return vectorA;
}


//funcion que realiza un ingreso de datos ala matriz 
function muestraFor() {
    var vectorA = [];
    var incremento = 0;
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) { 
            vectorB[x]=y+x;
        }
     vectorA[y]=vectorB; 
    
    }
    return vectorA;

}
function juego(columna,fila) {
    var jugador1="x";
    return  muestraFor([fila][columna]=jugador1);
    
}

console.log(juego(0));

//array hecho sin FOr

    function juego(columna,fila) {
        a = ([[ "",  "",  ""],
    [ "",  "",  ""],
    [ "",  "", ""]])

    var jugador1="x";
    return  a[fila][columna]=jugador1;
    }
//
function muestraFor(columna,fila) {
    var vectorA = [];
    var incremento = 0;
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) { 
            vectorB[x]=y+x;
        }
     vectorA[y]=vectorB; 
     
    }
    return vectorA;
    vectorA[0][0]="X";
}

//funcion que ya tiene un array y cambia los valores jugador1 y jugador2
function juego() {
    a = ([[ "",  "",  ""],
    [ "",  "",  ""],
    [ "",  "", ""]])
    function jugador1(columna1,fila1) {
    var primero="x";
    return  a[fila1][columna1]=primero;
    }
    
    function jugador2(columna2,fila2) {
    var segundo="O";
    return  a[fila2][columna2]=segundo;
    }
}

function name(params) {
    if (condition) {
        
    }
}
//


function muestraFor() {
    a = ([[ "",  "",  ""],
    [ "",  "",  ""],
    [ "",  "", ""]])
    vectorA = [];
    var incremento = 0;
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) { 
            vectorB[x]=y+x;
        }
     vectorA[y]=vectorB; 
    
    }
    return vectorA;

}
function juego(columna,fila) {
    var jugador1="x";
    return vectorA[fila][columna]=jugador1;
}

console.log(juego(0));