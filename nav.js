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