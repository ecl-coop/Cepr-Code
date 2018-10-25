var nav = document.querySelector('.nav__toggle');

var toggleState = function (elem, one, two) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

nav.onclick = function (e) {
    toggleState('#nav ul', 'closed', 'open');
    e.preventDefault();
};