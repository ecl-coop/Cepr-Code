////http://imakewebthings.com/waypoints/

$(document).ready(function () {
 if (window.innerWidth > 768) {
    let $nav = $(".nav");
    let $ToC= $(".table-of-contents details");
    let $share= $(".icons-share");

    $nav.waypoint(function (direction){
        if (direction == "down"){
            $nav.addClass("nav-sticky");
            $ToC.addClass("toc-sticky");
            $share.addClass("share-sticky");
        } else{
            $nav.removeClass("nav-sticky");
            $ToC.removeClass("toc-sticky");
            $share.removeClass("share-sticky");
        }
    }, {
        offset: "-10%"
    });
    } else {
        $nav.waypoint(function (){
        $nav.removeClass("nav-sticky");});
    
}
});
