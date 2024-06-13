const COOKIES_ID = "discotecas.hthn";
import {getToken} from "./../../public/api.js";

class Cookies {
    constructor(astroInstance) {
        this.instance = astroInstance;
    }

    async createIfNotExists() {
        if (!this.instance.cookies.has(COOKIES_ID)) {
            this.instance.cookies.set(COOKIES_ID, JSON.stringify(await getToken()));
        }
    }

    build() {
        return {
            isLogged: false,
            isAdmin: false,
        }
    }
}