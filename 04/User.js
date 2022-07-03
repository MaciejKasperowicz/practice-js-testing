export default class User {
    constructor({ email, password }) {
        this.setEmail('email', email);
        // this.setPassword("password", password);
        this.setPassword(password);
    }

    setEmail(propName, value) {
        if (!value.includes("@")) {
            throw new Error("Email doesn't contain '@'");
        }
        this[propName] = value
    }

    setPassword(value) {
        if (value.length < 8) {
            throw new Error("Password have to consist of minimum 8 chars");
        }
        this.password = value
    }

    // setPassword(propName, value) {
    //     if (value.length < 8) {
    //         throw new Error("Password have to consist of minimum 8 chars");
    //     }
    //     this[propName] = value
    // }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    login() {
        if (this.email.includes("devmentor.pl")) {
            return true
        } else {
            return false
        }
    }
}