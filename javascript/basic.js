$("#cart").on("click", function () {
    if ($(".shopping-container")[0].style.display == "block") {
        $(".shopping-container")[0].style.display = "none";
    }
    else {
        $(".shopping-container")[0].style.display = "block";
    }
});
