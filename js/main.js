function saludo (){
    alert("Bienvenido ");
}

function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function rectangulo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}

function moveTop(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Top");
}

function moveleft(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function moveright(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("right");
}


function movebottom(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("buttom");
}

function movediagonal(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("diagonal");
}

function movegift(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("gift");
 
}

function rombo() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
}



//Algoritmos
function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;

    alert("Algoritmo que suma dos valores ingresados por el usuario");

    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    suma = A+B;

    alert("El resultado de la suma es " + suma );
}

function operaciones(){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    alert(" un algoritmo que capture dos valores y nos arroje el resultado de la suma, resta,multiplicacion y division de esos dos valores");
    A = parseInt(prompt("Ingrese el primer valor "));
    
    B = parseInt(prompt("Ingrese el segundo valor "));


suma = A+B;
resta = A-B;
multiplicacion = A*B;
division = A/B;
    alert("El resultado de la suma es " + suma );
    alert("El resultado de la resta es " + resta );
    alert("El resultado de la multiplicacion es " + multiplicacion );
    alert("El resultado de la division es " + division );
}

function promedio(){
    alert("Algoritmo donde los aumnos tienen 7 calificaciones estas seran en una escala de 1 a 10 en donde aprueba si el promedio es >o =6.2");

    var nota1 = parseInt(prompt("Ingrese nota1 "));
    var nota2 = parseInt(prompt("Ingrese nota2 "));
    var nota3 = parseInt(prompt("Ingrese nota3 "));
    var nota4 = parseInt(prompt("Ingrese nota4 "));
    var nota5 = parseInt(prompt("Ingrese nota5 "));
    var nota6 = parseInt(prompt("Ingrese nota6 "));
    var nota7 = parseInt(prompt("Ingrese nota7 "));

   

    var promedio = (nota1+nota2+nota3+nota4+nota5,nota6+nota7) /7
    parseInt(promedio)
    

    

    if (promedio >=6.2){
        document.write("APROBO " );
    }else {
        document.write("DESAPROBO " );
    }
    alert("el promedio es " + promedio);
    alert 
}

function area(){

    alert("algoritmo que calcule el area de un triangulo ingresando su base y su altura");

    var base = parseInt(prompt("Ingrese la base del triangulo "));
    var altura = parseInt(prompt("Ingrese la altura del triangulo  "));
    var area;



area = (base*altura) / 2;

alert("El area del triangulo es" + area );
}



function inversion(){

alert("inversion de capital");

var capital = parseInt(prompt("Ingrese el capital a invertir "));
var años = parseInt(prompt("Ingrese el numero en años "));
var años2 =0;
var porcentaje = 0;
var resultado = 0;

porcentaje= (capital *1.7)/100;
años2 = años*12
resultado = porcentaje*años2;


alert("El capital a invertir es " + capital );
alert("Los años de inversion son " + años );
alert("La ganacia por mes es " + porcentaje );
alert("La ganacia por año es  " + resultado );
}

function descuento(){

alert("descuento de venta");

var kilos = parseInt(prompt("Ingrese el kilo de manzanas"));
var precio = parseInt(prompt("Ingrese el precio del kilo de manzanas"));
var total;
var descuento=0;
var resta=0;


total = precio* kilos

if(kilos<=2 ){
    descuento=0;
    resta = total-descuento
    alert("el valor a pagar es" + resta);
    
}else if (kilos>=3 & kilos <=5){
    descuento =( total*0.10)  
    resta = total-descuento

    alert("el descuento aplicado es" + descuento );
    alert("el valor a pagar es" + resta );
    
}else if(kilos>=6 & kilos <=10){
    descuento =( total*0.15)
    resta = total-descuento

    alert("el descuento aplicado es" + descuento );
    alert("el valor a pagar es" + resta );

}else if(kilos>10){
    descuento =( total*0.20)
    resta = total-descuento

    alert("el descuento aplicado es" + descuento );
    alert("el valor a pagar es" + resta );
}
}
