$(function(){

    $('#content').click(function(){
        alert("You Clicked the content")
    });
    $('#txtName').focus(function(){
        $('#txtName').addClass('inputStyle')   //SameCode= $('this').addClass('inputStyle'); this = #txtName
    });
    
})