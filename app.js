let secret = new WeakMap();

class Person {
  constructor (name, phone) {
    this.name = name;
    secret.set(this, {_number: phone});
  }
  set phone (newNumber) {
    secret.get(this)._number = newNumber;
  }
  get phone () {
    return secret.get(this)._number;
  }
}

const p1 = new Person('Nick', 543215432);

console.log(p1._number === undefined ? 'This property is private' : p1._number);
// set a new phone number
p1.phone = 123456789;
console.log(`Phone by get method: ${p1.phone}`)



