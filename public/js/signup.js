// quick check file is loading
console.log("signup js loading!");


// when page loads
$(document).ready(function () {

    // get our forms and inputs and store as variables to use below
    var signUpForm = $("form.signup");
    var emailInput = $("input#sign");
    var passwordInput = $("input#pass");

    // when signup button is clicked, validate

    signUpForm.on("submit", function (event) {
        event.preventDefault();

        //collect user submission values in an object from variables above
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        //check if false
        if (!userData.email || !userData.password) {
            return;
        }

        // if we have both, run signup function and empty values, this is all the same as login
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // signup function for posting to the route, if success redirect to users page
    //otherwise log errors


    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            // catch errors
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);

    }
});