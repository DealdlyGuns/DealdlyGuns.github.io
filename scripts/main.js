let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre pseudo.');
    localStorage.setItem('pseudo', myName);
    myHeading.textContent = 'Bienvenue, ' + myName;
  }
  if (!localStorage.getItem('pseudo')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('pseudo');
    myHeading.textContent = 'Bienvenue, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });