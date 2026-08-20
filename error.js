

document.addEventListener("DOMContentLoaded", function () {

   

    const goBackButton = document.getElementById("goBackButton");

    if (goBackButton) {

        goBackButton.addEventListener("click", function () {

            if (window.history.length > 1) {

                window.history.back();

            } else {

                window.location.href = "index.html";

            }

        });

    }

    const backHomeButton = document.getElementById("backHomeButton");

    if (backHomeButton) {

        backHomeButton.addEventListener("click", function () {

            window.location.href = "index.html";

        });

    }

    try {

        if (typeof gsap !== "undefined") {

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });



            tl.from(".error-card", {
                y: 25,
                opacity: 0,
                duration: 0.6
            });



            tl.from(".error-header", {
                y: -12,
                opacity: 0,
                duration: 0.35
            }, "-=0.25");


          

            tl.from(".error-number", {
                scale: 0.8,
                opacity: 0,
                duration: 0.5
            }, "-=0.15");


            tl.from(".error-circle", {
                scale: 0.8,
                opacity: 0,
                duration: 0.45,
                stagger: 0.08
            }, "-=0.3");


            tl.from(".error-icon", {
                scale: 0.8,
                opacity: 0,
                duration: 0.35,
                stagger: 0.1
            }, "-=0.25");



            tl.from(".error-eyebrow", {
                y: 12,
                opacity: 0,
                duration: 0.3
            });


            tl.from(".error-content h1", {
                y: 18,
                opacity: 0,
                duration: 0.45
            }, "-=0.15");


            tl.from(".error-content p", {
                y: 12,
                opacity: 0,
                duration: 0.35
            }, "-=0.2");



            tl.from(".error-actions", {
                y: 15,
                opacity: 0,
                duration: 0.4
            }, "-=0.1");



            tl.from(".error-footer", {
                y: 10,
                opacity: 0,
                duration: 0.3
            }, "-=0.15");


      

            gsap.to(".circle-one", {
                rotation: 360,
                duration: 22,
                repeat: -1,
                ease: "none"
            });


            gsap.to(".circle-two", {
                rotation: -360,
                duration: 17,
                repeat: -1,
                ease: "none"
            });


            gsap.to(".circle-three", {
                rotation: 360,
                duration: 13,
                repeat: -1,
                ease: "none"
            });


         

            gsap.to(".error-icon-one", {
                y: -7,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });


            gsap.to(".error-icon-two", {
                y: 7,
                duration: 2.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });


        } else {


            makeContentVisible();

        }

    } catch (error) {

        console.error(
            "Error page animation error:",
            error
        );

       

        makeContentVisible();

    }

    function makeContentVisible() {

        const selectors = [

            ".error-card",
            ".error-header",
            ".error-number",
            ".error-circle",
            ".error-icon",
            ".error-eyebrow",
            ".error-content h1",
            ".error-content p",
            ".error-actions",
            ".error-footer"

        ];


        selectors.forEach(function (selector) {

            document
                .querySelectorAll(selector)
                .forEach(function (element) {

                    element.style.opacity = "1";
                    element.style.visibility = "visible";
                    element.style.transform = "none";

                });

        });

    }




    document
        .querySelectorAll(".error-btn")
        .forEach(function (button) {

            button.addEventListener(
                "mouseenter",
                function () {

                    if (typeof gsap !== "undefined") {

                        gsap.to(button, {
                            y: -2,
                            duration: 0.2,
                            ease: "power2.out"
                        });

                    }

                }
            );


            button.addEventListener(
                "mouseleave",
                function () {

                    if (typeof gsap !== "undefined") {

                        gsap.to(button, {
                            y: 0,
                            duration: 0.2,
                            ease: "power2.out"
                        });

                    }

                }
            );

        });

});