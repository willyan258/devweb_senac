//os eventos de mouse são uma das principais formas de otimizar a UX

let el = document.querySelector('div')

// el.addEventListener('click', () => {
//     console.log('click')
// })

// el.addEventListener('mousedown', (e) => {
//     console.log('mouse dwon')
//     // console.log(event.button)
//     console.log(e.button)
//     if(e.shiftKey){
//         console.log('shift apertado')
//     }
    
//     if(e.altKey){
//         console.log('alt apertado')
//     }

//     if(e.ctrlKey){
//         console.log('control apertado')
//     }

//     if(e.ctrlKey && e.altKey){
//         console.log('control e alt apertado')
//     }
// })

// el.addEventListener('mouseup', () => {
//     console.log('mouse up')
    
// })

// el.addEventListener('mouseenter', (div) => {
//     console.log('mouse enter')
//     div.target.style.backgroundColor = 'teal'
    
// })

// el.addEventListener('mouseleave', (div) => {
//     console.log('mouse leave')
//     div.target.style.backgroundColor = 'yellow'
    
// })

// el.addEventListener('mousemove', () => {
//     console.log('mouse move')
    
// })

// el.addEventListener('dblclick', () => {
//     console.log('double click')
    
// })

// el.addEventListener('contextmenu', () => {
//     console.log('context menu')
    
// })

// el.addEventListener('mousemove', (ev) => {
//     console.log(ev.pageX + ':' + ev.pageY)
// })

// document.querySelector('body').addEventListener('mousemove', (ev2) => {
//     console.log(ev2.pageX + ':' + ev2.pageY) 
// })


let texto = document.querySelector('#texto')

texto.addEventListener('keydown', (e) => {
    //mostra a tecla pressionada
    console.log(e.key)

    //teclas especiais
    console.log(e.code)

    //código da tecla
    console.log(e.keyCode)

    if(e.code == 'F1'){
        e.preventDefault()
    }
})


el.addEventListener('mousemove', (ev) => {
    let element = document.createElement('div')

    element.className = 'elemento'

    element.style.top = ev.pageY + 'px'
    element.style.left = ev.pageX + 'px'

    document.querySelector('div').appendChild(element)

})

