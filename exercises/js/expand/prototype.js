var proto = {
  init : function(){
    //if using prototyping server, use this single line instead
    //bind(".expandable","click",proto.expand)
    var expandables = document.querySelectorAll(".expandable")
    expandables.forEach(function(expandable){
      expandable.addEventListener("click",proto.expand)
    })
  },
  expand : function(e){
      var expandables = document.querySelectorAll(".expandable")
      expandables.forEach(function(expandable){
        if(expandable == e.currentTarget){
          expandable.classList.toggle("open")
        } else {
          expandable.classList.remove("open")
        }
        var content = expandable.querySelector(".content")
        if(expandable.classList.contains("open")){
          expandable.style.height = content.offsetHeight + "px"
        } else {
          expandable.style.height = "35px"
        }
      })    
  }
}

document.addEventListener('DOMContentLoaded', proto.init)