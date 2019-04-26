////http://imakewebthings.com/waypoints/

$(document).ready(function () {
    let $globalnav = $("#nav");
    let $nav = $(".nav");
    let $ToC= $(".table-of-contents details");
    let $share= $(".icons-share");
    let $footnotes= $("#footnotes-desktop");
    //let $footer= $(".block-footer");
    let $progress = $('progress');
    
    $globalnav.waypoint(function (direction){

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
        offset: "-90%"
    });
    $globalnav.waypoint(function (direction){
        if (direction == "up"){
            $globalnav.removeClass("menubar-sticky");
            $nav.removeClass("nav-sticky");
            $ToC.removeClass("toc-sticky");
            $share.removeClass("share-sticky");
        }
    
    });
    var waypoints = 
    $footnotes.waypoint({
        handler: function(direction){
            if(direction == "down"){
                $ToC.removeClass("toc-sticky");
                $share.removeClass("share-sticky");
                $progress.addClass("is-hidden");
            } else {
                $ToC.addClass("toc-sticky");
                $share.addClass("share-sticky");
                $progress.removeClass("is-hidden");
            }
        }
    }, {
        offset: '40%'
    });
});