$(function(){
    $("#load").click(function(){

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            type: 'GET',
            dataType: 'json',
            success:function (json , status){
                console.log(json);
                console.log(status);
            },

            error: function(result, status, error){
                console.log("Cannot load data");
            },

            complete: function(result, status){
                console.log("Loading Completed");
            }
        });
    });
});