
function even_odd(){
    let number = document.getElementById("num1").value;
    number = Number(number);
    let result = "";
    if (number % 2 === 0) {
        console.log("number", number, "is even");
        result = "even";
    } else {
        console.log("number", number, "is odd");
        result = "odd";
    }
    document.getElementById("result").textContent = result;
}

/*
let number = 13;
if (number % 2 === 0){
    console.log("number", number, "is even");
} else {
    console.log("number", number, "is odd");
}
*/
