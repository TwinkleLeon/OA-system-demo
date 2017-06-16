define(["text!tels/classManageTels/classAdd/classPic.html", "assets/uploadify/jquery.uploadify.min"], function (classPicTpl) {
    return function (API, template, cs_id, ele) {
        ele = ele || ".createBox";
        $(ele).empty();
        API.getClassPic(cs_id, function (x) {
            $(template.render(classPicTpl, {
                    x: x
                }))
                .on("click", ".jumb", function () {
                    $("#btnAddTime").trigger("click");
                }).appendTo(ele);
            $("#picFile").uploadify({
                'fileObjName': 'cs_cover_original',
                "formData": {
                    cs_id: cs_id
                },
                "swf": 'js/assets/uploadify/uploadify.swf',
                "uploader": '/api/uploader/cover',
                "fileTypeExts": '*.gif; *.jpg; *.png',
                'onUploadComplete': function (file) {
                    if (ele == ".createBox") {
                        $("#btnAddTime").trigger("click");
                    } else {
                        $("#btnClassTimeManage").trigger("click");
                    }
                }
            });
        })
    }
})