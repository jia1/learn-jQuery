// JavaScript source code

$('#id').text("apple");
// document.getElementById("id").innerHTML = "A";

$(document).ready(function() {
  $('#id').text("boy").css('font-size', '2em');
});

function go() {
  $('#id').text("cat")
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

$('.dom .text').text("Dynamic text");
$('.dom .value').val("Dynamic form value");
$('.dom .mark').html("<s>Dynamic HTML</s>");

$('.dom .text').text(function(index, old_text) {
  return "Old Text: " + old_text + ". New Text: Very dynamic text.";
});

$(function() {
  console.log($('.value').attr('type'));
  $('.value').attr('style', 'color:blue');
  $('#link').attr({
    'href': 'http://jiayeerawr.github.io/',
    'style': 'color:gold; font-family:Arial;'
  });
  $('#link').attr('href', function(index, old_value) {
    return old_value + 'sjvj-qna';
  });
});

function myToggleClass(html_element, the_class) {
  if ($(html_element).hasClass(the_class)) {
    $(html_element).removeClass(the_class);
  } else {
    $(html_element).addClass(the_class);
  }
}

// .prepend() .append()

function appendToList() {
  var item1 = $('<li></li>').text("Item #1");
  var item2 = '<li>Item #2</li>';
  $('.ordered-list').append(item1, item2);
  $('<li></li>').text('Item #0').prependTo('.ordered-list');
}

var count = 1;

function before_after() {
  $('.before-after')
    .before(' <span class="before">' + count + ' before! ')
    .after(' <span class="after">' + count + ' after! ');
  ++count;
  if (count == 6) {
    $('.before').empty();
    $('.after').empty();
  } else if (count == 11) {
    $('.before-after').remove();
    count = count - 10;
  }
}

$('<p></p>').text("insertBefore() ").insertBefore('.before-after');

$('#to-bind').bind('click', function(event) {
  console.log(event);
  alert("Hello, world!");
  $(this).unbind('click doubleclick');
});

$('#to-bind').bind('mousemove', function(event) {
  $(this).text(event.pageX + ' ' + event.pageY);
});

var handler = function() {
  alert("I am handled by a handler");
};

var another_handler = function() {
  alert("I am handled by another handler");
  $('li').unbind('click', another_handler);
};

$('li').bind('click', handler);
$('li').bind('click', another_handler);

// mousein mouseover mouseout mousemove
// .live('mouseover', function() { ... });
