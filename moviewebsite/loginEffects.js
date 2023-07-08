const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=>{
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    logregBox.classList.remove('active');
});

// const buttons = document.querySelectorAll('btn');

// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener("onclick", ()=>{
//         windows.location.href = "movieSite.html";
//     });
// }