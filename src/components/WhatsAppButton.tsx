import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5527998564008?text=" +
  encodeURIComponent("Olá Deni! Quero saber mais sobre o Programa Corra Leve 365™.");

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-glow animate-pulse-glow hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}

export function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-all duration-300 hover:translate-y-[-2px]";
  const styles =
    variant === "primary"
      ? "gradient-accent text-secondary-foreground shadow-glow hover:shadow-elegant"
      : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export { WHATSAPP_URL };
