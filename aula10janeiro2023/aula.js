


/*
- função com parametro do local onde vai ser alterado
- laço de repetiçao
- alterar todos os estilos dos elementos e deixar a cor diferente
no local informado

*/
let botoes = document.querySelectorAll('button')




function paintBtn(parametro){

    console.log(parametro)
    
    for(let cont = 0; cont < 6; cont++){
        botoes[cont].style.backgroundColor = 'tomato'
    }

    botoes[parametro].style.backgroundColor = 'blue'

    
    
    
}

