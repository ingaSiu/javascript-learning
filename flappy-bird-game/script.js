import { getBirdRect, setupBird, updateBird } from './bird.js';

import { updatePipes } from './pipe.js';

document.addEventListener('keypress', handleStart, { once: true });
const title = document.querySelector('[data-title]');
const subtitle = document.querySelector('[data-subtitle]');

let lastTime;

function updateLoop(time) {
  // skip the first render and start rendering after this
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
    return;
  }
  // delta is a variable we can use to make sure we always move
  // according to how long since its been the last frame
  const delta = time - lastTime;
  updateBird(delta);
  updatePipes(delta);
  if (checkLose()) {
    return handleLose();
  }
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
}

function checkLose() {
  const birdRect = getBirdRect();

  const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight;
  return outsideWorld;
}
function handleStart() {
  title.classList.add('hide');
  setupBird();
  lastTime = null;
  window.requestAnimationFrame(updateLoop);
}

function handleLose() {
  setTimeout(() => {
    title.classList.remove('hide');
    subtitle.classList.remove('hide');
    subtitle.textContent = '0 pipes';
    document.addEventListener('keypress', handleStart, { once: true });
  }, 100);
}