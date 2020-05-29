import {fetchJoke} from './index.js'
import {loader, jokeHolder, jokeText} from './elements.js';
import {randomItemFromArray} from './utils.js';
import buttonText from '../data/buttonText.js';

// name export
export async function handleClick() {
    const {joke} = await fetchJoke(loader);
    jokeHolder.textContent = joke;
    jokeText.textContent = randomItemFromArray(buttonText, jokeText.textContent);
  }
  


