/* =====================================================
   STACKLY MY ACCOUNT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           AUTHENTICATION
        ================================================== */

        const userEmail =
            localStorage.getItem(
                "userEmail"
            );

        const userRole =
            localStorage.getItem(
                "userRole"
            );


        /*
         * Only logged-in users with the
         * "user" role can open this page.
         */

        if (
            !userEmail ||
            userRole !== "user"
        ) {

            window.location.href =
                "login.html";

            return;

        }



        /* =================================================
           CREATE DISPLAY NAME
        ================================================== */

        const emailPrefix =
            userEmail
                .split("@")[0]
                .replace(
                    /[._-]/g,
                    " "
                );


        const displayName =
            emailPrefix.replace(
                /\b\w/g,
                function (character) {

                    return character.toUpperCase();

                }
            );



        /* =================================================
           USER DATA
        ================================================== */

        const sidebarUserEmail =
            document.getElementById(
                "sidebarUserEmail"
            );

        const topbarUserName =
            document.getElementById(
                "topbarUserName"
            );

        const accountHeroName =
            document.getElementById(
                "accountHeroName"
            );

        const accountHeroEmail =
            document.getElementById(
                "accountHeroEmail"
            );

        const accountFullName =
            document.getElementById(
                "accountFullName"
            );

        const accountEmail =
            document.getElementById(
                "accountEmail"
            );

        const accountRole =
            document.getElementById(
                "accountRole"
            );



        if (sidebarUserEmail) {

            sidebarUserEmail.textContent =
                userEmail;

        }


        if (topbarUserName) {

            topbarUserName.textContent =
                displayName || "User";

        }


        if (accountHeroName) {

            accountHeroName.textContent =
                displayName || "User";

        }


        if (accountHeroEmail) {

            accountHeroEmail.textContent =
                userEmail;

        }


        if (accountFullName) {

            accountFullName.textContent =
                displayName || "User";

        }


        if (accountEmail) {

            accountEmail.textContent =
                userEmail;

        }


        if (accountRole) {

            accountRole.textContent =
                "SaaS User";

        }



        /* =================================================
           SIDEBAR
        ================================================== */

        const sidebar =
            document.getElementById(
                "dashboardSidebar"
            );

        const overlay =
            document.getElementById(
                "dashboardOverlay"
            );

        const mobileMenuButton =
            document.getElementById(
                "mobileMenuButton"
            );

        const sidebarClose =
            document.getElementById(
                "sidebarClose"
            );


        function openSidebar() {

            if (sidebar) {

                sidebar.classList.add(
                    "open"
                );

            }


            if (overlay) {

                overlay.classList.add(
                    "active"
                );

            }


            document.body.style.overflow =
                "hidden";

        }


        function closeSidebar() {

            if (sidebar) {

                sidebar.classList.remove(
                    "open"
                );

            }


            if (overlay) {

                overlay.classList.remove(
                    "active"
                );

            }


            document.body.style.overflow =
                "";

        }


        mobileMenuButton?.addEventListener(
            "click",
            openSidebar
        );


        sidebarClose?.addEventListener(
            "click",
            closeSidebar
        );


        overlay?.addEventListener(
            "click",
            closeSidebar
        );



        /* =================================================
           SIDEBAR NAVIGATION
           
           IMPORTANT:
           No preventDefault() here.
           Normal href navigation must work.
        ================================================== */

        document
            .querySelectorAll(
                ".sidebar-navigation .sidebar-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            if (
                                window.innerWidth <=
                                767
                            ) {

                                closeSidebar();

                            }

                        }
                    );

                }
            );



        /* =================================================
           LOGOUT
        ================================================== */

        function logoutUser() {

            localStorage.removeItem(
                "userEmail"
            );

            localStorage.removeItem(
                "userRole"
            );

            localStorage.removeItem(
                "loginTime"
            );


            window.location.href =
                "login.html";

        }


        document
            .getElementById(
                "logoutButton"
            )
            ?.addEventListener(
                "click",
                logoutUser
            );


        document
            .getElementById(
                "accountLogout"
            )
            ?.addEventListener(
                "click",
                logoutUser
            );



        /* =================================================
           TOPBAR BUTTON ANIMATION
        ================================================== */

        if (
            typeof gsap !==
            "undefined"
        ) {

            document
                .querySelectorAll(
                    ".topbar-icon-btn"
                )
                .forEach(
                    function (button) {

                        button.addEventListener(
                            "click",
                            function () {

                                gsap.fromTo(
                                    button,
                                    {
                                        scale:
                                            .92
                                    },
                                    {
                                        scale:
                                            1,

                                        duration:
                                            .25,

                                        ease:
                                            "back.out(2)"
                                    }
                                );

                            }
                        );

                    }
                );



            /* =================================================
               PAGE INTRO
            ================================================== */

            const timeline =
                gsap.timeline({

                    defaults: {

                        ease:
                            "power3.out"

                    }

                });


            timeline

                .from(
                    ".dashboard-topbar",
                    {
                        y:
                            -20,

                        opacity:
                            0,

                        duration:
                            .5
                    }
                )


                .from(
                    ".account-hero",
                    {
                        y:
                            35,

                        opacity:
                            0,

                        duration:
                            .7
                    },
                    "-=.2"
                )


                .from(
                    ".account-avatar-large",
                    {
                        scale:
                            .8,

                        opacity:
                            0,

                        duration:
                            .5
                    },
                    "-=.35"
                )


                .from(
                    ".account-panel",
                    {
                        y:
                            25,

                        opacity:
                            0,

                        stagger:
                            .10,

                        duration:
                            .6
                    },
                    "-=.3"
                );



            /* =================================================
               FLOATING AVATAR
            ================================================== */

            gsap.to(
                ".account-avatar-large",
                {
                    y:
                        -5,

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



            /* =================================================
               PANEL HOVER
            ================================================== */

            document
                .querySelectorAll(
                    ".account-panel"
                )
                .forEach(
                    function (panel) {

                        panel.addEventListener(
                            "mouseenter",
                            function () {

                                gsap.to(
                                    panel,
                                    {
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


                        panel.addEventListener(
                            "mouseleave",
                            function () {

                                gsap.to(
                                    panel,
                                    {
                                        y:
                                            0,

                                        duration:
                                            .25,

                                        ease:
                                            "power2.out"
                                    }
                                );

                            }
                        );

                    }
                );



            /* =================================================
               QUICK ACTION HOVER
            ================================================== */

            document
                .querySelectorAll(
                    ".quick-actions a, .quick-actions button"
                )
                .forEach(
                    function (action) {

                        const arrow =
                            action.querySelector(
                                ".quick-action-arrow"
                            );


                        action.addEventListener(
                            "mouseenter",
                            function () {

                                gsap.to(
                                    arrow,
                                    {
                                        x:
                                            3,

                                        y:
                                            -3,

                                        duration:
                                            .2
                                    }
                                );

                            }
                        );


                        action.addEventListener(
                            "mouseleave",
                            function () {

                                gsap.to(
                                    arrow,
                                    {
                                        x:
                                            0,

                                        y:
                                            0,

                                        duration:
                                            .2
                                    }
                                );

                            }
                        );

                    }
                );

        }

    }
);