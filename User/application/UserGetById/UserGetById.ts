import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";
import { UserNotFoundError } from "../../domain/UserNotFoundError";

export class UserGetById {
    constructor(private userRepository: UserRepository) {}

    async run(id: string): Promise<User> {
        const user = await this.userRepository.getById(new UserId(id));

        if (!user) throw new UserNotFoundError('User not found');
        
        return user;
    }
}