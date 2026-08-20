document.addEventListener(
    "DOMContentLoaded",
    function () {

      
        const email =
            localStorage.getItem(
                "userEmail"
            );

        const role =
            localStorage.getItem(
                "userRole"
            );


        if (
            !email ||
            role !== "user"
        ) {

            window.location.href =
                "login.html";

            return;

        }



        document
            .getElementById(
                "sidebarUserEmail"
            )
            .textContent = email;


        const prefix =
            email
                .split("@")[0]
                .replace(/[._-]/g," ");


        const userName =
            prefix
                .replace(
                    /\b\w/g,
                    c => c.toUpperCase()
                );


        document
            .getElementById(
                "topbarUserName"
            )
            .textContent =
            userName || "User";



        const sidebar =
            document.getElementById(
                "dashboardSidebar"
            );

        const overlay =
            document.getElementById(
                "dashboardOverlay"
            );

        const menu =
            document.getElementById(
                "mobileMenuButton"
            );

        const close =
            document.getElementById(
                "sidebarClose"
            );


        function openMenu() {

            sidebar.classList.add(
                "open"
            );

            overlay.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }


        function closeMenu() {

            sidebar.classList.remove(
                "open"
            );

            overlay.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "";

        }


        menu?.addEventListener(
            "click",
            openMenu
        );


        close?.addEventListener(
            "click",
            closeMenu
        );


        overlay?.addEventListener(
            "click",
            closeMenu
        );


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



        const search =
            document.getElementById(
                "projectSearch"
            );

        const statusFilter =
            document.getElementById(
                "projectStatusFilter"
            );

        const cards =
            document.querySelectorAll(
                ".project-card"
            );

        const noProjects =
            document.getElementById(
                "noProjects"
            );


        function filterProjects() {

            const searchText =
                search.value
                    .trim()
                    .toLowerCase();


            const status =
                statusFilter.value;


            let visibleCount = 0;


            cards.forEach(
                card => {

                    const name =
                        card.dataset.name
                            .toLowerCase();

                    const cardStatus =
                        card.dataset.status;


                    const matchesSearch =
                        name.includes(
                            searchText
                        );


                    const matchesStatus =
                        status === "all" ||
                        cardStatus === status;


                    if (
                        matchesSearch &&
                        matchesStatus
                    ) {

                        card.style.display =
                            "";

                        visibleCount++;

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );


            if (
                visibleCount === 0
            ) {

                noProjects.classList.add(
                    "show"
                );

            } else {

                noProjects.classList.remove(
                    "show"
                );

            }

        }


        search?.addEventListener(
            "input",
            filterProjects
        );


        statusFilter?.addEventListener(
            "change",
            filterProjects
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
                ".projects-heading",
                {
                    y:
                        25,

                    opacity:
                        0,

                    duration:
                        .6
                },
                "-=.2"
            )

            .from(
                ".project-stat",
                {
                    y:
                        20,

                    opacity:
                        0,

                    stagger:
                        .08,

                    duration:
                        .5
                },
                "-=.25"
            )

            .from(
                ".project-toolbar",
                {
                    y:
                        20,

                    opacity:
                        0,

                    duration:
                        .5
                },
                "-=.25"
            )

            .from(
                ".project-card",
                {
                    y:
                        30,

                    opacity:
                        0,

                    stagger:
                        .10,

                    duration:
                        .55
                },
                "-=.25"
            );



            gsap.fromTo(
                ".progress-track > span",
                {
                    width:
                        "0%"
                },
                {
                    width:
                        function(index, target) {
                            return target.style.width;
                        },

                    duration:
                        1.1,

                    stagger:
                        .12,

                    ease:
                        "power3.out",

                    delay:
                        .6
                }
            );

        }

    }
);