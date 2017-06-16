define(["text!tels/teacherManageTels/teacherCheck.html"],function(teacherCheckTpl){
    return function(API,template,tc_id){
        API.getTeacherCheck(tc_id,function(x){
            var str = template.render(teacherCheckTpl,{x:x});
            $(str).appendTo("body").modal();
        })
    }
})