

document.addEventListener(
    "DOMContentLoaded",
    function () {


    

        const roleButtons =
            document.querySelectorAll(
                ".role-option"
            );


        roleButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        roleButtons.forEach(
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




        const passwordToggles =
            document.querySelectorAll(
                ".password-toggle"
            );


        passwordToggles.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const targetId =
                            button.dataset.target;


                        const input =
                            document.getElementById(
                                targetId
                            );


                        if (!input) {

                            return;

                        }


                        const icon =
                            button.querySelector(
                                "i"
                            );


                        if (
                            input.type ===
                            "password"
                        ) {

                            input.type =
                                "text";


                            icon.classList.remove(
                                "bi-eye"
                            );


                            icon.classList.add(
                                "bi-eye-slash"
                            );


                            button.setAttribute(
                                "aria-label",
                                "Hide password"
                            );

                        } else {

                            input.type =
                                "password";


                            icon.classList.remove(
                                "bi-eye-slash"
                            );


                            icon.classList.add(
                                "bi-eye"
                            );


                            button.setAttribute(
                                "aria-label",
                                "Show password"
                            );

                        }

                    }
                );

            }
        );




        const form =
            document.getElementById(
                "signupForm"
            );


        form?.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const fields = [

                    document.getElementById(
                        "fullName"
                    ),

                    document.getElementById(
                        "email"
                    ),

                    document.getElementById(
                        "phone"
                    ),

                    document.getElementById(
                        "company"
                    ),

                    document.getElementById(
                        "password"
                    ),

                    document.getElementById(
                        "confirmPassword"
                    )

                ];


                let valid =
                    true;


                fields.forEach(
                    function (field) {

                        if (!field) {

                            return;

                        }


                        const wrapper =
                            field.closest(
                                ".input-wrapper"
                            );


                        if (
                            field.value.trim() ===
                            ""
                        ) {

                            wrapper?.classList.add(
                                "error"
                            );

                            valid =
                                false;

                        } else {

                            wrapper?.classList.remove(
                                "error"
                            );

                        }

                    }
                );


                const terms =
                    document.getElementById(
                        "terms"
                    );


                if (
                    terms &&
                    !terms.checked
                ) {

                    valid =
                        false;

                }


                const password =
                    document.getElementById(
                        "password"
                    );

                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    );


                if (
                    password &&
                    confirmPassword &&
                    password.value !==
                    confirmPassword.value
                ) {

                    confirmPassword
                        .closest(
                            ".input-wrapper"
                        )
                        ?.classList.add(
                            "error"
                        );

                    valid =
                        false;

                }


                if (!valid) {

                    if (
                        typeof gsap !==
                        "undefined"
                    ) {

                        gsap.fromTo(
                            ".signup-form",
                            {
                                x:
                                    -5
                            },
                            {
                                x:
                                    0,

                                duration:
                                    .08,

                                repeat:
                                    5,

                                yoyo:
                                    true

                            }
                        );

                    }


                    return;

                }



                const button =
                    document.querySelector(
                        ".signup-button"
                    );


                if (button) {

                    const original =
                        button.innerHTML;


                    button.innerHTML = `

                        <span>
                            Account Ready
                        </span>

                        <span class="button-arrow">

                            <i class="bi bi-check2"></i>

                        </span>

                    `;


                    button.style.background =
                        "#16a34a";


                    setTimeout(
                        function () {

                            button.innerHTML =
                                original;

                            button.style.background =
                                "";

                        },
                        1800
                    );

                }

            }
        );




        document
            .querySelectorAll(
                ".input-wrapper input"
            )
            .forEach(
                function (input) {

                    input.addEventListener(
                        "input",
                        function () {

                            this.closest(
                                ".input-wrapper"
                            )?.classList.remove(
                                "error"
                            );

                        }
                    );

                }
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
                ".signup-card",
                {
                    y:
                        35,

                    opacity:
                        0,

                    duration:
                        .7
                }
            )

            .from(
                ".back-home",
                {
                    x:
                        -15,

                    opacity:
                        0,

                    duration:
                        .35
                },
                "-=.35"
            )

            .from(
                ".signup-logo",
                {
                    y:
                        -15,

                    opacity:
                        0,

                    duration:
                        .4
                },
                "-=.2"
            )

            .from(
                ".signup-heading",
                {
                    y:
                        20,

                    opacity:
                        0,

                    duration:
                        .5
                },
                "-=.2"
            )

            .from(
                ".role-option",
                {
                    y:
                        15,

                    opacity:
                        0,

                    stagger:
                        .08,

                    duration:
                        .4
                },
                "-=.2"
            )

            .from(
                ".form-group",
                {
                    y:
                        15,

                    opacity:
                        0,

                    stagger:
                        .04,

                    duration:
                        .35
                },
                "-=.2"
            )

            .from(
                ".terms-row, .signup-button, .login-link",
                {
                    y:
                        12,

                    opacity:
                        0,

                    duration:
                        .35
                },
                "-=.15"
            );




            gsap.to(
                ".signup-orb-one",
                {
                    x:
                        25,

                    y:
                        15,

                    duration:
                        5,

                    repeat:
                        -1,

                    yoyo:
                        true,

                    ease:
                        "sine.inOut"
                }
            );


            gsap.to(
                ".signup-orb-two",
                {
                    x:
                        -20,

                    y:
                        -15,

                    duration:
                        6,

                    repeat:
                        -1,

                    yoyo:
                        true,

                    ease:
                        "sine.inOut"
                }
            );

        }

    }
);