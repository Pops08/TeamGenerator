class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return "Employee Name: " + this.name
    }

    getId() {
        return "Employee ID: " + this.id
    }

    getEmail() {
        return "Employee Email: " + this.email
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;