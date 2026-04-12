"use client";

import { useState } from "react";

const inputClassName =
  "w-full rounded-[20px] border border-brand-ink/10 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-ink/40 focus:border-brand-red focus:ring-4 focus:ring-brand-red/10";

type FormStatus =
  | { type: "idle"; message: string }
  | { type: "loading"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialStatus: FormStatus = {
  type: "idle",
  message:
    "Share your details and the team can help you choose the right batch.",
};

export function EnrollmentForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus({
      type: "loading",
      message: "Submitting your enquiry...",
    });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error ?? "Unable to submit your enquiry right now.",
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ??
          "Thanks. Your enquiry has been received and the team can review it shortly.",
      });
      form.reset();
      return;
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting your enquiry.",
      });
    }
  }

  return (
    <form
      id="enroll"
      className="surface-card rounded-[32px] p-6 sm:p-8"
      // onSubmit={handleSubmit}
      action={"https://formsubmit.co/shree20012018@gmail.com"}
      method="POST"
    >
      <div className="grid gap-6">
        <div>
          <p className="eyebrow">Enroll now</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">
            Book your first step toward confident driving
          </h2>
          <p className="mt-3 text-sm leading-7 text-brand-ink/70">
            Fill out the form and the team can guide you to the right training
            track for your goals.
          </p>
        </div>
        <input type="hidden" name="_next" value="http://localhost:3000" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Full name
            <input
              required
              name="fullName"
              type="text"
              className={inputClassName}
              placeholder="Enter your name"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Phone number
            <input
              required
              name="phone"
              type="tel"
              className={inputClassName}
              placeholder="Enter your phone number"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Email address
            <input
              name="email"
              type="email"
              className={inputClassName}
              placeholder="Enter your email"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Preferred vehicle
            <select required name="vehicle" className={inputClassName}>
              <option value="">Select a training category</option>
              <option value="two-wheeler-gear">Two-wheeler with gear</option>
              <option value="two-wheeler-gearless">Two-wheeler gearless</option>
              <option value="four-wheeler-manual">Four-wheeler manual</option>
              <option value="four-wheeler-automatic">
                Four-wheeler automatic
              </option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Experience level
            <select name="experience" className={inputClassName}>
              <option value="">Choose your current level</option>
              <option value="beginner">Complete beginner</option>
              <option value="rusty">
                I learned before and need confidence
              </option>
              <option value="intermediate">
                I want better road confidence
              </option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Preferred timing
            <select name="preferredBatch" className={inputClassName}>
              <option value="">Select a time preference</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="flexible">Flexible</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-brand-ink">
          What do you want to achieve?
          <textarea
            name="goal"
            rows={5}
            className={inputClassName}
            placeholder="Example: I want to learn scooter driving for my daily commute, or I want confidence with manual cars."
          />
        </label>

        <div className="flex flex-col gap-4 sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-brand-red whitespace-nowrap px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Submitting..." : "Request Enrollment"}
          </button>
          <p
            className={`max-w-md text-sm leading-7 text-center ${
              status.type === "error"
                ? "text-brand-red"
                : status.type === "success"
                  ? "text-emerald-700"
                  : "text-brand-ink/65"
            }`}
          >
            {status.message}
          </p>
        </div>
      </div>
    </form>
  );
}
