
class Employee {
    constructor(id, name, division) {
        this.id = id;
        this.name = name;
        this.division = division;
    }
    login = () => {
        console.log(this.id + " has logged in");
        console.log(this.name + " has logged in");
        console.log(this.division + " has logged in");
    };
}