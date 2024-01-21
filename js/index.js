// Scroll to top
$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});
// Scroll to myWork Section
$("#toWork").click(function() {
    $("html, body").animate({scrollTop: $(".myWork").offset().top
}, 2000);
});
// Scroll to About Me Section
$("#about").click(function() {
    $("html, body").animate({scrollTop: $(".aboutSection").offset().top
}, 2000);
});
// Scroll to Skills Section
$("#skills").click(function() {
    $("html, body").animate({scrollTop: $(".mySkills").offset().top
}, 2000);
});
// Scroll to My Work Section
$("#work").click(function() {
    $("html, body").animate({scrollTop: $(".myWork").offset().top
}, 2000);
});
//Zoom into images on hover



// Change text colour on hover
// $("#introduction a").hover(function() {
//     $(this).css("color", "blue");
//     $(this).css("text-decoration", "underline");

// });
// Hamburger Menu