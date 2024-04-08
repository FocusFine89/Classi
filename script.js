class User {
  constructor(_firstName = "", _lastName = "", _age = 0, _location = "") {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  isOlder(_user2) {
    if (this.age > _user2.age) {
      return `${this.firstName} è più grande di ${_user2.firstName}`;
    } else if (this.age === _user2.age) {
      return `${this.firstName} e ${_user2.firstName} hanno la stessa età`;
    } else {
      return `${_user2.firstName} è più grande di ${this.firstName}`;
    }
  }
}

const Rick = new User("Rick", "Sanchez", 60, "Terra C-132");
const Morty = new User("Morty", "Smith", 14, "Terra C-132");
const Beth = new User("Beth", "Smith", 34, "Terra C-137");
const Summer = new User("Summer", "Smith", 17, "Terra C-137");
const Jerry = new User("Jerry", "Smith", 40, "Terra C-137");

console.log(Rick.isOlder(Morty));

console.log(Morty.isOlder(Jerry));
