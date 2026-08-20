

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const adminEmail =
            localStorage.getItem(
                "userEmail"
            );

        const adminRole =
            localStorage.getItem(
                "userRole"
            );


        if (
            !adminEmail ||
            adminRole !== "admin"
        ) {

            window.location.href =
                "login.html";

            return;

        }



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
                function (char) {

                    return char.toUpperCase();

                }
            );


        const sidebarEmail =
            document.getElementById(
                "sidebarAdminEmail"
            );

        const topbarName =
            document.getElementById(
                "topbarAdminName"
            );


        if (sidebarEmail) {

            sidebarEmail.textContent =
                adminEmail;

        }


        if (topbarName) {

            topbarName.textContent =
                displayName || "Admin";

        }


        const sidebar =
            document.getElementById(
                "analyticsSidebar"
            );

        const overlay =
            document.getElementById(
                "analyticsOverlay"
            );

        const menu =
            document.getElementById(
                "analyticsMobileMenu"
            );

        const close =
            document.getElementById(
                "analyticsSidebarClose"
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


        menu?.addEventListener(
            "click",
            openSidebar
        );


        close?.addEventListener(
            "click",
            closeSidebar
        );


        overlay?.addEventListener(
            "click",
            closeSidebar
        );



        document
            .querySelectorAll(
                ".analytics-navigation .analytics-nav-link"
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



        document
            .getElementById(
                "analyticsLogout"
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




        const updatedElement =
            document.getElementById(
                "lastUpdated"
            );


        function updateClock() {

            const now =
                new Date();


            const hours =
                String(
                    now.getHours()
                ).padStart(
                    2,
                    "0"
                );


            const minutes =
                String(
                    now.getMinutes()
                ).padStart(
                    2,
                    "0"
                );


            const seconds =
                String(
                    now.getSeconds()
                ).padStart(
                    2,
                    "0"
                );


            if (updatedElement) {

                updatedElement.textContent =
                    `${hours}:${minutes}:${seconds}`;

            }

        }


        updateClock();


        setInterval(
            updateClock,
            1000
        );




        const activeUsers =
            document.getElementById(
                "activeUsers"
            );


        let liveUserCount =
            9624;


        setInterval(
            function () {

                const change =
                    Math.random() > .5
                        ? 1
                        : -1;


                liveUserCount +=
                    change;


                if (liveUserCount < 9600) {

                    liveUserCount = 9600;

                }


                if (activeUsers) {

                    activeUsers.textContent =
                        liveUserCount.toLocaleString();

                }

            },
            4000
        );




        if (
            typeof gsap !==
            "undefined"
        ) {

            gsap.timeline({

                defaults: {

                    ease:
                        "power3.out"

                }

            })

            .from(
                ".analytics-topbar",
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
                ".analytics-page-header",
                {
                    y:
                        30,

                    opacity:
                        0,

                    duration:
                        .7
                },
                "-=.2"
            )

            .from(
                ".analytics-kpi",
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
                "-=.25"
            )

            .from(
                ".analytics-panel",
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
                ".analytics-insight-banner",
                {
                    y:
                        20,

                    opacity:
                        0,

                    duration:
                        .6
                },
                "-=.2"
            );



            /* Floating live indicator */

            gsap.to(
                ".analytics-live-pulse",
                {
                    scale:
                        1.08,

                    duration:
                        1.4,

                    repeat:
                        -1,

                    yoyo:
                        true,

                    ease:
                        "sine.inOut"
                }
            );

        }




        if (
            typeof Chart !==
            "undefined"
        ) {

            Chart.defaults.font.family =
                "Plus Jakarta Sans";

            Chart.defaults.color =
                "#9a8d82";

            Chart.defaults.font.size =
                11;

        }


        const activityCanvas =
            document.getElementById(
                "liveActivityChart"
            );


        let activityChart;


        if (
            activityCanvas &&
            typeof Chart !==
            "undefined"
        ) {


            activityChart =
                new Chart(
                    activityCanvas,
                    {

                        type:
                            "line",


                        data: {

                            labels: [
                                "00:00",
                                "04:00",
                                "08:00",
                                "10:00",
                                "12:00",
                                "14:00",
                                "16:00",
                                "18:00",
                                "20:00",
                                "22:00"
                            ],


                            datasets: [

                                {

                                    label:
                                        "Active Users",


                                    data: [
                                        2410,
                                        2180,
                                        4720,
                                        7010,
                                        8960,
                                        9624,
                                        9100,
                                        8460,
                                        7320,
                                        6310
                                    ],


                                    borderColor:
                                        "#b47e4f",


                                    backgroundColor:
                                        "rgba(180,126,79,.10)",


                                    fill:
                                        true,


                                    tension:
                                        .4,


                                    borderWidth:
                                        3,


                                    pointRadius:
                                        3,


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


                            interaction: {

                                intersect:
                                    false,

                                mode:
                                    "index"

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
                                                10

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
                                                10

                                        }

                                    }

                                }

                            }

                        }

                    }
                );

        }

        setInterval(
            function () {

                if (
                    !activityChart
                ) {

                    return;

                }


                const data =
                    activityChart.data
                        .datasets[0]
                        .data;


                const latest =
                    data[data.length - 1];


                const movement =
                    Math.floor(
                        Math.random() * 81
                    ) - 40;


                let nextValue =
                    latest +
                    movement;


                if (
                    nextValue < 4500
                ) {

                    nextValue = 4500;

                }


                if (
                    nextValue > 10000
                ) {

                    nextValue = 10000;

                }


                data.push(
                    nextValue
                );


                data.shift();


                activityChart.update(
                    "none"
                );

            },
            5000
        );




        const distributionCanvas =
            document.getElementById(
                "planDistributionChart"
            );


        if (
            distributionCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                distributionCanvas,
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

                                    "#d7c7b8",

                                    "#b47e4f",

                                    "#75513a"

                                ],


                                borderWidth:
                                    0,


                                hoverOffset:
                                    7

                            }

                        ]

                    },


                    options: {

                        responsive:
                            true,


                        maintainAspectRatio:
                            false,


                        cutout:
                            "75%",


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



  

        const hourlyCanvas =
            document.getElementById(
                "hourlyTrafficChart"
            );


        if (
            hourlyCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                hourlyCanvas,
                {

                    type:
                        "bar",


                    data: {

                        labels: [
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15",
                            "16",
                            "17",
                            "18"
                        ],


                        datasets: [

                            {

                                label:
                                    "Usage",


                                data: [
                                    42,
                                    65,
                                    98,
                                    127,
                                    156,
                                    181,
                                    168,
                                    149,
                                    141,
                                    126,
                                    113,
                                    95,
                                    76
                                ],


                                backgroundColor:
                                    "#b47e4f",


                                borderRadius:
                                    6,


                                borderSkipped:
                                    false,


                                maxBarThickness:
                                    26

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


                        scales: {

                            y: {

                                beginAtZero:
                                    true,

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
                                            10

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
                                            10

                                    }

                                }

                            }

                        }

                    }

                }
            );

        }




        const eventList =
            document.getElementById(
                "liveEventsList"
            );


        const eventTemplates = [

            {
                icon:
                    "bi-person-plus",

                className:
                    "blue",

                title:
                    "New user registered",

                description:
                    "newuser@company.com joined the platform"

            },


            {
                icon:
                    "bi-kanban",

                className:
                    "purple",

                title:
                    "Project created",

                description:
                    "Growth Dashboard project created"

            },


            {
                icon:
                    "bi-check-circle",

                className:
                    "green",

                title:
                    "Project completed",

                description:
                    "Marketing Automation completed"

            },


            {
                icon:
                    "bi-credit-card",

                className:
                    "orange",

                title:
                    "Subscription upgraded",

                description:
                    "Workspace upgraded to Pro"

            }

        ];


        let eventIndex =
            0;


        function addLiveEvent() {

            if (!eventList) {

                return;

            }


            const event =
                eventTemplates[
                    eventIndex %
                    eventTemplates.length
                ];


            eventIndex++;


            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "live-event";


            element.innerHTML = `

                <div class="live-event-icon ${event.className}">

                    <i class="bi ${event.icon}"></i>

                </div>


                <div class="live-event-content">

                    <strong>
                        ${event.title}
                    </strong>

                    <span>
                        ${event.description}
                    </span>

                </div>


                <small>
                    just now
                </small>

            `;


            eventList.insertBefore(
                element,
                eventList.firstChild
            );


            while (
                eventList.children.length >
                5
            ) {

                eventList.removeChild(
                    eventList.lastElementChild
                );

            }


            if (
                typeof gsap !==
                "undefined"
            ) {

                gsap.fromTo(
                    element,
                    {
                        x:
                            30,

                        opacity:
                            0
                    },
                    {
                        x:
                            0,

                        opacity:
                            1,

                        duration:
                            .45,

                        ease:
                            "power3.out"
                    }
                );

            }

        }


        setInterval(
            addLiveEvent,
            7000
        );



        document
            .querySelectorAll(
                ".chart-time button"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            document
                                .querySelectorAll(
                                    ".chart-time button"
                                )
                                .forEach(
                                    function (item) {

                                        item.classList.remove(
                                            "active"
                                        );

                                    }
                                );


                            button.classList.add(
                                "active"
                            );

                        }
                    );

                }
            );

    }
);