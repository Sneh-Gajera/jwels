$(document).ready(function(){
    $(".humberger i").click(function(){
        $(this).toggleClass("fa-times");
        $(".menu").toggleClass("active");
    })
})
// btn_top

$(document).ready(function () {
    $(window).scroll(function () {
        var x = $(document).scrollTop();
        if (x > 300) {
            $("#bottom_to_top").show();
        }
        else {
            $("#bottom_to_top").hide();
        }
    });

    $("#bottom_to_top").click(function () {
        $(window).scrollTop(0);
    });
});
//counter js

$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
})

//sticky nav

// window.addEventListener("scroll",function(){
//     var nav_sticky=this.document.querySelector("nav");
//     nav_sticky.classList.toggle("sticky",this.window.screenY>0)
// })