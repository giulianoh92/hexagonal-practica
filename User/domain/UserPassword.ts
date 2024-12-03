export class UserPassword {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }

    private isValid() {
        if (this.password.length === 0) {
            throw new Error("Password is required");
        }
        if (this.password.length < 8) {
            throw new Error("Password is too short");
        }
        if (this.password.length > 255) {
            throw new Error("Password is too long");
        }
        if (!/\d/.test(this.password)) {
            throw new Error("Password must contain at least one number");
        }
        if (!/[!@#$%^&*]/.test(this.password)) {
            throw new Error("Password must contain at least one special character");
        }
    }
}