const formDOM = document.querySelector('.form');
const inputsDOM = formDOM.querySelectorAll('input');
const submitDOM = formDOM.querySelector('button');

if (submitDOM) {
  submitDOM.eddEventListener('click', (e) => {
    console.log('SIUNCIAM INFO...');
    console.log(inputsDOM);
  })
}