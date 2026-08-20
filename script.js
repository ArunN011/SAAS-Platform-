

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navbar =
            document.getElementById(
                "mainNavbar"
            );

        const menuButton =
            document.getElementById(
                "mobileMenuBtn"
            );

        const mobileNavigation =
            document.getElementById(
                "mobileNavigation"
            );

        const closeButton =
            document.getElementById(
                "mobileCloseBtn"
            );

        const overlay =
            document.getElementById(
                "mobileOverlay"
            );



        function handleNavbarScroll() {

            if (
                window.scrollY > 30
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }


        window.addEventListener(
            "scroll",
            handleNavbarScroll,
            {
                passive: true
            }
        );


        handleNavbarScroll();


        function openMobileMenu() {

            mobileNavigation.classList.add(
                "active"
            );

            overlay.classList.add(
                "active"
            );

            menuButton.classList.add(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.style.overflow =
                "hidden";

        }



        function closeMobileMenu() {

            mobileNavigation.classList.remove(
                "active"
            );

            overlay.classList.remove(
                "active"
            );

            menuButton.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow =
                "";

        }
        menuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileNavigation.classList.contains(
                        "active"
                    );

                if (isOpen) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );


        closeButton.addEventListener(
            "click",
            closeMobileMenu
        );


        overlay.addEventListener(
            "click",
            closeMobileMenu
        );




        document
            .querySelectorAll(
                ".mobile-nav-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        closeMobileMenu
                    );

                }
            );



   

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeMobileMenu();

                }

            }
        );



        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth >
                    991
                ) {

                    closeMobileMenu();

                }

            }
        );

    }
);
document.addEventListener(
    "DOMContentLoaded",
    function () {


        const hero =
            document.querySelector(
                ".saas-hero"
            );

        const heroEyebrow =
            document.querySelector(
                ".hero-eyebrow"
            );

        const heroTitle =
            document.querySelector(
                ".hero-title"
            );

        const heroDescription =
            document.querySelector(
                ".hero-description"
            );

        const heroActions =
            document.querySelector(
                ".hero-actions"
            );

        const heroTrust =
            document.querySelector(
                ".hero-trust"
            );

        const dashboard =
            document.querySelector(
                ".hero-dashboard"
            );

        const floatingCards =
            document.querySelectorAll(
                ".floating-card"
            );



        setTimeout(
            function () {

                hero.classList.add(
                    "loaded"
                );

            },
            100
        );



        const timeline =
            gsap.timeline({
                defaults: {
                    ease:
                        "power4.out"
                }
            });


        timeline
            .from(
                heroEyebrow,
                {
                    y: 25,
                    opacity: 0,
                    duration: .7
                }
            )

            .from(
                heroTitle,
                {
                    y: 70,
                    opacity: 0,
                    duration: 1
                },
                "-=.35"
            )

            .from(
                heroDescription,
                {
                    y: 30,
                    opacity: 0,
                    duration: .7
                },
                "-=.55"
            )

            .from(
                heroActions,
                {
                    y: 25,
                    opacity: 0,
                    duration: .65
                },
                "-=.4"
            )

            .from(
                heroTrust,
                {
                    y: 20,
                    opacity: 0,
                    duration: .6
                },
                "-=.35"
            )

            .from(
                dashboard,
                {
                    x: 90,
                    opacity: 0,
                    rotateY: -10,
                    duration: 1.1
                },
                "-=.9"
            )

            .from(
                floatingCards,
                {
                    scale: .7,
                    opacity: 0,
                    duration: .6,
                    stagger: .15
                },
                "-=.6"
            );




        gsap.to(
            ".floating-card-top",
            {
                y: -10,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".floating-card-bottom",
            {
                y: 10,
                duration: 3.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );



        gsap.from(
            ".chart-bar",
            {
                scaleY: 0,
                transformOrigin:
                    "bottom",

                duration: 1,

                stagger: .1,

                delay: 1,

                ease:
                    "power3.out"
            }
        );

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap ===
            "undefined"
        ) {
            return;
        }



        gsap.from(
            ".showcase-header",
            {
                y: 60,
                opacity: 0,
                duration: 1,

                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".product-showcase-section",

                    start:
                        "top 78%"
                }
            }
        );



        gsap.from(
            ".product-dashboard",
            {
                y: 100,
                opacity: 0,
                rotateX: 8,
                scale: .94,

                duration: 1.3,

                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".product-dashboard-wrapper",

                    start:
                        "top 78%"
                }
            }
        );



        gsap.from(
            ".dashboard-floating",
            {
                scale: .65,
                opacity: 0,

                duration: .8,

                stagger: .2,

                ease:
                    "back.out(1.7)",

                scrollTrigger: {
                    trigger:
                        ".product-dashboard-wrapper",

                    start:
                        "top 70%"
                }
            }
        );



        gsap.from(
            ".dashboard-stat-card",
            {
                y: 25,
                opacity: 0,

                duration: .65,

                stagger: .1,

                ease:
                    "power3.out",

                scrollTrigger: {
                    trigger:
                        ".dashboard-stat-grid",

                    start:
                        "top 82%"
                }
            }
        );




        gsap.from(
            ".chart-point",
            {
                scale: 0,

                transformOrigin:
                    "center",

                duration: .5,

                stagger: .1,

                ease:
                    "back.out(2)",

                scrollTrigger: {
                    trigger:
                        ".revenue-chart",

                    start:
                        "top 80%"
                }
            }
        );



        gsap.to(
            ".dashboard-floating-left",
            {
                y: -10,

                duration:
                    2.6,

                repeat: -1,

                yoyo: true,

                ease:
                    "sine.inOut"
            }
        );


        gsap.to(
            ".dashboard-floating-right",
            {
                y: 10,

                duration:
                    3,

                repeat: -1,

                yoyo: true,

                ease:
                    "sine.inOut"
            }
        );




        const dashboard =
            document.querySelector(
                ".product-dashboard"
            );


        if (dashboard) {

            dashboard.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(
                        dashboard,
                        {
                            y: -6,

                            duration:
                                .5,

                            ease:
                                "power2.out"
                        }
                    );

                }
            );


            dashboard.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        dashboard,
                        {
                            y: 0,

                            duration:
                                .5,

                            ease:
                                "power2.out"
                        }
                    );

                }
            );

        }

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap ===
            "undefined"
        ) {
            return;
        }




        gsap.from(
            ".solutions-label",
            {
                x: -35,
                opacity: 0,
                duration: .7,
                ease:
                    "power3.out",

                scrollTrigger: {
                    trigger:
                        ".solutions-section",

                    start:
                        "top 78%"
                }
            }
        );


        gsap.from(
            ".solutions-title-wrap",
            {
                y: 55,
                opacity: 0,
                duration: 1,
                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".solutions-section",

                    start:
                        "top 78%"
                }
            }
        );



        gsap.from(
            ".solution-main-card",
            {
                x: -70,
                opacity: 0,
                duration: 1.1,
                ease:
                    "power4.out",

                scrollTrigger: {
                    trigger:
                        ".solutions-grid",

                    start:
                        "top 78%"
                }
            }
        );



gsap.utils.toArray(".solution-small-card").forEach(
    (card, index) => {

        gsap.fromTo(
            card,

            {
                x: 60,
                autoAlpha: 0
            },

            {
                x: 0,
                autoAlpha: 1,

                duration: 0.75,

                delay: index * 0.12,

                ease: "power3.out",

                clearProps: "transform,opacity,visibility",

                scrollTrigger: {
                    trigger: card,

                    start: "top 85%",

                    once: true
                }
            }
        );

    }
);

        gsap.from(
            ".solutions-bottom",
            {
                y: 35,
                opacity: 0,
                duration: .8,
                ease:
                    "power3.out",

                scrollTrigger: {
                    trigger:
                        ".solutions-bottom",

                    start:
                        "top 88%"
                }
            }
        );



        const solutionImage =
            document.querySelector(
                ".solution-main-image img"
            );


        if (solutionImage) {

            gsap.to(
                solutionImage,
                {
                    yPercent: 5,
                    ease: "none",

                    scrollTrigger: {
                        trigger:
                            ".solution-main-card",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: true
                    }
                }
            );

        }

    }
);
/* =====================================================
   WHY STACKLY GSAP
===================================================== */

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


        /* =========================================
           VISUAL
        ========================================== */

        gsap.fromTo(
            ".why-visual",
            {
                x: -70,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration: 1.1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".why-stackly-section",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           CONTENT
        ========================================== */

        gsap.fromTo(
            ".why-content > *",
            {
                y: 35,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .75,

                stagger: .12,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".why-content",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           BENEFITS
        ========================================== */

        gsap.fromTo(
            ".why-benefit",
            {
                x: 35,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration: .65,

                stagger: .12,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".why-benefits",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           PRODUCTIVITY BAR
        ========================================== */

        gsap.fromTo(
            ".productivity-bar span",
            {
                width: "0%"
            },
            {
                width: "92%",

                duration:
                    1.4,

                ease:
                    "power3.out",

                scrollTrigger: {
                    trigger:
                        ".productivity-card",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           MINI CHART
        ========================================== */

        gsap.fromTo(
            ".mini-chart span",
            {
                scaleY: 0
            },
            {
                scaleY: 1,

                duration:
                    .8,

                stagger:
                    .09,

                ease:
                    "power3.out",

                transformOrigin:
                    "bottom",

                scrollTrigger: {
                    trigger:
                        ".mini-chart",

                    start:
                        "top 85%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           FLOATING CARDS
        ========================================== */

        gsap.to(
            ".why-security-card",
            {
                y: -10,

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
            ".why-automation-card",
            {
                y: 10,

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


        /* =========================================
           STATS
        ========================================== */

        document
            .querySelectorAll(
                ".why-stat strong"
            )
            .forEach(
                stat => {

                    const target =
                        parseInt(
                            stat.dataset.count
                        );


                    if (
                        Number.isNaN(
                            target
                        )
                    ) {
                        return;
                    }


                    const counter = {
                        value: 0
                    };


                    gsap.to(
                        counter,
                        {
                            value:
                                target,

                            duration:
                                1.8,

                            ease:
                                "power2.out",

                            scrollTrigger: {
                                trigger:
                                    stat,

                                start:
                                    "top 85%",

                                once:
                                    true
                            },

                            onUpdate:
                                function () {

                                    stat.textContent =
                                        Math.floor(
                                            counter.value
                                        ).toLocaleString();

                                }
                        }
                    );

                }
            );

    }
);
/* =====================================================
   PRICING GSAP
===================================================== */

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


        /* =========================================
           PRICING HEADING
        ========================================== */

        gsap.fromTo(
            ".pricing-heading",
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
                        ".pricing-section",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           TOGGLE
        ========================================== */

        gsap.fromTo(
            ".pricing-toggle-wrap",
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .6,

                ease:
                    "power3.out",

                scrollTrigger: {
                    trigger:
                        ".pricing-toggle-wrap",

                    start:
                        "top 85%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           PRICING CARDS
        ========================================== */

        gsap.fromTo(
            ".pricing-card",
            {
                y: 60,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .8,

                stagger: .16,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".pricing-grid",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           PRICE HOVER
        ========================================== */

        document
            .querySelectorAll(
                ".pricing-card"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "mouseenter",
                        () => {

                            gsap.to(
                                card.querySelector(
                                    ".pricing-icon"
                                ),
                                {
                                    rotation:
                                        5,

                                    scale:
                                        1.08,

                                    duration:
                                        .3,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }
                    );


                    card.addEventListener(
                        "mouseleave",
                        () => {

                            gsap.to(
                                card.querySelector(
                                    ".pricing-icon"
                                ),
                                {
                                    rotation:
                                        0,

                                    scale:
                                        1,

                                    duration:
                                        .3
                                }
                            );

                        }
                    );

                }
            );


        /* =========================================
           BILLING TOGGLE
        ========================================== */

        const pricingToggle =
            document.getElementById(
                "pricingToggle"
            );

        const billingLabels =
            document.querySelectorAll(
                ".billing-label"
            );

        const priceValues =
            document.querySelectorAll(
                ".price-value"
            );


        let yearly =
            false;


        pricingToggle?.addEventListener(
            "click",
            function () {

                yearly =
                    !yearly;


                this.classList.toggle(
                    "yearly",
                    yearly
                );


                billingLabels.forEach(
                    (label, index) => {

                        label.classList.toggle(
                            "active",
                            yearly
                                ? index === 1
                                : index === 0
                        );

                    }
                );


                priceValues.forEach(
                    price => {

                        const value =
                            yearly
                                ? price.dataset.yearly
                                : price.dataset.monthly;


                        gsap.to(
                            price,
                            {
                                opacity:
                                    0,

                                y:
                                    8,

                                duration:
                                    .15,

                                onComplete:
                                    () => {

                                        price.textContent =
                                            value;

                                        gsap.to(
                                            price,
                                            {
                                                opacity:
                                                    1,

                                                y:
                                                    0,

                                                duration:
                                                    .25
                                            }
                                        );

                                    }
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
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        gsap.fromTo(
            ".testimonials-heading",
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
                        ".testimonials-section",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );



        gsap.fromTo(
            ".featured-testimonial",
            {
                x: -60,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration: 1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".testimonials-layout",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


  

        gsap.fromTo(
            ".testimonial-card-modern",
            {
                x: 60,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,

                duration: .75,

                stagger: .14,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".testimonial-side",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );



        gsap.fromTo(
            ".testimonial-bottom",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .8,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".testimonial-bottom",

                    start:
                        "top 88%",

                    once:
                        true
                }
            }
        );


   

        gsap.fromTo(
            ".quote-mark",
            {
                scale: .5,
                opacity: 0,
                rotation: -12
            },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,

                duration: .8,

                ease:
                    "back.out(1.7)",

                scrollTrigger: {
                    trigger:
                        ".featured-testimonial",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


   

        gsap.fromTo(
            ".testimonial-rating i, .small-rating i, .rating-stars i",
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,

                duration: .4,

                stagger: .06,

                ease:
                    "back.out(2)",

                scrollTrigger: {
                    trigger:
                        ".testimonials-section",

                    start:
                        "top 75%",

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

        gsap.registerPlugin(ScrollTrigger);


        gsap.fromTo(
            ".ecosystem-heading",
            {
                y: 55,
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
                        ".ecosystem-section",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


    

        gsap.fromTo(
            ".ecosystem-card",
            {
                y: 45,
                opacity: 0,
                scale: .97
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration: .75,

                stagger: .1,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".ecosystem-grid",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );


 

        document
            .querySelectorAll(
                ".ecosystem-card"
            )
            .forEach(
                card => {

                    const icon =
                        card.querySelector(
                            ".integration-icon"
                        );

                    card.addEventListener(
                        "mouseenter",
                        () => {

                            gsap.to(
                                icon,
                                {
                                    scale: 1.08,
                                    rotation: 4,

                                    duration:
                                        .3,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }
                    );


                    card.addEventListener(
                        "mouseleave",
                        () => {

                            gsap.to(
                                icon,
                                {
                                    scale: 1,
                                    rotation: 0,

                                    duration:
                                        .3
                                }
                            );

                        }
                    );

                }
            );


      

        gsap.fromTo(
            ".ecosystem-bottom",
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
                        ".ecosystem-bottom",

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
            ".final-cta-content",
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
                        ".final-cta-section",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );



        gsap.fromTo(
            ".cta-mini-dashboard",
            {
                x: 80,
                y: 40,
                opacity: 0,
                rotateY: -8
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                rotateY: 0,

                duration:
                    1.1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".final-cta-section",

                    start:
                        "top 75%",

                    once:
                        true
                }
            }
        );

        gsap.fromTo(
            ".cta-mini-bars i",
            {
                scaleY: 0
            },
            {
                scaleY: 1,

                duration:
                    .7,

                stagger:
                    .08,

                ease:
                    "power3.out",

                transformOrigin:
                    "bottom",

                scrollTrigger: {
                    trigger:
                        ".cta-mini-dashboard",

                    start:
                        "top 85%",

                    once:
                        true
                }
            }
        );

        gsap.to(
            ".cta-mini-dashboard",
            {
                y: -8,

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
            ".newsletter-card",
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
                        ".newsletter-section",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );



        const newsletterForm =
            document.getElementById(
                "newsletterForm"
            );

        const newsletterMessage =
            document.getElementById(
                "newsletterMessage"
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