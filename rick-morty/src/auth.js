

class Auth {
    constructor() {
        this.autheticated = false
    }

    login(cb) {
        this.autheticated = true
        cb()
    }
    logout(cb) {
        this.autheticated = false
        cb()
    }
    isAuthenticated() {
        return this.autheticated
    }

}

export default new Auth();