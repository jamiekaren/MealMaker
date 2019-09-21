//quick check file is loading
console.log("Login js working!");

//when page is loaded
$(document).ready(() => {

    // This gets our values from our form or "user info"
    let loginForm = $("form.login");
    let emailInput = $("input#email-input");
    let passwordInput = $("input#password-input");

    // validate form when it's submitted
    loginForm.on("submit", (event) => {
        event.preventDefault();

        // save user info in an object
        let userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        // check to see if either are false
        if (!userData.email || !userData.password) {
            return;
        }

        // if we have both, run loginUser function
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    //we have user email and password, pass through as parameters into function
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then((data) => {
            window.location.replace(data);
            // log any errors
        }).catch((err) => {
            console.log(err);
        });
    }

});