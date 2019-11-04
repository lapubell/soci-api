var page = {
  block: document.getElementById("block"),
  container: document.getElementById("container"),

   toSecond: function() {
    page.container.classList.add("second")
    page.container.classList.remove("start")
    page.block.innerHTML = "Oh no you didn't!"
    page.block.removeEventListener("click", page.toSecond)
    page.block.addEventListener("click", page.toThird)
  },

   toThird: function() {
    page.container.classList.remove("second")
    page.container.classList.add("third")
    page.block.innerHTML = "Right, now you've done it!!!"
    page.block.removeEventListener("click", page.toThird)
    page.block.addEventListener("click", page.toFourth)
  },

   toFourth: function() {
    page.container.classList.remove("third")
    page.container.classList.add("fourth")
    page.block.innerHTML = "Breathe in... Breathe out..."
    page.block.removeEventListener("click", page.toFourth)
    page.block.addEventListener("click", page.toStart)
  },

   toStart: function() {
    page.container.classList.remove("fourth")
    page.container.classList.add("start")
    page.block.innerHTML = "Try and click me!"
    page.block.removeEventListener("click", page.toStart)
    page.block.addEventListener("click", page.toSecond)
  }
}

page.block.addEventListener("click", page.toSecond)
