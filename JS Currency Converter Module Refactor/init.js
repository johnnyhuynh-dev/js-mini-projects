import {fromSelect, toSelect} from './elements.js';
import {generateOptions} from './utils.js';
import currencies from './currencies.js';
import {handleInput} from './handlers.js';

  export function init() {
    // this will run when the page loads,
    const form = document.querySelector('.app form');
    const optionsHTML = generateOptions(currencies);
    // populate the form select and to select with the listed currencies
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;
    form.addEventListener('input', handleInput);

  }