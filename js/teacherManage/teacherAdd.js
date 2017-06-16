define(["text!tels/teacherManageTels/teacherAdd.html"], function (teacherAddTpl) {
    return function (API, template) {
        $(teacherAddTpl).find(".form_datetime").datetimepicker({
            format: "dd MM yyyy",
            autoclose: true,
            todayBtn: true,
            minView: 2,
            weekStart:1,
            autoclose:true,
            todayHighlight: true,
            language: "zh-CN"
        }).end().on("submit", "form", function () {
            var str = decodeURIComponent($(this).serialize(), true);
            API.getTeacherAdd(str, function (x) {
                $(".modal.fade.in").modal("hide");
                $("#btnTeacherManage").trigger("click");
            });
            return false;
        }).appendTo("body").modal();
    }
});