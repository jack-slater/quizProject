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

// code for the first answer - UK
  $('.A1').click(function() {
    $('.A1').unbind('mouseenter mouseleave');
    $('#q2').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A1.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A1').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A1.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A1.correct').css('background-color', '#4DFF00')
    $('.A1').unbind('click');
  });

// code for the second answer - Austria
  $('.A2').click(function() {
    $('.A2').unbind('mouseenter mouseleave');
    $('#q3').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A2.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A2').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A2.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A2.correct').css('background-color', '#4DFF00')
    $('.A2').unbind('click');
  });

// code for the third answer - Venezuela
  $('.A3').click(function() {
    $('.A3').unbind('mouseenter mouseleave');
    $('#q4').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A3.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A3').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A3.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A3.correct').css('background-color', '#4DFF00')
    $('.A3').unbind('click');
  });

// code for the forth answer - Iceland
  $('.A4').click(function() {
    $('.A4').unbind('mouseenter mouseleave');
    $('#q5').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A4.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A4').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A4.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A4.correct').css('background-color', '#4DFF00')
    $('.A4').unbind('click');
  });

// code for the fifth answer - Nigeria
  $('.A5').click(function() {
    $('.A5').unbind('mouseenter mouseleave');
    $('#q6').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A5.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A5').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A5.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A5.correct').css('background-color', '#4DFF00')
    $('.A5').unbind('click');
  });

// code for the sixth answer - Fiji
  $('.A6').click(function() {
    $('.A6').unbind('mouseenter mouseleave');
    $('#q7').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A6.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A6').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A6.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A6.correct').css('background-color', '#4DFF00')
    $('.A6').unbind('click');
  });

// code for the seventh answer - Germany
  $('.A7').click(function() {
    $('.A7').unbind('mouseenter mouseleave');
    $('#q8').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A7.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A7').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A7.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A7.correct').css('background-color', '#4DFF00')
    $('.A7').unbind('click');
  });

// code for the eighth answer - Bolivia
  $('.A8').click(function() {
    $('.A8').unbind('mouseenter mouseleave');
    $('#q9').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A8.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A8').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A8.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A8.correct').css('background-color', '#4DFF00')
    $('.A8').unbind('click');
  });

// code for the ninth answer - France
  $('.A9').click(function() {
    $('.A9').unbind('mouseenter mouseleave');
    $('#q10').delay(250).fadeIn('slow');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
  $('.A9.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A9').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A9.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A9.correct').css('background-color', '#4DFF00')
    $('.A9').unbind('click');
  });

// code for the tenth answer - India
  $('.A10.correct').click(function() {
    $(this).css('background-color','#4DFF00');
    $('.A10').unbind('click');
    score += 1;
    $('#score').html(score);
  });
  $('.A10').click(function() {
    $('.A10').unbind('mouseenter mouseleave');
    $('#result').html(function () {
      if(score > 7) {
        $('#result').html("<p>Fantastic score you really know your Capitals</p>")
      }
      else if (score < 8 && score > 4) {
        $('#result').html("<p>Fairly disppointing but not too bad, give yourself a slap on the back</p>")
      }
      else {
        $('#result').html("<p>Absoultly terrible, so so bad. Next time don't try</p>")
      }
    });
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#result').delay(250).fadeIn('slow');
    $('footer').html("<footer style='font-size:30px;color:yellow;'>Final Score:<br><span style='font-size:35px;color:yellow;' id='score'></span></footer>");
    $('#score').html(score);
    $('footer').css('background-color','black');
    $('footer').height('85px');
    $('footer').width('400px');
    

  });
  $('.A10.wrong').click(function() {
    $(this).css('background-color', 'red');
    $('.A10.correct').css('background-color', '#4DFF00')
    $('.A10').unbind('click');
  });



});
