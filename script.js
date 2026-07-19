document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ШАПКА
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    });


    /* ==========================
       АНИМАЦИИ ПОЯВЛЕНИЯ
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document
        .querySelectorAll(".fade-up")
        .forEach(el => observer.observe(el));


    /* ==========================
       ВОЛНА
    ========================== */

    const wave = document.querySelector(".wave-divider");

    if (wave) {

        const waveObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    wave.classList.add("animate");

                }

            });

        }, {

            threshold: .5

        });

        waveObserver.observe(wave);

    }


    /* ==========================
       FAQ
    ========================== */

    document
        .querySelectorAll(".faq-item")
        .forEach(item => {

            const btn = item.querySelector(".faq-question");

            if (!btn) return;

            btn.addEventListener("click", () => {

                item.classList.toggle("active");

            });

        });


    /* ==========================
       LIGHTBOX ДИПЛОМОВ
    ========================== */

    const lightbox = document.querySelector(".lightbox");

    if (lightbox) {

        const image = lightbox.querySelector("img");

        document
            .querySelectorAll(".diploma-slider img")
            .forEach(img => {

                img.addEventListener("click", () => {

                    image.src = img.src;

                    lightbox.classList.add("active");

                });

            });

        lightbox.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

    }

});
    document.querySelectorAll("section, .card, blockquote").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
