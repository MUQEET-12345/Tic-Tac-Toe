let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#btn");
let start = document.querySelector("#btn-reset")
let msg = document.querySelector(".hide")

let turnO = true;

const winpattern = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const enabel = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML ="";
    }
} ;
    const resetgame =() =>{
        turnO = true;
        msg.classList.add("hide");
        enabel();
    }

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box");
        if (turnO) {
            box.innerHTML = "0";
            turnO = false;
        } else {
            box.innerHTML = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    });


    

    const disabledbox = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    } ;

    const showWinner = (Winner) => {
        msg.innerHTML = `Congratulation, winner is ${Winner}`;
        msg.classList.remove("hide");
        disabledbox();
    }
    function checkWinner() {
        for (pattern of winpattern) {
            let pos0Value = boxes[pattern[0]].innerHTML;
            let pos1Value = boxes[pattern[1]].innerHTML;
            let pos2Value = boxes[pattern[2]].innerHTML;

            if (pos0Value != "" && pos1Value != "" && pos2Value != "") {
                if (pos0Value === pos1Value && pos1Value === pos2Value) {
                    console.log("Winner", pos1Value)
                    showWinner(pos1Value)
                    // showWinner("Amiiiiii")

                };
            };
        };
    };

});
resetbutton.addEventListener("click",resetgame)
start.addEventListener("click",resetgame)
