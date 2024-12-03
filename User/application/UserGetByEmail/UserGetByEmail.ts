import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetByEmail {
    constructor(private userRepository: UserRepository) {}

    async run(email: string): Promise<User | null> {
        const userEmail = new UserEmail(email);
        return this.userRepository.getByEmail(userEmail);
    }
}