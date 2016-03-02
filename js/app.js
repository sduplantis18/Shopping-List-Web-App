$(function () {
//Click "enter-items" button//
$('#add').click(function () {
console.log('Add button cicked');
  var input = $('#enter-items');
  $('.grocery-list')
    .append('<li class="item animated slideInLeft">' + '<div class="checkbox"></div>' + '<span>' + input.val() + '</span>' + '</li>');
  input.val('');
});  
// toggles red circle when any checkboxes are clicked on
 $('.grocery-list').on('click', '.checkbox', function() {
     $(this).toggleClass('done');
     $(this).parent('.item').toggleClass('strikethrough');
     console.log('checkbox clicked');
    });
//removes list item
 $('.grocery-list').on('click', '.done', function(){
    $(this).parent('.item').remove(); 
 });
});
