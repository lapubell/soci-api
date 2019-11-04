document.getElementById("text").addEventListener("input", function() {
  document.getElementById("message").innerHTML = "I love " + document.getElementById("text").value + "!"
})
