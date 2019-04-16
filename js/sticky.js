////http://imakewebthings.com/waypoints/

$(document).ready(function () {
    let $globalnav = $("#nav");
    let $nav = $(".nav");
    let $ToC= $(".table-of-contents details");
    let $share= $(".icons-share");

    $nav.waypoint(function (direction){

        if (direction == "down"){
            $globalnav.addClass("menubar-sticky");
            $nav.addClass("nav-sticky");
            $ToC.addClass("toc-sticky");
            $share.addClass("share-sticky");
        } else{
            $globalnav.removeClass("menubar-sticky");
            $nav.removeClass("nav-sticky");
            $ToC.removeClass("toc-sticky");
            $share.removeClass("share-sticky");
        }

    }, {
        offset: "-320px"
    });
});

