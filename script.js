'use strict';
// declare variable
const linkEl = document.getElementById('inputLink').value;
const img = document.getElementById('output--img');
const dropDownEl = document.getElementById('size');
let sizeSelected;
const radioEl = document.querySelector(
  "input[type='radio'][name='bg_choice']:checked"
);
let bgSelected;
const searchBtn = document.querySelector('.btn--main');
const downloadBtn = document.querySelector('.btn--download');
const outputQR = document.querySelector('.output--qr');

// action when click
searchBtn.addEventListener('click', () => {
  sizeSelected = dropDownEl.value;
  bgSelected = radioEl.value;
  console.log(radioEl);
  //validation input
  img.src = `https://qrtag.net/api/qr_transparent_${sizeSelected}.png?url=${linkEl}`;
  //if not
  outputQR.classList.toggle('hidden');
});

downloadBtn.addEventListener('click', (url) => {});
