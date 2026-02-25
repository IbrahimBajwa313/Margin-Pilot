/**
 * Password hashing and verification using bcrypt.
 * Passwords are never stored or logged in plain text.
 */
import { hash, compare } from "bcryptjs";

const SALT_ROUNDS = 12;

/**
 * Hash a plain-text password for storage. Use when creating or updating a user.
 */
export async function hashPassword(plainPassword: string): Promise<string> {
    if (!plainPassword || plainPassword.length < 1) {
        throw new Error("Password is required");
    }
    return hash(plainPassword, SALT_ROUNDS);
}

/**
 * Verify a plain-text password against a stored hash (or legacy plain text).
 * Returns true if the password matches.
 */
export async function verifyPassword(plainPassword: string, stored: string): Promise<boolean> {
    if (!plainPassword || !stored) return false;
    // Bcrypt hashes start with $2a$, $2b$, or $2y$
    if (stored.startsWith("$2")) {
        return compare(plainPassword, stored);
    }
    // Legacy: stored as plain text (e.g. before hashing was added)
    return plainPassword === stored;
}
