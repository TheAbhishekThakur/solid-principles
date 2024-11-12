/*
    Bad Example: The ManageEmployee class handles two different responsibilities:
    HR management (get, update, delete) and finance management (calculate salary).
*/

class ManageEmployee {

    constructor(http) { };
    SERVER_URL = 'http://localhost:5000/employee';

    getEmployee(empId) {
        return this.http.get(this.SERVER_URL + `/${empId}`);
    }
    updateEmployee(employee) {
        return this.http.put(this.SERVER_URL + `/${employee.id}`, employee);
    }
    deleteEmployee(empId) {
        return this.http.delete(this.SERVER_URL + `/${empId}`);
    }
    calculateEmployeeSalary(empId, workingHours) {
        const employee = this.http.get(this.SERVER_URL + `/${empId}`);
        return employee.rate * workingHours;
    }
}

/*
    Good Example: If you need to modify a function related to HR or finance in the future,
    changes in the ManageEmployee class will impact both areas. Therefore, it's essential to separate functionalities
    concerning HR and finance departments to align with the Single Responsibility Principle.
*/

class ManageEmployee {

    constructor(http) { };
    SERVER_URL = 'http://localhost:5000/employee';

    getEmployee(empId) {
        return this.http.get(this.SERVER_URL + `/${empId}`);
    }
    updateEmployee(employee) {
        return this.http.put(this.SERVER_URL + `/${employee.id}`, employee);
    }
    deleteEmployee(empId) {
        return this.http.delete(this.SERVER_URL + `/${empId}`);
    }
}

class ManageSalaries {

    constructor(http) { };
    SERVER_URL = 'http://localhost:5000/employee';

    calculateEmployeeSalary(empId, workingHours) {
        const employee = this.http.get(this.SERVER_URL + `/${empId}`);
        return employee.rate * workingHours;
    }
}


