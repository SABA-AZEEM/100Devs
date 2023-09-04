                    //global variables
let currentPlayer='X';
let gameOver=false;
                    // Event Listeners
//add event listener for cell click
let cells=document.querySelectorAll('.cell');
cells.forEach(cell=>cell.addEventListener("click",()=>handleClick(cell)));
//add event listeners for reset button
let button=document.querySelector("#reset-button");
button.addEventListener("click",clearAll);

                    //set initial status
document.querySelector("#status").textContent="Player X's turn"

//function for handle click
function handleClick(cell){
    if(!cell.textContent && !gameOver){
        cell.textContent=currentPlayer;
        if(checkWin(currentPlayer)){
            document.querySelector('.status').textContent=`Player ${currentPlayer}'s wins`;
            gameOver=true;
        }else if(boardIsFull()){
            document.querySelector('.status').textContent='Game Draw';
            gameOver=true;
        }else{
            currentPlayer=currentPlayer==='X'?'O':'X';
            document.querySelector('.status').textContent=`Player ${currentPlayer}'s turn`;
        }
    }
}

//function for check whether current player win or not
function checkWin(player){
    const winningCombos=[
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
      [1, 5, 9], [3, 5, 7]              // Diagonals
    ];

    for(const combo of winningCombos){
        if(combo.every(cell=>document.getElementById(`cell-${cell}`).textContent===player)){
            return true;
        }
    }
    return false;
}
//function for check board is full or not?
function boardIsFull(){
    return Array.from(cells).every(cell=>cell.textContent !=="")
}
//function for reset all
function clearAll(){
    cells.forEach(cell=>{
        cell.textContent="";
    });
    gameOver=false;
    currentPlayer='X'
    document.getElementById('status').textContent="Player X's turn";
}