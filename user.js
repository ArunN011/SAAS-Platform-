/* =====================================================
   USER DASHBOARD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           AUTH CHECK
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
         * Only users can access this page.
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
           USER DATA
        ================================================== */

        const sidebarEmail =
            document.getElementById(
                "sidebarUserEmail"
            );

        const topbarName =
            document.getElementById(
                "topbarUserName"
            );

        const profileEmail =
            document.getElementById(
                "profileUserEmail"
            );

        const welcomeUser =
            document.getElementById(
                "welcomeUser"
            );


        /*
         * Convert email prefix into display name.
         *
         * Example:
         * arunkumar_n@example.com
         * →
         * Arunkumar N
         */

        const emailPrefix =
            userEmail
                .split("@")[0]
                .replace(/[._-]/g, " ");


        const displayName =
            emailPrefix.replace(
                /\b\w/g,
                character =>
                    character.toUpperCase()
            );


        if (sidebarEmail) {

            sidebarEmail.textContent =
                userEmail;

        }


        if (topbarName) {

            topbarName.textContent =
                displayName || "User";

        }


        if (profileEmail) {

            profileEmail.textContent =
                userEmail;

        }


        if (welcomeUser) {

            welcomeUser.textContent =
                `${displayName || "User"}.`;

        }



        /* =================================================
           CURRENT DATE
        ================================================== */

        const dateElement =
            document.getElementById(
                "currentDate"
            );


        if (dateElement) {

            const currentDate =
                new Date();


            dateElement.textContent =
                currentDate.toLocaleDateString(
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
           SIDEBAR ELEMENTS
        ================================================== */

        const sidebar =
            document.getElementById(
                "dashboardSidebar"
            );

        const overlay =
            document.getElementById(
                "dashboardOverlay"
            );

        const menuButton =
            document.getElementById(
                "mobileMenuButton"
            );

        const closeButton =
            document.getElementById(
                "sidebarClose"
            );



        /* =================================================
           OPEN SIDEBAR
        ================================================== */

        function openSidebar() {

            if (!sidebar) {
                return;
            }


            sidebar.classList.add(
                "open"
            );


            if (overlay) {

                overlay.classList.add(
                    "active"
                );

            }


            document.body.style.overflow =
                "hidden";

        }



        /* =================================================
           CLOSE SIDEBAR
        ================================================== */

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



        /* =================================================
           MOBILE MENU
        ================================================== */

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
           
           IMPORTANT:
           Do NOT use event.preventDefault()
           here. It will block href navigation.
        ================================================== */

        const sidebarLinks =
            document.querySelectorAll(
                ".sidebar-navigation .sidebar-link"
            );


        sidebarLinks.forEach(
            link => {

                link.addEventListener(
                    "click",
                    function () {


                        /*
                         * Only change active state
                         * when the link is clicked.
                         */

                        sidebarLinks.forEach(
                            currentLink => {

                                currentLink.classList.remove(
                                    "active"
                                );

                            }
                        );


                        link.classList.add(
                            "active"
                        );


                        /*
                         * GSAP click feedback.
                         */

                        if (
                            typeof gsap !==
                            "undefined"
                        ) {

                            gsap.fromTo(
                                link,
                                {
                                    x:
                                        -4
                                },
                                {
                                    x:
                                        0,

                                    duration:
                                        .25,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }


                        /*
                         * Close mobile drawer,
                         * but DO NOT prevent navigation.
                         *
                         * Example:
                         * projects.html will open normally.
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
                "logoutButton"
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
           TOPBAR BUTTONS
        ================================================== */

        const topbarButtons =
            document.querySelectorAll(
                ".topbar-icon-btn"
            );


        topbarButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        if (
                            typeof gsap !==
                            "undefined"
                        ) {

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

                    }
                );

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

                /* Topbar */

                .from(
                    ".dashboard-topbar",
                    {
                        y:
                            -25,

                        opacity:
                            0,

                        duration:
                            .5
                    }
                )


                /* Welcome */

                .from(
                    ".dashboard-welcome",
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


                /* Stats */

                .from(
                    ".stat-card",
                    {
                        y:
                            25,

                        opacity:
                            0,

                        stagger:
                            .08,

                        duration:
                            .55
                    },
                    "-=.35"
                )


                /* Panels */

                .from(
                    ".dashboard-panel",
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
                    "-=.30"
                );



            /* =============================================
               FLOATING WELCOME ICON 01
            ============================================== */

            gsap.to(
                ".welcome-float-one",
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



            /* =============================================
               FLOATING WELCOME ICON 02
            ============================================== */

            gsap.to(
                ".welcome-float-two",
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
               ORBIT
            ============================================== */

            gsap.to(
                ".orbit-one",
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


            /* =============================================
               ORBIT 2
            ============================================== */

            gsap.to(
                ".orbit-two",
                {
                    rotation:
                        -360,

                    duration:
                        27,

                    repeat:
                        -1,

                    ease:
                        "none"
                }
            );



            /* =============================================
               STAT HOVER
            ============================================== */

            document
                .querySelectorAll(
                    ".stat-card"
                )
                .forEach(
                    card => {

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
               PROJECT HOVER
            ============================================== */

            document
                .querySelectorAll(
                    ".project-item"
                )
                .forEach(
                    item => {

                        const arrow =
                            item.querySelector(
                                ".project-status"
                            );


                        item.addEventListener(
                            "mouseenter",
                            function () {

                                gsap.to(
                                    item,
                                    {
                                        x:
                                            3,

                                        duration:
                                            .2,

                                        ease:
                                            "power2.out"
                                    }
                                );


                                if (arrow) {

                                    gsap.to(
                                        arrow,
                                        {
                                            scale:
                                                1.03,

                                            duration:
                                                .2
                                        }
                                    );

                                }

                            }
                        );


                        item.addEventListener(
                            "mouseleave",
                            function () {

                                gsap.to(
                                    item,
                                    {
                                        x:
                                            0,

                                        duration:
                                            .2
                                    }
                                );


                                if (arrow) {

                                    gsap.to(
                                        arrow,
                                        {
                                            scale:
                                                1,

                                            duration:
                                                .2
                                        }
                                    );

                                }

                            }
                        );

                    }
                );

        }



        /* =================================================
           CHART
        ================================================== */

        const chartCanvas =
            document.getElementById(
                "productivityChart"
            );


        if (
            chartCanvas &&
            typeof Chart !==
            "undefined"
        ) {


            new Chart(
                chartCanvas,
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
                                    "Productivity",


                                data: [
                                    58,
                                    67,
                                    64,
                                    74,
                                    79,
                                    83,
                                    84
                                ],


                                borderColor:
                                    "#b47e4f",


                                backgroundColor:
                                    "rgba(180,126,79,.10)",


                                fill:
                                    true,


                                tension:
                                    .4,


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

                            }

                        ]

                    },


                    options: {

                        responsive:
                            true,


                        maintainAspectRatio:
                            false,


                        animation: {

                            duration:
                                1200,

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
                                        "#eee9e2"

                                },


                                border: {

                                    display:
                                        false

                                },


                                ticks: {

                                    color:
                                        "#a09285",


                                    font: {

                                        family:
                                            "Plus Jakarta Sans",

                                        size:
                                            12

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
                                        "#a09285",


                                    font: {

                                        family:
                                            "Plus Jakarta Sans",

                                        size:
                                            12

                                    }

                                }

                            }

                        }

                    }

                }
            );

        }

    }
);