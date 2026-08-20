

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined"
        ) {
            return;
        }

        const heroTimeline =
            gsap.timeline({
                defaults: {
                    ease:
                        "power4.out"
                }
            });


        heroTimeline

            .from(
                ".about-premium-eyebrow",
                {
                    y:
                        25,

                    opacity:
                        0,

                    duration:
                        .7
                }
            )

            .from(
                ".about-premium-title",
                {
                    y:
                        70,

                    opacity:
                        0,

                    duration:
                        1
                },
                "-=.35"
            )

            .from(
                ".about-premium-description",
                {
                    y:
                        25,

                    opacity:
                        0,

                    duration:
                        .7
                },
                "-=.5"
            )

            .from(
                ".about-premium-actions",
                {
                    y:
                        20,

                    opacity:
                        0,

                    duration:
                        .6
                },
                "-=.35"
            )

            .from(
                ".about-premium-meta",
                {
                    y:
                        20,

                    opacity:
                        0,

                    duration:
                        .6
                },
                "-=.3"
            );

        gsap.fromTo(
            ".about-premium-visual",
            {
                x:
                    80,

                opacity:
                    0,

                scale:
                    .95
            },
            {
                x:
                    0,

                opacity:
                    1,

                scale:
                    1,

                duration:
                    1.1,

                delay:
                    .25,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity"
            }
        );
        gsap.fromTo(
            ".about-premium-card",
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

                stagger:
                    .15,

                delay:
                    .65,

                ease:
                    "back.out(1.6)"
            }
        );

        gsap.to(
            ".about-card-top",
            {
                y:
                    -9,

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
            ".about-card-bottom",
            {
                y:
                    9,

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

        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );


            gsap.to(
                ".about-image-frame img",
                {
                    yPercent:
                        5,

                    ease:
                        "none",

                    scrollTrigger: {

                        trigger:
                            ".about-premium-visual",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub:
                            true
                    }
                }
            );

        }

        document
            .querySelectorAll(
                ".about-premium-primary, .about-premium-secondary"
            )
            .forEach(
                button => {

                    const icon =
                        button.querySelector(
                            "i"
                        );


                    button.addEventListener(
                        "mouseenter",
                        function () {

                            gsap.to(
                                icon,
                                {
                                    x:
                                        4,

                                    y:
                                        -3,

                                    duration:
                                        .25,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }
                    );


                    button.addEventListener(
                        "mouseleave",
                        function () {

                            gsap.to(
                                icon,
                                {
                                    x:
                                        0,

                                    y:
                                        0,

                                    duration:
                                        .25
                                }
                            );

                        }
                    );

                }
            );

    }
);

/* =====================================================
   ABOUT STORY GSAP
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
           STORY CONTENT
        ========================================== */

        gsap.fromTo(
            ".about-reveal-section",
            {
                y: 45,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .75,

                stagger: .08,

                ease: "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".about-story-section",

                    start:
                        "top 78%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           YEAR
        ========================================== */

        gsap.fromTo(
            ".about-story-year",
            {
                x: -50,
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
                        ".about-story-section",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           HIGHLIGHT CARDS
        ========================================== */

        gsap.fromTo(
            ".about-story-highlight",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .6,

                stagger:
                    .12,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".about-story-highlights",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           TIMELINE
        ========================================== */

        gsap.fromTo(
            ".story-timeline-line span",
            {
                width:
                    "0%"
            },
            {
                width:
                    "30%",

                duration:
                    1.2,

                ease:
                    "power3.out",

                scrollTrigger: {
                    trigger:
                        ".about-story-timeline",

                    start:
                        "top 85%",

                    once:
                        true
                }
            }
        );


        gsap.fromTo(
            ".story-timeline-item",
            {
                y:
                    30,

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
                    .12,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {
                    trigger:
                        ".about-story-timeline",

                    start:
                        "top 82%",

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
            ".about-team-header > *",
            {
                y: 45,
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

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".about-team-section",

                    start:
                        "top 80%",

                    once:
                        true

                }
            }
        );


        gsap.fromTo(
            ".team-featured-card",
            {
                y: 70,
                opacity: 0,
                scale: .96
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration:
                    .9,

                stagger:
                    .16,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".team-featured-grid",

                    start:
                        "top 82%",

                    once:
                        true

                }

            }
        );



        gsap.fromTo(
            ".team-grid .team-member-card",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration:
                    .7,

                stagger:
                    .10,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".team-grid",

                    start:
                        "top 82%",

                    once:
                        true

                }

            }
        );

        document
            .querySelectorAll(
                ".team-member-card"
            )
            .forEach(
                card => {

                    const image =
                        card.querySelector(
                            ".team-image-wrap img"
                        );

                    const arrow =
                        card.querySelector(
                            ".team-card-arrow"
                        );


                    card.addEventListener(
                        "mouseenter",
                        function () {

                            gsap.to(
                                image,
                                {
                                    scale:
                                        1.055,

                                    duration:
                                        .75,

                                    ease:
                                        "power3.out"
                                }
                            );


                            if (arrow) {

                                gsap.to(
                                    arrow,
                                    {
                                        x:
                                            3,

                                        y:
                                            -3,

                                        duration:
                                            .3,

                                        ease:
                                            "power2.out"
                                    }
                                );

                            }

                        }
                    );


                    card.addEventListener(
                        "mouseleave",
                        function () {

                            gsap.to(
                                image,
                                {
                                    scale:
                                        1,

                                    duration:
                                        .75
                                }
                            );


                            if (arrow) {

                                gsap.to(
                                    arrow,
                                    {
                                        x:
                                            0,

                                        y:
                                            0,

                                        duration:
                                            .3
                                    }
                                );

                            }

                        }
                    );

                }
            );

        document
            .querySelectorAll(
                ".team-socials a"
            )
            .forEach(
                social => {

                    social.addEventListener(
                        "mouseenter",
                        function () {

                            gsap.to(
                                social,
                                {
                                    y:
                                        -4,

                                    scale:
                                        1.08,

                                    duration:
                                        .22,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }
                    );


                    social.addEventListener(
                        "mouseleave",
                        function () {

                            gsap.to(
                                social,
                                {
                                    y:
                                        0,

                                    scale:
                                        1,

                                    duration:
                                        .22
                                }
                            );

                        }
                    );

                }
            );


        gsap.fromTo(
            ".team-bottom",
            {
                y:
                    30,

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
                        ".team-bottom",

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
            ".mission-header",
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
                        ".about-mission-section",

                    start:
                        "top 80%",

                    once:
                        true

                }

            }
        );



        gsap.fromTo(
            ".mission-card",
            {
                y: 55,
                opacity: 0,
                scale: .97
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration:
                    .85,

                stagger:
                    .15,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".mission-grid",

                    start:
                        "top 82%",

                    once:
                        true

                }

            }
        );


        gsap.fromTo(
            ".mission-values",
            {
                y: 30,
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
                        ".mission-values",

                    start:
                        "top 90%",

                    once:
                        true

                }

            }
        );


        document
            .querySelectorAll(
                ".mission-card"
            )
            .forEach(
                card => {

                    const icon =
                        card.querySelector(
                            ".mission-icon"
                        );


                    card.addEventListener(
                        "mouseenter",
                        function () {

                            gsap.to(
                                icon,
                                {
                                    rotation:
                                        6,

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
                        function () {

                            gsap.to(
                                icon,
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


        const faqItems =
            document.querySelectorAll(
                ".about-faq-item"
            );

        faqItems.forEach(
            item => {

                const question =
                    item.querySelector(
                        ".about-faq-question"
                    );


                question.addEventListener(
                    "click",
                    function () {

                        const isOpen =
                            item.classList.contains(
                                "active"
                            );


                        faqItems.forEach(
                            other => {

                                other.classList.remove(
                                    "active"
                                );


                                const button =
                                    other.querySelector(
                                        ".about-faq-question"
                                    );


                                button.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }
                        );



                        if (!isOpen) {

                            item.classList.add(
                                "active"
                            );


                            question.setAttribute(
                                "aria-expanded",
                                "true"
                            );


                            gsap.fromTo(
                                item.querySelector(
                                    ".about-faq-answer p"
                                ),
                                {
                                    y:
                                        10,

                                    opacity:
                                        0
                                },
                                {
                                    y:
                                        0,

                                    opacity:
                                        1,

                                    duration:
                                        .35,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }

                    }
                );

            }
        );



        gsap.fromTo(
            ".about-faq-intro",
            {
                x:
                    -50,

                opacity:
                    0
            },
            {
                x:
                    0,

                opacity:
                    1,

                duration:
                    .9,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".about-faq-section",

                    start:
                        "top 80%",

                    once:
                        true

                }

            }
        );



        gsap.fromTo(
            ".about-faq-item",
            {
                x:
                    50,

                opacity:
                    0
            },
            {
                x:
                    0,

                opacity:
                    1,

                duration:
                    .65,

                stagger:
                    .08,

                ease:
                    "power3.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".about-faq-list",

                    start:
                        "top 82%",

                    once:
                        true

                }

            }
        );



        gsap.fromTo(
            ".about-faq-bottom",
            {
                y:
                    30,

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
                        ".about-faq-bottom",

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