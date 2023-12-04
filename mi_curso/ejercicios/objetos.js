// SINTAXIS DE LOS ODJETOS
var deporte = {conBalon:['futbol','baskect','bolibol','tenis'] ,  sinBalon: ['correr','pesas','paraidismo','natación']};
//acceder
var persona = {nombre: 'jeison' , edad: '33' , estuduios: {esProgramador: true}};
console.log(persona.nombre)
//Asignar
persona.nombre = 'hernan'
console.log (persona.nombre)
//Crear
var autos = {}
autos.marcas = ['for','huinday','bbw','ferrari']
console.log(autos)
//borrar
delete autos.marcas
console.log (autos)

//bracket-natation 
var comidas = {}
var diferenciaDeNotacion = function (propUno,propDos){
    comidas[propUno] = ['frutas', 'vegetales']
    comidas[propDos] = ['hamburgeso','perreo','piza']
}
diferenciaDeNotacion('saludable','noSaludable')
console.log(comidas)
//Este es para saber si exciste la propiedad en el objeto 
var libro = {autor: 'jeison', genero: 'suspenso', año: '1990'}
var tienePropiedad = libro.hasOwnProperty('autor')
console.log(tienePropiedad)
//para saber todas las propiedades (key) de un objeto se utiliza lo sieguiente object.key mas el objeto
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);
//for-in
var mundo = {continentes: 7 , paises: 195 , ocenanos: 5};
for(var prop in mundo){
    console.log("Esta es la propiedad: " + prop + " son " + mundo[prop])
};
//this
var mascota ={
    Animal: 'perro',
    raza: 'charpein',
    Amistoso: 'true',
    dueño: 'jeison vargas',
    info: function () {
        console.log('mi perro es de raza ' + this.raza + ' y ' + this.dueño + ' es el dueño')
    }
}
mascota.info();
