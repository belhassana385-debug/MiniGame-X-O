let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function play(index) {

    if(board[index] !== "") return;

    board[index] = currentPlayer;
    document.getElementById("cell" + index).textContent = currentPlayer;

    for(let i = 0; i < wins.length; i++){
        const [a,b,c] = wins[i];

        if(
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ){
            setTimeout(() => {
                alert(currentPlayer + " wins!");
                resetGame();
            }, 10);
            return;
        }
    }

    if(!board.includes("")){
        setTimeout(() => {
            alert("Draw!");
            resetGame();
        }, 10);
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame(){
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";

    for(let i=0;i<9;i++){
        document.getElementById("cell"+i).textContent = "";
    }
}