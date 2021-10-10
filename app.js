var main = function() {
	"use strict";
	
	var addCommentFromInputBox = function() {
		if($(".comment-input input").val() !== "") {
			var $new_comment = $("<p>").text($(".comment-input input").val()); 
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		}	
	}
	
	$(".comment-input button").on("click", function(event) {
		// console.log("Hello, World!");
		// $(".comments").append("<p>This is new comment</p>");
		
		// var $new_comment = $("<p>"),
		//comment_text = $(".comment-input input").val();
		
			//$new_comment.text("This is new comment");
		//$new_comment.text(comment_text);
		
		addCommentFromInputBox();		
	});

	$(".comment-input input").on("keypress", function(event) {
		if(event.keyCode === 13) {
			// console.log("This is value: " + event.keyCode);

			addCommentFromInputBox();
		}	
	});
};
$(document).ready(main);