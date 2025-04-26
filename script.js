let b1 = document.querySelector('.link_1')
b1.addEventListener('click', function(){
    let a1 = document.querySelector('.inwa_3')
    if (a1.style.display != 'none'){
        a1.style.display = 'none'
    }
    let a = document.querySelector('.inwa_2')
    console.log(a)
    a.style.display = 'flex'
})

let b2 = document.querySelector('.link_2')
b2.addEventListener('click', function(){
    let a = document.querySelector('.inwa_2')
    if (a.style.display != 'none'){
        a.style.display = 'none'
    }
    let a1 = document.querySelector('.inwa_3')
    console.log(a1)
    a1.style.display = 'flex'
})