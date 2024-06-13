import Usuario from "./../../src/scripts/usuario";

export function addButtonListener(buttonId) {
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                alert('Button clicked!');
                var user = new Usuario("A", "something", "1234");
                console.log("This is working");
                createUser(user);
            });
        } else {
            console.error(`Button with id ${buttonId} not found`);
        }
    });
}
