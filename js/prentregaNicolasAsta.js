let pregunta;
let aprobacion = Boolean;
let chocoTorta = 100;
let cheesecake = 150;
let tortaOreo = 200;
let lemonPie = 150;
let brownie = 100;
let total = 0;
let opc2 ;

function mensajeAgregar() {
    if (tortaAgregada == null || tortaAgregada == undefined) {
        alert ("No se agrego ningun producto")
    }

   else { alert (`Se agrego un/a ${tortaAgregada} a tu pedido, el total es de $ ${total}.-`)
   }
}

aprobacion = confirm("Queres comprar una torta?");


while (aprobacion != false) {


    pregunta = prompt("Que torta queres comprar? (escriba un numero) \n 1) Chocotorta \n 2) Cheesecake \n 3) Torta Oreo \n 4) Lemon Pie \n 5) Brownie")


    switch (pregunta) {
        case "1":
            total += chocoTorta
            tortaAgregada = "Chocotorta"
            
            break;

        case "2":
            total += cheesecake
            tortaAgregada = "Cheesecake"
            
            break;

        case "3":
                total += tortaOreo
                tortaAgregada = "torta Oreo"
               
                break;

        case "4": 
                total += lemonPie            
                tortaAgregada = "Lemon Pie"
                break;

        case "5": 
                total += brownie            
                tortaAgregada = "Brownie"
                break; 

        case null:
            tortaAgregada = null;
            break;

        default: alert("no hacemos esa torta")
        tortaAgregada = undefined;
            break;
    }

    mensajeAgregar ();

    if (pregunta != null ){
    aprobacion = confirm("Queres algo mas?");
    }
    else {aprobacion = false}
    
       
}

if (total > 0) {
   opc2 = alert (`tu total a pagar es de $ ${total} \n Gracias vuelvas prontos`)
}
else {alert("Usted cancelo la compra")}