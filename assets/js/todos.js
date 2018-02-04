$(document).ready(function() { // this ensures that the document is loaded before we do any edits in the DOM
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});

	// click on X to delete ToDO
	$("ul").on("click", "span", function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		event.stopPropogation;
	});

	$("input[type='text']").keypress(function(event) {
		if(event.which === 13 && $(this).val() !== "") {
			let toDoText = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
		}
	});

	$(".fa-plus").on("click", function(){
		$("input[type='text']").fadeToggle(200);
	});
});



