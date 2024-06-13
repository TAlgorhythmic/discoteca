import Usuario from "../src/scripts/usuario";



export async function sendRequest(url, data, method) {
    try {
        const response = await fetch(url, {
            method: method, // o 'GET', 'PUT', etc. dependiendo de tu necesidad
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al enviar la petición:', error);
        throw error;
    }
}


export async function createUser(usuario) {
    console.log("Se va a crear el usuario: " + usuario.name);

    try {
        await sendRequest("/createUser", usuario, 'POST');
    }
    catch (error) {
        console.log("No se ha podido crear el usuario");
    }

    console.log("fin de funcion");
}