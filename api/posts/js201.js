var example2 = {
  init: function(){
    document.querySelector('#example2 .draggable').addEventListener('mousedown', example2.mouseDown)
  },
  mouseDown: function(){
    console.log('mousedown')
    document.addEventListener('mouseup', example2.mouseUp)
    document.addEventListener('mousemove', example2.mouseMove)
  },
  mouseUp: function(){
    console.log('mouseup')
    document.removeEventListener('mouseup', example2.mouseUp)
    document.removeEventListener('mousemove', example2.mouseMove)
  },
  mouseMove: function(){
    console.log('mousemove')
  }
}

document.addEventListener('DOMContentLoaded', example2.init)

var example3 = {
  init: function(){
    window.scrollTo(0,1000000)
    example3.dom = document.querySelector('#example3 .draggable')
    example3.dom.addEventListener('mousedown', example3.mouseDown)
  },
  dom: null,
  mouseDown: function(){
    document.addEventListener('mouseup', example3.mouseUp)
    document.addEventListener('mousemove', example3.mouseMove)
  },
  mouseUp: function(){
    document.removeEventListener('mouseup', example3.mouseUp)
    document.removeEventListener('mousemove', example3.mouseMove)
  },
  mouseMove: function(e){
    example3.dom.style.left = e.clientX
  }
}

document.addEventListener('DOMContentLoaded', example3.init)

var example4 = {
  init: function(){
    example4.dom = document.querySelector('#example4 .draggable')
    example4.dom.addEventListener('mousedown', example4.mouseDown)
  },
  dom: null,
  xDown: 0,
  mouseDown: function(e){
    example4.xDown = e.clientX
    document.addEventListener('mouseup', example4.mouseUp)
    document.addEventListener('mousemove', example4.mouseMove)
  },
  mouseUp: function(){
    document.removeEventListener('mouseup', example4.mouseUp)
    document.removeEventListener('mousemove', example4.mouseMove)
  },
  mouseMove: function(e){
    var delta = e.clientX - example4.xDown
    console.log("Distance mouse has moved: " + delta)
    example4.dom.style.left = delta
  }
}

document.addEventListener('DOMContentLoaded', example4.init)

var example5 = {
  init: function(){
    example5.dom = document.querySelector('#example5 .draggable')
    example5.dom.addEventListener('mousedown', example5.mouseDown)
  },
  dom: null,
  xDown: 0,
  x: 0,
  mouseDown: function(e){
    example5.xDown = e.clientX
    document.addEventListener('mouseup', example5.mouseUp)
    document.addEventListener('mousemove', example5.mouseMove)
  },
  mouseUp: function(e){
    example5.x = parseInt(example5.dom.style.left)
    document.removeEventListener('mouseup', example5.mouseUp)
    document.removeEventListener('mousemove', example5.mouseMove)
  },
  mouseMove: function(e){
    var delta = e.clientX - example5.xDown
    example5.dom.style.left = example5.x + delta
  }
}

document.addEventListener('DOMContentLoaded', example5.init)

var example6 = {
  init: function(){
    example6.dom = document.querySelector('#example6 .draggable')
    example6.dom.addEventListener('mousedown', example6.mouseDown)
  },
  dom: null,
  xDown: 0,
  x: 0,
  mouseDown: function(e){
    example6.xDown = e.clientX
    document.addEventListener('mouseup', example6.mouseUp)
    document.addEventListener('mousemove', example6.mouseMove)
    document.body.classList.add('dragging')
  },
  mouseUp: function(e){
    example6.x = parseInt(example6.dom.style.left)
    document.removeEventListener('mouseup', example6.mouseUp)
    document.removeEventListener('mousemove', example6.mouseMove)
    document.body.classList.remove('dragging')
  },
  mouseMove: function(e){
    var delta = e.clientX - example6.xDown
    example6.dom.style.left = example6.x + delta
  }
}

document.addEventListener('DOMContentLoaded', example6.init)

var example7 = {
  init: function(){
    example7.dom = document.querySelector('#example7 .draggable')
    example7.dom.addEventListener('mousedown', example7.mouseDown)
  },
  dom: null,
  xDown: 0,
  yDown: 0,
  x: 0,
  y: 0,
  mouseDown: function(e){
    example7.xDown = e.clientX
    example7.yDown = e.clientY
    document.addEventListener('mouseup', example7.mouseUp)
    document.addEventListener('mousemove', example7.mouseMove)
    document.body.classList.add('dragging')
  },
  mouseUp: function(e){
    example7.x = parseInt(example7.dom.style.left)
    example7.y = parseInt(example7.dom.style.top)
    document.removeEventListener('mouseup', example7.mouseUp)
    document.removeEventListener('mousemove', example7.mouseMove)
    document.body.classList.remove('dragging')
  },
  mouseMove: function(e){
    var xDelta = e.clientX - example7.xDown
    var yDelta = e.clientY - example7.yDown
    example7.dom.style.left = example7.x + xDelta
    example7.dom.style.top = example7.y + yDelta
  }
}

document.addEventListener('DOMContentLoaded', example7.init)

var example8 = {
  init: function(){
    example8.dom = document.querySelector('#example8 .draggable')
    example8.dom.addEventListener('mousedown', example8.mouseDown)
  },
  dom: null,
  xDown: 0,
  yDown: 0,
  x: 10,
  y: 10,
  mouseDown: function(e){
    example8.xDown = e.clientX
    example8.yDown = e.clientY
    document.addEventListener('mouseup', example8.mouseUp)
    document.addEventListener('mousemove', example8.mouseMove)
    document.body.classList.add('dragging')
    example8.dom.classList.add('dragging')
  },
  mouseUp: function(e){
    example8.x = parseInt(example8.dom.style.left)
    example8.y = parseInt(example8.dom.style.top)
    document.removeEventListener('mouseup', example8.mouseUp)
    document.removeEventListener('mousemove', example8.mouseMove)
    document.body.classList.remove('dragging')
    example8.dom.classList.remove('dragging')
  },
  mouseMove: function(e){
    var xDelta = e.clientX - example8.xDown
    var yDelta = e.clientY - example8.yDown
    example8.dom.style.left = example8.x + xDelta
    example8.dom.style.top = example8.y + yDelta
  }
}

document.addEventListener('DOMContentLoaded', example8.init)
