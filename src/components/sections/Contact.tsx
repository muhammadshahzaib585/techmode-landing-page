"use client";

import { useState, useId, FormEvent, ChangeEvent } from "react";
import { siteContent } from "@/content/copy";
import { CheckCircle2, AlertCircle, Send, RotateCcw, RefreshCw, Terminal, Check } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { contact } = siteContent;
  const baseId = useId();

  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const messageId = `${baseId}-message`;
  const statusMessageId = `${baseId}-status`;

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusAnnouncement, setStatusAnnouncement] = useState<string>("");

  // Validate single field
  const validateField = (field: keyof FormState, value: string): string | undefined => {
    const trimmed = value.trim();

    if (field === "name") {
      if (!trimmed) return contact.form.errors.nameRequired;
      if (trimmed.length < 2) return contact.form.errors.nameTooShort;
    }

    if (field === "email") {
      if (!trimmed) return contact.form.errors.emailRequired;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return contact.form.errors.emailInvalid;
    }

    if (field === "message") {
      if (!trimmed) return contact.form.errors.messageRequired;
      if (trimmed.length < 10) return contact.form.errors.messageTooShort;
    }

    return undefined;
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const fields: (keyof FormState)[] = ["name", "email", "message"];
    for (const field of fields) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof FormState]) {
      const error = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleRequestReviewPreset = () => {
    setFormData((prev) => ({
      ...prev,
      message:
        "Requesting an architectural system review and technical cadence teardown for our current infrastructure.",
    }));
    const input = document.getElementById(nameId);
    input?.focus();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    if (!validateForm()) {
      setStatus("error");
      setStatusAnnouncement("Please correct the errors in the form before submitting.");
      return;
    }

    setStatus("submitting");
    setStatusAnnouncement("Submitting your inquiry to the engineering queue...");

    // PROTOTYPE MOCK SUBMISSION: Simulate network latency (600ms)
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setStatusAnnouncement("Inquiry dispatched. Lead engineer review scheduled.");
    } catch {
      setStatus("error");
      setStatusAnnouncement("Transmission fault. Please retry.");
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    setErrors({});
    setStatus("idle");
    setStatusAnnouncement("");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-b border-[#232C3B] bg-[#080E17] scroll-mt-16 blueprint-grid"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            E. BOTTOM CONVERSION CARD (SPEC REQUIRED)
           ========================================================================= */}
        <div className="mb-14 rounded-xl border border-[#232C3B] bg-[#0E141D] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              {/* Top Metadata: SYSTEM AUDIT AVAILABLE (Cyan mono text) and SLOT_ALLOC: 04/10 */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#00E5FF] px-2.5 py-1 rounded bg-[#161C25] border border-[#232C3B]">
                  ● SYSTEM AUDIT AVAILABLE
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#10B981] px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30">
                  SLOT_ALLOC: 04/10
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[#F8FAFC]">
                Unblock your engineering cadence.
              </h3>

              {/* Body */}
              <p className="mt-2 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Get a non-opinionated architectural teardown highlighting hidden friction, infrastructure leakage, and concrete resolution paths.
              </p>
            </div>

            {/* Button: Outline button with refresh/terminal icon: [ REQUEST SYSTEM REVIEW ] */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleRequestReviewPreset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded border border-[#00E5FF]/50 bg-[#161C25] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#080E17] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>REQUEST SYSTEM REVIEW</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FINAL CTA & CONTACT FORM
           ========================================================================= */}
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] px-2.5 py-1 rounded bg-[#0E141D] border border-[#232C3B] inline-block">
              DIRECT TECHNICAL ENGAGEMENT
            </span>
            <h2
              id="contact-heading"
              className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#F8FAFC]"
            >
              {contact.heading}
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
              {contact.subheading}
            </p>
          </div>

          {/* Prototype notice badge */}
          <div className="mt-6 p-3 rounded bg-[#0E141D] border border-[#232C3B] text-xs font-mono text-[#94A3B8] text-center max-w-xl mx-auto">
            <p>{contact.prototypeNotice}</p>
          </div>

          {/* Form Container */}
          <div className="mt-8 rounded-xl border border-[#232C3B] bg-[#0E141D] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative">
            {/* Live Region for Screen Readers */}
            <div
              id={statusMessageId}
              aria-live="polite"
              className="sr-only"
              role="status"
            >
              {statusAnnouncement}
            </div>

            {status === "success" ? (
              <div
                className="py-10 text-center flex flex-col items-center"
                role="region"
                aria-label="Submission Confirmation"
              >
                <div className="w-14 h-14 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-bold font-mono text-[#F8FAFC] tracking-tight">
                  {contact.form.successTitle}
                </h3>

                <p className="mt-3 text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  {contact.form.successMessage}
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded border border-[#232C3B] bg-[#161C25] text-[#F8FAFC] hover:border-[#00E5FF]/40 hover:bg-[#1F2633] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" />
                  <span>{contact.form.resetButton}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor={nameId}
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#CBD5E1] mb-2"
                  >
                    {contact.form.nameLabel}{" "}
                    <span className="text-[#00E5FF]" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder={contact.form.namePlaceholder}
                    aria-required="true"
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={
                      touched.name && errors.name ? `${nameId}-error` : undefined
                    }
                    className={`w-full px-4 py-3 rounded border bg-[#161C25] text-[#F8FAFC] text-sm font-mono placeholder-[#64748B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      touched.name && errors.name
                        ? "border-[#EF4444] focus-visible:ring-[#EF4444]"
                        : "border-[#232C3B] hover:border-[#94A3B8]/50"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p
                      id={`${nameId}-error`}
                      className="mt-2 text-xs font-mono text-[#EF4444] flex items-center gap-1.5"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor={emailId}
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#CBD5E1] mb-2"
                  >
                    {contact.form.emailLabel}{" "}
                    <span className="text-[#00E5FF]" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder={contact.form.emailPlaceholder}
                    aria-required="true"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={
                      touched.email && errors.email ? `${emailId}-error` : undefined
                    }
                    className={`w-full px-4 py-3 rounded border bg-[#161C25] text-[#F8FAFC] text-sm font-mono placeholder-[#64748B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      touched.email && errors.email
                        ? "border-[#EF4444] focus-visible:ring-[#EF4444]"
                        : "border-[#232C3B] hover:border-[#94A3B8]/50"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p
                      id={`${emailId}-error`}
                      className="mt-2 text-xs font-mono text-[#EF4444] flex items-center gap-1.5"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor={messageId}
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#CBD5E1] mb-2"
                  >
                    {contact.form.messageLabel}{" "}
                    <span className="text-[#00E5FF]" aria-label="required">
                      *
                    </span>
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder={contact.form.messagePlaceholder}
                    aria-required="true"
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={
                      touched.message && errors.message ? `${messageId}-error` : undefined
                    }
                    className={`w-full px-4 py-3 rounded border bg-[#161C25] text-[#F8FAFC] text-sm font-mono placeholder-[#64748B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      touched.message && errors.message
                        ? "border-[#EF4444] focus-visible:ring-[#EF4444]"
                        : "border-[#232C3B] hover:border-[#94A3B8]/50"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p
                      id={`${messageId}-error`}
                      className="mt-2 text-xs font-mono text-[#EF4444] flex items-center gap-1.5"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded bg-[#00E5FF] text-[#080E17] hover:bg-[#33EBFF] hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00E5FF] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#080E17] border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                        <span>{contact.form.submittingButton}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                        <span>DISPATCH INQUIRY</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
