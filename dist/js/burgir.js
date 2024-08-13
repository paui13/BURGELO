const burgirBtn = document.querySelector('.burgir');
const headerNav = document.querySelector('.header__nav');

burgirBtn.addEventListener("click", () => {
burgirBtn.classList.toggle('open');
headerNav.classList.toggle('open');
});

const menuNav = document.querySelectorAll('.tab__nav__link');
const menuContent = document.querySelectorAll('.menu__content--item');

menuNav.forEach((menu) => {
menu.addEventListener("click", () => {
    removeActiveMenu();
    menu.classList.add("active");
    const activeContent = document.querySelector(`#${menu.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
});
});

function removeActiveMenu() {
    menuNav.forEach((menu) => {
        menu.classList.remove("active");
    });
}

function removeActiveContent() {
    menuContent.forEach((menu) => {
        menu.classList.remove("active");
    });
}