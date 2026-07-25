import { useState, type FormEvent } from "react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T, useSite } from "./theme-provider";
import { Mail, Linkedin, Github, FileText, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Connect() {
  const { lang, openResume } = useSite();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = lang === "en" ? "Name is required." : "Nama wajib diisi.";
    }

    if (!formData.email.trim()) {
      errs.email = lang === "en" ? "Email is required." : "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = lang === "en" ? "Please enter a valid email address." : "Masukkan alamat email yang valid.";
    }

    if (!formData.message.trim()) {
      errs.message = lang === "en" ? "Message is required." : "Pesan wajib diisi.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 600);
  };

  return (
    <section id="connect" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="07" label="CONNECT" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left Column - Narrative & Contacts */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <Reveal>
                <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground">
                  Let's build
                  <br />
                  something <span className="italic text-foreground/85">useful.</span>
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/85">
                  <T
                    en="Currently open to internship opportunities where I can learn, contribute, and grow through real-world projects."
                    id="Saat ini terbuka untuk kesempatan magang tempat saya dapat belajar, berkontribusi, dan berkembang melalui proyek nyata."
                  />
                </p>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-6">
                  <div className="label-mono text-[#8CC0EB]">
                    <T en="AREAS OF INTEREST" id="BIDANG MINAT" />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["AI", "DATA", "SOFTWARE DEVELOPMENT"].map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-[#8CC0EB]/50 bg-[#AEE2FF]/30 px-3.5 py-1 font-mono text-xs font-semibold text-[#172033] dark:text-[#F4F1EA]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Direct Contact Links & Resume */}
            <Reveal delay={220}>
              <div className="mt-12 space-y-4 border-t border-[#8CC0EB]/30 pt-8">
                <a
                  href="mailto:nasywa.fiqrihiyah@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-[#8CC0EB]/40 bg-mist/60 p-4 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist shadow-xs"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#8CC0EB]/50 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.6rem] font-semibold tracking-[0.2em] text-[#8CC0EB]">
                      EMAIL
                    </div>
                    <div className="font-mono text-sm font-medium text-foreground group-hover:text-[#8CC0EB] transition-colors">
                      nasywa.fiqrihiyah@gmail.com
                    </div>
                  </div>
                </a>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href="https://www.linkedin.com/in/nasywa-chonifahtun-fiqrihiyah"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist/60"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/40 bg-mist text-[#172033] dark:text-[#F4F1EA]">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <div className="font-mono text-[0.6rem] font-semibold text-muted-foreground">LINKEDIN</div>
                      <div className="font-mono text-xs font-medium text-foreground truncate max-w-[150px]">nasywa-chonifahtun-fiqrihiyah</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/siwsiw1"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist/60"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/40 bg-mist text-[#172033] dark:text-[#F4F1EA]">
                      <Github size={16} />
                    </div>
                    <div>
                      <div className="font-mono text-[0.6rem] font-semibold text-muted-foreground">GITHUB</div>
                      <div className="font-mono text-xs font-medium text-foreground">siwsiw1</div>
                    </div>
                  </a>
                </div>

                {/* Resume Modal CTA */}
                <div className="pt-2">
                  <button
                    onClick={openResume}
                    data-hover="open"
                    className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-4 text-sm font-semibold text-[#172033] shadow-sm transition-all hover:bg-[#8CC0EB] cursor-pointer"
                  >
                    <FileText size={16} />
                    <T en="VIEW & DOWNLOAD RESUME" id="LIHAT & UNDUH RESUME" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-6">
            <Reveal delay={160}>
              <div className="rounded-2xl border border-[#8CC0EB]/50 bg-mist/60 p-6 md:p-10 shadow-sm backdrop-blur-sm">
                <div className="border-b border-[#8CC0EB]/30 pb-4">
                  <span className="font-mono text-[0.65rem] font-bold tracking-[0.28em] text-[#172033] dark:text-[#F4F1EA]">
                    <T en="SEND A MESSAGE" id="KIRIM PESAN" />
                  </span>
                </div>

                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#8CC0EB] bg-[#AEE2FF] text-[#172033]">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight text-foreground">
                      <T en="Message Sent!" id="Pesan Terkirim!" />
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <T
                        en="Thank you for reaching out. I'll get back to you as soon as possible."
                        id="Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda."
                      />
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 rounded-full border border-[#8CC0EB] bg-[#AEE2FF]/40 px-5 py-2.5 font-mono text-xs font-semibold text-[#172033] hover:bg-[#AEE2FF]"
                    >
                      <T en="Send Another Message" id="Kirim Pesan Lain" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground">
                        <T en="NAME *" id="NAMA *" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`mt-1.5 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[#8CC0EB] ${
                          errors.name ? "border-destructive focus:ring-destructive" : "border-border/80 hover:border-[#8CC0EB]/60"
                        }`}
                        placeholder={lang === "en" ? "Your name" : "Nama Anda"}
                      />
                      {errors.name && (
                        <div className="mt-1 flex items-center gap-1 font-mono text-xs text-destructive">
                          <AlertCircle size={12} /> {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground">
                        <T en="EMAIL *" id="EMAIL *" />
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`mt-1.5 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[#8CC0EB] ${
                          errors.email ? "border-destructive focus:ring-destructive" : "border-border/80 hover:border-[#8CC0EB]/60"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <div className="mt-1 flex items-center gap-1 font-mono text-xs text-destructive">
                          <AlertCircle size={12} /> {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground">
                        <T en="SUBJECT" id="SUBJEK" />
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-[#8CC0EB]/60 focus:outline-none focus:ring-2 focus:ring-[#8CC0EB]"
                        placeholder={lang === "en" ? "Internship Opportunity / Inquiry" : "Peluang Magang / Pertanyaan"}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground">
                        <T en="MESSAGE *" id="PESAN *" />
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`mt-1.5 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[#8CC0EB] ${
                          errors.message ? "border-destructive focus:ring-destructive" : "border-border/80 hover:border-[#8CC0EB]/60"
                        }`}
                        placeholder={lang === "en" ? "Tell me about your team or project..." : "Ceritakan tentang tim atau proyek Anda..."}
                      />
                      {errors.message && (
                        <div className="mt-1 flex items-center gap-1 font-mono text-xs text-destructive">
                          <AlertCircle size={12} /> {errors.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3.5 text-sm font-semibold text-[#172033] shadow-sm transition-all hover:bg-[#8CC0EB] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <T en="Sending..." id="Mengirim..." />
                      ) : (
                        <>
                          <T en="SEND MESSAGE" id="KIRIM PESAN" />
                          <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
