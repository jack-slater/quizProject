$(document).ready(function () {
  $('#q2').hide();
  $('.buttons').hover(function() {
    $(this).addClass('highlighted');
    $(this).css('background-color', '#ffff99');
  },
    function() {
    $(this).removeClass('highlighted');
    $(this).css('background-color', '#b3d9ff')
  });


  $('.A1').click(function() {
    $('.A1').unbind('mouseenter mouseleave');
    $('#q2').show();
  });

  $('.A1.correct').click(function() {
    $(this).css('background-color','green');
    $('.A1.wrong').unbind('click');
  });

  $('.A1.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A1.correct').css('background-color', 'green')
  });
});
