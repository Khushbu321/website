	var child = findChildren("menu");
	document.querySelector(".about").classList.add("active");
	displayData(child);
 		function displayData(child){
 			for(var j = 0; j<child.length; j++) {
			child[j].addEventListener("click", function(e) {
				removeActive(child);
				e.target.classList.add("active");
				var divs = findChildren("main-content");
				addSelected(divs);
				var selectedId = e.currentTarget.dataset.type;
				var element = document.querySelector(`#${selectedId}-content`);
				element.classList.remove("hidden");
				element.classList.add("selected");
			});
			}
 		}
		
		function findChildren(id){
			return document.querySelector(`#${id}`).children;
		}

		function addSelected(divs){
			for(var i = 0; i<divs.length; i++){
					if (divs[i].classList.contains("selected")) {
						divs[i].classList.remove("selected");
						divs[i].classList.add("hidden");
					}
				}
		}

		function removeActive(tab){
			for(var i = 0; i<tab.length;i++)
			{
				tab[i].classList.remove("active");
			}
			
		}
	
		var acc = document.getElementsByClassName("accordion");

		for (var i = 0; i < acc.length; i++) {
    		acc[i].addEventListener("click", function() {
       		 this.classList.toggle("active");

        	var panel = this.nextElementSibling;
        	if (panel.style.display === "block") {
            	panel.style.display = "none";
        	} else {
            	panel.style.display = "block";
        	}
    	});
	}