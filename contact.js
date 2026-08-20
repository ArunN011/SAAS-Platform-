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
                    ease: "power4.out"
                }
            });


        heroTimeline

            .from(
                ".contact-premium-eyebrow",
                {
                    y: 25,
                    opacity: 0,
                    duration: .7
                }
            )

            .from(
                ".contact-premium-hero h1",
                {
                    y: 55,
                    opacity: 0,
                    duration: .9
                },
                "-=.35"
            )

            .from(
                ".contact-premium-hero p",
                {
                    y: 25,
                    opacity: 0,
                    duration: .65
                },
                "-=.45"
            )

            .from(
                ".contact-hero-meta",
                {
                    y: 25,
                    opacity: 0,
                    duration: .65
                },
                "-=.35"
            )

            .from(
                ".contact-hero-scroll",
                {
                    y: 15,
                    opacity: 0,
                    duration: .5
                },
                "-=.25"
            );



        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );


            gsap.fromTo(
                ".contact-form-intro",
                {
                    x: -50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,

                    duration: .9,

                    ease: "power4.out",

                    clearProps:
                        "transform,opacity",

                    scrollTrigger: {

                        trigger:
                            ".contact-form-section",

                        start:
                            "top 80%",

                        once:
                            true

                    }

                }
            );


            gsap.fromTo(
                ".contact-form-container",
                {
                    x: 60,
                    opacity: 0,
                    scale: .97
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,

                    duration: 1,

                    ease: "power4.out",

                    clearProps:
                        "transform,opacity",

                    scrollTrigger: {

                        trigger:
                            ".contact-form-section",

                        start:
                            "top 80%",

                        once:
                            true

                    }

                }
            );


            gsap.fromTo(
                ".contact-input-group",
                {
                    y: 18,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,

                    duration: .5,

                    stagger: .07,

                    ease: "power3.out",

                    clearProps:
                        "transform,opacity",

                    scrollTrigger: {

                        trigger:
                            ".premium-contact-form",

                        start:
                            "top 80%",

                        once:
                            true

                    }

                }
            );

        }



        const form =
            document.getElementById(
                "contactForm"
            );

        const message =
            document.getElementById(
                "contactFormMessage"
            );


        if (form) {

            form.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    if (
                        !form.checkValidity()
                    ) {

                        form.reportValidity();

                        return;

                    }


                    message.textContent =
                        "Thank you. Redirecting...";


                    gsap.to(
                        ".premium-contact-submit",
                        {
                            scale: .98,

                            duration: .15,

                            yoyo: true,

                            repeat: 1
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


if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.registerPlugin(
        ScrollTrigger
    );




    gsap.fromTo(
        ".contact-location-header",
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
                .85,

            ease:
                "power4.out",

            clearProps:
                "transform,opacity",

            scrollTrigger: {

                trigger:
                    ".contact-location-section",

                start:
                    "top 80%",

                once:
                    true

            }

        }
    );



    gsap.fromTo(
        ".contact-location-info",
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
                .85,

            ease:
                "power4.out",

            clearProps:
                "transform,opacity",

            scrollTrigger: {

                trigger:
                    ".contact-location-layout",

                start:
                    "top 82%",

                once:
                    true

            }

        }
    );



    gsap.fromTo(
        ".contact-map-wrapper",
        {
            x:
                55,

            opacity:
                0,

            scale:
                .97
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
                    ".contact-location-layout",

                start:
                    "top 82%",

                once:
                    true

            }

        }
    );



    gsap.to(
        ".map-overlay-card",
        {
            y:
                -6,

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



    gsap.fromTo(
        ".contact-location-bottom",
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
                    ".contact-location-bottom",

                start:
                    "top 90%",

                once:
                    true

            }

        }
    );

}