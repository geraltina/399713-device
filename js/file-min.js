var map=document.querySelector(".map"),popup=document.querySelector(".popup"),cross=document.querySelector(".cross"),feedback=document.querySelector(".feedback"),popupFeedback=document.querySelector(".feedback-form"),crossFeedback=document.querySelector(".cross-feedback");map.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("making-bigger-map")}),cross.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("making-bigger-map")}),feedback.addEventListener("click",function(e){e.preventDefault(),popupFeedback.classList.add("feedback-form-show")}),crossFeedback.addEventListener("click",function(e){e.preventDefault(),popupFeedback.classList.remove("feedback-form-show")});