document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("from index.js");
  const number = 12345678910;
  const pin = 1234;

  const getNumber = document.getElementById("number").value;
  const numberConverted = parseInt(getNumber);
  const getPin = document.getElementById("pin").value;
  const pinConverted = parseInt(getPin);

  if (number === numberConverted && pin === pinConverted) {
    // console.log("yes match your one input");
    window.location.href = "./home.html";
  } else {
    alert("sorry not match either");
  }
});
