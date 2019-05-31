//I had to hack an extra "-dkt" button class for it to work, because the query selector only selected the mobile object but not the desktop one. 
//Is a lot less than ideal. 

var searchBtn = document.querySelector('.menubar__search');
var searchBtnDkt = document.querySelector('.menubar__search-dkt');
var searchPage = document.querySelector('.search-field');
var sortBtn = document.querySelector('.btn-sort');

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
    searchBtnDkt.onclick = function (e) {
        toggleState('.search-toggle', 'closed', 'open');
        toggleState('.search-container', 'closed', 'open');
        e.preventDefault();
    };
    sortBtn.onclick = function (e) {
        toggleState('.btn-sort', 'down', 'up');
        e.preventDefault();
    };