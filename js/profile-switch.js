//var profilePic = document.querySelector('.profile-picture');

var toggleState = function (elem, one, two) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
var setStatesTablet = function (elem, state) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state'));
};
$(".profile-picture").on("click", function(e){
        toggleState('.profile-card', 'closed', 'open');
        e.preventDefault();
});
    // profilePic.onclick = function (e) {
    //     toggleState('.profile-card', 'closed', 'open');
    //     e.preventDefault();
    // };
