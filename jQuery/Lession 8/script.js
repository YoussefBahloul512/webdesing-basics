$(function(){
    $('#selectBtn').click(function(){
        $('input:checkbox').attr('checked', 'checked')
        $(this).attr('disabled', 'disabled')
    });
    $('#deselectBtn').click(function(){
        $('input:checkbox').removeAttr('checked')
    });
    $('#languages').change(function(){
        alert($(this).val())
    });
});