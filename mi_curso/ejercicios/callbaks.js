//esta es una callbaks hasta que una fuccon no se ejecute no se ejecuta la otra 
function usuario (){
    return 'jeison';
}
function saludo (){
    return 'hola ';
}
function saludar (cb , cb2){
    return cb() + ' ' + cb2();
}
var resultado = saludar(saludo,usuario);
console.log(resultado)
// ejercicio dos toUpprcase: coloca en mayuscula el parametro que deseemos en este caso se coloca la primera letra que recibe con [0] para unir el resto de las letras que se recibe commo parametro se utiliza (slice) que esto une el resto de letras 
function prueba(nombre){
    return nombre[0].toUpperCase() + nombre.slice(1)
}
var resultado = prueba('ligia')
console.log(resultado)
