var searchBtn = document.querySelector('.menubar__search');
var searchPage = document.querySelector('.search-field');

var toggleState = function (elem, one, two) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
var setStatesTablet = function (elem, state) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state'));
};
    searchBtn.onclick = function (e) {
        toggleState('.search-toggle', 'closed', 'open');
        toggleState('.menubar__header', 'closed', 'open');
        toggleState('.search-container', 'closed', 'open');
        e.preventDefault();
    };