export class UserRole {
    private role: string;

    constructor(role: string) {
        this.role = role;
    }

    private isValid() {
        if (this.role.length === 0) {
            throw new Error("Role is required");
        }
        if (this.role.length > 255) {
            throw new Error("Role is too long");
        }
        if (this.role.length < 3) {
            throw new Error("Role is too short");
        }
    }
}