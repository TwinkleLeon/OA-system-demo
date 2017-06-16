define(["text!tels/classManageTels/classAdd/classAdd.html","./classInfo","./classPic","./classTime"], function (classAddTpl,classInfo,classPic,classTime) {
    return function (API,template,cs_id,ele) {
        $(classAddTpl).on("click","#btnAddInfo",function(){
            classInfo(API,template,cs_id,ele);
        })
        .on("click","#btnAddPic",function(){
            classPic(API,template,cs_id,ele);
        })
        .on("click","#btnAddTime",function(){
           classTime(API,template,cs_id,ele);
        })
        .appendTo(".showPart");
        $("#btnAddInfo").trigger("click");
    }
})