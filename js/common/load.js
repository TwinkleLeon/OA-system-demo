define(["text!tels/load.html"], function (loadTpl) {
    return {
        add: function () {
            $(loadTpl).appendTo("body").modal();
        },
        remove: function () {
            $(".modal.fade").modal("hide");
        }
    }
})