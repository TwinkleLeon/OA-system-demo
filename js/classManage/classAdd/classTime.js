define(["text!tels/classManageTels/classAdd/classTime.html", "text!tels/classManageTels/classAdd/classTimeAdd.html", "./classTimeRender"], function (classInfoTpl, classTimeAddtpl, classTimeRender) {
    return function (API, template, cs_id,ele) {
        ele = ele || ".createBox";
        $(ele).empty();
        var str = template.render(classTimeAddtpl, {
            cs_id: cs_id
        });
        $(classInfoTpl).on("click", ".addClass", function () {
            $(str).on("submit", "form", function () {
                API.getClassSub($(this).serialize(), function (x) {
                    console.log(x); 
                });
                $(".modal.fade").modal("hide");
                classTimeRender(API, template, cs_id);
                return false;
            }).append("body").modal();
        })
        .on("click",".confBtn",function(){
            $("#btnClassTimeManage").trigger("click");
        }).appendTo(ele);
    }
})