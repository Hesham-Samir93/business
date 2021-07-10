console.log($(".brd-btn"))
$(".brd-btn").click(function() {
    $(".brd-btn").css({ backgroundColor:"transparent",borderBottom:"none" });
    $(this).css({borderBottom:"2px solid rgb(32, 32, 104) "})  
})

$(".forheight:first").css("display", "block")
$(".foraccord").click(function(){
    
    $(this).next().slideToggle(500);

  
})
