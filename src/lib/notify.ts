export interface LeadEmailPayload {
  name: string;
  email: string;
  intent: string;
  mode: 'access' | 'news' | string;
  newsletter: boolean;
  phone?: string;
}

/**
 * Posts the lead to the cPanel PHP mailer (public/api/lead.php).
 * The endpoint emails the owner a notification with the lead details.
 * Returns true when the server confirmed the send.
 * Fails soft (false) in local dev or if the endpoint is missing.
 */
export async function sendLeadEmail(payload: LeadEmailPayload): Promise<boolean> {
  try {
    const res = await fetch('/api/lead.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return false;
    const data = await res.json();
    return !!data?.success;
  } catch {
    return false;
  }
}
