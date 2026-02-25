import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "mp_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getSecret(): string {
    const secret = process.env.AUTH_SECRET;
    if (!secret || secret.length < 16) {
        throw new Error("AUTH_SECRET must be set and at least 16 characters (add to .env.local)");
    }
    return secret;
}

function sign(value: string): string {
    const secret = getSecret();
    const hmac = createHmac("sha256", secret);
    hmac.update(value);
    const sig = hmac.digest("base64url");
    const payload = Buffer.from(value, "utf8").toString("base64url");
    return `${payload}.${sig}`;
}

function verify(signed: string): string | null {
    try {
        const secret = getSecret();
        const [payloadB64, sigB64] = signed.split(".");
        if (!payloadB64 || !sigB64) return null;
        const expectedSig = createHmac("sha256", secret).update(Buffer.from(payloadB64, "base64url").toString("utf8")).digest("base64url");
        if (expectedSig.length !== sigB64.length || !timingSafeEqual(Buffer.from(expectedSig, "utf8"), Buffer.from(sigB64, "utf8"))) return null;
        return Buffer.from(payloadB64, "base64url").toString("utf8");
    } catch {
        return null;
    }
}

/**
 * Get the current user's email from the session cookie. Returns null if not logged in, invalid, or AUTH_SECRET missing.
 */
export async function getSessionEmail(): Promise<string | null> {
    try {
        const cookieStore = await cookies();
        const cookie = cookieStore.get(COOKIE_NAME);
        if (!cookie?.value) return null;
        return verify(cookie.value);
    } catch {
        return null;
    }
}

/**
 * Set the session cookie (call from login API). Uses next/headers cookies(). Throws if AUTH_SECRET not set.
 */
export async function setSessionCookie(email: string): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, sign(email), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: MAX_AGE,
    });
}

/**
 * Clear the session cookie (call from logout API).
 */
export async function clearSessionCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, "", { httpOnly: true, path: "/", maxAge: 0 });
}
