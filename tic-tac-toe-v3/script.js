const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('#board');

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn;

const handleClick = (e) => {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass);

  swapTurns();
  setBoardHoverClass();
};

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const swapTurns = () => {
  circleTurn = !circleTurn;
};

const setBoardHoverClass = () => {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
};
