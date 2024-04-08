const nomeAnimale = document.getElementById("Nome-Animale");
const nomePadrone = document.getElementById("Nome-Padrone");
const specie = document.getElementById("Specie");
const razza = document.getElementById("Razza");
const main = document.querySelector("main");
// const nomeAnimale = document.querySelector("#Nome-Animale");

class Pet {
  constructor(_petName = "", _ownerName = "", _species = "", _breed = "") {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(_pet2) {
    if (this.ownerName === _pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

document.querySelector("#button").onclick = function (e) {
  // preveniamo l'evento di default con conseguente reload della pagina
  // e.preventDefault();
  let nomePet = nomeAnimale.value;
  nomePet = new Pet(
    nomeAnimale.value,
    nomePadrone.value,
    specie.value,
    razza.value
  );
  main.innerHTML += `<div>
    <p>Nome Animale: ${nomePet.petName} </p>
    <p>Nome Padrone: ${nomePet.ownerName} </p>
    <p>Specie: ${nomePet.species} </p>
    <p>Razza: ${nomePet.breed} </p>
    </div>`;

  console.log("pippo");
  //   nomeAnimale.innerText = "";
  //   nomePadrone.innerText = "";
  //   specie.innerText = "";
  //   razza.innerText = "";
};

console.log(main);
