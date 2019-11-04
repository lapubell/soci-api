var sidebar = {
	init: function(){
		sidebar.fixSideBarLink()
		sidebar.makeCollapsible()
	},
  fixSideBarLink: function(){
     var sidebarLinks = document.querySelectorAll('#sidebar-right .lesson a')
     var title = document.querySelector('#content h1')
     for(var i=0;i<sidebarLinks.length;i++){
      var newhref = sidebarLinks[i].getAttribute("href")
      sidebarLinks[i].href = "../../"+newhref

      // highlight current lesson in sidebar
      var courseType = title.innerHTML.match(/[a-zA-Z]+/)[0].toLowerCase()
      var courseNum = title.innerHTML.match(/\d+/)[0]
      var sideBarLesson = sidebarLinks[i].querySelector(".course").innerHTML.toLowerCase()

      if(sideBarLesson.includes(courseNum) &&
      	 sideBarLesson.includes(courseType)){
      	sidebarLinks[i].parentElement.classList.add("selected")
      }
     }
  },

  maxSidebarRightWidth : 350,
  isDragging : false,
  makeCollapsible : function(){
  	var collapser = document.getElementById('collapser')
  	var content = document.getElementById('content')
  	var collapserButton = document.getElementById('collapser-button')
  	var collapseIcon = collapserButton.querySelector(".collapse-icon")

  	collapser.addEventListener("mousedown",function(e){
  		sidebar.isDragging = true
  	})

  	document.addEventListener("mouseup",function(e){
  		sidebar.isDragging = false
  	})

  	document.addEventListener("mousemove",function(e){
  		if(sidebar.isDragging){

	  		var sidebarRight = document.getElementById("sidebar-right")
	  		var sidebarLeft = document.getElementById("sidebar-left")

	  		var sidebarLeftWidth = sidebarLeft.offsetWidth
	  		var sidebarRightWidth = sidebarRight.offsetWidth

	  		var newWidth = e.clientX - sidebarLeftWidth


	  		if(newWidth <= sidebarLeftWidth){
	  			sidebarRight.style.width = 0
	  			collapseIcon.classList.add("forward")
	  		} else if(newWidth> sidebar.maxSidebarRightWidth) {
	  			sidebarRight.style.width = sidebar.maxSidebarRightWidth.toString() + "px"
	  			collapseIcon.classList.remove("forward")
	  		} else {
	  			sidebarRight.style.width = newWidth.toString() + "px"
	  			collapseIcon.classList.remove("forward")
	  		}
	  		
	  	  // remove padding so sidebar can close completely
	  		if(newWidth <= 20){
	  			sidebarRight.style.padding = 0
	  		} else {
	  			sidebarRight.style.padding = 20
	  			collapseIcon.classList.remove("forward")
	  		}
	  		//adjust content margin accord to sidebar width
	  		if(newWidth < sidebar.maxSidebarRightWidth && e.clientX > sidebarLeftWidth){
	  			content.style.marginLeft =  newWidth + sidebarLeftWidth + 200
	  		}

	  		
  		}

  	})

		collapserButton.addEventListener("click",function(e){
			console.log("click "+sidebar.isDragging)

				var sidebarRight = document.getElementById("sidebar-right")
				var content = document.getElementById("content")
				var sidebarRightWidth = sidebarRight.offsetWidth

				if(sidebarRightWidth > 0){
					content.classList.add('expand')
					sidebarRight.classList.add("close")
					sidebarRight.style =""
					content.style = ""
					collapseIcon.classList.add("forward")

				} else {
					content.classList.remove('expand')
					sidebarRight.classList.remove("close")
					sidebarRight.style =""
					content.style = ""
					collapseIcon.classList.remove("forward")
				}
	
		})
    var collapserButtonHolder = document.getElementById('collapser-button-holder')
		collapserButtonHolder.addEventListener("mouseover",function(){
			document.getElementById("collapser-button").classList.add('show')
		})
		collapserButtonHolder.addEventListener("mouseleave",function(){
			document.getElementById("collapser-button").classList.remove('show')
		})
		/*collapser.addEventListener("mouseover",function(){
			document.getElementById("collapser-button").classList.add('show')
		})
		collapser.addEventListener("mouseleave",function(){
			document.getElementById("collapser-button").classList.remove('show')
		})*/
  }

}



document.addEventListener('DOMContentLoaded', sidebar.init)