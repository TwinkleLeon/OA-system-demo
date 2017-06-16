define(["text!tels/classManageTels/classAdd/classInfo.html", "text!tels/classManageTels/classAdd/classInfoTopType.html", "text!tels/classManageTels/classAdd/classTeacherList.html", "./classPic"], function (classInfoTpl, classInfoTopType, classTeacherListTpl, classPic) {
    return function (API, template, cs_id, ele) {
        ele = ele || ".createBox";
        $(ele).empty();
        var str1;
        var str2;
        var str3;
        API.getClassInfo(cs_id, function (x) {
            str1 = template.render(classInfoTpl, {
                x: x,
                cs_id: cs_id
            });
            API.getClassTopType(function (x) {
                str2 = template.render(classInfoTopType, {
                    x: x
                });
                var $str2 = $(str2);
                $str2.on("change", "#typeOne", function () {
                    API.getClassTwoType($(this).val(), function (x) {
                        var str = "";
                        x.forEach(function (value, index) {
                            str += "<option value=" + value.cg_id + ">" + value.cg_name + "<option>";
                        })
                        $(".typeTwo").html(str)
                    });
                });
                API.getTeacherList(function (x) {
                    str3 = template.render(classTeacherListTpl, {
                        x: x
                    });
                    $(str1).find(".typeBox").append($str2).end().find(".teacherBox").append(str3).on("change", ".teacherBTn", function () {

                    }).end().on("submit", "form", function () {
                        var data = decodeURIComponent($(this).serialize(), true);
                        API.getClassInfoSub(data);
                        if (ele != ".createBox") {
                            classPic(API, template, cs_id, ele);
                        } else {
                            $("#btnAddPic").trigger("click");
                        }
                        return false;
                    }).appendTo(ele);
                });
            });
        });
    }
})