const dot1 = document.querySelector("#dot1")
const dot2 = document.querySelector("#dot2")
const dot3 = document.querySelector("#dot3")
const dot4 = document.querySelector("#dot4")
const dot5 = document.querySelector("#dot5")
const dot6 = document.querySelector("#dot6")
const dot7 = document.querySelector("#dot7")

function change() {
    if(dot1.classList.contains("red")) {
        dot1.classList.remove("red");
        dot2.classList.add("green");
    }
    else if(dot2.classList.contains("green")){
        dot2.classList.remove("green");
        dot3.classList.add("blue");
    }
    else if(dot3.classList.contains("blue")){
        dot3.classList.remove("blue");
        dot4.classList.add("yellow");
    }
    else if(dot4.classList.contains("yellow")){
        dot4.classList.remove("yellow");
        dot5.classList.add("purple");
    }
    else if(dot5.classList.contains("purple")){
        dot5.classList.remove("purple");
        dot6.classList.add("pink");
    }
    else if(dot6.classList.contains("pink")){
        dot6.classList.remove("pink");
        dot7.classList.add("white");
    }
    else {
        dot7.classList.remove("white");
        dot1.classList.add("red");
    }
}