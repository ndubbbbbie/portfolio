window.onload =  function(){
	var menu_link = document.getElementById("menu-link");
	var menu = document.getElementById("menu");

	menu_link.addEventListener("click",function(event){
		event.preventDefault();
		if(menu.className.indexOf("active") > -1){
			menu.classList.remove("active");
		}else{
			menu.classList.add("active");
		}

	});
}