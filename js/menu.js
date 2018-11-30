var menubar = document.querySelector('.menubar__toggle');
var menuToggle = document.querySelector('.menu__toggle');
var submenuToggle = document.querySelector('.submenu__toggle');


var toggleState = function (elem, one, two) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
var setStatesTablet = function (elem, state) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state'));
};


if (screen.width <= 768) {
    menubar.onclick = function (e) {
        toggleState('#menubar-container', 'closed', 'open');
        toggleState('.menubar__header', 'closed', 'open');
        e.preventDefault();
    };

    menuToggle.onclick = function (e) {
        toggleState('.menu__toggle', 'closed', 'open');
        e.preventDefault();
    };

    submenuToggle.onclick = function (e) {
        toggleState('.submenu__toggle', 'closed', 'open');
        e.preventDefault();
    };

    $(document).ready(function () {
        $("#accordian a").click(function () {
            var link = $(this);
            var closest_ul = link.closest("ul");
            var parallel_active_links = closest_ul.find(".active");
            var closest_li = link.closest("li");
            var link_status = closest_li.hasClass("active");
            var count = 0;

            closest_ul.find("ul").slideUp(function () {
                if (++count == closest_ul.find("ul").length)
                    parallel_active_links.removeClass("active");
            });

            if (!link_status) {
                closest_li.children("ul").slideDown();
                closest_li.addClass("active");
            }
        });
    });

} else {
    menu.onclick = function (e) {
        toggleState('.menu-container', 'closed', 'open');
        e.preventDefault();
    };
}