define(["jq","jqCook"],function(){
    if(!$.cookie("tc_name")){
        window.location.href = "login.html"
    }
})