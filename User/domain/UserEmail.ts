export class UserEmail {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    private isValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (this.email.length === 0) {
            throw new Error("Email is required");
        }
        if (!emailRegex.test(this.email)) {
            throw new Error("Email is invalid");
        }
        if (this.email.length > 255) {
            throw new Error("Email is too long");
        }
        if (this.email.length < 3) {
            throw new Error("Email is too short");
        }
    }
}