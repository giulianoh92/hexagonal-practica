export class UserId {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    private isValid() {
        if (this.value.length === 0) {
            throw new Error("UserId is required");
        }
    }
}