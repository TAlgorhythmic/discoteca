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
}

export async function getDiscotecas() {

    try {
        var response = await sendRequest("", null,'GET');
        return response;
    }
    catch (error) {
        console.log("No se han podido obtener las discotecas");
        return [];
    }
}

// obtiene los comentarios de un usuario
export async function getCommentarios(user) {
    try {
        var response = await sendRequest("", user, 'POST');
        return response;
    }
    catch (error) {
        console.log("No se han podido obtener los comentarios de este usuario");
    }
}

export async function getToken() {
    try {
        var response = await sendRequest("", null, 'GET');
        return response;
    }
    catch (error) {
        console.log("Fatal error id, token was not retrieved!");
    }
}

// obtains only the 10 most recent reseñas
export async function getResenasRecientes() {
    try {
        var response = await sendRequest("", null, 'GET');
        return response;
    }
    catch (error) {
        console.log("Error no se han podido obtener las reseñas");
        return [];
    }
}