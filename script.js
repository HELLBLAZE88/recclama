$(document).ready(function(){
$('body').hide().fadeIn(2000);
});

$(document).ready(function(){
    $(".menu a").hover(function() {
        $(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "-85"}, "slow");
    });
});
