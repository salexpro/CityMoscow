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