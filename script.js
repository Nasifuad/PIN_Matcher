document.getElementById("zero").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "0"
})
document.getElementById("one").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "1"
})
document.getElementById("two").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "2"
})
document.getElementById("three").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "3"
})
document.getElementById("four").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "4"
})
document.getElementById("five").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "5"
})
document.getElementById("six").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "6"
})
document.getElementById("seven").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "7"
})
document.getElementById("eight").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "8"
})
document.getElementById("nine").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    input_of_PIN.value = Previous_pin + "9"
})
document.getElementById("back").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    var Previous_pin = input_of_PIN.value
    console.log(typeof (Previous_pin))
    input_of_PIN.value = Previous_pin
})
document.getElementById("clear").addEventListener('click', function () {
    var input_of_PIN = document.getElementById("Enter_Pin")
    input_of_PIN.value = ""
})

function PinGenaratorRandom() {
    var a = Math.floor((Math.random() * 10))
    var b = Math.floor((Math.random() * 10))
    var c = Math.floor((Math.random() * 10))
    var d = Math.floor((Math.random() * 10))
    var e = Math.floor((Math.random() * 10))
    var PIN = (a + "" + b + "" + c + "" + d + "" + e)
    return PIN

}

document.getElementById("Generate_Pin").addEventListener('click', function () {
    var PIN = PinGenaratorRandom()
    document.getElementById("Generated_Pin").value = PIN
})


document.getElementById("enter").addEventListener("click", function () {
    var Generated_Pin = parseFloat(document.getElementById("Generated_Pin").value)
    var Input_Pin = parseFloat(document.getElementById("Enter_Pin").value)
    console.log(Generated_Pin == Input_Pin)
    if (Generated_Pin == Input_Pin) {
        document.getElementById("correct").innerHTML = " Yes the PIN is successfully Matched"
        document.getElementById("correct").style.color = " BLUE"
        document.getElementById("correct").style.fontSize = " 50px"


    }
    else {
        document.getElementById("correct").innerHTML = " Wrong PIN"
        document.getElementById("correct").style.color = " Red"
        document.getElementById("correct").style.fontSize = " 50px"
    }

})
