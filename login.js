

document.addEventListener(
    "DOMContentLoaded",
    function () {




        const loginForm =
            document.getElementById(
                "loginForm"
            );

        const emailInput =
            document.getElementById(
                "loginEmail"
            );

        const passwordInput =
            document.getElementById(
                "loginPassword"
            );

        const passwordToggle =
            document.getElementById(
                "passwordToggle"
            );

        const passwordToggleIcon =
            passwordToggle?.querySelector(
                "i"
            );

        const message =
            document.getElementById(
                "loginMessage"
            );

        const roleButtons =
            document.querySelectorAll(
                ".role-button"
            );


        let selectedRole =
            "user";




        if (
            typeof gsap !== "undefined"
        ) {

            const timeline =
                gsap.timeline({
                    defaults: {
                        ease:
                            "power4.out"
                    }
                });


            timeline

                .from(
                    ".login-card",
                    {
                        y: 50,

                        opacity: 0,

                        scale: .97,

                        duration:
                            .8
                    }
                )

                .from(
                    ".back-home",
                    {
                        y: 15,

                        opacity: 0,

                        duration:
                            .4
                    },
                    "-=.4"
                )

                .from(
                    ".login-logo",
                    {
                        y: 20,

                        opacity: 0,

                        duration:
                            .5
                    },
                    "-=.25"
                )

                .from(
                    ".login-heading > *",
                    {
                        y: 20,

                        opacity: 0,

                        duration:
                            .45,

                        stagger:
                            .08
                    },
                    "-=.25"
                )

                .from(
                    ".role-selector",
                    {
                        y: 20,

                        opacity: 0,

                        duration:
                            .45
                    },
                    "-=.2"
                )

                .from(
                    ".login-field",
                    {
                        y: 15,

                        opacity: 0,

                        duration:
                            .4,

                        stagger:
                            .08
                    },
                    "-=.15"
                );

        }


        roleButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        roleButtons.forEach(
                            currentButton => {

                                currentButton.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        selectedRole =
                            button.dataset.role;


                        if (message) {

                            message.textContent =
                                "";

                        }



                        if (
                            typeof gsap !==
                            "undefined"
                        ) {

                            gsap.fromTo(
                                button,
                                {
                                    scale:
                                        .96
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

        passwordToggle?.addEventListener(
            "click",
            function () {

                const isPassword =
                    passwordInput.type ===
                    "password";


                if (isPassword) {

                    passwordInput.type =
                        "text";

                    passwordToggleIcon.className =
                        "bi bi-eye-slash";

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    passwordInput.type =
                        "password";

                    passwordToggleIcon.className =
                        "bi bi-eye";

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );




        loginForm?.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();



                if (
                    !loginForm.checkValidity()
                ) {

                    loginForm.reportValidity();

                    return;

                }


                const email =
                    emailInput.value.trim();

                const password =
                    passwordInput.value.trim();


                if (
                    password.length < 6
                ) {

                    showMessage(
                        "Password must contain at least 6 characters.",
                        true
                    );

                    return;

                }



                localStorage.setItem(
                    "userEmail",
                    email
                );


                localStorage.setItem(
                    "userRole",
                    selectedRole
                );



                localStorage.setItem(
                    "loginTime",
                    new Date().toISOString()
                );



                showMessage(
                    `Login successful. Redirecting to ${capitalize(
                        selectedRole
                    )} dashboard...`,
                    false
                );


                if (
                    typeof gsap !==
                    "undefined"
                ) {

                    gsap.to(
                        ".login-submit",
                        {
                            scale:
                                .97,

                            duration:
                                .15,

                            yoyo:
                                true,

                            repeat:
                                1
                        }
                    );

                }



                setTimeout(
                    function () {

                        if (
                            selectedRole ===
                            "admin"
                        ) {

                            window.location.href =
                                "admindashboard.html";

                        } else {

                            window.location.href =
                                "userdashboard.html";

                        }

                    },
                    700
                );

            }
        );




        function showMessage(
            text,
            isError
        ) {

            if (!message) {
                return;
            }


            message.textContent =
                text;


            message.style.color =
                isError
                    ? "#dc2626"
                    : "#16a34a";


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




        function capitalize(
            value
        ) {

            return value
                .charAt(0)
                .toUpperCase() +
                value.slice(1);

        }

    }
);