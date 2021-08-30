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



