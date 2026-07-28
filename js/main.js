/*=====================================================
    Chandrawati Group of Institutions
    main.js - Part 1
======================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
      PRELOADER
    ==============================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }
    });

    /*==============================
      STICKY HEADER
    ==============================*/

    const header = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*==============================
      MOBILE MENU
    ==============================*/

    const menuBtn = document.querySelector(".menu-toggle");

    const mobileMenu = document.querySelector(".navbar-nav");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");

        });

    }

    /*==============================
      ACTIVE NAVIGATION
    ==============================*/

    const navLinks = document.querySelectorAll(".navbar-nav a");

    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /*==============================
      SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});

