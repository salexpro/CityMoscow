/*
@codekit-prepend '../../bower_components/jquery/dist/jquery.min';
@codekit-prepend '../../bower_components/foundation-sites/dist/foundation.js';
@codekit-prepend '../../bower_components/select2/dist/js/select2.min.js';
*/

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
$('.select select').select2();