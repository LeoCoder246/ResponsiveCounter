let value = 0;
let savedCount = [];

function increment(){
  if(value <= 9){
  value += 1;
  }
  document.querySelector('.js-value-display').textContent = value;
};
function decrement(){
  if(value >= -9){
  value -= 1;
  }
  document.querySelector('.js-value-display').textContent = value;
};

document.querySelector('.js-add-button').addEventListener('click',increment);

document.querySelector('.js-sub-button').addEventListener('click',decrement);

document.querySelector('.js-save-button').addEventListener('click',() => {
 /* let value1 = 0; 
  for (let index = 0; index < savedCount.length; index++) {
  value1 += savedCount[index];
}
console.log(value1);
 */

document.querySelector('.js-text-display').innerHTML = `${value}  saved`;
 
  savedCount.push(value);   
 
  console.log(savedCount);

  addSavedValues();

setTimeout(() => {
 let saveCounterHTML = `<div class="generate-html">Value ${savedCount.length}: ${value} Count</div>`;

 document.querySelector('.js-saved-values').innerHTML += saveCounterHTML;

},1000);

setTimeout(() => {
  document.querySelector('.js-text-display').innerHTML = '';
},1000)
});

document.querySelector('.js-clear-button').addEventListener('click',() => {
  value = 0;
  savedCount.splice(0, savedCount.length) ;
  console.log(savedCount);
    document.querySelector('.js-value-display').innerHTML = value;
    document.querySelector('.js-text-display').innerHTML = `Cleared`;

 setTimeout(() => {
  document.querySelector('.js-saved-values').innerHTML = '';
},1000);

setTimeout(() => {
  document.querySelector('.js-text-display').innerHTML = ''; // Clear the saved message
}, 1000);

});
addSavedValues() 

function addSavedValues() {
if (savedCount.length === 0) {
  console.log('No saved values to sum.');
  return;
}
let sum = savedCount.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of saved values:', sum);
}
