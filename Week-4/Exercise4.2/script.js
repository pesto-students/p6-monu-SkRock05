var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
var Teacher = function () {};
Teacher.prototype.teach = function (subject) {
  let val = `${this.name} is now teaching ${subject}`;
  console.log(val);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
