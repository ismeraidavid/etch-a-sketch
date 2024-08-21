// Color para pintar

let color = "black";

// Funciones del tablero

function changeSizeBoard(sizeBoard) {
    if (sizeBoard < 0 || sizeBoard > 100) {
        alert("Escoge un valor entre 2 y 100")
        
    } else {
        populateBoard(sizeBoard);
    }
    
};

function populateBoard (sizeBoard) {
    const board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${sizeBoard},1fr)`;
    board.style.gridTemplateRows = `repeat(${sizeBoard},1fr)`;

    totalSquares = sizeBoard * sizeBoard;
    for (i = 0 ; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function resetBoard () {
    const board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(div => div.style.backgroundColor = "white");
}



// Funciones para el color de los cuadrados

function colorSquare() {
    if (color ==="random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

function changeColor (colorChoice) {
    color = colorChoice;
};



const changeSizeBtn = document.querySelector("#changeSize");
const inputSizeBoard = document.querySelector("#inputSize");

inputSizeBoard.addEventListener("change", (event) => {
    let SizeBoardValue = event.target.value;
    changeSizeBoard(SizeBoardValue);
});
