// When the user scrolls down 20px from the top of the document, show the button
$(window).scroll(function() {
  scrollFunction()
});

function scrollFunction() {
  if ($("body").scrollTop() > 20 || $(document).scrollTop() > 20) {
    $("#myBtn").css("display", "block");
  } else {
    $("#myBtn").css("display", "none");
  }
}


// Nav Bar Smooth Scroll //

function homeFunction() {
  $('body, html').animate({
    scrollTop: $('#top-container ').offset().top
  }, 1000);
}

function aboutFunction() {
  $('body, html').animate({
    scrollTop: $('#personal-container ').offset().top
  }, 1000);
}

function skillsFunction() {
  $('body, html').animate({
    scrollTop: $('#background2 ').offset().top
  }, 1000);
}

function careerFunction() {
  $('body, html').animate({
    scrollTop: $('#resume-container ').offset().top
  }, 1000);
}

function portfolioFunction() {
  $('body, html').animate({
    scrollTop: $('#portfolio-container ').offset().top
  }, 1000);
}

function contactFunction() {
  $('body, html').animate({
    scrollTop: $('#background4 ').offset().top
  }, 1000);
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('body, html').animate({
    scrollTop: $('#top-container ').offset().top
  }, 1000);
}

$(function() {
  $(document).scroll(function() {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});


// Animation on Scroll //
$(function() {
  var $elements = $(".animateBlock.notAnimated"); //contains all elements of nonAnimated class
  var $window = $(window);
  $window.on("scroll", function(e) {
    $elements.each(function(i, elem) {
      //loop through each element
      if ($(this).hasClass("animated"))
        // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if (elemBottom <= winBottom && elemTop >= winTop) {
    // exchange classes if element visible
    $(elem)
      .removeClass("notAnimated")
      .addClass("animated");
  }
}

// Skill bar Animation //
$(document).ready(function() {
  $('.skills_wrapper > .skills-item').each(function() {
    $(this).find('.diagram > span').delay(2500).animate({
      width: $(this).data("level") + "%"
    }, 3000);
  });
});