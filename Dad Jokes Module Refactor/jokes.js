/*eslint-disable*/
import {handleClick} from './lib/handlers.js';
import {jokeButton} from './lib/elements.js';

// display a random joke everytime the button is clicked
jokeButton.addEventListener('click', handleClick);
