var submitForm = function() {
  if (document.getElementById("name").value == "") {
    console.log("Please input a name before submitting.")
  } else {
    console.log("This form has been submitted.")
  }
}

document.getElementById("age").addEventListener("input", function() {
  var age = document.getElementById("age").value
  if (age >= 18) {
    document.getElementById("submit").addEventListener("click", submitForm)
    document.getElementById("submit").classList.remove("disabled")
  } else {
    document.getElementById("submit").removeEventListener("click", submitForm)
    document.getElementById("submit").classList.add("disabled")
  }
})
