$(".peple").hover(function(){
	$(this).find("img").attr('src','img/top_icon2_hover.png');
},function(){
	$(this).find("img").attr('src','img/top_icon2.png');
})