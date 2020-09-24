$(document).ready(() => {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerInput").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $(".devour").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).attr("data-id");
        console.log(id);


        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $(".delete").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).attr("data-id");
        console.log(id);


        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                // console.log("created new burger");
                location.reload();
            }
        );
    });
});