define(["text!tels/classCategoryTels/classCategory.html", "classCategory/add","classCategory/edit" ], function (classCategoryTel,add,edit) {
    return function (template) {
        //课程分类
        $(".showPart").empty();
        $.get("/api/category", function (x) {
            if (x.code == 200) {
                var temStr = template.render(classCategoryTel, {
                    result: x.result
                });
                $(temStr).on("click", ".btnAdd", function () {
                    add(template);
                }).
                on("click", ".btnEdit", function () {
                    var thisId = $(this).attr("data-id");
                    edit(thisId,template);
                }).appendTo(".showPart");
            }
        })
    }
})