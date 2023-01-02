/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let form = document.getElementById("form");

document.getElementById("submit-btn").addEventListener("click", function(e) {
  e.preventDefault();
  
  let kilogramai = document.getElementById("search").value;
  let svarai = kilogramai * 2.2046;
  let gramai = kilogramai / 0.0010000;
  let unicijos = kilogramai * 35.274;

  document.getElementById("output").innerHTML = 
  `
  <h3>Jūsų konvertuoti duomenys:</h3>
  <ul>
    <li>Svarai: ${svarai} lbs</li>
    <li>Gramai: ${gramai} g</li>
    <li>Unicijos: ${unicijos} oz</li>
  </ul>
  `;
  form.reset();
});
 