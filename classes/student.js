//Imports Person class from person.js.
const Person = require('./person');

//Declares a new Student class that extends Person.
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    //Inherits firstName and lastName from Person.
    super(firstName, lastName);
    //Initializes major and GPA on Student class objects.
    this.major = major;
    this.GPA = GPA;
  }
  //Declares a static method compareGPA that compares the GPA properties of two Student objects and returns a string.
  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`
    }
    if (student1.GPA < student2.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`
    }
    if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA"
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
