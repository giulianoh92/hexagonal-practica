import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserRepository } from "../../domain/UserRepository";
import { UserEmail } from "../../domain/UserEmail";
import { UserPassword } from "../../domain/UserPassword";
import { UserRole } from "../../domain/UserRole";

export class UserCreate {
    constructor(private userRepository: UserRepository) {}

    async run(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string
    ): Promise<void> {
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password),
            new UserRole(role)
        );

        return this.userRepository.create(user);
    }
}