var kitne = 6;
var colors = takecolor(kitne);
var jumbo = document.querySelector("#start");
var square = document.querySelectorAll(".square");
var p = document.querySelector("#p");
var choice = document.querySelectorAll(".c");
var random = Math.floor(Math.random() * colors.length);
var span = document.querySelector("#span");
var colorpicked = colors[random];
span.textContent = colorpicked;
for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function () {
        var colorpresent = this.style.background;
        if (colorpresent == colorpicked) {
            this.style.background = colorpicked;
            changecolor(colorpicked);
            p.textContent = "CORRECT";
            jumbo.style.background = colorpicked;
            choice[0].textContent = "Play Again!";
        }
        else {
            p.textContent = "TRY AGAIN!";
            this.style.backgroundColor = "#232323";
        }
    });
}
function changecolor(col) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = col;
    }
}

for (var i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function () {
        choice[0].textContent = "New Game";
        choice[0].classList.remove("selected");
        choice[1].classList.remove("selected");
        choice[2].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent == "Easy") {
            for (var i = 3; i < 6; i++)
                square[i].style.display = "none";
            kitne = 3;
        }
        else {
            kitne = 6;
        }
        colors = takecolor(kitne);
        for (var i = 0; i < colors.length; i++) {
            square[i].style.display = "block";
            square[i].style.background = colors[i];
        }
        random = Math.floor(Math.random() * colors.length);
        span.textContent = colors[random];
        p.textContent = "";
        colorpicked = colors[random];
        jumbo.style.background = "steelblue";

    });
}
function takecolor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(generate());
    }
    return arr;
}
function generate() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}