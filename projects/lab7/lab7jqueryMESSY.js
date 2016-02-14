$(document).ready(function(){

	$.getJSON("./lab7/resources/lab7jsontemplate.json", jsonMenu);
	function jsonMenu(menuData){
		var output = "";	
		$.each(menuData.menuItem, function(i,item){
			output += "<li><a href='" +item.menuURL+"''>"+item.menuName+" on "+item.menuDesc+"</a>"+"</li>";
		});
		$("#menux").html(output);

	}

});				
		


