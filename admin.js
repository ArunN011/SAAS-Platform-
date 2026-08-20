/* =====================================================
   STACKLY ADMIN DASHBOARD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           AUTHENTICATION
        ================================================== */

        const adminEmail =
            localStorage.getItem(
                "userEmail"
            );

        const adminRole =
            localStorage.getItem(
                "userRole"
            );


        /*
         * Only admin users can access
         * this page.
         */

        if (
            !adminEmail ||
            adminRole !== "admin"
        ) {

            window.location.href =
                "login.html";

            return;

        }



        /* =================================================
           USER NAME
        ================================================== */

        const emailPrefix =
            adminEmail
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
           SET ADMIN DATA
        ================================================== */

        const sidebarEmail =
            document.getElementById(
                "sidebarAdminEmail"
            );

        const topbarName =
            document.getElementById(
                "topbarAdminName"
            );

        const welcomeName =
            document.getElementById(
                "adminWelcomeName"
            );


        if (sidebarEmail) {

            sidebarEmail.textContent =
                adminEmail;

        }


        if (topbarName) {

            topbarName.textContent =
                displayName || "Admin";

        }


        if (welcomeName) {

            welcomeName.textContent =
                `${displayName || "Admin"}.`;

        }



        /* =================================================
           CURRENT DATE
        ================================================== */

        const dateElement =
            document.getElementById(
                "adminCurrentDate"
            );


        if (dateElement) {

            const today =
                new Date();


            dateElement.textContent =
                today.toLocaleDateString(
                    "en-IN",
                    {
                        weekday:
                            "long",

                        month:
                            "long",

                        day:
                            "numeric",

                        year:
                            "numeric"
                    }
                );

        }



        /* =================================================
           SIDEBAR
        ================================================== */

        const sidebar =
            document.getElementById(
                "adminSidebar"
            );

        const overlay =
            document.getElementById(
                "adminOverlay"
            );

        const menuButton =
            document.getElementById(
                "adminMobileMenu"
            );

        const closeButton =
            document.getElementById(
                "adminSidebarClose"
            );


        function openSidebar() {

            sidebar?.classList.add(
                "open"
            );

            overlay?.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }


        function closeSidebar() {

            sidebar?.classList.remove(
                "open"
            );

            overlay?.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "";

        }


        menuButton?.addEventListener(
            "click",
            openSidebar
        );


        closeButton?.addEventListener(
            "click",
            closeSidebar
        );


        overlay?.addEventListener(
            "click",
            closeSidebar
        );



        /* =================================================
           SIDEBAR NAVIGATION
        ================================================== */

        document
            .querySelectorAll(
                ".admin-navigation .admin-nav-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            /*
                             * No preventDefault().
                             * Links should navigate.
                             */

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

        const logoutButton =
            document.getElementById(
                "adminLogout"
            );


        logoutButton?.addEventListener(
            "click",
            function () {

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
        );



        /* =================================================
           GSAP INTRO
        ================================================== */

        if (
            typeof gsap !==
            "undefined"
        ) {

            const timeline =
                gsap.timeline({

                    defaults: {

                        ease:
                            "power3.out"

                    }

                });


            timeline

                .from(
                    ".admin-topbar",
                    {
                        y:
                            -25,

                        opacity:
                            0,

                        duration:
                            .5
                    }
                )


                .from(
                    ".admin-welcome",
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
                    ".admin-stat-card",
                    {
                        y:
                            25,

                        opacity:
                            0,

                        scale:
                            .97,

                        stagger:
                            .08,

                        duration:
                            .55
                    },
                    "-=.3"
                )


                .from(
                    ".admin-panel",
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
                    "-=.25"
                )


                .from(
                    ".admin-summary-banner",
                    {
                        y:
                            25,

                        opacity:
                            0,

                        duration:
                            .6
                    },
                    "-=.2"
                );



            /* =============================================
               ORBITS
            ============================================== */

            gsap.to(
                ".admin-orbit-one",
                {
                    rotation:
                        360,

                    duration:
                        20,

                    repeat:
                        -1,

                    ease:
                        "none"
                }
            );


            gsap.to(
                ".admin-orbit-two",
                {
                    rotation:
                        -360,

                    duration:
                        28,

                    repeat:
                        -1,

                    ease:
                        "none"
                }
            );



            /* =============================================
               FLOATING CARD 1
            ============================================== */

            gsap.to(
                ".admin-float-one",
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


            /* =============================================
               FLOATING CARD 2
            ============================================== */

            gsap.to(
                ".admin-float-two",
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



            /* =============================================
               STAT CARD HOVER
            ============================================== */

            document
                .querySelectorAll(
                    ".admin-stat-card"
                )
                .forEach(
                    function (card) {

                        card.addEventListener(
                            "mouseenter",
                            function () {

                                gsap.to(
                                    card,
                                    {
                                        y:
                                            -4,

                                        duration:
                                            .25,

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
                                    card,
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



            /* =============================================
               PANEL HOVER
            ============================================== */

            document
                .querySelectorAll(
                    ".admin-panel"
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
                                            -2,

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
                                            .25
                                    }
                                );

                            }
                        );

                    }
                );

        }



        /* =================================================
           CHART DEFAULTS
        ================================================== */

        if (
            typeof Chart !==
            "undefined"
        ) {

            Chart.defaults.font.family =
                "Plus Jakarta Sans";

            Chart.defaults.font.size =
                11;

            Chart.defaults.color =
                "#9a8d82";

        }



        /* =================================================
           USER ACTIVITY CHART
        ================================================== */

        const activityCanvas =
            document.getElementById(
                "adminActivityChart"
            );


        if (
            activityCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                activityCanvas,
                {

                    type:
                        "line",


                    data: {

                        labels: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                        ],


                        datasets: [

                            {

                                label:
                                    "User Activity",


                                data: [
                                    54,
                                    68,
                                    63,
                                    77,
                                    82,
                                    88,
                                    92
                                ],


                                borderColor:
                                    "#b47e4f",


                                backgroundColor:
                                    "rgba(180,126,79,.10)",


                                fill:
                                    true,


                                tension:
                                    .42,


                                borderWidth:
                                    3,


                                pointRadius:
                                    4,


                                pointHoverRadius:
                                    6,


                                pointBackgroundColor:
                                    "#b47e4f",


                                pointBorderColor:
                                    "#ffffff",


                                pointBorderWidth:
                                    2

                            },

                            {

                                label:
                                    "Previous Week",


                                data: [
                                    48,
                                    57,
                                    61,
                                    65,
                                    72,
                                    76,
                                    80
                                ],


                                borderColor:
                                    "#d6c9bd",


                                backgroundColor:
                                    "transparent",


                                fill:
                                    false,


                                tension:
                                    .42,


                                borderWidth:
                                    2,


                                borderDash: [
                                    6,
                                    5
                                ],


                                pointRadius:
                                    0

                            }

                        ]

                    },


                    options: {

                        responsive:
                            true,


                        maintainAspectRatio:
                            false,


                        interaction: {

                            intersect:
                                false,

                            mode:
                                "index"

                        },


                        animation: {

                            duration:
                                1300,

                            easing:
                                "easeOutQuart"

                        },


                        plugins: {

                            legend: {

                                display:
                                    false

                            }

                        },


                        scales: {

                            y: {

                                beginAtZero:
                                    true,

                                max:
                                    100,


                                grid: {

                                    color:
                                        "#eee8e1"

                                },


                                border: {

                                    display:
                                        false

                                },


                                ticks: {

                                    color:
                                        "#a09286",

                                    font: {

                                        family:
                                            "Plus Jakarta Sans",

                                        size:
                                            11

                                    }

                                }

                            },


                            x: {

                                grid: {

                                    display:
                                        false

                                },


                                border: {

                                    display:
                                        false

                                },


                                ticks: {

                                    color:
                                        "#a09286",

                                    font: {

                                        family:
                                            "Plus Jakarta Sans",

                                        size:
                                            11

                                    }

                                }

                            }

                        }

                    }

                }
            );

        }



        /* =================================================
           USER DISTRIBUTION DOUGHNUT
        ================================================== */

        const userCanvas =
            document.getElementById(
                "adminUserChart"
            );


        if (
            userCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                userCanvas,
                {

                    type:
                        "doughnut",


                    data: {

                        labels: [
                            "Free",
                            "Pro",
                            "Enterprise"
                        ],


                        datasets: [

                            {

                                data: [
                                    7420,
                                    4260,
                                    1160
                                ],


                                backgroundColor: [
                                    "#d9c5b2",
                                    "#b47e4f",
                                    "#7e5539"
                                ],


                                borderWidth:
                                    0,


                                hoverOffset:
                                    5

                            }

                        ]

                    },


                    options: {

                        responsive:
                            true,


                        maintainAspectRatio:
                            false,


                        cutout:
                            "68%",


                        plugins: {

                            legend: {

                                display:
                                    false

                            }

                        },


                        animation: {

                            duration:
                                1200,

                            animateRotate:
                                true

                        }

                    }

                }
            );

        }

    }
);