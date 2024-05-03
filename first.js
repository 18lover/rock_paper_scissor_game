let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const text = document.querySelector("#btn");

const user_Choice = document.querySelector(".user-choice");
const cmp_Choice = document.querySelector(".cmp-choice");

const user = document.querySelector("#user");
const comp =document.querySelector("#comp");

const getCmpChoice=()=>{
    const options=["rock","paper","scissor"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const windeclare=(userWin)=>{
    if(userWin===true){
        userScore++;
        text.innerText="You Won!";
        text.style.backgroundColor="green"
        user.innerText=userScore;
    }
    else{
        compScore++;
        text.innerText="You Lose!";
        text.style.backgroundColor="brown"
        text.style.color="black"
        comp.innerText=compScore;

    }
}

const playGame=(userChoice)=>{
    const cmpChoice=getCmpChoice();
    if(userChoice === cmpChoice)
    {
        text.innerText="Game Draw!";;
        text.style.backgroundColor="dimgrey"
        text.style.color="white"
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissor,paper
            userWin = cmpChoice === "scissor" ? true : false;
        }
        else if(userChoice==="scissor")
        {
            //paper,rock
            userWin = cmpChoice === "paper" ? true : false;
        }
        else
        {
            //rock,scissor
            userWin = cmpChoice === "rock" ? true :false;
        }
        windeclare(userWin);
    }
    user_Choice.innerText=userChoice;
    cmp_Choice.innerText=cmpChoice;
    user_Choice.style.fontSize="1rem";
    cmp_Choice.style.fontSize="1rem"
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});



