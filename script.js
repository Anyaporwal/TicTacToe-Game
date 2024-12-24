let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // Horizontal
    [0,3,6], [1,4,7], [2,5,8], // Vertical
    [0,4,8], [2,4,6]            // Diagonal
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {
       
        if(boxes.innerText="") return;

        if(turn0){
            box.innerText="O";
            turn0 = false;
        }
        else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let boxdisable =() =>{
    for(let box of boxes){
        box.disabled = true;
    }

}
let boxenable =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }

}

let showWinner =(winner) =>{
    msg.innerHTML = "Congrats !! Winner is "+winner;
    msgContainer.classList.remove("hide");
}
checkWinner=()=>{

    for(let patterns of winPatterns){
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;

        if(val1!="" || val2!="" || val3!=""){
        if(val1 === val2 && val2 === val3){
            console.log("Winner : "+val1);
            boxdisable();
            showWinner(val1);
        }
        }
    }
};


resetbtn.addEventListener("click", () => {
    turn0 = true;
    boxenable();
    msgContainer.classList.add("hide");

});

newgamebtn.addEventListener("click", () => {
    turn0 = true;
    boxenable();
    msgContainer.classList.add("hide");

});
