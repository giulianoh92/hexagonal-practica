import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export interface UserRepository {
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
    getById(id: UserId): Promise<User> | null;
    getByEmail(email: UserEmail): Promise<User>;
    getAll(): Promise<User[]>;
}