$(document).ready(function(){

	$.getJSON("./lab7/resources/lab7jsontemplate.xml", jsonMenu);
	function jsonMenu(menuData){
		var output = "";	
		$.each(menuData.menuItem, function(i,item){
			output += "<li><a href='" +item.menuURL+
			"' title='"+"See a lab about "+item.menuDesc+
			"'>"+item.menuName+" on "+item.menuDesc+"</a>"
			+"</li>";
		});
		$("#menux").html(output);

	}

});				
		


