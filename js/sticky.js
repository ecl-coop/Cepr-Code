
$(document).ready(function () {
 if (window.innerWidth > 768) {
    let $nav = $(".nav");

    $nav.waypoint(function (direction){
        if (direction == "down"){
            $nav.addClass("nav-sticky");
        } else{
            $nav.removeClass("nav-sticky");
        }
    }, {
        offset: "-50%"
    });
    } else {
        $nav.waypoint(function (){
        $nav.removeClass("nav-sticky");});
    
}
});
