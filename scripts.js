function populateBoard (sizeBoard) {
    const board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${sizeBoard},1fr)`;
    board.style.gridTemplateRows = `repeat(${sizeBoard},1fr)`;

    totalSquares = sizeBoard * sizeBoard;
    for (i = 0 ; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSizeBoard(sizeBoard) {
    if (sizeBoard < 0 || sizeBoard > 100) {
        alert("Escoge un valor entre 2 y 100")
        
    } else {
        populateBoard(sizeBoard);
    }
    
}

const changeSizeBtn = document.querySelector("#changeSize");
const inputSizeBoard = document.querySelector("#inputSize");

inputSizeBoard.addEventListener("change", (event) => {
    let SizeBoardValue = event.target.value;
    changeSizeBoard(SizeBoardValue);
});
