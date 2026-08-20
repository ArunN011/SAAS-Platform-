document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        /* =========================================
           HERO IMAGE
        ========================================== */

        const hero =
            document.querySelector(
                ".service-page-hero"
            );


        if (hero) {

            setTimeout(
                () => {

                    hero.classList.add(
                        "loaded"
                    );

                },
                100
            );

        }


        /* =========================================
           HERO TIMELINE
        ========================================== */

        const timeline =
            gsap.timeline({
                defaults: {
                    ease:
                        "power4.out"
                }
            });


        timeline

            .from(
                ".service-hero-label",
                {
                    y: 25,
                    opacity: 0,
                    duration: .7
                }
            )

            .from(
                ".service-hero-content h1",
                {
                    y: 70,
                    opacity: 0,
                    duration: 1
                },
                "-=.35"
            )

            .from(
                ".service-hero-content > p",
                {
                    y: 30,
                    opacity: 0,
                    duration: .7
                },
                "-=.5"
            )

            .from(
                ".service-hero-actions",
                {
                    y: 25,
                    opacity: 0,
                    duration: .6
                },
                "-=.35"
            )

            .from(
                ".service-hero-stats",
                {
                    y: 20,
                    opacity: 0,
                    duration: .6
                },
                "-=.35"
            );


        /* =========================================
           BUTTON HOVER
        ========================================== */

        document
            .querySelectorAll(
                ".service-hero-btn"
            )
            .forEach(
                button => {

                    const icon =
                        button.querySelector(
                            "i"
                        );


                    button.addEventListener(
                        "mouseenter",
                        () => {

                            gsap.to(
                                icon,
                                {
                                    x: 4,
                                    y: -3,
                                    duration: .25,
                                    ease:
                                        "power2.out"
                                }
                            );

                        }
                    );


                    button.addEventListener(
                        "mouseleave",
                        () => {

                            gsap.to(
                                icon,
                                {
                                    x: 0,
                                    y: 0,
                                    duration: .25
                                }
                            );

                        }
                    );

                }
            );

    }
);
document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        const navItems =
            document.querySelectorAll(
                ".service-nav-item"
            );

        const panels =
            document.querySelectorAll(
                ".service-panel"
            );

        const contents =
            document.querySelectorAll(
                ".service-content"
            );

        const progressBar =
            document.querySelector(
                ".services-progress-bar span"
            );

        const currentNumber =
            document.getElementById(
                "serviceProgressCurrent"
            );


        let currentService =
            "analytics";


        const services = [
            "analytics",
            "workflow",
            "automation",
            "collaboration",
            "security"
        ];

        function changeService(
            service,
            index
        ) {

            if (
                service ===
                currentService
            ) {
                return;
            }


            currentService =
                service;


            navItems.forEach(
                item => {

                    item.classList.toggle(
                        "active",
                        item.dataset.service ===
                        service
                    );

                }
            );

            panels.forEach(
                panel => {

                    const isActive =
                        panel.dataset.panel ===
                        service;


                    if (isActive) {

                        gsap.set(
                            panel,
                            {
                                opacity: 0,
                                y: 25,
                                scale: .97,
                                visibility:
                                    "visible"
                            }
                        );


                        panel.classList.add(
                            "active"
                        );


                        gsap.to(
                            panel,
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,

                                duration:
                                    .65,

                                ease:
                                    "power3.out"
                            }
                        );

                    } else {

                        gsap.to(
                            panel,
                            {
                                opacity: 0,
                                y: -15,
                                scale: .98,

                                duration:
                                    .25,

                                onComplete:
                                    function () {

                                        panel.classList.remove(
                                            "active"
                                        );

                                        gsap.set(
                                            panel,
                                            {
                                                visibility:
                                                    "hidden"
                                            }
                                        );

                                    }
                            }
                        );

                    }

                }
            );
            contents.forEach(
                content => {

                    const isActive =
                        content.dataset.content ===
                        service;


                    if (isActive) {

                        gsap.set(
                            content,
                            {
                                opacity: 0,
                                y: 25,
                                display:
                                    "block"
                            }
                        );


                        gsap.to(
                            content,
                            {
                                opacity: 1,
                                y: 0,

                                duration:
                                    .55,

                                ease:
                                    "power3.out"
                            }
                        );

                    } else {

                        gsap.set(
                            content,
                            {
                                display:
                                    "none"
                            }
                        );

                    }

                }
            );

            const progress =
                ((index + 1) /
                    services.length) *
                100;


            gsap.to(
                progressBar,
                {
                    width:
                        `${progress}%`,

                    duration:
                        .5,

                    ease:
                        "power2.out"
                }
            );


            if (currentNumber) {

                currentNumber.textContent =
                    `0${index + 1}`;

            }

            if (
                service ===
                "analytics"
            ) {

                gsap.fromTo(
                    ".service-panel[data-panel='analytics'] .service-graph span",
                    {
                        scaleY:
                            0
                    },
                    {
                        scaleY:
                            1,

                        duration:
                            .6,

                        stagger:
                            .08,

                        ease:
                            "power3.out",

                        transformOrigin:
                            "bottom"
                    }
                );

            }

            if (
                service ===
                "security"
            ) {

                gsap.fromTo(
                    ".security-ring",
                    {
                        scale:
                            .7,

                        opacity:
                            0
                    },
                    {
                        scale:
                            1,

                        opacity:
                            1,

                        duration:
                            .7,

                        ease:
                            "back.out(1.7)"
                    }
                );

            }

        }


        navItems.forEach(
            (item, index) => {

                item.addEventListener(
                    "click",
                    function () {

                        changeService(
                            item.dataset.service,
                            index
                        );

                    }
                );

            }
        );

        gsap.fromTo(
            ".premium-services-header > *",
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .8,

                stagger:
                    .12,

                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".premium-services",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".service-navigation",
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    .9,

                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".services-experience",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".service-visual",
            {
                y: 60,
                opacity: 0,
                scale: .96
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration:
                    1,

                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".services-experience",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".service-description",
            {
                x: 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    .9,

                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".services-experience",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );

        gsap.to(
            ".service-visual-glow",
            {
                scale:
                    1.15,

                opacity:
                    .75,

                duration:
                    3.5,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );

    }
);

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );
        gsap.fromTo(
            ".capabilities-visual",
            {
                x: -70,
                opacity: 0,
                scale: .96
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,

                duration:
                    1.1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".capabilities-section",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".capabilities-content > *",
            {
                x: 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    .75,

                stagger:
                    .1,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".capabilities-content",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".capability-row",
            {
                y: 25,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .6,

                stagger:
                    .1,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".capabilities-content",

                    start:
                        "top 72%",

                    once:
                        true
                }
            }
        );

        gsap.to(
            ".capability-metric",
            {
                y: -8,

                duration:
                    2.8,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );

        gsap.to(
            ".capability-badge",
            {
                y: 8,

                duration:
                    3.2,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );


        gsap.to(
            ".capabilities-image img",
            {
                yPercent:
                    5,

                ease:
                    "none",

                scrollTrigger: {
                    trigger:
                        ".capabilities-visual",

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        true
                }
            }
        );


        gsap.fromTo(
            ".capabilities-bottom",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .75,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".capabilities-bottom",

                    start:
                        "top 88%",

                    once:
                        true
                }
            }
        );

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );


        gsap.fromTo(
            ".service-trusted-header",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: 1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-trusted-section",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );



        gsap.fromTo(
            ".trusted-stat",
            {
                y: 25,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .65,

                stagger: .1,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".trusted-stats",

                    start:
                        "top 85%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".trusted-logo",
            {
                y: 25,
                opacity: 0,
                scale: .96
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration: .65,

                stagger: .08,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".trusted-marquee",

                    start:
                        "top 85%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".trusted-bottom",
            {
                y: 25,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .7,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".trusted-bottom",

                    start:
                        "top 90%",

                    once:
                        true
                }
            }
        );

        document
            .querySelectorAll(
                ".trusted-stat strong"
            )
            .forEach(
                element => {

                    const text =
                        element.textContent.trim();

                    const number =
                        parseFloat(
                            text.replace(
                                /[^0-9.]/g,
                                ""
                            )
                        );


                    if (
                        Number.isNaN(
                            number
                        )
                    ) {
                        return;
                    }


                    const suffix =
                        text.includes("+")
                            ? "+"
                            : text.includes("%")
                                ? "%"
                                : "";


                    const counter = {
                        value: 0
                    };


                    gsap.to(
                        counter,
                        {
                            value:
                                number,

                            duration:
                                1.5,

                            ease:
                                "power2.out",

                            scrollTrigger: {
                                trigger:
                                    element,

                                start:
                                    "top 88%",

                                once:
                                    true
                            },

                            onUpdate:
                                function () {

                                    element.textContent =
                                        Math.round(
                                            counter.value
                                        ) +
                                        suffix;

                                }
                        }
                    );

                }
            );

    }
);

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );


        const slides =
            document.querySelectorAll(
                ".service-testimonial-slide"
            );

        const dots =
            document.querySelectorAll(
                ".testimonial-dot"
            );

        const nextButton =
            document.getElementById(
                "testimonialNext"
            );

        const prevButton =
            document.getElementById(
                "testimonialPrev"
            );


        let currentSlide = 0;

        let testimonialTimer;


        function showTestimonial(
            index,
            direction = 1
        ) {

            if (!slides.length) {
                return;
            }


            index =
                (index + slides.length) %
                slides.length;


            const current =
                slides[currentSlide];

            const next =
                slides[index];


            if (
                current === next &&
                slides.length > 1
            ) {
                return;
            }


            current.classList.remove(
                "active"
            );


            next.classList.add(
                "active"
            );


            gsap.set(
                next,
                {
                    opacity: 0,
                    x:
                        direction > 0
                            ? 45
                            : -45,
                    visibility:
                        "visible"
                }
            );


            gsap.to(
                next,
                {
                    opacity: 1,
                    x: 0,

                    duration:
                        .65,

                    ease:
                        "power3.out"
                }
            );


            gsap.fromTo(
                next.querySelector(
                    "blockquote"
                ),
                {
                    y: 18,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,

                    duration:
                        .55,

                    delay:
                        .08,

                    ease:
                        "power3.out"
                }
            );


            dots.forEach(
                (dot, dotIndex) => {

                    dot.classList.toggle(
                        "active",
                        dotIndex === index
                    );

                }
            );


            currentSlide =
                index;

        }

        function nextTestimonial() {

            showTestimonial(
                currentSlide + 1,
                1
            );

        }


        function previousTestimonial() {

            showTestimonial(
                currentSlide - 1,
                -1
            );

        }



        nextButton?.addEventListener(
            "click",
            function () {

                nextTestimonial();

                restartTimer();

            }
        );


        prevButton?.addEventListener(
            "click",
            function () {

                previousTestimonial();

                restartTimer();

            }
        );


        dots.forEach(
            (dot, index) => {

                dot.addEventListener(
                    "click",
                    function () {

                        const direction =
                            index >
                            currentSlide
                                ? 1
                                : -1;

                        showTestimonial(
                            index,
                            direction
                        );

                        restartTimer();

                    }
                );

            }
        );

        function startTimer() {

            testimonialTimer =
                setInterval(
                    nextTestimonial,
                    5500
                );

        }


        function restartTimer() {

            clearInterval(
                testimonialTimer
            );

            startTimer();

        }


        startTimer();


        const featured =
            document.querySelector(
                ".service-testimonial-featured"
            );


        featured?.addEventListener(
            "mouseenter",
            function () {

                clearInterval(
                    testimonialTimer
                );

            }
        );


        featured?.addEventListener(
            "mouseleave",
            function () {

                startTimer();

            }
        );

        gsap.fromTo(
            ".service-testimonials-heading",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-testimonials-section",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".service-testimonial-featured",
            {
                x: -65,
                opacity: 0,
                scale: .97
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,

                duration:
                    1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-testimonial-experience",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".service-review-card, .service-rating-card",
            {
                x: 55,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    .7,

                stagger:
                    .12,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-review-stack",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );
        gsap.fromTo(
            ".testimonial-quote-icon",
            {
                scale: .5,
                rotation: -15,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,

                duration:
                    .8,

                ease:
                    "back.out(1.7)",

                scrollTrigger: {
                    trigger:
                        ".service-testimonial-featured",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".featured-stars i, .rating-stars-small i",
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,

                duration:
                    .35,

                stagger:
                    .07,

                ease:
                    "back.out(2)",

                scrollTrigger: {
                    trigger:
                        ".service-testimonials-section",

                    start:
                        "top 76%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".service-testimonial-bottom",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .75,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-testimonial-bottom",

                    start:
                        "top 88%",

                    once:
                        true
                }
            }
        );

    }
);

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );


        gsap.fromTo(
            ".security-content > *",
            {
                x: -55,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    .75,

                stagger:
                    .1,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".security-trust-section",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".security-feature",
            {
                x: -30,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    .65,

                stagger:
                    .12,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".security-feature-list",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );
        gsap.fromTo(
            ".security-visual",
            {
                x: 70,
                opacity: 0,
                scale: .95
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,

                duration:
                    1.1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".security-layout",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".security-core",
            {
                scale:
                    .6,

                opacity:
                    0
            },
            {
                scale:
                    1,

                opacity:
                    1,

                duration:
                    1,

                ease:
                    "back.out(1.5)",

                scrollTrigger: {
                    trigger:
                        ".security-visual",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".security-orbit-node",
            {
                scale:
                    0,

                opacity:
                    0
            },
            {
                scale:
                    1,

                opacity:
                    1,

                duration:
                    .55,

                stagger:
                    .12,

                ease:
                    "back.out(1.8)",

                scrollTrigger: {
                    trigger:
                        ".security-visual",

                    start:
                        "top 70%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".security-status-card",
            {
                scale:
                    .75,

                opacity:
                    0
            },
            {
                scale:
                    1,

                opacity:
                    1,

                duration:
                    .65,

                stagger:
                    .15,

                ease:
                    "back.out(1.6)",

                scrollTrigger: {
                    trigger:
                        ".security-visual",

                    start:
                        "top 75%",

                    once:
                        true
                }
            }
        );


        gsap.to(
            ".status-top",
            {
                y:
                    -8,

                duration:
                    2.7,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );


        gsap.to(
            ".status-bottom",
            {
                y:
                    8,

                duration:
                    3.1,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );

        gsap.fromTo(
            ".security-metric",
            {
                y:
                    25,

                opacity:
                    0
            },
            {
                y:
                    0,

                opacity:
                    1,

                duration:
                    .65,

                stagger:
                    .1,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".security-metrics",

                    start:
                        "top 86%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".security-bottom",
            {
                y:
                    25,

                opacity:
                    0
            },
            {
                y:
                    0,

                opacity:
                    1,

                duration:
                    .7,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".security-bottom",

                    start:
                        "top 90%",

                    once:
                        true
                }
            }
        );

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );

        gsap.fromTo(
            ".service-cta-content",
            {
                x: -60,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration:
                    1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-final-cta",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".service-cta-visual",
            {
                x: 70,
                opacity: 0,
                scale: .9
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,

                duration:
                    1.1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-final-cta",

                    start:
                        "top 76%",

                    once:
                        true
                }
            }
        );

        gsap.to(
            ".cta-card-one",
            {
                y: -9,

                duration:
                    2.8,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );


        gsap.to(
            ".cta-card-two",
            {
                y: 9,

                duration:
                    3.2,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );


        gsap.to(
            ".cta-card-three",
            {
                y: -7,

                duration:
                    3,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut"
            }
        );


        gsap.fromTo(
            ".service-newsletter-box",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .9,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".service-newsletter",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );

        const newsletterForm =
            document.getElementById(
                "serviceNewsletterForm"
            );

        const newsletterEmail =
            document.getElementById(
                "serviceNewsletterEmail"
            );

        const newsletterStatus =
            document.getElementById(
                "serviceNewsletterStatus"
            );


        newsletterForm?.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    newsletterEmail.value.trim();


                if (!email) {

                    return;

                }

                window.location.href =
                    "error.html";

            }
        );

    }
);
document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "footerNewsletter"
            );

        const email =
            document.getElementById(
                "footerEmail"
            );

        const status =
            document.getElementById(
                "footerNewsletterStatus"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const value =
                    email.value.trim();


                if (!value) {

                    status.textContent =
                        "Please enter your email address.";

                    return;

                }

                window.location.href =
                    "error.html";

            }
        );

    }
);