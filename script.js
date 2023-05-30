    // let inputControl = document.querySelector('.input-control');
    // var error = document.querySelector('.error');
    // let btnEl = document.querySelector('.btn');
    let email = document.querySelector("#email");
    let emailDisplay = document.querySelector(".email-display")
    let successPage = document.querySelector(".success")
    let mainPage = document.querySelector("main")

    let form = document.querySelector('form')

    function showError(input, message) {
        const inputControl = input.parentElement;
        inputControl.className = "input-control errordisplay";
        const errormsg = inputControl.querySelector(".error")
        errormsg.innerText = message;
    }

    function showSuccess(input) {
        const inputControl = input.parentElement;
        inputControl.className = "input-control successdisplay";

    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (email.value === "") {
            showError(email, "email is required")

        } else if (!validateEmail(email.value)) {
            showError(email, "invalid email")
        } else {
            showSuccess(email)
            successPage.style.display = "flex";
            mainPage.style.display = "none";
            emailDisplay.innerText = input.value;
            // inputControl.classList.add("errordisplay");
        }

    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);

    }