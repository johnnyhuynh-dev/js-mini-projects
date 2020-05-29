import {convert} from './lib.js';
import {formatCurrency} from './utils.js';
import {formInput, fromSelect, toSelect, toEl} from './elements.js';

export async function handleInput(e) {
    const rawAmount = await convert(formInput.value, fromSelect.value, toSelect.value);  
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
  }