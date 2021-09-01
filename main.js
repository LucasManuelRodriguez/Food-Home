//document.addEventListener('click', function(event) {

document.addEventListener('click', function(event) {


let clickGeneral= event.target;

//donde hice click ( en sumar o en restar)
    if(clickGeneral.className =='sumar'|| clickGeneral.className =='restar'){
        console.log('funciona');
        console.log("Mi padre es:Div" + clickGeneral.parentElement);


        //el padre de sumar, restar y el imput es el div que los contiene//
        
        let contadorID = "contador"+clickGeneral.parentElement.id;

        //ID= cada identificador del array//

        console.log(contadorID);
        let contador = document.getElementById(contadorID);
        console.log(contador);
        let contadorText=contador.value;
        console.log(contadorText);
        let contadorNum = parseInt(contadorText);
        console.log(contadorNum);

        if(clickGeneral.className =='sumar'){
			contador.value = contadorNum + 1;
		}
		
		if(clickGeneral.className =='restar'){
			contador.value = contadorNum - 1;
		}
        
    }

      
    });

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
        nombre: 'Mutton Curry',
        description: '',
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg',
        alt:"comida Chiken"

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
        id: "4",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: "fotoscomida/comidabonita.jpg",
        alt:"comida Chiken"

    },
    {
        id: "5",
        nombre: 'Chicken Veggi Salad',
        description: 'With cheese sauce',
        price: '52.00',
        imagen: 'fotoscomida/Mutton-Curry.jpg'
    },
    {
        id: "6",
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

                        <div class="contador_food" id="${Menu[indicePlatos].id}">

                                <button id="${Menu[indicePlatos].id}" class="restar">-</button> 

                                <input id="${'contador'+Menu[indicePlatos].id}" type="number" class="num_contador" size="5" max-length="2" value="02">   
                                <button id="${Menu[indicePlatos].id}" class="sumar">+</button>

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

