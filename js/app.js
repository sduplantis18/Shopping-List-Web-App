
$(document).ready(function () {
$('#add').click(function () {
  var input = $('#enter-items');
  $('.grocery-list').append('<li class="item">' + input.val() + '</li>');
  input.val('');
});
});