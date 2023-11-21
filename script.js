let add = document.getElementById("+");
let sub = document.getElementById("-");
let mul = document.getElementById("*");
let div = document.getElementById("/");

let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let submit = document.getElementById("=");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");

let input = document.getElementById("input");
let inputText = "";
let showText = ""

let arr = [];
let ans = 0;
let tempText = "";

const solve = () => {
    let operator = [];
    let operand = [];
    for (let i of arr) {
        if (i == "+" || i == "-" || i == "*" || i == "/") {
            operator.push(i);
        }
        else {
            operand.push(i);
        }
    }
    let i = 0;
    ans = operand[i];
    while (i < operator.length) {
        if (operator[i] == "+") {
            ans = ans + operand[i + 1];
        }
        if (operator[i] == "-") {
            ans = ans - operand[i + 1];
        }
        if (operator[i] == "*") {
            ans = ans * operand[i + 1];
        }
        if (operator[i] == "/") {
            ans = ans / operand[i + 1];
        }
        i++;
    }
    console.log(operand);
    console.log(operator)
    // console.log(ans);
    return ans;
}

add.addEventListener("click", (e) => {
    e.preventDefault();
    showText += "+";
    arr.push(parseInt(inputText));
    tempText = inputText;
    inputText = "";
    input.value = showText;
    arr.push("+");
    console.log(arr);
})

sub.addEventListener("click", (e) => {
    e.preventDefault();
    showText += "-";
    arr.push(parseInt(inputText));
    tempText = inputText;
    inputText = "";
    input.value = showText;
    arr.push("-");
    console.log(arr);
})
mul.addEventListener("click", (e) => {
    e.preventDefault();
    showText += "*";
    arr.push(parseInt(inputText));
    tempText = inputText;
    inputText = "";
    input.value = showText;
    arr.push("*");
    console.log(arr);
})
div.addEventListener("click", (e) => {
    e.preventDefault();
    showText += "/";
    arr.push(parseInt(inputText));
    tempText = inputText;
    inputText = "";
    input.value = showText;
    arr.push("/");
    console.log(arr);
})

zero.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "0";
    showText += "0";
    input.value = showText;
    console.log(arr);
})
one.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "1";
    showText += "1";
    input.value = showText;
    console.log(arr);
})
two.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "2";
    showText += "2";
    input.value = showText;
    console.log(arr);
})
three.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "3";
    showText += "3";
    input.value = showText;
    console.log(arr);
})
four.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "4";
    showText += "4";
    input.value = showText;
    console.log(arr);
})
five.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "5";
    showText += "5";
    input.value = showText;
    console.log(arr);
})
six.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "6";
    showText += "6";
    input.value = showText;
    console.log(arr);
})
seven.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "7";
    showText += "7";
    input.value = showText;
    console.log(arr);
})
eight.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "8";
    showText += "8";
    input.value = showText;
    console.log(arr);
})
nine.addEventListener("click", (e) => {
    e.preventDefault();
    inputText += "9";
    showText += "9";
    input.value = showText;
    console.log(arr);
})
submit.addEventListener("click", (e) => {
    e.preventDefault();
    arr.push(parseInt(inputText));
    tempText = inputText;
    let ans = solve();
    input.value = ans;
    showText = ans.toString();
    inputText = ans.toString();
    arr = [];
})
clear.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = "";
    let temp2 = "";
    for (let i = 0; i < showText.length - 1; i++) {
        temp += showText[i];
    }
    if (showText[showText.length - 1] != "+" || showText[showText.length - 1] != "-" || showText[showText.length - 1] != "*" || showText[showText.length - 1] != "/") {
        for (let i = 0; i < inputText.length - 1; i++) {
            temp2 += inputText[i];
        }
        inputText = temp2;
        console.log(inputText);
    }
    showText = temp;
    // console.log(showText);
    input.value = showText;
})

del.addEventListener("click", (e) => {
    e.preventDefault();
    showText = "";
    inputText = "";
    arr = [];
    input.value = "";
})