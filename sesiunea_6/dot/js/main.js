const dot = document.querySelector("#dot");
const btn = document.querySelector("#change")


function changeColor() {
    if (dot.classList.contains("red")) {
        dot.classList.remove("red");
        dot.classList.add("green");
        btn.classList.remove("greenb");
        btn.classList.add("blueb");
      } 
      else if (dot.classList.contains("green")) {
        dot.classList.remove("green");
        dot.classList.add("blue");
        btn.classList.remove("blueb");
        btn.classList.add("redb");
      } 
      else {
        dot.classList.remove("blue");
        dot.classList.add("red");
        btn.classList.remove("redb");
        btn.classList.add("greenb");
      }
}




