const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>  {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
}
    
)

window.addEventListener("scroll", function(){
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('rolagem',window.scrollY > 0)
})

