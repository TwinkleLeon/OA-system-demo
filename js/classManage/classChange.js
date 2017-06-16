define(["text!tels/classManageTels/classChange.html"], function (classChange) {
    return function (API, template, id) {
        $(".modal.fade").remove();
        API.getClassChange(id, function (x) {
            var str = template.render(classChange, {
                x: x
            });
            $(str).appendTo("body").modal();
            $(".modal.fade").on("submit", "form", function () {
                var obj = {};
                var dataArr = decodeURIComponent($("form").serialize(), true).split("&").forEach(function (value) {
                    obj[value.split("=")[0]] = value.split("=")[1];
                });
                API.getClassSub(obj, function (x) {
                    $(".modal.fade").modal("toggle");
                    $("#btnClassTimeManage").trigger("click");
                });
                return false;
            });
        });
    }
})