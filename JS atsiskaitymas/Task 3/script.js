/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message');

button.addEventListener('click', function() {
  // Nusiunčiam HTTP užklausą į API endpoint'ą
  fetch(ENDPOINT)
    .then(function(response) {
      // Grąžinama atsakyme esanti informacija JSON formatu
      return response.json();
    })
    .then(function(data) {
      // Atvaizduojame gautus vartotojus
      let html = '';
      data.forEach(function(user) {
        html += `
          <div class="card">
            <img src="${user.avatar_url}" />
            <div class="info">
            <h4>Login name: ${user.login}</h4>
            <h6>Github url: ${user.url}</h6>
            </div>
          </div>
        `;
      });
      output.innerHTML = html;

      // Paslepiam pranešimą
      message.style.display = 'none';
    })
  
});