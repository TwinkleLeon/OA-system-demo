define(["text!tels/teacherManageTels/list.html","./teacherCheck","./teacherEdit","./teacherAdd"],function(listTpl,teacherCheck,teacherEdit,teacherAdd){
     return function(API, template){
         API.getTeacherList(function(x){
             x = x.reverse();
            var str = template.render(listTpl,{x:x});
            $(str).on("click",".btnCheck",function(){
                var tc_id = $(this).attr("data-id");
                teacherCheck(API, template,tc_id);
            })
            .on("click",".btnEdit",function(){
                var tc_id = $(this).attr("data-id");
                teacherEdit(API,template,tc_id);
            })
            .on("click",".btnOut",function(){
                var tc_id = $(this).attr("data-id");
                var status = $(this).attr("data-status");
                var that = $(this);
                API.getTeacherOut({
                    tc_id:tc_id,
                    tc_status:status
                },function(x){
                    that.attr("data-status",x.tc_status);
                    $("#btnTeacherManage").trigger("click");
                })
            })
            .on("click",".btnAdd",function(){
                teacherAdd(API, template);
            }).appendTo(".showPart");
         });
     }
})