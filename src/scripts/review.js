export default class Review {
    constructor(id, comment, userId, discoId, score) {
        this.id = id;
        this.comment = comment;
        this.userId = userId;
        this.discoId = discoId;
        this.score = score;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}