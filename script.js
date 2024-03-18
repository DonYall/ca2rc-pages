document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("nav").classList.add("active");
    document.getElementById("earthImage").classList.add("active");
    document.getElementById("mainContent").classList.add("active");
});

for (let i = 0; i < document.getElementById("slideIndicators").children.length; i++) {
    document.getElementById("slideIndicators").children[i].addEventListener("click", function () {
        document.getElementById("slideCollection").style.transform = "translateX(-" + i * 100 + "%)";
        for (let j = 0; j < document.getElementById("slideIndicators").children.length; j++) {
            document.getElementById("slideIndicators").children[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}

const slides = document.getElementById("slideCollection").children;
for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = i * 100 + "%";
}

document.getElementById("home").addEventListener("click", function () {
    window.scrollTo(0, 0);
});

document.getElementById("projects").addEventListener("click", function () {
    window.scrollTo(0, window.innerHeight);
});

document.getElementById("news").addEventListener("click", function () {
    window.scrollTo(0, 2 * window.innerHeight);
});

document.getElementById("team").addEventListener("click", function () {
    window.scrollTo(0, 3 * window.innerHeight);
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.querySelector("nav").classList.remove("active");
    } else {
        document.querySelector("nav").classList.add("active");
    }
    if (window.scrollY < window.innerHeight / 2) {
        document.getElementById("earthImage").classList.add("active");
        document.getElementById("mainContent").classList.add("active");
        document.getElementById("projectsSection").classList.remove("active");
    } else if (window.scrollY < (3 * window.innerHeight) / 2) {
        document.getElementById("earthImage").classList.remove("active");
        document.getElementById("mainContent").classList.remove("active");
        document.getElementById("projectsSection").classList.add("active");
    } else if (window.scrollY < 2 * window.innerHeight) {
        document.getElementById("teamSection").classList.remove("active");
    } else if (window.scrollY < (5 * window.innerHeight) / 2) {
    } else if (window.scrollY < (7 * window.innerHeight) / 2) {
        document.getElementById("teamSection").classList.add("active");
    }
    document.body.style.backgroundPositionY = -window.scrollY / 2 + "px";
});
