

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
                function (character) {

                    return character.toUpperCase();

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
                "reportsSidebar"
            );

        const overlay =
            document.getElementById(
                "reportsOverlay"
            );

        const menu =
            document.getElementById(
                "reportsMobileMenu"
            );

        const close =
            document.getElementById(
                "reportsSidebarClose"
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
                ".reports-navigation .reports-nav-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            /*
                             * Navigation is intentionally
                             * not prevented.
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


        document
            .getElementById(
                "reportsLogout"
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




        const startDate =
            document.getElementById(
                "startDate"
            );

        const endDate =
            document.getElementById(
                "endDate"
            );


        const today =
            new Date();


        const previousMonth =
            new Date();


        previousMonth.setMonth(
            today.getMonth() - 1
        );


        function formatDate(
            date
        ) {

            return date
                .toISOString()
                .split("T")[0];

        }


        if (startDate) {

            startDate.value =
                formatDate(
                    previousMonth
                );

        }


        if (endDate) {

            endDate.value =
                formatDate(
                    today
                );

        }




        const refreshTime =
            document.getElementById(
                "reportRefreshTime"
            );


        function updateRefreshTime() {

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


            refreshTime.textContent =
                `${hours}:${minutes}`;

        }


        updateRefreshTime();




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
                ".reports-topbar",
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
                ".reports-page-header",
                {
                    y:
                        30,

                    opacity:
                        0,

                    duration:
                        .65
                },
                "-=.2"
            )

            .from(
                ".reports-generator",
                {
                    y:
                        25,

                    opacity:
                        0,

                    duration:
                        .55
                },
                "-=.25"
            )

            .from(
                ".reports-stat",
                {
                    y:
                        20,

                    opacity:
                        0,

                    scale:
                        .98,

                    stagger:
                        .08,

                    duration:
                        .5
                },
                "-=.2"
            )

            .from(
                ".reports-panel",
                {
                    y:
                        25,

                    opacity:
                        0,

                    stagger:
                        .1,

                    duration:
                        .55
                },
                "-=.25"
            )

            .from(
                ".reports-insight",
                {
                    y:
                        20,

                    opacity:
                        0,

                    duration:
                        .55
                },
                "-=.2"
            );




            document
                .querySelectorAll(
                    ".reports-stat"
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
                                            .25
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
                                            .25
                                    }
                                );

                            }
                        );

                    }
                );

        }



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



        const performanceCanvas =
            document.getElementById(
                "performanceReportChart"
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
                                    "Performance",

                                data: [
                                    67,
                                    72,
                                    79,
                                    84.6
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
                                    "Previous",

                                data: [
                                    60,
                                    64,
                                    69,
                                    74
                                ],

                                borderColor:
                                    "#d8ccc0",

                                borderWidth:
                                    2,

                                borderDash: [
                                    6,
                                    5
                                ],

                                pointRadius:
                                    0,

                                fill:
                                    false,

                                tension:
                                    .4

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

                                min:
                                    40,

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
                                            10

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

                                }

                            }

                        }

                    }

                }
            );

        }




        const growthCanvas =
            document.getElementById(
                "userGrowthReportChart"
            );


        if (
            growthCanvas &&
            typeof Chart !==
            "undefined"
        ) {

            new Chart(
                growthCanvas,
                {

                    type:
                        "bar",

                    data: {

                        labels: [
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug"
                        ],

                        datasets: [

                            {

                                label:
                                    "Users",

                                data: [
                                    7420,
                                    8260,
                                    9140,
                                    10120,
                                    11340,
                                    12840
                                ],

                                backgroundColor:
                                    "#b47e4f",

                                borderRadius:
                                    6,

                                borderSkipped:
                                    false,

                                maxBarThickness:
                                    30

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
                                            9

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

                                }

                            }

                        }

                    }

                }
            );

        }




        const generateButton =
            document.getElementById(
                "generateReport"
            );

        const message =
            document.getElementById(
                "reportGeneratorMessage"
            );


        generateButton?.addEventListener(
            "click",
            function () {


                const reportType =
                    document.getElementById(
                        "reportType"
                    )?.value;


                const format =
                    document.getElementById(
                        "reportFormat"
                    )?.value;


                const start =
                    document.getElementById(
                        "startDate"
                    )?.value;


                const end =
                    document.getElementById(
                        "endDate"
                    )?.value;


                if (
                    !start ||
                    !end
                ) {

                    showMessage(
                        "Please select both start and end dates.",
                        true
                    );

                    return;

                }


                if (
                    new Date(start) >
                    new Date(end)
                ) {

                    showMessage(
                        "Start date cannot be later than the end date.",
                        true
                    );

                    return;

                }


                const reportNames = {

                    performance:
                        "Performance Report",

                    users:
                        "User Growth Report",

                    revenue:
                        "Revenue Report",

                    system:
                        "System Health Report",

                    full:
                        "Full Platform Report"

                };


                const reportName =
                    reportNames[
                        reportType
                    ] ||
                    "Platform Report";


                generateButton.disabled =
                    true;


                generateButton.innerHTML = `

                    <span class="report-spinner"></span>

                    Generating...

                `;


                setTimeout(
                    function () {


                        generateButton.disabled =
                            false;


                        generateButton.innerHTML = `

                            <i class="bi bi-lightning-charge"></i>

                            Generate Report

                        `;


                        showMessage(
                            `${reportName} generated successfully as ${format.toUpperCase()}.`,
                            false
                        );


                        addReportRow(
                            reportName,
                            format
                        );


                    },
                    1200
                );

            }
        );



        /* =================================================
           MESSAGE
        ================================================== */

        function showMessage(
            text,
            isError
        ) {

            if (!message) {

                return;

            }


            message.textContent =
                text;


            message.classList.add(
                "show"
            );


            message.style.color =
                isError
                    ? "#d14343"
                    : "#18864b";


            if (
                typeof gsap !==
                "undefined"
            ) {

                gsap.fromTo(
                    message,
                    {
                        opacity:
                            0,

                        y:
                            6
                    },
                    {
                        opacity:
                            1,

                        y:
                            0,

                        duration:
                            .3
                    }
                );

            }

        }



        /* =================================================
           ADD REPORT ROW
        ================================================== */

        function addReportRow(
            name,
            format
        ) {

            const tableBody =
                document.getElementById(
                    "reportsTableBody"
                );


            if (!tableBody) {

                return;

            }


            const extensionClass = {

                pdf:
                    "pdf",

                csv:
                    "csv",

                xlsx:
                    "xlsx"

            }[format] || "pdf";


            const icon = {

                pdf:
                    "bi-file-earmark-pdf",

                csv:
                    "bi-filetype-csv",

                xlsx:
                    "bi-file-earmark-spreadsheet"

            }[format] ||
                "bi-file-earmark-text";


            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>

                    <div class="report-name">

                        <div class="report-file-icon ${extensionClass}">

                            <i class="bi ${icon}"></i>

                        </div>

                        <div>

                            <strong>
                                ${name}
                            </strong>

                            <span>
                                New generated report
                            </span>

                        </div>

                    </div>

                </td>


                <td>
                    Generated
                </td>


                <td>
                    Just now
                </td>


                <td>

                    <span class="format-pill ${extensionClass}">
                        ${format.toUpperCase()}
                    </span>

                </td>


                <td>

                    <span class="status-pill completed">
                        Completed
                    </span>

                </td>


                <td>

                    <button
                        type="button"
                        class="report-action"
                    >

                        <i class="bi bi-download"></i>

                    </button>

                </td>

            `;


            tableBody.insertBefore(
                row,
                tableBody.firstElementChild
            );


            if (
                typeof gsap !==
                "undefined"
            ) {

                gsap.fromTo(
                    row,
                    {
                        y:
                            -15,

                        opacity:
                            0
                    },
                    {
                        y:
                            0,

                        opacity:
                            1,

                        duration:
                            .4,

                        ease:
                            "power3.out"
                    }
                );

            }

        }



        /* =================================================
           EXPORT BUTTONS
        ================================================== */

        document
            .querySelectorAll(
                ".small-export-btn, .report-action"
            )
            .forEach(
                function (button) {

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


                            showMessage(
                                "Export prepared successfully.",
                                false
                            );

                        }
                    );

                }
            );



        /* =================================================
           TOPBAR BUTTON ANIMATION
        ================================================== */

        document
            .querySelectorAll(
                ".reports-topbar-icon"
            )
            .forEach(
                function (button) {

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

    }
);