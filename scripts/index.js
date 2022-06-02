const menuBtn = document.querySelector('.menu-btn')
const menu = document.getElementById('navbar')
const headerText = document.querySelector('.header-text')

menuBtn.addEventListener('click',function(){
    if(menu.style.right== '0%'){
        menu.style.right = '-50%'
    }else{
        menu.style.right = '0%'
    }
})

function revealLayer(){
    let innerHeight = window.innerHeight
    let distance = 100
    const layer = document.querySelectorAll('.layer')
    
    for(let i = 0; i < layer.length; i++){
        let top = layer[i].getBoundingClientRect().top
        if(top < innerHeight-distance){
            layer[i].classList.add('layer-active')
        }else{
            layer[i].classList.remove('layer-active')
        }
    }
}

function projectsReveal(){
    const projects = document.querySelectorAll('.projects-col')
    let innerHeight = window.innerHeight
    let distance = 80

    for(let i = 0; i < projects.length; i++){
        let top = projects[i].getBoundingClientRect().top

        if(top < innerHeight - distance){
            projects[i].classList.add('reveal-project')
        }
        else{
            projects[i].classList.remove('reveal-project')
        }
    }
}

function headerTextReveal(){
    headerText.classList.add('header-active')
}


// Event listeners

window.addEventListener('scroll',revealLayer);
window.addEventListener('load',headerTextReveal)
window.addEventListener("scroll",projectsReveal)