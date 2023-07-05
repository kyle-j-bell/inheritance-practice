//Imports Person class from person.js.
const Person = require('./person');

//Declares a new Teacher class that extends Person.
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    //Inherits firstName and lastName from Person.
    super(firstName, lastName);
    //Initialize subject and yearsOfExperience properties on Teacher objects.
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  //Returns the sum of all yearsOfExperience from an array of Teacher objects.
  static combinedYearsOfExperience(teachers) {
    let totalYears = 0;
    for (let i = 0; i < teachers.length; i++) {
      totalYears += teachers[i].yearsOfExperience;
    }
    return totalYears;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
