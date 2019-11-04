document.getElementById("submit").addEventListener("click", function checkForm() {
  var age = document.getElementById("age").valueAsNumber
  var name = document.getElementById("name").value
  if (isNaN(age) || name == "") {
    console.log("Please fill out the form completely before submitting.")
  } else if (age < 18) {
    console.log("You are not old enough to submit this form.")
    document.getElementById("submit").removeEventListener("click", checkForm)
    document.getElementById("submit").classList.add("disabled")
  } else {
    console.log("The form has been submitted.")
  }
})
