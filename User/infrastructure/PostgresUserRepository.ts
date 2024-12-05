import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { UserId } from "../domain/UserId";
import { UserName } from "../domain/UserName";
import { UserPassword } from "../domain/UserPassword";
import { UserRepository } from "../domain/UserRepository";
import { Pool } from "pg";
import { UserRole } from "../domain/UserRole";

type PostgresUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
};

export class PostgresUserRepository implements UserRepository {

    client: Pool;

    constructor() {
        this.client = new Pool({
            connectionString: process.env.DATABASE_URL
        });
    }

    async create(user: User): Promise<void> {
        const query = {
            text: "INSERT INTO Users (name, email, password, role) VALUES ($1, $2, $3, $4)",
            values: [user.name, user.email, user.password, user.role]
        };
        await this.client.query(query);
    }
    async update(user: User): Promise<void> {
        const query = {
            text: "UPDATE Users SET name = $2, email = $3, password = $4, role = $5 WHERE id = $1",
            values: [user.id, user.name, user.email, user.password, user.role]
        };
        await this.client.query(query);
    }
    async delete(id: UserId): Promise<void> {
        const query = {
            text: "DELETE FROM Users WHERE id = $1",
            values: [id]
        };
        await this.client.query(query);
    }

    async getAll(): Promise<User[]> {
        const query = {
            text: "SELECT * FROM Users"
        };
        const result = await this.client.query<PostgresUser>(query);

        return result.rows.map(
            (row) => new User(
                new UserId(row.id),
                new UserName(row.name),
                new UserEmail(row.email),
                new UserPassword(row.password),
                new UserRole(row.role)
            )
        );
    }

    async getById(id: UserId): Promise<User | null> {
        const query = {
            text: "SELECT * FROM Users WHERE id = $1",
            values: [id]
        };
        const result = await this.client.query<PostgresUser>(query);

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return new User(
            new UserId(row.id),
            new UserName(row.name),
            new UserEmail(row.email),
            new UserPassword(row.password),
            new UserRole(row.role)
        );
    }

    async getByEmail(email: UserEmail): Promise<User | null> {
        const query = {
            text: "SELECT * FROM Users WHERE email = $1",
            values: [email]
        };
        const result = await this.client.query<PostgresUser>(query);

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return new User(
            new UserId(row.id),
            new UserName(row.name),
            new UserEmail(row.email),
            new UserPassword(row.password),
            new UserRole(row.role)
        );
    }
}