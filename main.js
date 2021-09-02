
let totalItems= document.getElementById("totalItems");


document.addEventListener('click', function(event) {


let dondeHagoClick= event.target;


console.log(dondeHagoClick);

    
        let contadorBoton = "contador"+dondeHagoClick.parentElement.id; 

        console.log(contadorBoton);//el contadorBoton es el identificador del id de cada contador//

        let contador = document.getElementById(contadorBoton);

       
        let contadorText=contador.value;

    
        let contadorNum = parseInt(contadorText);

        contador.value=dondeHagoClick.className=="sumar" ? contadorNum + 1 : contadorNum - 1;

        let Nuevocontador=parseInt(contador.value);

        totalItems.innerHTML=Nuevocontador;
        localStorage.getItem(contadorBoton);
    

        localStorage.setItem(contadorBoton,Nuevocontador);

         
       
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
        alt:"comida Chiken"

    },
    {
        id: "Mutton Curry",
        nombre: 'Mutton Curry',
        description: '',
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg',
        alt:"comida Chiken"

    },
    {
        id: "French Fryes",
        nombre: 'French Fryes',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida Chiken"

    },
    {
        id: "Soap",
        nombre: 'Soap',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: "fotoscomida/comidabonita.jpg",
        alt:"comida Chiken"

    },
    {
        id: "plato5",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg'
    },
    {
        id: "plato6",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida Chiken"
    }
 ];

let platoMenu ="";

function printPlatos(itemsMenu){

    platoMenu += `<div class="containerFood">

                        <div class="col-md-6 box-foto">
                            <img class="img-fluid" src= ${Menu[itemsMenu].imagen} alt= ${Menu[itemsMenu].alt}>
                        </div>

                        <div class="info-contador">
                            <div class="info_food">
                            <p class="precio_food"><span>$</span>
                             ${Menu[itemsMenu].price}
                             </p>
                            <h6 class="name_food">
                             ${Menu[itemsMenu].nombre}
                             </h6>
                            <p class="description_food">
                            ${Menu[itemsMenu].description}</p>
                        </div>

                        <div class="contador_food" id="${Menu[itemsMenu].id}">
                        

                                <button id="${"delete"+Menu[itemsMenu].id}" class="restar">-</button> 
                                <input id="${'contador'+Menu[itemsMenu].id}" type="number" class="num_contador" size="5" max-length="2" value="0">   
                                <button id="${"add"+Menu[itemsMenu].id}" class="sumar">+</button> 

                        </div>
                    </div>
                </div>`;
                

elementosMenu.innerHTML=platoMenu;

}

console.log(printPlatos);

function loadPlatos(){

Menu.forEach((elemento, index)=>printPlatos(index));
}//index=posicón de cada uno de los elementos en el array menú 

loadPlatos();





