$(document).foundation(),$(".nav_hamb").click(function(){$(this).parent().toggleClass("is_open")}),$(".search_input").focus(function(){$(".search_popular").hide(),$(".search_results").show()}).blur(function(){$(".search_popular").show(),$(".search_results").hide()}),$(".towers a").mouseover(function(){$("img",this).attr("src",$("img",this).attr("src").substr(0,$("img",this).attr("src").indexOf(".png"))+"-h.png"),$(this).prev().show()}).mouseout(function(){$("img",this).attr("src",$("img",this).attr("src").substr(0,$("img",this).attr("src").indexOf("-h.png"))+".png"),$(this).prev().hide()});var $grid=$(".grid").masonry({itemSelector:".tile",columnWidth:195,gutter:15,fitWidth:!0}),$grid_half=$(".grid_half").masonry({itemSelector:".grid_half>.tile",columnWidth:300,gutter:15,fitWidth:!0});$(window).width()<=645&&$grid.masonry({columnWidth:405}),$(window).resize(function(){$(window).width()<=645?$grid_half.masonry({columnWidth:195}):$grid_half.masonry({columnWidth:300})}),$(window).width()<=435&&$('[name="viewport"]').attr("content","width=436");
//# sourceMappingURL=./app-min.js.map