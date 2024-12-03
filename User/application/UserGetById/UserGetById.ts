import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetById {
    constructor(private userRepository: UserRepository) {}

    async run(id: string): Promise<User | null> {
        const userId = new UserId(id);
        return this.userRepository.getById(userId);
    }
}