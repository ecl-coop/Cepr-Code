// show first content by default
$('#tabs li:first-child').addClass('tab-is-selected');
$('.featured-articles-container').hide();
$('.featured-articles-container:first').show();

// click function
$('#tabs li').click(function () {
    $('#tabs li').removeClass('tab-is-selected');
    $(this).addClass('tab-is-selected');
    $('.featured-article-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).toggle("slide", {direction: "right"});
    return false;

});