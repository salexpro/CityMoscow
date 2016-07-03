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
$grid = $('.grid').masonry({
    // options
    itemSelector: '.tile',
    columnWidth: 195,
    gutter: 15,
    fitWidth: true
});
$('.grid_half').masonry({
    // options
    itemSelector: '.grid_half>.tile',
    columnWidth: 300,
    gutter: 15,
    fitWidth: true
});
if ($(window).width() <= 420) {
    $('.grid').masonry({
        // options
        itemSelector: '.tile',
        columnWidth: 150,
        gutter: 7.5,
        fitWidth: true
    });
}
$(window).resize(function() {
    if ($(window).width() <= 420) {
        $('.grid').masonry({
            // options
            itemSelector: '.tile',
            columnWidth: 150,
            gutter: 7.5,
            fitWidth: true
        });
    } else {
        $('.grid').masonry({
            // options
            itemSelector: '.tile',
            columnWidth: 195,
            gutter: 15,
            fitWidth: true
        });
    }
})
