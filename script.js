/*MOSTRA MENU*/

const mostraMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("mostra")
        })
    }
}

mostraMenu("nav-toggle", "nav-menu");

/*RIMUOVI MENU*/

const navLink = document.querySelectorAll(".nav__link"),
navMenu = document.getElementById("nav-menu");

function linkAzione() {
    navMenu.classList.remove("mostra");
}
navLink.forEach(n => n.addEventListener("click", linkAzione));

/*SCROLL*/ /*modificalo?*/

const sezione = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollAttivo);

function scrollAttivo() {
    const scrollY = window.pageYOffset;

    sezione.forEach(corrente => {
        const altezzaSezione = corrente.offsetHeight;
        const topSezione = corrente.offsetTop - 50;
        sectionId = corrente.getAttribute("id");

        if(scrollY > topSezione && scrollY <= topSezione + altezzaSezione) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("attivo");
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").style.color = "var(--arancione-chiaro)";
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("attivo");
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").style.color = "var(--nero)";
        }
    })
}

/*CAMBIA COLORE HEADER*/ /*modificalo?*/

window.onscroll = () => {
    const nav = document.getElementById("header")
    if (this.scrollY >= 200) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header")
    }
}

/*slides*/

var slides = document.querySelectorAll(".saldi__slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove("attiv");

        btns.forEach((btn) => {
            btn.classList.remove("attiv");
        })
    })
    slides[manual].classList.add("attiv");
    btns[manual].classList.add("attiv");
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass) {
    let active = document.getElementsByClassName("attiv");
    let i = 1;
    var repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("attiv");
            })
            slides[i].classList.add("attiv");
            btns[i].classList.add("attiv");
            i++;
            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();

/*selettore numero input*/

/*var numeri = document.getElementById("box");
for (let xi = 0; xi < 100; xi++) {
    var span = document.createElement("span");
    span.textContent = i;
    numeri.appendChild(span);
}
var num = numeri.getElementsByTagName("span");
var index = 0;

function prosNum() {
    num[index].style.display = "none";
    index = (index + 1) % num.length;
    num[index].style.display = "initial";
}

function precNum() {
    num[index].style.display = "none";
    index = (index - 1 + num.length) % num.length;
    num[index].style.display = "initial";
}*/

/*galleria prodotti*/

var immagineGrande = document.getElementById("immagine-grande");
var immaginePiccola = document.getElementsByClassName("immagine-piccola");

immaginePiccola[0].onclick = function() {
    immagineGrande.src = immaginePiccola[0].src;
}
immaginePiccola[1].onclick = function() {
    immagineGrande.src = immaginePiccola[1].src;
}
immaginePiccola[2].onclick = function() {
    immagineGrande.src = immaginePiccola[2].src;
}

/*vestito-descrizione-nascondi*/

let vestitoNascondi = document.getElementById("fa-angle-down");
let vestitoDescrizione = document.getElementById("vestito__descrizione");
vestitoNascondi.addEventListener("click", () => {
    vestitoDescrizione.classList.toggle("vestito__nascondi");
})

/*profilo.html*/

function profiloToggleForm() {
    var profiloContainer = document.querySelector(".profilo__container");
    profiloContainer.classList.toggle("pro-attivo")
}