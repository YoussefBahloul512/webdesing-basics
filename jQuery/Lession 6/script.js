$(function(){
    // $('#content').append("<h3>This is a title</h3>");   // SameCode= $('<h3>This is a title</h3>').appendTo(#content);
    $('#content').prepend("<h3>This is a title</h3>");   // SameCode $('<h3>This is a title</h3>').prependTo('#content');
    $("#content").after('<p>This is a new pragraph</p>');
    $("#content").before('<h3>This is a new Title</h3>');
    // $('#content').remove('#content')
})