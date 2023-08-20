var isOpen = 0; // check if the nav is open

// to change the navigation style
function changeNavStyle() {
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

// to change the hamburger style
function changeBarStyle() {
    var b1 = document.getElementById("bar1");
    var b2 = document.getElementById("bar2");
    var b3 = document.getElementById("bar3");

    if(isOpen == 0) {
        b1.style.transform = "translateY(8px) rotate(45deg)";
        b2.style.visibility = "hidden";
        b3.style.transform = "translateY(-9px) rotate(-45deg)";
    }
    else {
        b1.style.transform = "initial";
        b2.style.visibility = "visible";
        b3.style.transform = "initial";
    }
}

// toggle the hamburger menu and what happens if we toggle it
function toggleMenu() {
    const cover = document.querySelector(".cover");
    const links = document.querySelector(".links");

    links.classList.toggle("change");
    cover.classList.toggle("covering");
    changeNavStyle();
    changeBarStyle();
    isOpen = !isOpen;
}

// if the hamburger menu is open and we click on the cover (shaded region), it must close 
const cover = document.querySelector(".cover");
cover.addEventListener('click', toggleMenu);

// click the menu
const menu = document.querySelector(".hamburger-menu");
menu.addEventListener('click', toggleMenu);