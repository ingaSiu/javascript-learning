const birdElem = document.querySelector('[data-bird]');

const BIRD_SPEED = 0.5;
const JUMP_DURATION = 125;
let timeSinceLastJump = Number.POSITIVE_INFINITY;

export function setupBird() {
  setTop(window.innerHeight / 2);
  document.removeEventListener('keydown', handleJump);
  document.addEventListener('keydown', handleJump);
}

// minus moves bird uo, plus moves bird down

export function updateBird(delta) {
  if (timeSinceLastJump < JUMP_DURATION) {
    setTop(getTop() - BIRD_SPEED * delta);
  } else {
    setTop(getTop() + BIRD_SPEED * delta);
  }

  // takes timeSinceLastJump variable and adds delta to it
  // so every single frame we add the time of that frame onto our time since last jump
  // so it's constantly be going up, and every time we hit spacebar it's
  // going to reset back to zero which is going to allow our bird to move up

  timeSinceLastJump += delta;
}

export function getBirdRect() {
  return birdElem.getBoundingClientRect();
}

function setTop(top) {
  birdElem.style.setProperty('--bird-top', top);
}

function getTop() {
  return parseFloat(getComputedStyle(birdElem).getPropertyValue('--bird-top'));
}

function handleJump(e) {
  if (e.code !== 'Space') {
    return;
  }

  timeSinceLastJump = 0;
}
