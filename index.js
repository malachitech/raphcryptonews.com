/*Hamburger Animation*/
const mainMenu = document.querySelector(`.mainMenu`);
const closeMenu = document.querySelector(`.closeMenu`);
const openMenu = document.querySelector(`.openMenu`);
// const openservice = document.querySelector(`.#`);
// const opencontact = document.querySelector(`.#`);


openMenu.addEventListener(`click`,show);
closeMenu.addEventListener(`click`,close);
// openservice.addEventListener(`click`,close);
// opencontact.addEventListener(`click`,close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close() {
    mainMenu.style.top = '-150%';

}

