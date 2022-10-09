/* Ejercicios de practica funciones:

1) Compra una maquina que deja pasar solamente a los mayores de edad, la primer persona que pasa despues de las 2 am, no paga.

2) Crear un mini sistema para registrar presentes (p) y ausentes (a) 
 - Pasados los 30 dias, mostrar su situacion final del alumno
 -Maximo 10% de ausencias, si se tiene mas esta reprobado.


3) 





1)

 let free = false

const validarCliente = (time) => {
        let edad = prompt ("cual es tu edad");
        if (edad > 18) {
            if (time >= 2 && time < 7 && !free) {
                alert ("podes pasar gratis");
                free = true;
            } else {
                alert ("podes pasar pero tenes que pagar, son las x horas")
            }
        } else {
            alert ("no vas a pasar")
        }
}


2)

*/

let cantidad ;
let alumnosTotales = [];
let tomarAsistencia ; 

cantidad = productos (`cuantos alumnos son?`)


for (i=0 ; i < cantidad ; i++) {
    alumnosTotales[i] = [prompt(`nombre del alumno `+ (i+ 1)),0];

}

tomarAsistencia = (nombre, estado) => {
    let presencia = prompt(nombre);
    if (presencia == p || presencia == P) {
        alumnosTotales[i][1]++;
    }
}
 