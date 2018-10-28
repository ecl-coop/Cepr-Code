var menubar = document.querySelector('.menubar__toggle');
var menu = document.querySelector('.menu__toggle');
var submenu = document.querySelector('.submenu__toggle');
var backMenubar = document.querySelector('.backto-menubar');
var backMenu = document.querySelector('.backto-menu');

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
    menu.onclick = function (e) {
        toggleState('#menubar-container', 'open', 'inside-1');
        toggleState('.menu-container', 'closed', 'open');
        e.preventDefault();
    };

    submenu.onclick = function (e) {
        toggleState('#menubar-container', 'inside-1', 'inside-2');
        toggleState('.menu-container', 'open', 'closed');
        toggleState('.submenu-container', 'closed', 'open');
        e.preventDefault();
    };

    backMenu.onclick = function (e) {
        toggleState('#menubar-container', 'inside-1', 'inside-2');
        toggleState('.menu-container', 'open', 'closed');
        toggleState('.submenu-container', 'closed', 'open');
        e.preventDefault();
    };

    backMenubar.onclick = function (e) {
        toggleState('#menubar-container', 'open', 'inside-1');
        toggleState('.menu-container', 'open', 'closed');
        e.preventDefault();
    };
} else {
    menu.onclick = function (e) {
        toggleState('.menu-container', 'closed', 'open');
        e.preventDefault();
    };
}