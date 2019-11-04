var sheet = document.styleSheets[1]
var levels = [ "border: 4px solid red;", "border: 4px solid red;", "border: 4px solid red;", "border: 4px solid red;", "margin-left: 170px", "color: grey", "border: 4px solid red", "color: red", "color: red", "outline: red solid 5px" ]
var index = sheet.cssRules.length
var minTop = 5
var numLevels = 10
var maxTop = 5 - (numLevels-1) * 95

for (var i = 1; i <= numLevels; i++){
  document.querySelector('#check' + String(i)).addEventListener('click', function(e) {
    var level = parseInt(e.target.id.replace("check", ""))
    var selector = document.querySelector('#input' + String(level)).value
    document.querySelector('#level' + String(level) + ' code.language-stylus span.variable').innerHTML = selector
    var currentLength = sheet.cssRules.length
    if (currentLength > index) {
      sheet.deleteRule(index)
    }
    var selectors = selector.split(",")
    selector = selectors.join(", #level" + String(level) + " ")
    console.log(selector)
    sheet.insertRule("#level" + String(level) + " " + selector + " {" + levels[level - 1] + "}", index)
  })
}

document.querySelector("#down").addEventListener('click', function() {
  var current = getTop()
  if (current > maxTop){
    document.querySelector("#down").className = ""
    document.getElementById('display').style.top = String(current-95) + "vh"
  }
  if (current == maxTop + 95) {
    document.querySelector("#down").className = "disabled"
  }
  document.querySelector("#up").className = ""
})

document.querySelector("#up").addEventListener('click', function() {
  var current = getTop()
  if (current < minTop) {
    document.querySelector("#up").className = ""
    document.getElementById('display').style.top = String(current+95) + "vh"
  }
  if (current == minTop - 95) {
    document.querySelector("#up").className = "disabled"
  }
  document.querySelector("#down").className = ""
})

var getTop = function() {
  var current = document.getElementById('display').style.top
  current = current.replace("px", "")
  current = parseInt(current)
  return current
}
