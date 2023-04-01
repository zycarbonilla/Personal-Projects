let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = parseInt(cell.id);

  if (gameState[cellIndex] !== '' || checkForWin()) {
    return;
  }

  gameState[cellIndex] = currentPlayer;
  cell.innerText = currentPlayer;
  
  if (checkForWin()) {
    alert(currentPlayer + ' wins!');
    resetGame();
    return;
  }
  
  if (checkForDraw()) {
    alert('It is a draw!');
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWin() {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningPositions.some(positions => {
    const [a, b, c] = positions;
    return gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function checkForDraw() {
  return gameState.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  Array.from(document.getElementsByTagName('td')).forEach(cell => cell.innerText = '');
}

Array.from(document.getElementsByTagName('td')).forEach(cell => cell.addEventListener('click', handleCellClick));