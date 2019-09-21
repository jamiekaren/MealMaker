//quick loading check
console.log("users js working!");

$(document).ready(() => {
    // this file does a GET request to figure out which user is logged in
    // and it updates the HTML on the page

    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });
});