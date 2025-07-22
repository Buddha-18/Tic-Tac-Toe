let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container")

let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                showWinner(posVal1);
                disableBtn();
            }
        }
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }
}
const resetGame=()=>{
    turnO=true;
    enableBtn();
}
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
