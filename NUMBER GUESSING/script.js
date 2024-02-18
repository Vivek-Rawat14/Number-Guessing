let usertext = document.querySelector('#usertext')
let winner = document.querySelector('#winner')


let ran = Math.floor(Math.random()*10);
console.log(ran)


function submit(){
    if(usertext.value==ran){
        winner.innerHTML = "Congrts You Have Guess Correct Number"
    }
    else if(usertext.value != ran){
        winner.innerHTML="Wrong guess"
    }
    else{
        alert("Please type between 1-10")
    }

    usertext.value = "";
}



function retry(){
    window.location.reload()
}