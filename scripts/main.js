let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.jpg') {
      myImage.setAttribute('src', 'images/Web.png');
    } else {
      myImage.setAttribute('src', 'images/logo.jpg');
    }
});



  

















let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Microlog vous souhaites la Bienveue, ' + myName;
  }

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Microlog vous souhaites la Bienvenue, ' + storedName;
  }
  
  myButton.addEventListener('click', function() {
    setUserName();
  });