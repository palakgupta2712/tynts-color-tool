let navbar_toggle = document.getElementById("navbar-toggle");
let menu = document.getElementById("menu");

navbar_toggle.addEventListener('click' , () => {
    menu.classList.toggle('active');
})

