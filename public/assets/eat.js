$(document).ready(function() {

var BurgerList = [];

getBurgers();

getBurgers = () => {
    $.get("/api/burger", function(data) {
        BurgerList = data;
        initilizeRows();
    });
};

initializeRows = () => {
    $("#burgers").empty();
    $("#burgers").prepend(BurgerList);
};

addBurger = () => {
    event.preventDefault();
    var burger = {
        name: $("#text-enter-button").val().trim()
    };

    $.post("/api/burger", burger, getBurgers);
    $("#text-enter-button").val("");
}



$(document).on("click", "#submit", addBurger);
});