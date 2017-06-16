define(["text!tels/classManageTels/classAdd/classTeacherList.html"],function(classTeacherListTpl){
     return function(API, template, cs_id){
         API.getTeacherList(function(x){
             var str = template.render(classTeacherListTpl,{x:x});
         })
     }
})