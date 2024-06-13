// /src/scripts/discoteca.js

export default class Discoteca {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}