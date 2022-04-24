$(document).ready(function () {
    $(".lang-item").on("click", function () {
        var selection = $(this).find(".item-la").text();

        if (typeof (Cookies.get("lang")) != "undefined" && Cookies.get("lang") !== null) {
            Cookies.remove("lang");
            Cookies.set("lang", selection, { expires: 365, path: "" });
            location.reload();
        }
        else {
            Cookies.set("lang", selection, { expires: 365, path: "" });
            location.reload();
        }
    })
});