// DICHIARAZIONI GENERALI
const nameAnimal = document.getElementById("Name");
const nameOwner = document.getElementById("Owner");
const species = document.getElementById("Species");
const breed = document.getElementById("Breed");
const allPets = document.getElementById("All-pets");
const arrayOfAnimals = [];
const arrayBoolean = [];

// COSTRUTTORE OGGETTI PET
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.name = _petName;
    this.owner = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

// PREVENIRE COMPORTAMENTO DI DEFAULT DEL FORM
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#Form").onsubmit = function (e) {
    // preveniamo l'evento di default con conseguente reload della pagina
    e.preventDefault();
    // CODICE DEL SITO

    // CREO L'OGGETTO PET PER OGNI VOLTA CHE SI PREME IL SUBMIT
    let nameObj = nameAnimal.value;
    nameObj = new Pet(
      nameAnimal.value,
      nameOwner.value,
      species.value,
      breed.value
    );

    // AGGIUNGO IL NUOVO OGGETTO PET AD UN ARRAY DI OGGETTI
    arrayOfAnimals.push(nameObj);
    console.log(arrayOfAnimals);

    // STAMPO TUTTO IN UNA LISTA
    const li = document.createElement("li");
    li.innerText = `Nome Animale: ${nameAnimal.value}, Nome Proprietario: ${nameOwner.value}, Specie: ${species.value}, Razza: ${breed.value} `;
    allPets.appendChild(li);
  };
});
