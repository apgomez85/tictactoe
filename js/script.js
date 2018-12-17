let playerOne = {
  mark: ''
};

let playerTwo = {
  mark: ''
};

const Game = () => {
  document.getElementById('btn-player0').addEventListener('click', function() {
    document.getElementById('board').style.display = 'flex';
    document.getElementById('playerPanel').style.display = 'none';
    playerOne.mark = 'O';
    playerTwo.mark = 'X';
  });
  document.getElementById('btn-playerx').addEventListener('click', function() {
    document.getElementById('board').style.display = 'flex';
    document.getElementById('playerPanel').style.display = 'none';
    playerOne.mark = 'X';
    playerTwo.mark = 'O';
  });

  const checkWinner = () => {
    const boardTopRow = [];
    const boardMiddleRow = [];
    const boardBottomRow = [];
    const leftColumn = [];
    const middleColumn = [];
    const rightColumn = [];
    const diagonalOne = [];
    const diagonalTwo = [];

    boardTopRow.push(document.getElementById('cell-one').innerHTML);
    boardTopRow.push(document.getElementById('cell-two').innerHTML);
    boardTopRow.push(document.getElementById('cell-three').innerHTML);
    boardMiddleRow.push(document.getElementById('cell-four').innerHTML);
    boardMiddleRow.push(document.getElementById('cell-five').innerHTML);
    boardMiddleRow.push(document.getElementById('cell-six').innerHTML);
    boardBottomRow.push(document.getElementById('cell-seven').innerHTML);
    boardBottomRow.push(document.getElementById('cell-eight').innerHTML);
    boardBottomRow.push(document.getElementById('cell-nine').innerHTML);
    leftColumn.push(document.getElementById('cell-one').innerHTML);
    leftColumn.push(document.getElementById('cell-four').innerHTML);
    leftColumn.push(document.getElementById('cell-seven').innerHTML);
    middleColumn.push(document.getElementById('cell-two').innerHTML);
    middleColumn.push(document.getElementById('cell-five').innerHTML);
    middleColumn.push(document.getElementById('cell-eight').innerHTML);
    rightColumn.push(document.getElementById('cell-three').innerHTML);
    rightColumn.push(document.getElementById('cell-six').innerHTML);
    rightColumn.push(document.getElementById('cell-nine').innerHTML);
    diagonalOne.push(document.getElementById('cell-three').innerHTML);
    diagonalOne.push(document.getElementById('cell-five').innerHTML);
    diagonalOne.push(document.getElementById('cell-seven').innerHTML);
    diagonalTwo.push(document.getElementById('cell-one').innerHTML);
    diagonalTwo.push(document.getElementById('cell-five').innerHTML);
    diagonalTwo.push(document.getElementById('cell-nine').innerHTML);

    if (
      boardTopRow.toString() === 'X,X,X' ||
      boardTopRow.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      boardMiddleRow.toString() === 'X,X,X' ||
      boardMiddleRow.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      boardBottomRow.toString() === 'X,X,X' ||
      boardBottomRow.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      leftColumn.toString() === 'X,X,X' ||
      leftColumn.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      middleColumn.toString() === 'X,X,X' ||
      middleColumn.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      rightColumn.toString() === 'X,X,X' ||
      rightColumn.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      diagonalOne.toString() === 'X,X,X' ||
      diagonalOne.toString() === 'O,O,O'
    ) {
      displayEndGame();
    } else if (
      diagonalTwo.toString() === 'X,X,X' ||
      diagonalTwo.toString() === 'O,O,O'
    ) {
      displayEndGame();
    }
  };

  const displayEndGame = () => {
    if (playerTurn) {
      document.getElementById('message').innerHTML = `Player ${
        playerOne.mark
      } is the winner!`;
      document.getElementById('message-game').style.display = 'flex';
    } else {
      document.getElementById('message').innerHTML = `Player ${
        playerTwo.mark
      } is the winner!`;
      document.getElementById('message-game').style.display = 'flex';
    }
  };

  let playerTurn = true;

  document.getElementById('board').addEventListener('click', function(e) {
    if (e.target.className === 'grid-item' && e.target.textContent === '') {
      if (playerTurn) {
        e.target.textContent = playerOne.mark;
        checkWinner();

        playerTurn = false;
      } else {
        e.target.textContent = playerTwo.mark;
        checkWinner();
        playerTurn = true;
      }
    }
  });

  document.getElementById('btn-nw-game').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    Array.prototype.forEach.call(gridItems, item => {
      item.innerHTML = '';
    });
    document.getElementById('message-game').style.display = 'none';
  });

  document
    .getElementById('btn-reset-game')
    .addEventListener('click', function() {
      window.location.reload();
    });
};

Game();
