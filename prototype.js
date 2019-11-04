var proto = {
  init: function(){
    //slides.init()
    setTimeout(function(){
      blur.init()
    }, 500)
    codeHighlight.init()
    document.addEventListener('keydown', proto.checkPresentationMode)
  },
  checkPresentationMode: function(e){
    if(e.keyCode == 192)
      document.body.classList.toggle('presentation-mode')
  }
}


var slides = {
  init: function(){
    var slideContainers = document.getElementsByClassName('slides')
    for(var i = 0; i < slideContainers.length; i++){
      slideContainers[i].addEventListener('click', slides.nextSlide)
    }
  },
  nextSlide: function(e){
    var container = util.domInLineage(e.target, {className: 'slides'})
    var index = slides.getActiveSlideIndex(container.children)
    container.children[index].classList.remove('active')
    index++
    if(index == container.children.length) index = 0
    container.children[index].classList.add('active')
  },
  getActiveSlideIndex: function(slides){
    for(var i = 0; i < slides.length; i++){
      if(slides[i].classList.contains('active'))
        return i
    }
    return -1
  }
}

var util = {
  domInLineage: function(e, selector){
    if(
      (selector.className == undefined || e.classList.contains(selector.className)) && 
      (selector.id == undefined || e.id == selector.id)
    )
      return e
    if(e.parentElement)
      return util.domInLineage(e.parentElement, selector)
    return false
  },

  getRelativeBounds: function(element, container){
    var boundingBox = element.getBoundingClientRect()
    var containerBox = container.getBoundingClientRect()
    return {
      left: boundingBox.left - containerBox.left + window.scrollX,
      right: boundingBox.right - containerBox.left + window.scrollX,
      top: boundingBox.top - containerBox.top + window.scrollY,
      bottom: boundingBox.bottom - containerBox.top + window.scrollY
    }
  }
}

var blur = {
  init: function(){
    var blurs = document.getElementsByClassName('blur')
    for(var i = 0; i < blurs.length; i++){
      blurs[i].addEventListener('click', blur.click)
    }
  },
  click: function(e){
    var target = util.domInLineage(e.target, {className: 'blur'})
    target.classList.remove('blur')
    target.removeEventListener('click', blur.click)
  }
}

var codeHighlight = {
  init: function(){
    var paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(function(p){
      p.innerHTML = codeHighlight.getMatches(p.innerHTML)
    })
    var hightlights = document.querySelectorAll('.highlight')
    hightlights.forEach(function(h){
      h.innerHTML = codeHighlight.getMatches(h.innerHTML)
    })
  },
  getMatches: function(html){
    var matches = html.replace(/`([^`]+)`/g, function(match){
      return '<c>' + match.slice(1,-1) + '</c>'
    })
    return matches
  }
}

document.addEventListener('DOMContentLoaded', proto.init)