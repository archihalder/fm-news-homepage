var isOpen = 0;

function changeStyle() {
    var a = document.querySelectorAll(".links a");
    a.forEach(i => {
        if(isOpen == 0) {
            i.style.fontSize = "24px";
            i.style.color = "hsl(240, 100%, 5%)";
            i.style.fontWeight = "500";
        }
        else {
            i.style.fontSize = "initial";
            i.style.color = "initial";
            i.style.fontWeight = "initial";
        }
    })
}

function toggleMenu() {
    const cover = document.querySelector(".cover");
    const links = document.querySelector(".links");

    links.classList.toggle("change");
    cover.classList.toggle("covering");
    changeStyle();
    isOpen = !isOpen;
}

const screenWidth = window.innerWidth;
const links = document.querySelectorAll(".links a");

links.forEach(i => {
    if(screenWidth < 750){
        i.addEventListener('click', toggleMenu);
    }
})

const cover = document.querySelector(".cover");
cover.addEventListener('click', toggleMenu);

const menu = document.querySelector(".hamburger-menu");
menu.addEventListener('click', toggleMenu);