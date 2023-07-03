let zoomHundred = 100;

function zoomOut() {
    let zoomLessFive = zoomHundred - 5;
    zoomHundred = zoomLessFive;
    $(".contents").css({zoom : zoomHundred + "%"});
    $(".zoom_100").text(zoomLessFive);
    if (zoomHundred <= 60) {
        zoomHundred = 60;
    }
}

function zoomIn() {    
    let zoomAddFive = zoomHundred + 5;
    zoomHundred = zoomAddFive;
    $(".contents").css({zoom : zoomHundred + "%"});
    $(".zoom_100").text(zoomAddFive);
    if (zoomHundred >= 200) {
        zoomHundred = 200;
    }
}

$(".zoom_out").click(function(){
    zoomOut();
})
$(".zoom_in").click(function(){
    zoomIn();
})