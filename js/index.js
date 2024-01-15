// Scroll to top
$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});
// Scroll to myWork section
$("#toWork").click(function() {
    $("html, body").animate({scrollTop: $(".myWork").offset().top
}, 2000);
});
// Change text colour on hover
$("#introduction a").hover(function() {
    $(this).css("color", "blue");
    $(this).css("text-decoration", "underline");

});
// Hamburger Menu