require.config({
    baseUrl: "./js",
    paths: {
        jq: "lib/jquery-3.1.1.min",
        jqCheck: "common/checkLogin",
        jqCook: "lib/jquery.cookie",
        jqRq: "lib/require",
        jqLogOut: "common/loginOut",
        text: "lib/text",
        tmp: "lib/template-web",
        bsJs: "assets/bootstrap-3.3.7-dist/js/bootstrap.min",
        bsTimeJs: "assets/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min",
        bsTimelang: "assets/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN"
    },
    shim: {
        log: {
            deps: ["jq"]
        },
        bsJs: {
            deps: ["jq"]
        },
        bsTimeJs: {
            deps: ["bsJs"]
        },
        bsTimelang: {
            deps: ["bsTimeJs"]
        }

    },
});
require(["bsJs", "bsTimeJs", "bsTimelang", "text!tels/ChartManageTel.html", "tmp", "classCategory/list", "classManage/classList", "classManage/classEdit", "classManage/classChange", "classManage/classAdd/classCreate", "teacherManage/teacherList", "common/API", "common/load", "jqCheck", "jqLogOut"], function (a, b, c, ChartManageTel, template, list, classManageList, classManageEdit, classManageChange, classCreate, teacherList, API, load) {
    var currentTime;
    var durationTime = 1001;
    // $.ajaxSetup({
    //     beforeSend: function (xhr) {
    //         load.add();
    //     },
    //     complete: function (xhr) {
    //         load.remove();
    //     }
    // })
    var userIcon = $.cookie("tc_icon");
    var userName = $.cookie("tc_name");
    $(".box .leftNav .top #icon").attr("src", userIcon);
    $(".box .leftNav .top .name").text(userName);
    //讲师管理
    $("#btnTeacherManage").on("click", function () {
        $(".showPart").empty();
        $(this).siblings().removeClass("active").end().addClass("active");
        teacherList(API, template);
    });
    //默认加载讲师管理模块
    // $("#btnTeacherManage").trigger("click");
    //课程管理
    $("#btnClassManage").on("click", function () {
        $(".showPart").empty();
        $(this).siblings().removeClass("active").end().addClass("active").next("li").slideToggle();
    });
    //课程管理列表
    $("#btnClassTimeManage").on("click", function () {
        classManageList(API, template);
    });
    //课程管理添加
    $("#btnClassAddManage").on("click", function () {
        classCreate(API, template);
    })
    // //课程分类添加
    //  $("#btnClassAddManage").on("click",function(){
    //     classManageAdd(API,template);
    // })

    //课程分类
    $("#btnClassCategory").on("click", function () {
        $(this).siblings().removeClass("active").end().addClass("active");
        list(template);
    })
    //图表统计
    $("#btnChartManage").on("click", function () {
        $(".showPart").empty();
        $(this).siblings().removeClass("active").end().addClass("active");
        $(".showPart").append(ChartManageTel);
    });
})