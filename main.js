document.addEventListener('click', function (event) {
    let sumar = event.target.dataset.sumar;
        if(sumar){
            let contador = document.getElementById('contador');
            let contadorText = contador.value;
            let contadorNum = parseInt(contadorText);
                for(let i = 0; i<contadorNum; i++) {
                    contadorNum
                console.log(contadorNum);   
            }
        }
})



