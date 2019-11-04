var level = 0
var time = 0
var points = 0
var numLevels = 5

var levels = [
  {
    level: "1",
    time: 120
  },
  {
    level: "2",
    time: 60
  }, {
    level: "3",
    time: 30
  }, {
    level: "4",
    time: 15
  }, {
    level: "5",
    time: 5
  }
]

var startGame = function() {
  document.querySelector('#modal').className = "off"
  document.querySelector('#blanket').className = "off"
  setLevel(level)
  redrawTimer()
  game = setInterval(tick, 1000)
}

document.querySelector('.button').addEventListener("click", startGame)

var tick = function () {
  var goal = isGoal()
  if (goal && level < numLevels - 1){
    levelUp()
  } else if (goal) {
    increasePoints()
    endGame(goal)
  } else {
    time--
    redrawTimer()
  }
}

var redrawTimer = function() {
  if (time >= 0){
    var minutes = Math.floor(time/60)
    if (minutes < 10){
      var min = '0' + String(minutes)
    } else {
      var min = String(minutes)
    }

    var seconds = time - minutes * 60
    if (seconds < 10){
      var sec = '0' + String(seconds)
    } else {
      var sec = String(seconds)
    }

    if (time <= 10) {
      document.querySelector('#timer').style.color = "red"
    }

    document.querySelector('#timer').innerHTML = min + ":" + sec
  } else {
    endGame(false)
  }
}

var isGoal = function() {
  var ball = document.querySelector("#ball").getBoundingClientRect()
  var goal = document.querySelector("#goal").getBoundingClientRect()

  if (ball.top > goal.top &&
    ball.top + ball.height < goal.top + goal.height &&
    ball.left > goal.left &&
    ball.width + ball.left < goal.width + goal.left) {
      return true
  } else {
    return false
  }
}

var endGame = function(goal) {
  if (goal) {
    console.log("Yey you won!")
  } else {
    console.log("You lost...")
  }
  clearInterval(game)
}

var levelUp = function() {
  console.log("Sweet, you levelled up!")
  level++
  increasePoints()
  // document.querySelector("#modal").innerHTML = "<p> Nice! You levelled up to Level " + String(level + 1) + ". You're on a roll! Keep going!</p><div class='button'> Next Level </div>"
  // document.querySelector(".button").addEventListener("click", function() { setLevel(level) })
  // document.querySelector("#modal").className = "on"
  // document.querySelector("#blanket").className = "on"
  setLevel(level)
}

var setLevel = function(l) {
  var levelInfo = levels[l]
  document.querySelector("#level").innerHTML = "Level " + String(levelInfo.level)
  time = levelInfo.time
  document.querySelector('#ball').className = "level" + String(levelInfo.level)
  document.querySelector('#goal').className = "level" + String(levelInfo.level)
}

var increasePoints = function() {
  points += level * time
  document.querySelector("#score").innerHTML = String(points) + " Points"
}
