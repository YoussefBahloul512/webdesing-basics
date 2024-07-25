$(function(){
    $("#myform").validate({
        rules: {
            userName: {
                required: true
            },
            mail: {
                required: true,
                email:true
            },
            agree:{
                required:true
            }
        }
    });
});