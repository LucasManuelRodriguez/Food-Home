
let cantidades = []
function sumarC (indice){
    let contador = document.getElementById(indice);
    let textoContador = contador.value;
    let cantidad = Menu[indice].cantidad ++;
    let numeroContador = parseInt(textoContador);
    numeroContador = cantidad +1 ;
    contador.value = numeroContador;
    Menu.flatMap((elemento, indice) => cantidades.push(elemento.cantidad));
    console.log(cantidades)
    console.log(cantidad+1)
    console.log(Menu)
    console.log(contador)
}
function restarC (indice){
    let contador = document.getElementById(indice);
    let textoContador = contador.value;
    if(textoContador > 0){
        let cantidad = Menu[indice].cantidad --;
        let numeroContador = parseInt(textoContador);
        numeroContador = cantidad -1;
        contador.value = numeroContador;
        console.log(numeroContador)
        console.log(Menu)
        console.log(contador);
    }

}

document.addEventListener('click', function(event) {
        let sumar = event.target.dataset.sumar
        let restar = event.target.dataset.restar
        if(sumar){
            sumarC(sumar);
        }
        if(restar){
            restarC(restar);
        }
    });

let elementosMenu=document.getElementById("containerPlatos"); 

let Menu = 
[
    {
        id: "Chiken Salad",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
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

let platoMenu ="";

function printPlatos(elementos, indice){

    platoMenu += `<div class="containerFood">

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
                                <input id="${indice}" type="number" class="num_contador" size="5" max-length="2" value="${elementos.cantidad}">   
                                <button data-sumar ="${indice}" class="sumar">+</button> 

                        </div>
                    </div>
                </div>`;
                

elementosMenu.innerHTML=platoMenu;

}

console.log(printPlatos);

function loadPlatos(){

Menu.forEach((elemento, index)=>printPlatos(elemento, index));
}//index=posicón de cada uno de los elementos en el array menú 

loadPlatos();





