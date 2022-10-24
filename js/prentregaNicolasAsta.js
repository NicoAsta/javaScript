//                                                          Primer Pre entrega

// let pregunta;
// let aprobacion = Boolean;
// let chocoTorta = 100;
// let cheesecake = 150;
// let tortaOreo = 200;
// let lemonPie = 150;
// let brownie = 100;
// let total = 0;
// let opc2 ;

// function mensajeAgregar() {
//     if (tortaAgregada == null || tortaAgregada == undefined) {
//         alert ("No se agrego ningun producto")
//     }

//    else { alert (`Se agrego un/a ${tortaAgregada} a tu pedido, el total es de $ ${total}.-`)
//    }
// }

// aprobacion = confirm("Queres comprar una torta?");


// while (aprobacion != false) {


//     pregunta = prompt("Que torta queres comprar? (escriba un numero) \n 1) Chocotorta \n 2) Cheesecake \n 3) Torta Oreo \n 4) Lemon Pie \n 5) Brownie")


    // switch (pregunta) {
    //     case "1":
    //         total += chocoTorta
    //         tortaAgregada = "Chocotorta"
            
    //         break;

    //     case "2":
    //         total += cheesecake
    //         tortaAgregada = "Cheesecake"
            
    //         break;

    //     case "3":
    //             total += tortaOreo
    //             tortaAgregada = "torta Oreo"
               
    //             break;

    //     case "4": 
    //             total += lemonPie            
    //             tortaAgregada = "Lemon Pie"
    //             break;

    //     case "5": 
    //             total += brownie            
    //             tortaAgregada = "Brownie"
    //             break; 

    //     case null:
    //         tortaAgregada = null;
    //         break;

    //     default: alert("no hacemos esa torta")
    //     tortaAgregada = undefined;
    //         break;
    // }

    // mensajeAgregar ();

    // if (pregunta != null ){
    // aprobacion = confirm("Queres algo mas?");
    // }
    // else {aprobacion = false}
    
       
// }

// if (total > 0) {
//    opc2 = alert (`tu total a pagar es de $ ${total} \n Gracias vuelvas prontos`)
// }
// else {alert("Usted cancelo la compra")}


//  --------------------------------------------------   Segunda Pre Entrega - Nicolas Asta.-----------------------------------------------------------

// let aprobacion = Boolean;



// const productos = [
//     {id: 1 , nombre: `Chocotorta`, precio: 100, tamanio: `Grande`},
//     {id: 2 , nombre: `Cheesecake`, precio: 150, tamanio: `Grande`},
//     {id: 3 , nombre: `Torta Oreo`, precio: 200, tamanio: `Grande`},
//     {id: 4 , nombre: `Lemon Pie`, precio: 150, tamanio: `Grande`},
//     {id: 5 , nombre: `Brownie`, precio: 100, tamanio: `Grande`},
// ];

// let carrito = [];

// function Producto (id, nombre, precio, tamaño) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.tamaño = tamaño;

// };

// aprobacion = confirm(`Queres comprar una torta?`);

//     if (aprobacion) {
//         alert(`Genial! A continuacion le mostramos nuestro catalogo de tortas en stock`)

//         let listaProductos = productos.map ((producto) => { 
//             return producto.nombre + ` ` + `Valor: ` +  producto.precio + `$` + ` tamaño: ` + producto.tamanio})
        
//                alert(listaProductos.join (` \n - `))

    

//         while (aprobacion) {
//       let producto =  prompt (`Agrega un producto a tu carrito. Por favor escribe el nombre de la torta para continuar.`)
//       let precio = 0

//        if  (producto == `Chocotorta` || producto == `Cheesecake` || producto == `Torta Oreo` || producto == `Lemon Pie`|| producto == `Brownie`) {
//         switch (producto) {
//             case "Chocotorta":
//                 precio = 100
                
//                 break;
    
//             case "Cheesecake":
//                 precio = 150
                
//                 break;
    
//             case "Torta Oreo":
//                     precio = 200
                   
//                     break;
    
//             case "Lemon Pie": 
//                    precio = 150
//                     break;
    
//             case "Brownie": 
//                     precio = 100
//                     break; 
    
//             case null:
//                 tortaAgregada = null;
//                 break;
    
//             default: alert("no hacemos esa torta")
//             tortaAgregada = undefined;
//                 break;
//         }
    
//             let unidades = parseInt(prompt (`Cuantas unidades desea comprar?`));

//             carrito.push ({producto, unidades, precio})
        
//          }
       
//        }

//         aprobacion = prompt (`Desea seguir comprando?`)
//             if (aprobacion) {
//                 carrito.forEach ((carritoFinal) => {
//                     alert (`Gracias, usted seleccionó ${carritoFinal.unidades} ${carritoFinal.producto}, con un valor total de $ ${carritoFinal.precio * carritoFinal.unidades} `)
//                 })
                
//             }   else {aprobacion == false}; 

//     }

    
        



/*------------------------------------------Tercer Pre entrega PARTE DEL REGISTRO------------------------------------------------------------*/

// variables globales

const nombre = document.querySelector (".user");
const contrasenia = document.querySelector (".pass");
const boton = document.querySelector(".buttonRegistrer");

const clientes = [];
let newClient;

// esto podria reemplazarse con un operador avanzado? 
// Algo como: localStorage.getItem("clientes") ? clientes = JSON.parse(localStorage.getItem("clientes") || ""

if (localStorage.getItem("clientes")) {
  clientes = JSON.parse(localStorage.getItem("clientes"))  // ME DA UN ERROR EN ESTA LINEA, NOSE POR QUE
        ;
}
 else {clientes}

class cliente {
    constructor(cliente, pass) {

        this.cliente = cliente;
        this.contrasenia = pass;
    }
}

function limpiarCampos() {
    cliente.value = "";
    pass.value = ""
}

function nuevoCliente() {
    const nombre = document.querySelector("#user").value;
    const contrasenia = document.querySelector("#pass").value;
    newClient = new cliente(nombre, contrasenia);
console.log(newClient)
}

function guardarCliente(cliente) {
    return clientes.push(cliente)
}

function guardarStorage(e) {
    return localStorage.setItem("clientes", JSON.stringify(e))
}

boton.addEventListener("click", (e) => {

    nuevoCliente();
    guardarCliente(newClient);
    limpiarCampos();
    guardarStorage(clientes);

    console.log(clientes);
})


/*-----------------------------------Tercer Pre entrega PARTE DEL INICIO DE SESION------------------------------------------------------------*/

// const buttonLog = document.querySelector (".buttonLog");
// const usuario = document.querySelector (".usuario");
// const contra = document.querySelector ("contra");



// function traerDatos () {
//     let traerDatos = JSON.parse (localStorage.getItem("usuarios"));
//     return traerDatos;
// }

// let clienteLS = traerDatos ();

// function inicioSesion (clientes) {
//     let buscarCliente = clientes.find ((cliente) => {
//         return cliente.nombre === cliente.value && pass.value
//     })

//     if (buscarCliente){
//        window.location.href = "./card.html"
//     } else {
//         document.querySelector("#aviso").innerText = "Usuario No encontrado"
//     }
// return buscarCliente;
// }

// buttonLog.addEventListener("click", (e) => {
//     e.preventDefault();
//     inicioSesion(clienteLS)
// })