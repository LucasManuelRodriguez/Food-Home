 let elementosMenu=document.getElementById("containerPlatos"); 
 let elementosCarrito = document.getElementById('containerPlatos2');
 let pagUno = document.getElementById('pagUno');
 let pagDos = document.getElementById('pagDos');
 let totalFactura = 0
 let mensaje = ""
 let carrito = [];

 let Menu = 
[
    {
        id: "Chiken Salad",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: 52.5,
        imagen: "fotoscomida/chiken-salad.jfif",
        alt:"comida Chiken",
        cantidad: 0

    },
    {
        id: "Mutton Curry",
        nombre: 'Mutton Curry',
        description: 'With cheese sauce',
        price: 52,
        imagen: 'fotoscomida/Mutton-Curry.jpg',
        alt:"comida Mutton Curry",
        cantidad: 0

    },
    {
        id: "French Fryes",
        nombre: 'French Fryes',
        description: 'With cheese sauce',
        price: 60,
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida French Fryes",
        cantidad: 0


    }
 ];

 //Funciones Imprimir Plato y Cargar pag1 y pag2
 function printPlato(elementos, indice, listDishes){

    listDishes.innerHTML +=`<div class="containerFood">

                        <div class="col-md-6 box-foto">
                            <img class="img-fluid" src= ${elementos.imagen} alt= ${elementos.alt}>
                        </div>

                        <div class="info-contador">
                            <div class="info_food">
                            <p class="precio_food"><span>$</span>
                             ${elementos.price}
                             </p>
                            <h6 class="name_food">
                             ${elementos.nombre}
                             </h6>
                            <p class="description_food">
                            ${elementos.description}</p>
                        </div>

                        <div class="contador_food" id="${elementos.id}">
                        

                                <button data-restar = "${indice}" class="restar">-</button> 
                                <input  type="number" class="num_contador" size="5" max-length="2" value="${elementos.cantidad}">   
                                <button data-sumar ="${indice}" class="sumar">+</button> 

                        </div>
                    </div>
                </div>`;
}

function loadPlatos(){
elementosMenu.innerHTML = ""
Menu.forEach((elemento, index)=>printPlato(elemento, index, elementosMenu ));
upDateCarrito();
calcularPrecios();
}
function loadPlatosPagDos(){
    elementosCarrito.innerHTML = ""
    carrito.forEach((elemento, index)=>printPlato(elemento, index, elementosCarrito));
    calcularPrecios()
}
 loadPlatos();

//Funciones Aumentar & Restar Contador 
function sumarCantidades (indice){
    Menu[indice].cantidad++;
    loadPlatos()
    totalDeItems()
    console.log(carrito)
    loadPlatosPagDos()
    
}
function restarCantidades (indice){
    if(Menu[indice].cantidad > 0){
        Menu[indice].cantidad--
        loadPlatos()
        totalDeItems()
        loadPlatosPagDos()
    } 
}

// Funciones Carrito
function upDateCarrito() {

carrito = Menu.filter(element => element.cantidad > 0)
}
function totalDeItems(){
    let total = document.getElementById('totalItems');
    
        total.innerHTML = carrito.length
}

// Funciones Calcular Precio e Imprimir
function calcularPrecios (){
    let subTotal = 0
  
    carrito.forEach((item) => {
      let precioPorPlato =  item.price * item.cantidad
      subTotal += precioPorPlato
    })

    totalFactura = subTotal
    
    imprimirPrecios()

}
function imprimirPrecios (){
  let precioElement =  document.getElementById("price-total");
    precioElement.innerHTML = totalFactura
}

// Funciones de Página

function cambiarPagina(){
    ocultarPagUno();
    mostrarPagDos();
    loadPlatosPagDos();

    calcularPrecios()
}
function ocultarPagUno(){
    pagUno.classList.add('ocultar');
}
function mostrarPagDos(){

    pagDos.classList.remove('movil2_bloqueado');
    pagDos.classList.add('desbloqueado');
}
function volverAPagUno() {
    pagDos.classList.remove('desbloqueado');
    pagUno.classList.remove('ocultar');
}

// Funciones Crear y Enviar Mensaje
function crearMensaje(){
    mensaje += "el usuario pidio:¨"
    carrito.forEach((items) =>{
        let precioPorPlato = items.price * items.cantidad
        mensaje += `${items.nombre} X ${items.cantidad} precio: ${precioPorPlato}`
    })
    mensaje += `"Total es ${totalFactura} "`
    linkExterno()
}
function linkExterno(){
    window.location = `https://api.whatsapp.com/send/?phone=643427167&text=${mensaje}`
}

// Listeners
document.addEventListener('click', function(event) {
        let sumar = event.target.dataset.sumar
        let restar = event.target.dataset.restar
        let cesta = event.target.dataset.cesta
        let back = event.target.dataset.back

        if(sumar){
            sumarCantidades(sumar)
            
        }
        if(restar){
            restarCantidades(restar);
        }
        if(cesta){
            cambiarPagina();
        }
        if(back){
            volverAPagUno();
        }

    });



    























