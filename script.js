'use strict';
// declare variable
const linkEl = document.querySelector('#inputLink');
const img = document.getElementById('output--img');
const sizeSelected = document.getElementById('size');
const radioEl = document.getElementsByName('bg_choice');
let bgSelected;
const searchBtn = document.querySelector('.btn--main');
const downloadBtn = document.querySelector('.btn--download');
const outputQR = document.querySelector('.output--qr');
const outputQRError = document.querySelector('.output--qr-error');

// action when click
searchBtn.addEventListener('click', () => {
  console.log(linkEl);
  console.log(typeof linkEl.value);
  //validation input
  if (linkEl.value.length !== 0) {
    bgSelected = Array.from(radioEl).find((radio) => radio.checked).value;
    img.src = `https://qrtag.net/api/qr${bgSelected}${sizeSelected.value}.png?url=${linkEl.value}`;
    //if not
    outputQR.classList.toggle('hidden');
  } else {
    outputQRError.classList.toggle('hidden');
  }
});

downloadBtn.addEventListener('click', (url) => {});
