let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newButton = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnY = true; //playerX. playerY

const winPatterns = [
    // [0,1,2],     //for 9 boxes
    // [0,3,6],
    // [0,4,8],
    // [1,4,7],
    // [2,5,8],
    // [2,4,6],
    // [3,4,5],
    // [6,7,8]
    [0,1,2, 3,  4],
    [0,5,10,15,20],
    [0,6,12,18,24],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [4,8,12,16,20],
    [5, 6, 7, 8,  9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24]
];

const resetGame = ()=>{
    turnY = true;
    enableBoxs();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnY) {        //playerO
            box.innerText = "O";
            turnY = false;
        }
        else{
            box.innerText = "X";
            turnY = true;
        }
        box.disabled = true;

        checkWinner();
    })
}) 

const disableBoxs = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxs = () =>{
    for(let box of boxes){
        box.disabled=false;

        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxs();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        let pos4Value = boxes[pattern[3]].innerText;
        let pos5Value = boxes[pattern[4]].innerText;

        if(pos1Value != "" && pos2Value !="" && pos3Value !="" && pos4Value !="" && pos5Value !=""){
            // if(pos1Value == pos2Value && pos2Value == pos3Value) ////for 9 boxes
            if(pos1Value == pos2Value && pos2Value == pos3Value && pos3Value == pos4Value && pos4Value == pos5Value){
                console.log(`Winner!", \nwinner is ${pos1Value}`);
                // let winnerMsg = `Winner!", \nwinner is ${pos1Value}`
                // alert(winnerMsg);
                showWinner(pos1Value);
            }
        }
    }
};

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);