let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let btnArray = Array.from(buttons);

let value = "";

btnArray.forEach(btn => {
    btn.addEventListener("click",(e) => {

        if (e.target.innerHTML == 'DEL') {
            value = value.substring(0, value.length-1);
            display.value = value;
        }
        else if (e.target.innerHTML == "AC") {
            value = "";
            display.value = value;
        }
        else if (e.target.innerHTML == "=") {
            value = eval(value);
            display.value = value;
        }
        else {
            value = value + e.target.innerHTML;
            display.value = value;
        }
    })
});