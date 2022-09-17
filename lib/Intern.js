const Employee = require("./Employee");

class Intern extends Employee {
  // TODO - Write Intern class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
};


module.exports = Intern;
