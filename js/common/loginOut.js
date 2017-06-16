define(["jq","jqCook"],function(){
     $("#logOut").on("click",function(){
        $.post("/api/logout",function(x){
            $.removeCookie("tc_icon");
            $.removeCookie("tc_name");
            window.location.href = "login.html"
        })
    })
})