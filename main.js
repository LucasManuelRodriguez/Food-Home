
function sumarCantidades (indice){
    Menu[indice].cantidad++;
    loadPlatos() 
    console.log(carrito)
}

let carrito = [];

function upDateCarrito() {
    carrito = Menu.filter(element => element.cantidad > 0)
}
function restarCantidades (indice){
    if(Menu[indice].cantidad > 0){
        Menu[indice].cantidad--
        loadPlatos()
        let carrito = Menu.filter(element => element.cantidad > 0) 
        console.log(carrito)
    } 
}

document.addEventListener('click', function(event) {
        let sumar = event.target.dataset.sumar
        let restar = event.target.dataset.restar
        if(sumar){
            sumarCantidades(sumar)
            
        }
        if(restar){
            restarCantidades(restar);
        }
    });

let elementosMenu=document.getElementById("containerPlatos"); 

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
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg',
        alt:"comida Chiken",
        cantidad: 0

    },
    {
        id: "French Fryes",
        nombre: 'French Fryes',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida Chiken",
        cantidad: 0


    }
 ];


 


function printPlato(elementos, indice){

    elementosMenu.innerHTML +=`<div class="containerFood">

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
Menu.forEach((elemento, index)=>printPlato(elemento, index));
upDateCarrito();
}//index=posicón de cada uno de los elementos en el array menú 

loadPlatos();





