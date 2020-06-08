import {handleResult} from "./handlers";
import {colorsByLength, isDark} from "./colors";

const colorEl = document.querySelector('.colors');


//display the colors on the page
//first create an array of HTML tags, then add it in the colors div
function displayColors(colors) {
  return colors.map(color => {
    return `<span class="color ${color}${isDark(color) ? " dark" : ""}" style="background: ${color}">${color}</span>`;
  }).join('');

}

//normalize the calling of the recognition package
 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
 
 //the main function 
 function start() {
   //see if the browser supports it
  if(!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech reco.');
    return;
  }

  //otherwise, it does work
  console.log('Starting...')
  // make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
 }

 // populate the color div with different colors
 colorEl.innerHTML = displayColors(colorsByLength); 

 start();
