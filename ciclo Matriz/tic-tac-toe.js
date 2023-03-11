
//juego de Tic tac Toe
function primer_jugador(columna1,fila1) {
    var jugador1="X";
    vectorA[columna1][fila1]=jugador1;
};
function segundo_jugador(columna2,fila2) {
    var jugador2="O";
    vectorA[columna2][fila2]=jugador2;
};


//funcion que inicia el juego y que manipula los turnos
function Iniciarjuego() {
    //Matriz hecha con ciclo For
    vectorA = [];
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) {
            vectorB[x]="_";
        }
     vectorA[y]=vectorB;
    }


    //ciclo que realiza la validacion de los turnos
    var j1=1;
    for (let i = 0; i <5; i++) {
        if (j1==1) {
            var numero1 =prompt("ingrese numero de la columna");
            var numero2 =prompt("ingrese numero de la fila");
            if (numero1 <= 2  && numero2 <= 2) {
               primer_jugador(numero1,numero2);
               //se utiliza un JSN para crear un objeto y validar el arreglo en una cadena string
               //que guarda cada paso que realiza el bucle
               console.log(JSON.parse(JSON.stringify(vectorA)));
               ganador()
            }else{
                console.log('El dato no puede ser ingresado');
                return false;
            }
        }
        if (j1==1) {
            //pido los datos y la coloco en una variable 
             numero1 =prompt("ingrese numero de la columna");
            //pido los datos y la coloco en una variable 
             numero2 =prompt("ingrese numero de la fila");
            //si los numeros que estan en el rango son correctos entonces se ejecutara el turno de la persona 
            if (numero1 <= 2  && numero2 <= 2) {
               //se ejecuta el turno de la persona 
                //se le ingresan los parametros de acuerdo alas variables 
                segundo_jugador(numero1,numero2);
                //se utiliza un JSN para crear un objeto y validar el arreglo en una cadena string 
               //que guarda cada paso que realiza el bucle
                console.log(JSON.parse(JSON.stringify(vectorA)));
                //llamo ala funcion ganador 
                ganador()  
            }
            //si la condicion no se cumple entonces 
            else
            {
                //cierra el juego y muestra el mensaje 
                console.log('El dato no puede ser ingresado');
                //cierra el juego
                return false;
            } 
        } 
    }
};
//ciclo ganador
function ganador() {
    //vertical
    //horizontal
    for (let i = 0; i < 3; i++) {
        if (vectorA[i][0] != "_" && vectorA[i][0] == vectorA[i][1] && vectorA[i][1] == vectorA[i][2]) {
            console.log('ganaste!!');
            return vectorA[i][0];
        }
    }   
    //vertical
    for (let i = 0; i < 3; i++) {
        if (vectorA[0][i] != "_" && vectorA[0][i] == vectorA[1][i] && vectorA[1][i] == vectorA[2][i]) {
            console.log('ganaste!!');
            return vectorA[1][i];
        }
    } 
        if (vectorA[0][0] != "_" && vectorA[0][0] == vectorA[1][1] && vectorA[1][1] == vectorA[2][2]) {
            console.log('ganaste!!');
            return vectorA[0][0];
        }
        if (vectorA[0][2] != "_" && vectorA[0][2] == vectorA[1][1] && vectorA[1][1] == vectorA[2][0]) {
            console.log('ganaste!!');
           return vectorA[0][2];
        }
    
}
Iniciarjuego();