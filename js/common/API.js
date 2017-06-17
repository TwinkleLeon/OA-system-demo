define(["jq"], function () {
    return {
        //课程分类部分
        getClassList: function (callback) {
            $.get("/api/course", function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassEdit: function (cs_id, callback) {
            $.get("/api/course/lesson", {
                cs_id: cs_id
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassAdd: function (obj,callback) {
            $.post("/api/course/chapter/add", obj, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassChange: function (ct_id, callback) {
            $.get("/api/course/chapter/edit", {
                ct_id: ct_id
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                }
            })
        },
        getClassSub: function (obj, callback) {
            $.post("/api/course/chapter/add", obj, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.msg);
                }
            })
        },
        //课程管理部分
        getClassCreate: function (cs_name, callback) {
            $.post("/api/course/create", {
                cs_name: cs_name
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassInfo: function (cs_id, callback) {
            $.get("/api/course/basic", {
                cs_id: cs_id
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassInfoSub: function (formdata, callback) {
            $.post("/api/course/update/basic", formdata, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassPic: function (cs_id, callback) {
            $.get("/api/course/picture", {
                cs_id: cs_id
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassPicUl: function (obj, callback) {
            $.post("/api/uploader/cover", {
                cs_id: obj.cs_id,
                cs_cover_original: obj.cs_cover_original
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassTypes: function (callback) {
            $.get("/api/category", function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassTopType: function (callback) {
            $.get("/api/category/top", function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        getClassTwoType: function (cg_id, callback) {
            $.get("/api/category/child", {
                cg_id: cg_id
            }, function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
        //教师部分
            //教师列表
        getTeacherList:function(callback){
             $.get("/api/teacher",function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
            //查看教师
        getTeacherCheck:function(tc_id,callback){
             $.get("/api/teacher/view",{tc_id:tc_id},function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            })
        },
            //编辑讲师资料
        getTeacherEdit:function(tc_id,callback){
             $.get("/api/teacher/edit",{tc_id:tc_id},function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            });
        },
             //更新讲师资料
        getTeacherUp:function(obj,callback){
             $.post("/api/teacher/update",obj,function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.msg);
                };
            });
        },
        //更新讲师状态
        getTeacherOut:function(obj,callback){
             $.post("/api/teacher/handle",obj,function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            });
        },
        //添加讲师
         getTeacherAdd:function(obj,callback){
             $.post("/api/teacher/add",obj,function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.msg);
                };
            });
        },
        //个人中心
        getUserMessage:function(callback){
             $.get("/api/teacher/profile",function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.result);
                };
            });
        },
         //更新个人资料
         getUserUp:function(obj,callback){
             $.post("/api/teacher/modify",obj,function (x) {
                if (x.code != 200) {
                    console.log(x.msg);
                    return;
                };
                if (typeof callback == "function") {
                    callback(x.msg);
                };
            });
        },
    }
})