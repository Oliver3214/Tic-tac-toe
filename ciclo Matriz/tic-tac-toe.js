/*function tabla() {
    vectorA = [];
    
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) { 
            vectorB[x]="";
        }
     vectorA[y]=vectorB;
    }
};*/



//juego de Tic tac Toe 
function primer_jugador(columna1,fila1) {
    var jugador1="X";
    vectorA[columna1][fila1]=jugador1;
};
function segundo_jugador(columna2,fila2) {
    var jugador2="O";
    vectorA[columna2][fila2]=jugador2;
};
function Iniciarjuego() {
    vectorA = [];
    for (let y = 0; y < 3; y++) {
        var vectorB = [];
        for (let x = 0; x < 3; x++) { 
            vectorB[x]="_";
        }
     vectorA[y]=vectorB;
    }
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
             numero1 =prompt("ingrese numero de la columna");
             numero2 =prompt("ingrese numero de la fila");
            if (numero1 <= 2  && numero2 <= 2) {
               
                segundo_jugador(numero1,numero2);
                //se utiliza un JSN para crear un objeto y validar el arreglo en una cadena string 
               //que guarda cada paso que realiza el bucle
                console.log(JSON.parse(JSON.stringify(vectorA)));
                ganador()  
            }else
            {
                console.log('El dato no puede ser ingresado');
                return false;
            } 
        } 
    }
};

function ganador() {
    //vertical
    for (let i = 0; i < 3; i++) {
        if (vectorA[i][0] != "_" && vectorA[i][0] == vectorA[i][1] && vectorA[i][1] == vectorA[i][2]) {
            console.log('ganaste!!');
            return vectorA[i][0];
        }
    }   
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








//como crear un objeto string 
/*
JSON.parse(
        JSON.stringify(
            (vectorA)
        )
    );*/












/*
function turnos() {
        var j1=1;
for (let i = 0; i < 9; i++) {
        if (j1) {
            primer_jugador();
            console.log("ingrese los los datos para el primer turno");
            console.log(tabla(a));
            return false;
        }
    }
}






function Turnos(params) {
    var j1=true;
    if (j1) {
        primer_jugador();
        return false
    }
    else if (!j1 && tabla([0][0])!==[0][0]) {
        segundo_jugador();
        return true
    }
}








window.addEventListener('load', function turnos() {
    var j1=true;
    if (j1) {
        primer_jugador();
        return false
    }
    else if (!j1 && tabla([0][0])!==[0][0]) {
        segundo_jugador();
        return true
    }
})





session_start();
session_register('pedido');
if ($referencia)
{
if (!isset($pedido))
{
$pedido[$referencia]=$cantidad;
}
else
{
foreach($pedido as $k => $v)
{
if ($referencia==$k)
{
$pedido[$k]+=$cantidad;
$encontrado=1;
}
}
if (!$encontrado) $pedido[$referencia]=$cantidad;
}
}



if (isset($pedido))
{
echo'El contenido de la cesta de la compra es:<br>';

foreach($pedido as $k => $v)
{
echo 'Referencia: '.$k.' Unidades: '.$v.'<br>';
}
*/