var MenuBurger = document.querySelector('.MenuBurger');
var MenuNav = document.querySelector('.menuNav');

MenuBurger.addEventListener('click', () => {
    MenuNav.classList.toggle('affichageMenu');
})
