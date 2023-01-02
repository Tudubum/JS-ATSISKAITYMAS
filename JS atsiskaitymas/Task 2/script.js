/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const buttonas = document.getElementById('btn__element')
const buttonasCount = document.getElementById('btn__state')

buttonas.addEventListener('click', () => {
    buttonasCount.textContent = parseInt(buttonasCount.textContent) + 1
  });
