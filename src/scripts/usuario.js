export default class Usuario {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}