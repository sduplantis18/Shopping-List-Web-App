$(document).ready(function(){
    $('#add').click(function(){
        $('.grocery-list').append('<li class="item">' + $('input#items').val() + '</li>');
        $('input#items').val('');

    });	
    //remove list item from .grocery-list 
});

