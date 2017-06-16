define(["text!tels/classCategoryTels/editList.html"], function (editListTep) {
    return function (cg_id,template) {
        $(".modal.fade").remove();
        $.get("/api/category/edit", {
            cg_id: cg_id
        }, function (x) {
            if (x.code != 200) {
                console.log(x.msg);
            };
            var topStr = template.render(editListTep, {
                result: x.result
            });
            $(topStr).on("submit", "form", function () {
                var data = $(this).serialize();
                $.post("/api/category/modify", data, function (x) {
                    if (x.code != 200) {
                        console.log(x.msg);
                    };
                    $("#btnClassCategory").click();
                    $(".modal.fade").modal("hide");
                });
                return false;
            }).appendTo("body").modal("toggle");
        });
    };
})