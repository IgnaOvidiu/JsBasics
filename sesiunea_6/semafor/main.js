const dot1 = document.querySelector("#dot1")
const dot2 = document.querySelector("#dot2")
const dot3 = document.querySelector("#dot3")
const time = document.querySelector("#timer")


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

setInterval(cycleLights, 10000);

let counter = 10;
function timer() {
  counter--;
  if(counter == 0) {
    counter = 10;
  }
  time.innerHTML = counter;
}

const colorChangeTimer = setInterval(() => {
   timer();
}, 1000);



