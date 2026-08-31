const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot field: real users never fill this in. Bots often do. */
  company?: string;
}

export class ApiError extends Error {}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let message = "Request failed";
    try {
      const data = await res.json();
      message = data?.message || message;
    } catch {
      // ignore JSON parse errors, use default message
    }
    throw new ApiError(message);
  }
}
