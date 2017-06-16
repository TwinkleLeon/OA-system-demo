$(function () {
    $("form").on("submit", function () {
        var formData = $("form").serialize();
        formData = decodeURIComponent(formData, true);
        $.ajax({
            type: "post",
            url: "/api/login",
            data:formData,
            success: function (x) {
                var userName = x.result.tc_name;
                var userIcon = x.result.tc_avatar;
                $.cookie("tc_name", userName);
                $.cookie("tc_icon", userIcon);
                window.location.href = "index.html";
            },
            error: function () {
                $(".userName").val("")
                $(".userPas").val("");
                alert("用户名或密码错误,请重新输入")
            }
        })
        return false;
    });
})