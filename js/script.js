
	var feedbackbtn = document.querySelector(".map-feedbackform");
	var feedbackmdl = document.querySelector(".window-modal");
	var feedbackclose = document.querySelector(".modal-exit");
	var feedbackform = feedbackmdl.querySelector("form");
	var feedbacklogin = feedbackmdl.querySelector("[name=name]");
	var feedbackemail = feedbackmdl.querySelector("[name=email]");
	var feedbackcomment = feedbackmdl.querySelector("[name=comment]");
	var storage = localStorage.getItem("feedbacklogin");

	feedbackbtn.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackmdl.classList.add("popup");

		if (storage) {
			feedbacklogin.value = storage;
			feedbackemail.focus();
		} else {
			feedbacklogin.focus();	
		}	
	});

	feedbackclose.addEventListener("click", function(event) {
		event.preventDefault();
		feedbackmdl.classList.remove("popup");
		feedbackmdl.classList.remove("error");
	});

	feedbackform.addEventListener("submit", function(event) {
		if	(!feedbacklogin.value || !feedbackemail.value || !feedbackcomment.value) {
			event.preventDefault();
			feedbackmdl.classList.add("error");
			console.log("Нужно заполнить форму");
		}	else {
			localStorage.setItem("feedbacklogin", feedbacklogin.value);
		}
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (feedbackmdl.classList.contains("popup")) {
				feedbackmdl.classList.remove("popup");
				feedbackmdl.classList.remove("error");
			}
		}
	});
