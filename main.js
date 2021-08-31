document.addEventListener('click', function(event) {
    let dondeHiceClick = event.target;
    console.log(dondeHiceClick.id);

        if('sumarSalad' == dondeHiceClick.id){
            let contador = document.getElementById('contadorSalad');
            let contadorText = contador.value;
            let contadorInt = parseInt(contadorText); 
            contador.value = contadorInt + 1;  
            }

        if('restarSalad' == dondeHiceClick.id){
            let contador = document.getElementById('contadorSalad');
            let contadorText = contador.value;
            let contadorInt = parseInt(contadorText); 
            contador.value = contadorInt - 1;  
              }
    }

    
)

let elementosMenu=document.getElementById("containerPlatos"); 
console.log(elementosMenu);

let Menu = 
[
    {
        id: "1",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: "fotoscomida/chiken-salad.jfif",
        alt:"comida Chiken"

    },
    {
        id: "2",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg'
    },
    {
        id: "3",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida Chiken"

    },
    {
        id: "1",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: "fotoscomida/chiken-salad.jfif",
        alt:"comida Chiken"

    },
    {
        id: "2",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg'
    },
    {
        id: "3",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/french-fryes.jfif',
        alt:"comida Chiken"
    }
 ];

let platoMenu ="";
console.log(platoMenu);



function printPlatos(indicePlatos){

    platoMenu += `<div class="containerFood">
                        <div class="col-md-6 box-foto">
                            <img class="img-fluid" src= ${Menu[indicePlatos].imagen} alt= ${Menu[indicePlatos].alt}>
                        </div>
                        <div class="info-contador">
                            <div class="info_food">
                            <p class="precio_food"><span>$</span>
                             ${Menu[indicePlatos].price}
                             </p>
                            <h6 class="name_food">
                             ${Menu[indicePlatos].nombre}
                             </h6>
                            <p class="description_food">
                            ${Menu[indicePlatos].description}</p>
                        </div>
                        <div class="contador_food">
                        
                                <button class="restar">-</button>  
                                <input type="number" class="num_contador" size="5" max-length="2" value="02">   
                                <button class="sumar">+</button>
                        </div>
                    </div>
                </div>`;

elementosMenu.innerHTML=platoMenu;

}

console.log(printPlatos);

function loadPlatos(){

Menu.forEach((elemento, index)=>printPlatos(index));
}

loadPlatos();
