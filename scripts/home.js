let toggle_menu_btn = document.getElementById("menu_toggle_btn");
let mobile_menu = document.getElementById("nav_links");
let hero_text = document.getElementById("hero_text");

toggle_menu_btn.addEventListener("click",()=>{
    if(mobile_menu.style.left == "-100%") mobile_menu.style.left = "0";
    else mobile_menu.style.left = "-100%";
    console.log("clicked")
})

// animations
window.addEventListener("load",()=>{
    hero_text.classList.add("show")
})