define(["text!tels/userCenterTels/userCenter.html", "assets/uploadify/jquery.uploadify.min", "ueditAll", "ueditCfg"], function (userCenterTpl) {
    return function (API, template) {
        API.getUserMessage(function (x) {
            $(template.render(userCenterTpl, {
                    x: x
                })).find(".birthSet").datetimepicker({
                    format: "yyyy MM dd",
                    autoclose: true,
                    todayBtn: true,
                    minView: 2,
                    weekStart: 1,
                    autoclose: true,
                    todayHighlight: true,
                    language: "zh-CN"
                }).end()
                .on("submit", "form", function () {
                    API.getUserUp(decodeURIComponent($(this).serialize(), true), function (x) {
                        console.log(x);
                    });
                    $(".modal.fade").modal("hide");
                    return false;
                }).appendTo("body").modal();
            $("#picFile").uploadify({
                'fileObjName': 'tc_avatar',
                "swf": 'js/assets/uploadify/uploadify.swf',
                "uploader": '/api/uploader/avatar',
                "fileTypeExts": '*.gif; *.jpg; *.png',
                'onUploadComplete': function (file) {}
            });
        })
    }
})