/* =====================================================
   ANALYTICS PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           AUTH
        ================================================== */

        const userEmail =
            localStorage.getItem(
                "userEmail"
            );

        const userRole =
            localStorage.getItem(
                "userRole"
            );


        if (
            !userEmail ||
            userRole !== "user"
        ) {

            window.location.href =
                "login.html";

            return;

        }



        /* =================================================
           USER
        ================================================== */

        const sidebarEmail =
            document.getElementById(
                "sidebarUserEmail"
            );

        const topbarName =
            document.getElementById(
                "topbarUserName"
            );


        if (sidebarEmail) {

            sidebarEmail.textContent =
                userEmail;

        }


        const prefix =
            userEmail
                .split("@")[0]
                .replace(/[._-]/g, " ");


        const displayName =
            prefix.replace(
                /\b\w/g,
                character =>
                    character.toUpperCase()
            );


        if (topbarName) {

            topbarName.textContent =
                displayName || "User";

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

        const menuButton =
            document.getElementById(
                "mobileMenuButton"
            );

        const closeButton =
            document.getElementById(
                "sidebarClose"
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
                ".sidebar-navigation .sidebar-link"
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        function () {

                            /*
                             * Do NOT use
                             * preventDefault().
                             * Links must navigate.
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

        document
            .getElementById(
                "logoutButton"
            )
            ?.addEventListener(
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
           GSAP
        ================================================== */

        if (
            typeof gsap !==
            "undefined"
        ) {

            gsap.fromTo(
                ".dashboard-topbar",
                {
                    y:
                        -20,

                    opacity:
                        0
                },
                {
                    y:
                        0,

                    opacity:
                        1,

                    duration:
                        .5,

                    ease:
                        "power3.out"
                }
            );


            gsap.fromTo(
                ".analytics-intro",
                {
                    y:
                        35,

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

                    delay:
                        .15,

                    ease:
                        "power4.out",

                    clearProps:
                        "transform,opacity"
                }
            );


            gsap.fromTo(
                ".analytics-stat-card",
                {
                    y:
                        30,

                    opacity:
                        0,

                    scale:
                        .97
                },
                {
                    y:
                        0,

                    opacity:
                        1,

                    scale:
                        1,

                    duration:
                        .6,

                    stagger:
                        .09,

                    delay:
                        .25,

                    ease:
                        "power3.out",

                    clearProps:
                        "transform,opacity"
                }
            );


            gsap.fromTo(
                ".analytics-panel",
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

                    delay:
                        .38,

                    ease:
                        "power3.out",

                    clearProps:
                        "transform,opacity"
                }
            );


            gsap.fromTo(
                ".analytics-insight-card",
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
                        .6,

                    stagger:
                        .12,

                    delay:
                        .5,

                    ease:
                        "power3.out",

                    clearProps:
                        "transform,opacity"
                }
            );

        }



        /* =================================================
           PERFORMANCE CHART
        ================================================== */

        const performanceCanvas =
            document.getElementById(
                "performanceChart"
            );


        if (
            performanceCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                performanceCanvas,
                {
                    type:
                        "line",

                    data: {

                        labels: [
                            "Week 1",
                            "Week 2",
                            "Week 3",
                            "Week 4"
                        ],

                        datasets: [

                            {
                                label:
                                    "This month",

                                data: [
                                    64,
                                    72,
                                    78,
                                    84
                                ],

                                borderColor:
                                    "#2563eb",

                                backgroundColor:
                                    "rgba(37,99,235,.10)",

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
                                    "#2563eb",

                                pointBorderColor:
                                    "#ffffff",

                                pointBorderWidth:
                                    2
                            },


                            {
                                label:
                                    "Previous",

                                data: [
                                    58,
                                    63,
                                    69,
                                    75
                                ],

                                borderColor:
                                    "#d0d5dd",

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

                                min:
                                    40,

                                max:
                                    100,

                                grid: {

                                    color:
                                        "#eef1f5"

                                },

                                border: {

                                    display:
                                        false

                                },

                                ticks: {

                                    color:
                                        "#98a2b3",

                                    font: {

                                        family:
                                            "Plus Jakarta Sans",

                                        size:
                                            11

                                    },

                                    callback:
                                        value =>
                                            value + "%"
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
                                        "#98a2b3",

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
           PROJECT STATUS DONUT
        ================================================== */

        const statusCanvas =
            document.getElementById(
                "statusChart"
            );


        if (
            statusCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                statusCanvas,
                {
                    type:
                        "doughnut",

                    data: {

                        labels: [
                            "In Progress",
                            "Completed",
                            "Review"
                        ],

                        datasets: [
                            {

                                data: [
                                    8,
                                    12,
                                    4
                                ],

                                backgroundColor: [
                                    "#635bff",
                                    "#2563eb",
                                    "#94a3b8"
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
                            "76%",

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



        /* =================================================
           WEEKLY ACTIVITY
        ================================================== */

        const activityCanvas =
            document.getElementById(
                "activityChart"
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
                        "bar",

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
                                    "Actions",

                                data: [
                                    132,
                                    188,
                                    171,
                                    225,
                                    244,
                                    156,
                                    168
                                ],

                                backgroundColor:
                                    "#2563eb",

                                borderRadius:
                                    8,

                                borderSkipped:
                                    false,

                                maxBarThickness:
                                    34

                            }

                        ]

                    },

                    options: {

                        responsive:
                            true,

                        maintainAspectRatio:
                            false,

                        plugins: {

                            legend: {

                                display:
                                    false

                            }

                        },

                        animation: {

                            duration:
                                1000,

                            easing:
                                "easeOutQuart"

                        },

                        scales: {

                            y: {

                                beginAtZero:
                                    true,

                                grid: {

                                    color:
                                        "#eef1f5"

                                },

                                border: {

                                    display:
                                        false

                                },

                                ticks: {

                                    color:
                                        "#98a2b3",

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
                                        "#98a2b3",

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

    }
);