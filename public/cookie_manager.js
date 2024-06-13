const COOKIES_ID = "discotecas.hthn";

class Cookies {
    constructor(astroInstance) {
        this.instance = astroInstance;
    }

    createIfNotExists() {
        if (!this.instance.cookies.has(COOKIES_ID)) {
            this.instance.cookies.set(COOKIES_ID, JSON.stringify());
        }
    }

    build() {
        return {
            isLogged: false,
            isAdmin: false,
            
        }
    }
}