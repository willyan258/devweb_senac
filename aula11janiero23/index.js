function alterarTexto(){

    document.querySelector('h1').textContent = 'texto alterado no evento onclick'
    
}
    
    document.querySelector('p').onclick = function(){
    
    document.querySelector('h1').textContent = 'texto alterado no paragrafo'
    }

    document.querySelector('h1').onclick = function(){
        document.querySelector('h1').textContent = 'Texto em html'
    }