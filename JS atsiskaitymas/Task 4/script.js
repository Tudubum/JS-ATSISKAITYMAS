/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

function getData(){
    fetch('cars.json')
        .then(response => response.json()
        .then(data => {
            data.forEach(car => {
                const brand = car.brand;
                const models = car.models;

                const card = document.createElement('div');
                card.classList.add('card')

                const brandElement = document.createElement('h2');
                brandElement.textContent = brand;

                const modelsElement = document.createElement('ol');
                models.forEach(model => {
                    const modelItem = document.createElement('li')
                    modelItem.textContent = model;
                    modelsElement.appendChild(modelItem);
                });

                card.appendChild(brandElement);

                card.appendChild(modelsElement);
          
                document.body.appendChild(card);

                output.appendChild(card);
            });
        }));
}

window.addEventListener('load', getData);