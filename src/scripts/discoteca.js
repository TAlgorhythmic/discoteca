// /src/scripts/discoteca.js

export default class Discoteca {
    constructor(id, name, address, telephoneNumber, rate) {
        this.name = name;
        this.id = id;
        this.address = address;
        this.telephoneNumber = telephoneNumber;
        this.rate = rate;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}