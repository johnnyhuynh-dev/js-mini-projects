import {isValidColor} from './colors';

function logWords(results) {
    // console.log(results[results.length - 1][0].transcript);
}

export function handleResult({results}) {
    logWords(results);
    const words = results[results.length - 1][0].transcript;
    //lowercase everything
    let color = words.toLowerCase();
    // strip space out
    color = color.replace(/\s/g,'');

    // check if it's a valid color
    if(!isValidColor(color)) return; // thats all folks
    // if it is, then show the UI for that
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got');
    console.log('This is a valid color');
    // change the background color
    document.body.style.backgroundColor = color;

}