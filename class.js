class User {
    constructor (name, surname, age, locaton){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.locaton = locaton;
    }
    checkAge(ageTocompare){
        return ageTocompare.age === this.age
        ? this.name + " e " + ageTocompare.name + " hanno la stessa eta'."
        : "Non hanno la stessa eta'."
    }
}

const user1 = new User("Antonio", "Marucci", 25, "Campania")
const user2 = new User("Melissa", "Canu", 34, "Toscana")
const user3 = new User("Francesco", "Napoli", 25, "Emilia")
const user4 = new User("Amedeo", "Ronza", 34, "Sicilia")

console.log(user1);
console.log(user1.checkAge(user3));
console.log(user2.checkAge(user4));
console.log(user2.checkAge(user1));



class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    hasSameOwner(otherPet) {
      return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
    }
  }

  function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

    displayPet(newPet);
    document.getElementById('petForm').reset();
  }

  function displayPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;

    const petsInList = Array.from(petList.children);

    const hasSameOwner = petsInList.some(existingPet => {
      return existingPet.textContent.includes(`Proprietario: ${pet.ownerName}`);
    });

    if (hasSameOwner) {
      listItem.style.color = 'red';
    }

    petList.appendChild(listItem);
  }