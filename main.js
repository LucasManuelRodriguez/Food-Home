function sumarCantidades (indice){
    Menu[indice].cantidad++;
    loadPlatos()
    totalDeItems()
    console.log(carrito)
    loadPlatosPagDos()
    
}

let carrito = [];

function upDateCarrito() {

carrito = Menu.filter(element => element.cantidad > 0)
}
function restarCantidades (indice){
    if(Menu[indice].cantidad > 0){
        Menu[indice].cantidad--
        loadPlatos()
        totalDeItems()
        loadPlatosPagDos()
    } 
}
function cambiarPagina(){
    ocultarPagUno();
    mostrarPagDos();
    loadPlatosPagDos();

    calcularPrecios()
}

let pagUno = document.getElementById('pagUno');
function ocultarPagUno(){
    pagUno.classList.add('ocultar');
}
let pagDos = document.getElementById('pagDos');
function mostrarPagDos(){

    pagDos.classList.remove('movil2_bloqueado');
    pagDos.classList.add('desbloqueado');
    console.log('desbloqueadooo')
}
function volverAPagUno() {
    pagDos.classList.remove('desbloqueado');
    pagUno.classList.remove('ocultar')

}
function totalDeItems(){
    let total = document.getElementById('totalItems');
    
        total.innerHTML = carrito.length
}

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

let elementosMenu=document.getElementById("containerPlatos"); 
let printPagDos = document.getElementById('containerPlatos2');
function printPlatoPagDos(elementos, indice){

    printPagDos.innerHTML +=`<div class="containerFood">

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
function loadPlatosPagDos(){
    printPagDos.innerHTML = ""
    carrito.forEach((elemento, index)=>printPlatoPagDos(elemento, index));
    calcularPrecios()
    }
    


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
        description: '',
        price: 52,
        imagen: 'fotoscomida/Mutton-Curry.jpg',
        alt:"comida Chiken",
        cantidad: 0

    },
    {
        id: "French Fryes",
        nombre: 'French Fryes',
        description: 'With cheese sauce',
        price: 60,
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida Chiken",
        cantidad: 0


    }
 ];

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
}//index=posicón de cada uno de los elementos en el array menú 



let totalFactura = 0

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

let mensaje = ""



function crearMensaje(){
    mensaje += "el usuario pidio:¨"
    carrito.forEach((items) =>{
        let precioPorPlato = items.price * items.cantidad
        mensaje += `${items.nombre} X ${items.cantidad} precio: ${precioPorPlato}`
    })

    mensaje += `"Total es ${totalFactura} "`
    console.log(mensaje)
}




loadPlatos();




