// JavaScript source code

$('#id').text("Apple");
// document.getElementById("id").innerHTML = "A";

$(document).ready(function() {
  $('#id').text("Boy").css('font-size', '2em');
});

function go() {
  $('#id').text("Cat")
    .removeClass('id')
    .addClass('new')
    .css('color', 'darkred');

  $('li.word').css('font-style', 'italic');
}

$(document).ready(go);

$('[id]').css('font-family', 'cursive');

$('a[target="_blank"]').append(" to a new tab");
$('a[target!="_blank"]').append(" to the same tab");
// = equals, != not equals, ^= starts with, $= ends with, *= contains

$('p > a').css('font-weight', 'bolder')
  .css('color', 'blue');

$('p a').css('color', 'green');
$('a p').css('color', 'yellow');

// $('a').parent().html("NO!");

function reveal() {
  $('.ninja').slideDown('slow');
  $('.ninja').slideUp('fast');
  $('.ninja').slideToggle('slow');
  $('.ninja').fadeOut('slow');
  $('.ninja').fadeIn('fast');
  for (var i = 0; i < 10; i++)
    $('.ninja').fadeToggle('fast');
}

function nyan() {
  $('#nyan').animate(
    { 'right': '0%' }, 
    6000,
    function() {
      $(this).animate(
        { 'right': '100%' },
        6000
      );
    }
  );
}

$(document).ready(nyan);