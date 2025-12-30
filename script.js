
const str = document.getElementById("floatingTextarea2").value


function resetText() {
    document.getElementById("floatingTextarea2").value = "";
}


function tocapitalise() {
    let toUpCase = str.toUpperCase()
    document.getElementById("result").innerHTML = toUpCase
}


function CountVowel() {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U")
            count++
    }
    document.getElementById("result").innerHTML = 'Total Count of Vowels: ' + count
}


function countConsonests() {
    let count = 0;

    let str2 = str.replaceAll(" ", "")
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            count++
        }

    }
    let countCon = str2.length - count
    document.getElementById("result").innerHTML = 'Total Count of consonests: ' + countCon
}

function tolocase() {
    let toSmCase = str.toLowerCase()
    document.getElementById("result").innerHTML = toSmCase
}

function countSpaces() {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ")
            count++
    }
    document.getElementById("result").innerHTML = 'Total spaces: ' + count
}

function countNewline() {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "\n")
            count++;
    }
    document.getElementById("result").innerHTML = 'Total New lines: ' + count
}


function replaceSpaces() {
    let rp = str.replaceAll(" ", "-")
    document.getElementById("result").innerHTML = rp
}

function countWords() {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ")
            count++
    }
    document.getElementById("result").innerHTML = 'Total words are: ' + (count + 1)
}


function reverseChar() {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--)
        result = result + str[i]
    document.getElementById("result").innerHTML = result
}

function CheckPalindrom() {

    let result = "";
    for (let i = str.length - 1; i >= 0; i--)
        result = result + str[i]

    if (result == str)
        document.getElementById("result").innerHTML = "String is palidrom"

    else
        document.getElementById("result").innerHTML = "String is not  palidrom"
}


function countChar() {
    let str2 = str.replaceAll(" ", "")
    document.getElementById("result").innerHTML = "Total characters is: " + str2.length
}

function extract() {

    let extracts = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ")
            break;
        else
            extracts = extracts + str[i]
    }
    document.getElementById("result").innerHTML = "First word is: " + extracts
}

function titleCase() {

    let str4 = str.split("")
    for (let i = 0; i < str4.length; i++) {
        if (str4[i] == " ") {
            str4[i + 1] = str4[i + 1].toUpperCase()
        }
    }
    let str5 = str4.join("")
    document.getElementById("result").innerHTML = str5
}

function sortWord(){
    let array = str.split(" ")
    let array1 = array.sort()
    let result = array1.join(" ")
    document.getElementById("result").innerHTML = result
}