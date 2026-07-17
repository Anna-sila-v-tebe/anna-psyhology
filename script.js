document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .card, blockquote").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
