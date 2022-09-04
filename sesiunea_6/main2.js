const dot1 = document.querySelector("#dot1")
const dot2 = document.querySelector("#dot2")
const dot3 = document.querySelector("#dot3")

function cycleLights() {
    if (dot1.classList.contains("red")) {
        dot1.classList.remove("red");
        dot3.classList.add("green")
      } 
      else if (dot3.classList.contains("green")) {
        dot3.classList.remove("green");
        dot2.classList.add("yellow");
      } 
      else {
        dot2.classList.remove("yellow");
        dot1.classList.add("red");
      }
}

setInterval(cycleLights, 6000);


let timeleft = 5;
const colorChangeTimer = setInterval(() => {
    if (timeleft <= 0) {
        clearInterval(colorChangeTimer);
      }
  document.getElementById("progressBar").value = 5 - timeleft;
  timeleft -= 1;
}, 1000);
