//  console.dir(document)

//  // Grabing Submit Button from HTML

console.log(document.querySelector('#submitBtn'))

let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', e => {
  e.preventDefault();

  const text = document.querySelector('#text-input').value
  

  const newTime = document.querySelector('#time-setting').value
  

  const checkBox = document.querySelector('#checkbox').checked
  
  // // New list tag is Created as newLi

  const newLi = document.createElement('li')
  newLi.setAttribute('class', 'd-flex justify-content-between h1 list-group-item mb-2')


  const Gettime = document.createElement('span')
  Gettime.setAttribute('class', 'h3 color-grey')


  // Delete Button Created using createElement 

  const delBtn = document.createElement('button')
  delBtn.setAttribute('class', 'ml-6 btn btn-danger')
  delBtn.setAttribute('id', 'delButton')

  Gettime.textContent = newTime
  newLi.textContent = text;

  newLi.appendChild(Gettime)

  delBtn.innerText = ('🗑️');

  newLi.appendChild(delBtn)

  // // color change if checkbox is checked to green else red.

  setTimeout(() => { colorCh(newLi, checkBox) }, 0)

  document.querySelector('ul').appendChild(newLi)


  function deleteBtn() {
    newLi.parentNode.removeChild(newLi)
  }

  delBtn.addEventListener('click', deleteBtn)


  function colorCh(newLi, checkBox) {
    if (checkBox) {

      newLi.classList.add('plus')
    }

    else {
      newLi.classList.add('minus')

    }
  }

})

//  reset form Section

const btn = document.getElementById('submitBtn');

btn.addEventListener('click', (event) => {

  event.preventDefault();

  //  reset the text input Section

  const textInput = document.getElementById('text-input');

  console.log(textInput.value);

  textInput.value = '';

  //  reset the time input Section

  const timeInput = document.getElementById('time-setting');

  console.log(timeInput.value);

  timeInput.value = '';

  //  reset the checkbox input Section

  const checkboxInput = document.getElementById('checkbox');

  console.log(checkboxInput.value);

  checkboxInput.checked = '';
});

