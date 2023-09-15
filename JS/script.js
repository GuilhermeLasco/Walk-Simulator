
const $body = document.body;
const $game_section = $body.querySelector('#game-section');
const $game_container = $game_section.querySelector('#game-container');
const $stats_section = $body.querySelector('#stats-section');
const $stats_container = $stats_section.querySelector('#stats-container');

let steps = 0;
let stepsIncrement = 1;

function clickEventHandler(event) {
  const target = event.target;
  const targetTagName = target.tagName;
  const targetId = target.id;

  switch (targetId) {
    case 'step-btn': {
      steps += stepsIncrement;
      console.info(`Steps incremented by ${stepsIncrement} from ${steps - 1} to ${steps} at ${clickEventhandler}`)
    }
  }
}

$body.querySelector('#game-container').addEventListener('click', clickEventHandler)