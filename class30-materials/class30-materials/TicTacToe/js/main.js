class TicTacToe{
    constructor(currentPlayer,gameOver,cells){
        this.currentPlayer=currentPlayer;
        this.gameOver=gameOver;
        this.cells=cells;
    }
//to check click in the game board
    handleClick(cell){
        if(!cell.textContent && !this.gameOver){
            cell.textContent=this.currentPlayer;
            if(this.checkWin(this.currentPlayer)){
                document.querySelector('.status').textContent=`Player ${this.currentPlayer}'s wins`;
                this.gameOver=true;
            }else if(this.boardIsFull()){
                document.querySelector('.status').textContent='Game Draw';
                this.gameOver=true;
            }else{
                this.currentPlayer=this.currentPlayer==='X'?'O':'X';
                document.querySelector('.status').textContent=`Player ${this.currentPlayer}'s turn`;
            }
        }
    }
//check whether current player win or not
    checkWin(player){
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
    boardIsFull(){
        return Array.from(this.cells).every(cell=>cell.textContent !=="")
    }
//function for reset all
    clearAll(){
        this.cells.forEach(cell=>{
            cell.textContent="";
        });
        this.gameOver=false;
        this.currentPlayer='X'
        document.getElementById('status').textContent="Player X's turn";
    }
};


//set initial status
    document.querySelector("#status").textContent="Player X's turn";
// create object of the class 
let cells=document.querySelectorAll('.cell');

const game=new TicTacToe('X',false,cells);
//add event listeners for reset and cell click
cells.forEach(cell=>cell.addEventListener("click",()=>game.handleClick(cell)));

document.querySelector("#reset-button").addEventListener("click",game.clearAll.bind(game));
