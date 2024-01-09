
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




$(document).ready(function() {
// Toggle navigation on click
$('#navbar-toggle').click(function() {
  $('nav ul').slideToggle();
});

// Toggle hamburger icon
$('#navbar-toggle').on('click', function() {
  $(this).toggleClass('active');
});

// Dropdown functionality
$('nav ul li a:not(:only-child)').click(function(e) {
  $(this).siblings('.navbar-dropdown').slideToggle("slow");
  // Close other dropdowns
  $('.navbar-dropdown').not($(this).siblings()).hide("slow");
  e.stopPropagation(); // Prevent parent element actions
});

// Close dropdown on clicking outside
$('html').click(function() {
  $('.navbar-dropdown').hide();
});

// Prevent closing dropdown when clicking on it
$('.navbar-dropdown').click(function(e) {
  e.stopPropagation();
});
});
