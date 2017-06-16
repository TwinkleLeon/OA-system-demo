define(["text!tels/classManageTels/classAdd/classCreate.html", "./classAdd"], function (classCreateTpl, classAdd) {
    return function (API, template) {
        $(".showPart").empty();
        $(template.render(classCreateTpl)).on("submit", "form", function () {
            var cs_name = $(this).serialize().split("=")[1];
            cs_name = decodeURIComponent(cs_name, true);
            API.getClassCreate(cs_name, function (x) {
                $(".showPart").empty();
                classAdd(API, template, x.cs_id);
            });
            return false;
        }).appendTo(".showPart");

    }
})