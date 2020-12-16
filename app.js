let menu = document.querySelector(".menu");
let icon = document.querySelector(".menu i");


menu.addEventListener("click", function(){
    document.querySelector(".nav-list").classList.toggle("open");
    
    console.log(icon.classList[1]=="fa-bars")
    
    if (icon.classList[1]=="fa-bars"){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
    else {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    }
})