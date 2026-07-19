/*=====================================================
GLOBAL
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeader();

    initSmoothScroll();

    initRevealAnimation();

    initCounters();

    initFaq();

});



/*=====================================================
HEADER
=====================================================*/

function initHeader(){

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            header.classList.add("header-scroll");

        }else{

            header.classList.remove("header-scroll");

        }

    });

}



/*=====================================================
SMOOTH SCROLL
=====================================================*/

function initSmoothScroll(){

    const links=document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",e=>{

            const id=link.getAttribute("href");

            if(id==="#") return;

            e.preventDefault();

            const target=document.querySelector(id);

            if(!target) return;

            window.scrollTo({

                top:target.offsetTop-90,

                behavior:"smooth"

            });

        });

    });

}



/*=====================================================
REVEAL ANIMATION
=====================================================*/

function initRevealAnimation(){

    const items=document.querySelectorAll(

        ".fade-up,.fade-in,.scale-in"

    );

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:.15

        }

    );

    items.forEach(item=>observer.observe(item));

}



/*=====================================================
COUNTERS
=====================================================*/

function initCounters(){

    const counters=document.querySelectorAll(".stat-number");

    let started=false;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting && !started){

                started=true;

                counters.forEach(counter=>{

                    animateCounter(counter);

                });

            }

        });

    });

    if(counters.length){

        observer.observe(counters[0]);

    }

}



function animateCounter(counter){

    const text=counter.innerText;

    const number=parseInt(text);

    const suffix=text.replace(number,"");

    let current=0;

    const speed=25;

    const step=Math.ceil(number/60);

    const timer=setInterval(()=>{

        current+=step;

        if(current>=number){

            current=number;

            clearInterval(timer);

        }

        counter.innerText=current+suffix;

    },speed);

}



/*=====================================================
FAQ
=====================================================*/

function initFaq(){

    const details=document.querySelectorAll(".faq details");

    details.forEach(item=>{

        item.addEventListener("toggle",()=>{

            if(item.open){

                details.forEach(other=>{

                    if(other!==item){

                        other.removeAttribute("open");

                    }

                });

            }

        });

    });

}

/*=====================================================
BACK TO TOP
=====================================================*/

function initBackToTop(){

    const button=document.querySelector(".back-to-top");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>700){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/*=====================================================
CARD HOVER
=====================================================*/

function initTiltCards(){

    const cards=document.querySelectorAll(

        ".approach-card,.topic-card,.format-card,.review"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",e=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=(x-rect.width/2)/20;

            const rotateX=(rect.height/2-y)/20;

            card.style.transform=

            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}



/*=====================================================
PARALLAX
=====================================================*/

function initParallax(){

    const objects=document.querySelectorAll(

        ".hero::before"

    );

    window.addEventListener("scroll",()=>{

        const y=window.scrollY*.15;

        document.documentElement.style.setProperty(

            "--parallax",

            `${y}px`

        );

    });

}



/*=====================================================
BUTTON RIPPLE
=====================================================*/

function initButtons(){

    const buttons=document.querySelectorAll(".btn");

    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            const rect=this.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            ripple.style.width=size+"px";

            ripple.style.height=size+"px";

            ripple.style.left=e.clientX-rect.left-size/2+"px";

            ripple.style.top=e.clientY-rect.top-size/2+"px";

            ripple.className="ripple";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

}



/*=====================================================
ACTIVE MENU
=====================================================*/

function initActiveMenu(){

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            const height=section.offsetHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}



/*=====================================================
INIT
=====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initHeader();

    initSmoothScroll();

    initRevealAnimation();

    initCounters();

    initFaq();

    initBackToTop();

    initTiltCards();

    initButtons();

    initActiveMenu();

});
