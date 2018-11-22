var $tabs = $('.tabs .tab');

$tabs.click(function (event) {
    var selectedClass = 'tab-is-selected';
    $tabs.removeClass(selectedClass);
    $(event.target).addClass(selectedClass);
});