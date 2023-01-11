let left = document.querySelector('#l')
let right = document.querySelector('#r')
let topp = document.querySelector('#t')
let bottom = document.querySelector('#b')





function add(local){
    let newElement = document.createElement('span')
    newElement.innerText = 'Novo elemento'
    newElement.className = 'newElement'

    switch(local){
        case 'esquerda':
        left.before(newElement)
        break
        case 'acima' :
        topp.before(newElement)
        break
        case 'baixo' :
        bottom.after(newElement)
        break
        case 'direita' :
        right.after(newElement)
        break
            
    }
}

