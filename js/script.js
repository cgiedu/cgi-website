// ==========================
// Chandrawati Group of Institutions
// script.js
// ==========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Back to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Mobile Menu Toggle
const nav = document.querySelector("nav");

const menuBtn = document.createElement("button");

menuBtn.innerHTML = "☰";

menuBtn.className = "menu-btn";

document.querySelector("header .container").prepend(menuBtn);

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// Hero Slider
const hero = document.querySelector(".hero");

const images = [

"images/banner1.jpg",

"images/banner2.jpg",

"images/banner3.jpg"

];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){

        index = 0;

    }

    hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${images[index]}')`;

},5000);
