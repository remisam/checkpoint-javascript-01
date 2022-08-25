// CHANGING THE AVATAR WHEN I CLICK ON IT.
// ONE WAY TO DO IT.
// const avatar = document.querySelector('.avatar');

// avatar.addEventListener('click', function() {
//     if(avatar.src.match('avatar.svg')) {
//         avatar.src = 'image/avatar-bis.png';
//     } else {
//         avatar.src = 'image/avatar.svg';
//     }
// });


// CHANGING THE AVATAR WHEN I CLICK ON IT.
// ANOTHER WAY TO DO IT.
const avatar = document.querySelector('.avatar');

avatar.onclick = function () {
  if(avatar.src.match('avatar.svg')) {
        avatar.src = 'image/avatar-bis.png';
    } else {
        avatar.src = 'image/avatar.svg';
    }
};


// // BUTTON TO OPEN A PROMPT TO MODIFY THE USER PROFIL.
// // ONE WAY TO DO IT.
// let profilBtn = document.getElementById('profil-btn');
// const userName = document.getElementById('name');
// const colorBg = document.querySelectorAll('.color-bg');
// const colorText = document.querySelectorAll('.color-text');
// const allLinks = document.querySelectorAll('a');

// profilBtn.addEventListener('click', function(event) {
//   profilBtn = prompt('Enter your name');
//   event.preventDefault();
//   userName.innerHTML = profilBtn;
//   userName.style.color = 'white';

//   profilBtn = prompt('Enter your color');
//   for (let i = 0; i < colorBg.length; i++) {
//     colorBg[i].style.backgroundColor = profilBtn;
//   }
//   for (let i = 0; i < colorText.length; i++) {
//     colorText[i].style.color = profilBtn;
//   }
//   for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].style.color = profilBtn;
//   }
// });


// BUTTON TO OPEN A PROMPT TO MODIFY THE USER PROFIL.
// ANOTHER WAY TO DO IT.
let profilBtn = document.getElementById('profil-btn');
const userName = document.getElementById('name');
const description = document.querySelector('.description');
const button = document.querySelectorAll('button');
const colorText = document.querySelectorAll('.color-text');
const colorBg = document.querySelectorAll('.color-bg');
const allLinks = document.querySelectorAll('a');

profilBtn.onclick = function () {
  const newName = prompt('Enter your name');
  userName.innerHTML = newName;
  userName.style.color = 'white';

  const newColor = prompt('Enter your color');
  description.style.backgroundColor = newColor;
  button.forEach((text) => {
    text.style.backgroundColor = newColor;
  });
  colorText.forEach((text) => {
    text.style.color = newColor;
  });
  colorBg.forEach((text) => {
    text.style.backgroundColor = newColor;
  })
  allLinks.forEach((text) => {
    text.style.color = newColor;
  });
};


const frontToolsButton = document.querySelector("#front-tools-btn");
const frontToolsList = document.querySelector("#front-dev-tools");

frontToolsButton.onclick = function () {
  frontToolsList.children[0].innerHTML = "Bash";
  frontToolsList.children[1].innerHTML = "Git Hub";
  frontToolsList.children[2].innerHTML = "VS Code";
  frontToolsList.children[3].innerHTML = "Figma";
};

const frontLangButton = document.querySelector("#front-lang-btn");
const frontLangList = document.querySelector("#front-lang-list");
const frontLangInput = document.querySelector("#front-lang-input");

frontLangButton.onclick = function () {
  const newLangLi = document.createElement("li");
  newLangLi.innerHTML = frontLangInput.value;
  frontLangList.appendChild(newLangLi);
  frontLangInput.value = "";
};


const backLangButton = document.querySelector("#back-lang-btn");
const backLangList = document.querySelector("#back-lang-list");
const backLangInput = document.querySelector("#back-lang-input");

backLangButton.onclick = function () {
  const newLangLi = document.createElement("li");
  newLangLi.innerHTML = backLangInput.value;
  backLangList.appendChild(newLangLi);
  backLangInput.value = "";
};

const backToolsButton = document.querySelector("#back-tools-btn");
const backToolsList = document.querySelector("#back-tools-list");
const backToolsInput = document.querySelector("#back-tools-input");

backToolsButton.onclick = function () {
  const newToolsLi = document.createElement("li");
  newToolsLi.innerHTML = backToolsInput.value;
  backToolsList.appendChild(newToolsLi);
  backToolsInput.value = "";
};