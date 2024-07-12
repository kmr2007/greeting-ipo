// Personalized Greeting by Kaydence Riehl

document.getElementById("btn").addEventListener("click", () => {
  // INPUT
  let name = document.getElementById("name-in").value;
  let time = document.getElementById("time-in").value;

  // PROCESS
  let output = "Hello " + name + "! Have a good " + time + ".";

  // OUTPUT
  document.getElementById("output").innerHTML = output;
});
