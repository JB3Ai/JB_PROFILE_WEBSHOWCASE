import { useEffect, useRef, useState } from 'react';

/**
 * Sponsorship payment buttons.
 *
 * Today: branded PayPal / Apple Pay buttons that deep-link to the PayPal.Me
 * page, so sponsorship works immediately.
 *
 * Live smart buttons: drop the PayPal Business client ID into
 * PAYPAL_CLIENT_ID below and the official PayPal JS SDK takes over,
 * rendering PayPal, Pay Later, card, and Apple Pay (on eligible Apple
 * devices) directly inline.
 */
const PAYPAL_CLIENT_ID = '';
const PAYPAL_ME_URL = 'https://paypal.me/jonoblackburnza';
const SUGGESTED_AMOUNTS = [5, 25, 75];

declare global {
  interface Window { paypal?: any }
}

export function SponsorPay() {
  const [amount, setAmount] = useState(25);
  const [sdkReady, setSdkReady] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return;
    const id = 'paypal-sdk-js';
    const render = () => setSdkReady(true);
    if (window.paypal) { render(); return; }
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&enable-funding=paylater&components=buttons`;
    s.onload = render;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    if (!sdkReady || !window.paypal || !btnRef.current) return;
    btnRef.current.innerHTML = '';
    window.paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' },
      createOrder: (_d: any, actions: any) => actions.order.create({
        purchase_units: [{
          amount: { value: amount.toFixed(2), currency_code: 'USD' },
          description: 'JB3 Isikulo AI sponsorship: Sponsor the Final 5%',
        }],
      }),
      onApprove: (_d: any, actions: any) => actions.order.capture(),
    }).render(btnRef.current);
  }, [sdkReady, amount]);

  const sdkActive = !!PAYPAL_CLIENT_ID;

  return (
    <div className="mt-10 mx-auto max-w-xl">
      <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8 shadow-sm text-center">
        <h4 className="text-lg font-semibold text-ink-900 tracking-tight">
          Quick Sponsor
        </h4>
        <p className="mt-1 text-sm text-ink-500">
          Secure checkout via PayPal. Pay in full, Pay Later, card, or Apple Pay on supported devices.
        </p>

        <div className="mt-4 flex justify-center gap-2">
          {SUGGESTED_AMOUNTS.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setAmount(v)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                amount === v
                  ? 'bg-ink-900 text-white'
                  : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
              }`}
            >
              ${v}
            </button>
          ))}
        </div>

        {sdkActive ? (
          <div ref={btnRef} className="mt-5 min-h-[110px]" />
        ) : (
          <div className="mt-5 space-y-3">
            <a
              href={`${PAYPAL_ME_URL}/${amount}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-md bg-[#ffc439] text-[15px] font-semibold text-[#253b80] transition-opacity hover:opacity-90"
            >
              <span className="italic font-bold">
                <span className="text-[#253b80]">Pay</span><span className="text-[#179bd7]">Pal</span>
              </span>
              <span className="ml-2 text-[#111111]">Sponsor ${amount}</span>
            </a>
            <a
              href={`${PAYPAL_ME_URL}/${amount}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-md bg-black text-[15px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Donate with Apple Pay
            </a>
            <p className="text-xs text-ink-400">
              Apple Pay and Pay Later appear automatically at PayPal checkout on supported devices.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
