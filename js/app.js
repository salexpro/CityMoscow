$(document).foundation();
$('.nav_hamb').click(function() {
    $(this).parent().toggleClass('is_open')
})
$('.search_input').focus(function() {
    $('.search_popular').hide();
    $('.search_results').show();
}).blur(function() {
    $('.search_popular').show();
    $('.search_results').hide();
})
$('.towers a').mouseover(function() {
    $('img', this).attr('src', $('img', this).attr('src').substr(0, $('img', this).attr('src').indexOf('.png')) + '-h.png');
    $(this).prev().show();
}).mouseout(function() {
    $('img', this).attr('src', $('img', this).attr('src').substr(0, $('img', this).attr('src').indexOf('-h.png')) + '.png');
    $(this).prev().hide();
})