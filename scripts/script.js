/*
  RGB Hexa color generator script
  Author: Husham
  License: free to use
*/

const btn = document.querySelector('.generate');
const input = document.querySelector("input");
let colors = [];

//console.log(btn);

btn.addEventListener("click", e => {
  colors = [];
  
  for (let index = 0; index < input.value; index++) {
    let random = randomHexaNumberGenerator();
    //console.log(random);
    colors.push(random);  

  }
  //console.log(colors);
  showColors();
});

function randomHexaNumberGenerator() {
  var length = 6;
  var chars = "0123456789ABCDEF";
  var hex = "#";
  while (length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

const element = (elementType, textContent, className, color)=>{
  const element = document.createElement(elementType);
  element.textContent = textContent;
  element.className = className;
  element.style.background = color;
  return element;
}

function showColors(){
  const mainColors = document.querySelector('.main-colors');
  mainColors.innerHTML = '';

  colors.forEach((color, i) => {
    let colorDiv =element('div', '', 'color-div', color);
    let colorElement = element('span', color, 'color-element', color);
    let copyButtonElement = element('button', 'Copy', 'copy-button', '');

    copyButtonElement.addEventListener('click', (e)=>{
      try {
        
        var range = document.createRange() ;// create new range object
        range.selectNodeContents(colorElement); // set range to encompass desired element text
        var selection = window.getSelection(); // get Selection object from currently user selected text
        selection.removeAllRanges(); // unselect any user selected text (if any)
        selection.addRange(range) ;// add range to Selection object t;
      }
      catch(err) {
        console.log(err);
      }
      document.execCommand("copy");
    });
    colorDiv.appendChild(colorElement);
    colorDiv.appendChild(copyButtonElement);
    mainColors.appendChild(colorDiv);
  });
}
