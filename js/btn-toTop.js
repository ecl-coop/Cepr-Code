// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
let toTopQuery = 1280;
let $btnToTop = $("#btn-toTop");

function scrollFunction() {
  if (document.body.scrollTop > toTopQuery || document.documentElement.scrollTop > toTopQuery) {
    $btnToTop.addClass("toTopActive");
    
  } else {
    $btnToTop.removeClass("toTopActive");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}