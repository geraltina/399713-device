var map = document.querySelector(".map");
var popup = document.querySelector(".popup");
var cross = document.querySelector(".cross");
var feedback = document.querySelector(".feedback");
var popupFeedback = document.querySelector(".feedback-form");
var crossFeedback = document.querySelector(".cross-feedback");

map.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("making-bigger-map");
});

cross.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("making-bigger-map");
});

feedback.addEventListener("click", function(evt){
	evt.preventDefault();
	popupFeedback.classList.add("feedback-form-show");
});

crossFeedback.addEventListener("click", function(evt){
	evt.preventDefault();
	popupFeedback.classList.remove("feedback-form-show");
});