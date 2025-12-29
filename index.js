
const str = document.getElementById("floatingTextarea2").value


function tocapitalise(){
let toUpCase = str.toUpperCase()
document.getElementById("result").innerHTML = toUpCase
}


function CountVowel(){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" ||  str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" ||str[i] === "U")
            count++
    }
    document.getElementById("result").innerHTML = 'total Count of Vowels: ' + count
}


function countConsonests(){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" ||  str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" ||str[i] === "U"){
            count++
        }
        
    }
    let countCon = str.length - count
    document.getElementById("result").innerHTML = 'total Count of consonests: ' + countCon
}

function tolocase(){
let toSmCase = str.toLowerCase()
document.getElementById("result").innerHTML = toSmCase
}

function countSpaces(){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == " ")
            count++    
    }
    document.getElementById("result").innerHTML = 'total spaces: ' + count
}

// function countNewline(){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == "/n")
//             count++    
//     }
//     document.getElementById("result").innerHTML = 'total New lines: ' + count
// }


function replaceSpaces(){
    let rp = str.replaceAll(" ", "-")
     document.getElementById("result").innerHTML = rp
}

function countWords(){
    let count = 0
     for(let i = 0; i < str.length; i++){
        if(str[i] == " ")
            count++
     }
      document.getElementById("result").innerHTML = 'total words are: ' + (count + 1)
}
    




