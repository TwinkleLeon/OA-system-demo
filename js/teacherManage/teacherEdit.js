define(["text!tels/teacherManageTels/teacherEdit.html"], function (teacherEditTpl) {
    return function (API, template, tc_id) {
        API.getTeacherEdit(tc_id, function (x) {
            $(".showPart").empty();
            var str = template.render(teacherEditTpl, {
                x: x
            });
            $(str).on("submit", "form", function () {
                API.getTeacherUp(decodeURIComponent($(this).serialize(), true), function (x) {
                    $("#btnTeacherManage").trigger("click");
                });
                return false;
            }).find(".form_datetime").datetimepicker({
            format: "dd MM yyyy",
            autoclose: true,
            todayBtn: true,
            minView: 2,
            weekStart:1,
            autoclose:true,
            todayHighlight: true,
            language: "zh-CN"
        }).end().appendTo(".showPart");
        })
    }
})