/**
 * Automatic email delivery for the contact form (no mail app needed).
 * Uses Web3Forms (https://web3forms.com) - the email lands directly in the
 * inbox that was used to create the access key.
 *
 * Setup: put your access key in the environment variable
 *   VITE_WEB3FORMS_ACCESS_KEY
 * (locally in a `.env` file, on Vercel/Netlify under Environment Variables).
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY: string = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

export interface LeadEmailPayload {
  companyName: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot value - real visitors leave this empty. */
  botcheck?: string;
}

export async function sendLeadEmail(payload: LeadEmailPayload): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error('Email is not configured (missing VITE_WEB3FORMS_ACCESS_KEY).');
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    // keepalive lets the request finish even if WhatsApp opens right after
    keepalive: true,
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Estimate Request: ${payload.service} - ${payload.fullName}`,
      from_name: `${payload.companyName} Website`,
      // Web3Forms uses "email" as the Reply-To, so you can reply straight to the customer
      name: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      botcheck: payload.botcheck ?? '',
    }),
  });

  let result: { success?: boolean; message?: string } = {};
  try {
    result = await response.json();
  } catch {
    // non-JSON response
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Email request failed (${response.status})`);
  }
}
