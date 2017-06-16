define(["text!tels/classManageTels/classEdit.html","./classChange"],function(classEdit,classChange){
    return function(API,cs_id,template){
        $(".showPart").empty();
        API.getClassEdit(cs_id,function(x){
            var str = template.render(classEdit,{
                x:x
            });
            $(str).on("click","button",function(){
                var id = $(this).attr("data-id");
                classChange(API,template,id);
            }).appendTo(".showPart");
        })
    }
})