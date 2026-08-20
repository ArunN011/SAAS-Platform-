/* =====================================================
   BLOG HERO GSAP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        const timeline =
            gsap.timeline({
                defaults: {
                    ease:
                        "power4.out"
                }
            });


        timeline

            .from(
                ".blog-hero-content > *",
                {
                    y: 45,
                    opacity: 0,

                    duration: .75,

                    stagger: .12
                }
            )

            .from(
                ".blog-featured-card",
                {
                    x: 65,
                    opacity: 0,
                    scale: .96,

                    duration: 1
                },
                "-=.55"
            )

            .from(
                ".blog-hero-bottom",
                {
                    y: 25,
                    opacity: 0,

                    duration: .6
                },
                "-=.35"
            );


        /* =========================================
           FEATURED IMAGE PARALLAX
        ========================================== */

        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );


            gsap.to(
                ".blog-featured-image img",
                {
                    yPercent:
                        5,

                    ease:
                        "none",

                    scrollTrigger: {

                        trigger:
                            ".blog-featured-card",

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


        /* =========================================
           ARROW HOVER
        ========================================== */

        const featuredCard =
            document.querySelector(
                ".blog-featured-card"
            );


        if (featuredCard) {

            const arrow =
                featuredCard.querySelector(
                    ".blog-featured-arrow"
                );


            featuredCard.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        arrow,
                        {
                            x: 3,
                            y: -3,

                            duration:
                                .25
                        }
                    );

                }
            );


            featuredCard.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        arrow,
                        {
                            x: 0,
                            y: 0,

                            duration:
                                .25
                        }
                    );

                }
            );

        }

    }
);
/* =====================================================
   BLOG LATEST ARTICLES GSAP
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
           HEADER REVEAL
        ========================================== */

        gsap.fromTo(
            ".blog-latest-header > *",
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
                        ".blog-latest-section",

                    start:
                        "top 80%",

                    once:
                        true
                }
            }
        );


        /* =========================================
           FEATURED ARTICLE
        ========================================== */

        gsap.fromTo(
            ".blog-latest-featured",
            {
                y: 60,
                opacity: 0,
                scale: .97
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration:
                    .95,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".blog-latest-featured",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );



        gsap.fromTo(
            ".blog-article-card",
            {
                y: 45,
                opacity: 0,
                scale: .97
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,

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
                        ".blog-latest-grid",

                    start:
                        "top 82%",

                    once:
                        true
                }
            }
        );

        gsap.to(
            ".blog-latest-featured-image img",
            {
                yPercent:
                    5,

                ease:
                    "none",

                scrollTrigger: {

                    trigger:
                        ".blog-latest-featured",

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        true
                }
            }
        );

        document
            .querySelectorAll(
                ".blog-article-card"
            )
            .forEach(
                card => {

                    const image =
                        card.querySelector(
                            ".blog-article-image img"
                        );

                    const arrow =
                        card.querySelector(
                            ".blog-card-footer i"
                        );


                    card.addEventListener(
                        "mouseenter",
                        function () {

                            gsap.to(
                                image,
                                {
                                    scale:
                                        1.06,

                                    duration:
                                        .65,

                                    ease:
                                        "power3.out"
                                }
                            );


                            gsap.to(
                                arrow,
                                {
                                    x:
                                        4,

                                    y:
                                        -4,

                                    duration:
                                        .25
                                }
                            );

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
                                        .65
                                }
                            );


                            gsap.to(
                                arrow,
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

        gsap.fromTo(
            ".blog-latest-bottom",
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
                        ".blog-latest-bottom",

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


        const topicItems =
            document.querySelectorAll(
                ".blog-topic-item"
            );

        const topicTitle =
            document.getElementById(
                "activeTopicTitle"
            );

        const topicNumber =
            document.getElementById(
                "activeTopicNumber"
            );


        topicItems.forEach(
            item => {

                item.addEventListener(
                    "mouseenter",
                    function () {

                        const topic =
                            item.dataset.topic;

                        const number =
                            item.dataset.number;


                        topicItems.forEach(
                            currentItem => {

                                currentItem.classList.remove(
                                    "active"
                                );

                            }
                        );


                        item.classList.add(
                            "active"
                        );


                        if (
                            topicTitle
                        ) {

                            gsap.to(
                                topicTitle,
                                {
                                    opacity:
                                        0,

                                    y:
                                        8,

                                    duration:
                                        .15,

                                    onComplete:
                                        function () {

                                            topicTitle.textContent =
                                                topic;

                                            topicNumber.textContent =
                                                `${number} / 06`;

                                            gsap.to(
                                                [
                                                    topicTitle,
                                                    topicNumber
                                                ],
                                                {
                                                    opacity:
                                                        1,

                                                    y:
                                                        0,

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

                    }
                );



                item.addEventListener(
                    "click",
                    function () {

                        topicItems.forEach(
                            currentItem => {

                                currentItem.classList.remove(
                                    "active"
                                );

                            }
                        );


                        item.classList.add(
                            "active"
                        );

                    }
                );

            }
        );


  

        gsap.fromTo(
            ".blog-topics-header > *",
            {
                y:
                    45,

                opacity:
                    0
            },
            {
                y:
                    0,

                opacity:
                    1,

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
                        ".blog-topics-section",

                    start:
                        "top 80%",

                    once:
                        true

                }

            }
        );



        gsap.fromTo(
            ".blog-topic-visual",
            {
                x:
                    -60,

                opacity:
                    0,

                scale:
                    .96

            },
            {
                x:
                    0,

                opacity:
                    1,

                scale:
                    1,

                duration:
                    1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".blog-topics-layout",

                    start:
                        "top 82%",

                    once:
                        true

                }

            }
        );


        gsap.fromTo(
            ".blog-topic-item",
            {
                x:
                    55,

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
                        ".blog-topic-list",

                    start:
                        "top 82%",

                    once:
                        true

                }

            }
        );



        gsap.to(
            ".topic-float-one",
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
            ".topic-float-two",
            {
                y:
                    8,

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
            ".topic-float-three",
            {
                y:
                    -7,

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
            ".blog-topics-bottom",
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
                        ".blog-topics-bottom",

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
            ".blog-newsletter-content",
            {
                x:
                    -55,

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
                        ".blog-newsletter-section",

                    start:
                        "top 80%",

                    once:
                        true

                }

            }
        );


        gsap.fromTo(
            ".blog-newsletter-form-wrap",
            {
                x:
                    55,

                opacity:
                    0,

                scale:
                    .96
            },
            {
                x:
                    0,

                opacity:
                    1,

                scale:
                    1,

                duration:
                    1,

                ease:
                    "power4.out",

                clearProps:
                    "transform,opacity",

                scrollTrigger: {

                    trigger:
                        ".blog-newsletter-section",

                    start:
                        "top 80%",

                    once:
                        true

                }

            }
        );


        gsap.to(
            ".newsletter-card-one",
            {
                y:
                    -8,

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
            ".newsletter-card-two",
            {
                y:
                    8,

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


    

        gsap.fromTo(
            ".blog-newsletter-bottom",
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
                        ".blog-newsletter-bottom",

                    start:
                        "top 90%",

                    once:
                        true

                }

            }
        );




        const form =
            document.getElementById(
                "blogNewsletterForm"
            );

        const email =
            document.getElementById(
                "blogNewsletterEmail"
            );

        const message =
            document.getElementById(
                "blogNewsletterMessage"
            );


        if (form) {

            form.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const value =
                        email.value.trim();


                    if (
                        !value ||
                        !email.checkValidity()
                    ) {

                        message.textContent =
                            "Please enter a valid email address.";

                        gsap.fromTo(
                            message,
                            {
                                x:
                                    -6
                            },
                            {
                                x:
                                    0,

                                duration:
                                    .25,

                                repeat:
                                    3,

                                yoyo:
                                    true
                            }
                        );

                        return;

                    }


                    message.textContent =
                        "Thank you for subscribing.";


                    gsap.to(
                        form,
                        {
                            opacity:
                                .65,

                            duration:
                                .25
                        }
                    );


                    setTimeout(
                        function () {

                            window.location.href =
                                "error.html";

                        },
                        500
                    );

                }
            );

        }

    }
);