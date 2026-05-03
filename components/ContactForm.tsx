"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-[#e8e4dc] bg-white px-4 py-3 text-[#1f1b16] placeholder:text-[#5c534a]/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="card-light mx-auto max-w-xl space-y-4 rounded-2xl p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#5c534a]">
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#5c534a]">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="(717) 623-3879" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#5c534a]">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#5c534a]">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${field} resize-y`}
          placeholder="Tell us about your project…"
        />
      </div>
      <button type="submit" className="btn-gold w-full rounded-xl py-3.5 text-base font-semibold">
        Send message
      </button>
      {sent ? (
        <p className="text-center text-sm text-[#b88a2a]" role="status">
          Thank you. For the quickest reply, call or email us using the contact details on the left.
        </p>
      ) : null}
    </form>
  );
}
