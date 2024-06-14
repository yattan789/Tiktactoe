
let reset_btn = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#winner_msg");

reset_btn.addEventListener("click", () => 
{ 
    boxes.forEach( box =>
        {
            box.innerHTML = "-";
            box.disabled = false;
        }); 
        winner_msg.innerHTML = ``; 
        msg_container.classList.add("hide");
});

function disable_btn()
{
    boxes.forEach( box => {
        box.disabled =true;
    });
}


function checkWinner()
{
    let winningCombinations = 
    [
        [0, 1, 2],
        [0 ,3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ]

    winningCombinations.forEach(pat => 
    {
        console.log(boxes[pat[0]] , boxes[pat[1]] , boxes[pat[2]]);
        
        if( boxes[pat[0]].innerHTML == boxes[pat[1]].innerHTML && boxes[pat[1]].innerHTML == boxes[pat[2]].innerHTML && 
            boxes[pat[0]].innerHTML != "-" )
        {
            msg_container.style.display = "block";
            winner_msg.innerHTML = ` ${boxes[pat[0]].innerHTML} is the winner `; 
            msg_container.classList.remove("hide");
            disable_btn();
        }
    });

};


let turn0 = true;
boxes.forEach(box => {
  
    box.addEventListener("click", () => 
    { 
    console.log(box);
      if (turn0) 
        {
          box.innerHTML = "O";
          //check winner 
          turn0 = false;
        } 
        else 
        {
            box.innerHTML= "X";
            // check for winner
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
  });