let count = 0;
let number = document.getElementById("number");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");

increase.onclick = function() {
    count++;
    number.innerHTML = count;
};

reset.onclick = function() {
    count = 0;
    number.innerHTML = count;
};

decrease.onclick = function() {
    count--;
    number.innerHTML = count;
};

