define(["text!tels/classCategoryTels/addList.html"], function (addListTep) {
    return function (template) {
        $(".modal.fade").remove();
        $.get("/api/category/top", function (x) {
            var topStr = template.render(addListTep, {
                result: x.result
            });
            $(topStr).appendTo("body").modal("show").on("submit", "form", function () {
                var data = $(this).serialize();
                $.post("/api/category/add", data, function (x) {
                    $("#btnClassCategory").click();
                    $(".modal.fade").modal("hide");
                });
                return false;
            });
        });

    };
})