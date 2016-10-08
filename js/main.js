$(document).ready(function () {
  var score = 0;
  $('#score').html(score);
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
    $('#q2').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });

  $('.A1.correct').click(function() {
    $(this).css('background-color','green');
    $('.A1').unbind('click');
    score += 1;
    $('#score').html(score);
  });

  $('.A1.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A1.correct').css('background-color', 'green')
    $('.A1.wrong').unbind('click');
  });

});
