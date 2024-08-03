let menuBars = document.querySelector('.menu-bars');
let menu = document.querySelector('.menu');
let navBar = document.querySelector('.nav-bar');


let menuCondition = true;
menuBars.onclick = () => {
    if (menuCondition) {
        menu.classList.remove('hide-menu');
        menuCondition = false;
    } else {
        menu.classList.add('hide-menu');
        menuCondition = true;
    }
}




document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".menu a");
    console.log(navLinks);
    function makeActive() {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop+200 &&
                section.offsetTop + section.offsetHeight > fromTop+100
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", makeActive);
    window.addEventListener("load", makeActive);
});


// ==================== scroll =====================
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // Adjust as needed
        navBar.classList.add('navbar-fixing');
    } else {
        navBar.classList.remove('navbar-fixing');
    }
});