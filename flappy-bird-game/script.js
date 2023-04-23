import { updateBird } from './bird.js';

document.addEventListener('keypress', handleStart, { once: true });
const title = document.querySelector('[data-title]');

let lastTime;

function updateLoop(time) {
  // skip the first render and start rendering after this
  if (lastTime === null) {
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
    return;
  }
  // delta is a variable we can use to make sure we always move
  // according to how long since its been the last frame
  const delta = time - lastTime;
  updateBird(delta);
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
}

function handleStart() {
  title.classList.add('hide');
  window.requestAnimationFrame(updateLoop);
}

function handleLose() {}
