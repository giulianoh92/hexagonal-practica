import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";
import { UserPassword } from "./UserPassword";
import { UserRole } from "./UserRole";

export class User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    password: UserPassword;
    role: UserRole;

    constructor(id: UserId, name: UserName, email: UserEmail, password: UserPassword, role: UserRole) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public getId(): UserId {
        return this.id;
    }

    public getName(): UserName {
        return this.name;
    }

    public getEmail(): UserEmail {
        return this.email;
    }

    public getPassword(): UserPassword {
        return this.password;
    }

    public getRole(): UserRole {
        return this.role;
    }

    public setId(id: UserId): void {
        this.id = id;
    }

    public setName(name: UserName): void {
        this.name = name;
    }

    public setEmail(email: UserEmail): void {
        this.email = email;
    }

    public setPassword(password: UserPassword): void {
        this.password = password;
    }

    public setRole(role: UserRole): void {
        this.role = role;
    }

    public toString(): string {
        return `User: { id: ${this.id}, name: ${this.name}, email: ${this.email}, password: ${this.password}, role: ${this.role} }`;
    }
}