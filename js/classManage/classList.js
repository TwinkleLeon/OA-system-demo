define(["text!tels/ClassManageTels/classList.html","./classEdit","./classAdd/classPic","./classAdd/classAdd"],function(classList,classEdit,classPic,classAdd){
    return function(API,template){
        $(".showPart").empty();
        API.getClassList(function(x){
            x = x.reverse();
            var str = template.render(classList,{
                x:x
            });
            $(str)
            //图片点击编辑
            .on("click",".imgBtn",function(){
                var cs_id = $(this).parent().next().children().children().eq(1).children(".btn").attr("data-id");
                classPic(API,template,cs_id,".showPart");
                console.log(cs_id);
            })
            //课时点击编辑
            .on("click",".btnTime",function(){
                var cs_id = $(this).attr("data-id");   
                classEdit(API,cs_id,template);
            })
            .on("click",".btnCourse",function(){
                var cs_id = $(this).attr("data-id");
                classAdd(API, template, cs_id,".showPart");
            }).appendTo(".showPart");
        })
    }
})