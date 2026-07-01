import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  CheckCircle2, ArrowRight, Target, TrendingUp, Shield, HeadphonesIcon, Trophy,
  XCircle, Sparkles, Calendar, Users, MessageSquare, Smartphone, Activity,
  Heart, Footprints, Mountain, Award, ChevronDown, Quote, Star, PlayCircle,
  ShieldCheck, UserRound, User, Wind, MapPin, Clock, Bone, Dumbbell, ChevronRight, Medal,
  X
} from "lucide-react";
import { CTAButton, WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import transformImg from "@/assets/transformation.jpg";
import finishImg from "@/assets/finish-line.jpg";
import deniAboutImg from "@/assets/deni-about.png";
const deniImg = { url: deniAboutImg };
import logoImg from "@/assets/logo.png";
const logoAsset = { url: logoImg };
const logoLightAsset = { url: logoImg };
import deniRunnerImg from "@/assets/deni-runner.png";
const deniRunner = { url: deniRunnerImg };
import proofNew1 from "@/assets/proof-new-1.png";
import proofNew2 from "@/assets/proof-new-2.png";
import proofNew3 from "@/assets/proof-new-3.png";
import proofNew4 from "@/assets/proof-new-4.jpg";
import proofNew5 from "@/assets/proof-new-5.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PROOF_PHOTOS = [
  { url: proofNew1 },
  { url: proofNew2 },
  { url: proofNew3 },
  { url: proofNew4 },
  { url: proofNew5 }
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corra Leve 365™ — Dos primeiros passos aos seus primeiros 5km" },
      { name: "description", content: "Programa premium de assessoria de corrida para iniciantes. Saia do sedentarismo e conquiste seus primeiros 5km em até 12 semanas com método validado e acompanhamento profissional." },
      { property: "og:title", content: "Corra Leve 365™ — Seus primeiros 5km começam aqui" },
      { property: "og:description", content: "Método validado, acompanhamento próximo e evolução segura para iniciantes." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Problem />
      <Identification />
      <BeliefBreaker />
      <Presentation />
      <Method />
      <Journey />
      <Comparison />
      <Testimonials />
      <Included />
      <ForWho />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const stats = [
    { icon: Shield, top: "+12 ANOS", bottom: "de experiência" },
    { icon: Users, top: "+500", bottom: "alunos atendidos" },
    { icon: Target, top: "MÉTODO", bottom: "focado em iniciantes" },
    { icon: MessageSquare, top: "ACOMPANHAMENTO", bottom: "online personalizado" },
  ];
  const floatCards = [
    { icon: User, value: "+500", label: "ALUNOS\nATENDIDOS" },
    { icon: Star, value: "+12", label: "ANOS DE\nEXPERIÊNCIA" },
    { icon: "stars" as const, value: "5,0", label: "AVALIAÇÃO\nDOS ALUNOS" },
  ];
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden lg:min-h-screen">
      {/* soft hero glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 75% 50%, oklch(0.55 0.18 250 / 0.55), transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{ backgroundImage: "linear-gradient(135deg, transparent 49%, white 49.5%, white 50%, transparent 50.5%)" }} />

      <div className="container-page relative flex flex-col lg:grid lg:grid-cols-[1fr_1.35fr] gap-2 lg:gap-8 pt-4 pb-16 lg:pt-12 lg:pb-0 lg:items-end">
        {/* MOBILE-ONLY LOGO (top) */}
        <a href="#top" className="lg:hidden inline-flex items-center justify-center self-center animate-fade-up">
          <img src={logoLightAsset.url} alt="Corra Leve 365 por Deni Wesley" className="h-40 sm:h-48 w-auto" />
        </a>

        {/* RUNNER IMAGE — middle on mobile, right column on desktop */}
        <div className="relative order-2 lg:order-2 lg:col-start-2 lg:row-start-1 animate-fade-up lg:-mr-16 xl:-mr-24 lg:-mt-12 mt-4 lg:mt-0 px-0 lg:px-0 lg:flex lg:flex-col lg:items-center" style={{ animationDelay: "0.15s" }}>
          {/* Logo above runner (desktop only) */}
          <a href="#top" className="hidden lg:inline-flex items-center justify-center mb-2 z-20 relative">
            <img src={logoLightAsset.url} alt="Corra Leve 365 por Deni Wesley" className="h-40 xl:h-48 w-auto drop-shadow-[0_8px_24px_oklch(0_0_0/0.5)]" />
          </a>
          <div className="relative w-full h-auto lg:h-full min-h-0 lg:min-h-[760px] flex items-start lg:items-end justify-center lg:pr-24">
            {/* Blue glow behind runner */}
            <div
              aria-hidden
              className="absolute inset-0 z-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 65% 55% at 50% 55%, oklch(0.6 0.2 250 / 0.55), transparent 70%)" }}
            />
            <img
              src={deniRunner.url}
              alt="Deni Wesley em movimento"
              className="relative z-10 w-full h-auto max-h-none scale-[1.15] sm:scale-[1.1] lg:scale-[1.35] xl:scale-[1.5] lg:origin-bottom object-contain lg:object-contain animate-float"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* Floating stat cards (desktop only) */}
          <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 z-20">
            {floatCards.map((c, i) => (
              <Reveal key={i} variant="right" delay={200 + i * 150} className="w-[110px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm px-4 py-4 text-center shadow-elegant hover-lift">
                <div className="flex justify-center mb-2 text-secondary">
                  {c.icon === "stars" ? (
                    <div className="flex gap-0.5">{[...Array(3)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-secondary text-secondary" />)}</div>
                  ) : (
                    <c.icon className="h-5 w-5" strokeWidth={2} />
                  )}
                </div>
                <div className="font-display font-extrabold text-2xl leading-none mb-1.5">{c.value}</div>
                <div className="text-[9px] font-bold tracking-wider text-white/70 whitespace-pre-line leading-tight">{c.label}</div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* TEXT COLUMN — bottom on mobile (overlapping image), left on desktop */}
        <div className="relative z-20 order-3 lg:order-1 lg:col-start-1 lg:row-start-1 mt-2 lg:mt-0 animate-fade-up">
          {/* Logo moved above runner image on desktop */}

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] pl-1.5 pr-5 py-1.5 text-[11px] font-bold tracking-wider mb-7">
            <span className="h-7 w-7 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center">
              <Footprints className="h-3.5 w-3.5 text-secondary" />
            </span>
            PROGRAMA ONLINE PARA INICIANTES
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-[3.5rem] mb-6">
            Da primeira caminhada<br className="hidden sm:block" />
            aos seus <span className="text-secondary">primeiros 5km:</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-xl leading-snug mb-6">
            um plano personalizado para transformar você em corredor, mesmo começando do zero.
          </p>

          {/* Orange divider */}
          <div className="h-[3px] w-16 bg-secondary mb-6 rounded-full" />

          {/* Secondary copy */}
          <p className="text-[15px] text-white/75 leading-relaxed max-w-xl mb-8">
            Você não precisa ter condicionamento físico, experiência ou talento para correr.
            <br />
            Precisa apenas de um <span className="text-secondary font-semibold">plano certo, acompanhamento profissional</span> e uma <span className="text-secondary font-semibold">metodologia</span> que respeite seu ritmo.
          </p>

          {/* Mini stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 mb-9 max-w-2xl">
            {stats.map(({ icon: Icon, top, bottom }) => (
              <div key={top} className="flex items-start gap-2.5 border-l border-white/10 pl-3 first:border-l-0 first:pl-0">
                <Icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <div className="font-display font-extrabold text-[13px] tracking-wide">{top}</div>
                  <div className="text-[11px] text-white/65 mt-0.5">{bottom}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-between gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl px-5 py-3.5 shadow-glow transition-all animate-pulse-glow"
            >
              <span className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block font-display font-bold text-[13px] tracking-wide">QUERO DESCOBRIR MEU PLANO IDEAL</span>
                  <span className="block text-[11px] text-white/85">Falar com o Deni no WhatsApp</span>
                </span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 rounded-xl px-5 py-3.5 transition-colors cursor-pointer"
            >
              <span className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center">
                <PlayCircle className="h-4 w-4 text-white" />
              </span>
              <span className="text-left leading-tight">
                <span className="block font-display font-bold text-[13px] tracking-wide">ASSISTIR APRESENTAÇÃO</span>
                <span className="block text-[11px] text-white/65">Entenda como funciona</span>
              </span>
            </button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-10 opacity-80"
                aria-hidden
                style={{
                  background: "radial-gradient(circle, oklch(0.55 0.18 250) 1px, transparent 1.5px) 0 0 / 4px 4px",
                  WebkitMaskImage: "radial-gradient(circle at 40% 50%, black 50%, transparent 70%)",
                  maskImage: "radial-gradient(circle at 40% 50%, black 50%, transparent 70%)",
                }}
              />
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-lg">4,9</span>
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />)}</div>
                </div>
                <div className="text-[11px] text-white/65 mt-0.5">Avaliações reais de alunos<br />em todo o Brasil</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["a", "b", "c", "d", "e"].map((s, i) => (
                  <div key={s} className="h-8 w-8 rounded-full border-2 border-primary bg-gradient-to-br from-secondary/60 to-primary flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-[13px] tracking-wide text-secondary">CENTENAS DE HISTÓRIAS</div>
                <div className="text-[11px] text-white/70 mt-0.5">de pessoas comuns que hoje<br />se orgulham de correr.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Fechar vídeo"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/HO9np0LIFn4?autoplay=1&rel=0"
              title="Apresentação Corra Leve 365"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub, light }: { eyebrow?: string; title: React.ReactNode; sub?: string; light?: boolean }) {
  return (
    <Reveal className="max-w-3xl mx-auto text-center mb-14">
      {eyebrow && <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${light ? "text-secondary" : "text-secondary"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
      {sub && <p className={`mt-5 text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>}
    </Reveal>
  );
}

const PROBLEM_ITEMS = [
  { icon: Footprints, title: "Tentou correr várias vezes e parou.", desc: "Começa empolgado, mas desiste nos primeiros dias." },
  { icon: Wind, title: "Fica sem fôlego nos primeiros minutos.", desc: "Acha que não tem condicionamento suficiente." },
  { icon: Bone, title: "Tem medo de sentir dores ou se machucar.", desc: "E acaba evitando ou parando antes mesmo de tentar." },
  { icon: MapPin, title: "Não sabe por onde começar.", desc: "Tem muitas dúvidas e não sabe qual caminho seguir." },
  { icon: Clock, title: "Falta tempo para manter uma rotina.", desc: "A rotina corrida atrapalha e não há constância." },
];

function Problem() {
  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container-page relative">
        {/* Eyebrow pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-secondary/40 bg-secondary/5 px-5 py-2">
            <Footprints className="h-4 w-4 text-secondary" />
            <span className="text-[12px] font-bold tracking-[0.18em] text-secondary">O VERDADEIRO PROBLEMA</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display font-extrabold text-center leading-[1.1] text-3xl sm:text-4xl lg:text-5xl max-w-5xl mx-auto mb-6">
          <span className="block text-foreground">Você não desistiu porque faltou motivação.</span>
          <span className="block text-secondary">Você desistiu porque estava tentando sozinho.</span>
        </h2>

        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-14 leading-relaxed">
          A maioria das pessoas não falha porque não consegue correr.<br className="hidden sm:block" />
          Falha porque segue conselhos aleatórios, começa rápido demais e não tem um plano claro.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {PROBLEM_ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col items-center hover-lift"
            >
              <div className="h-16 w-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-[15px] leading-snug text-foreground mb-3">{title}</h3>
              <p className="text-[13px] text-foreground/65 leading-relaxed mb-4">{desc}</p>
              <div className="h-[3px] w-8 bg-secondary rounded-full mt-auto" />
            </Reveal>
          ))}
        </div>

        {/* Highlighted callout */}
        <div className="relative rounded-2xl border-2 border-secondary/30 bg-secondary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 max-w-5xl mx-auto">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
            <Target className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg sm:text-xl text-foreground leading-snug">
              Se você se identificou com pelo menos um desses pontos,{" "}
              <span className="text-secondary">o problema não é falta de disciplina.</span>
            </p>
            <p className="mt-2 text-foreground/75 leading-relaxed">
              Você só precisa de um <strong className="text-foreground">método que respeite seu ritmo</strong> e mostre exatamente qual é o próximo passo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const IDENT_ITEMS = [
  { icon: Footprints, text: "Já tentei começar a correr várias vezes e sempre desisti." },
  { icon: Activity, text: "Fico sem fôlego rapidamente e me sinto frustrado." },
  { icon: Heart, text: "Estou acima do peso e não sei se consigo correr." },
  { icon: Shield, text: "Tenho medo de sentir dores ou me machucar." },
  { icon: Trophy, text: "Quero participar da minha primeira corrida, mas não sei por onde começar." },
  { icon: Target, text: "Minha rotina é corrida e nunca consigo manter consistência." },
];

function Identification() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: "linear-gradient(135deg, transparent 49%, white 49.5%, white 50%, transparent 50.5%)" }}
      />
      <div className="container-page relative grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT — copy */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] pl-1.5 pr-5 py-1.5 text-[11px] font-bold tracking-wider mb-7">
            <span className="h-7 w-7 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center">
              <Footprints className="h-3.5 w-3.5 text-secondary" />
            </span>
            O PROBLEMA NÃO É VOCÊ
          </div>

          <h2 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-[3.25rem] mb-6">
            Você não precisa<br />
            de mais motivação.<br />
            <span className="text-secondary">Precisa de um caminho<br />que funcione.</span>
          </h2>

          <div className="h-[3px] w-16 bg-secondary mb-6 rounded-full" />

          <p className="text-[15px] text-white/75 leading-relaxed max-w-xl mb-6">
            A maioria das pessoas não abandona a corrida porque é preguiçosa. Abandona porque tenta fazer tudo sozinha, sem orientação e sem um plano adaptado à sua realidade.
          </p>

          <p className="text-lg font-semibold text-white mb-2">
            Se você já pensou alguma dessas coisas, <span className="text-secondary">está no lugar certo.</span>
          </p>

          <p className="text-[15px] text-white/75 leading-relaxed max-w-xl mb-3">
            A verdade é que correr não deveria ser uma luta.<br />
            <span className="font-semibold text-white">Você não precisa descobrir tudo sozinho.</span>
          </p>
          <p className="text-[15px] text-white/75 leading-relaxed max-w-xl mb-6">
            Você precisa de um plano que respeite seu ritmo, acompanhe sua evolução e mostre exatamente o próximo passo.
          </p>
          <p className="text-[15px] text-white/75 leading-relaxed max-w-xl mb-8">
            Foi por isso que criamos o <span className="text-secondary font-semibold">Corra Leve 365™</span>. Um método pensado para pessoas comuns que querem conquistar algo extraordinário: acreditar novamente no próprio corpo.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl px-5 py-3.5 shadow-glow transition-all max-w-xl mb-5"
          >
            <span className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="h-4 w-4" />
              </span>
              <span className="text-left leading-tight">
                <span className="block font-display font-bold text-[13px] tracking-wide">QUERO DESCOBRIR MEU PLANO IDEAL</span>
                <span className="block text-[11px] text-white/85">Falar com o Deni no WhatsApp</span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="flex items-center gap-2 text-[12px] text-white/70">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            Atendimento 100% personalizado e seguro
          </div>
        </div>

        {/* RIGHT — cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {IDENT_ITEMS.map(({ icon: Icon, text }, i) => (
            <Reveal
              key={text}
              variant="right"
              delay={i * 100}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden hover:border-secondary/60 hover:bg-white/[0.05] transition-all hover-lift"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ background: "radial-gradient(ellipse 80% 60% at 100% 0%, oklch(0.55 0.18 250 / 0.25), transparent 70%)" }}
              />
              <div className="relative">
                <div className="h-14 w-14 rounded-full border-2 border-secondary/50 bg-secondary/10 text-secondary flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-semibold text-[15px] leading-snug text-white">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function BeliefBreaker() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-accent rounded-3xl blur-2xl opacity-25" />
          <img src={transformImg} alt="Aluno em transformação" className="relative rounded-3xl shadow-elegant object-cover w-full" width={1280} height={1024} loading="lazy" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4">Quebra de crença</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Correr não é talento. <span className="text-gradient-accent">É adaptação.</span>
          </h2>
          <p className="text-lg text-white/75 leading-relaxed mb-4">
            Todo corredor que você admira já foi iniciante. Já caminhou. Já ficou sem fôlego depois de 1 minuto.
          </p>
          <p className="text-lg text-white/75 leading-relaxed">
            A diferença não está no corpo. Está no <strong className="text-white">processo</strong>. Quando o corpo é guiado de forma progressiva e inteligente, ele responde. Sempre.
          </p>
        </div>
      </div>
    </section>
  );
}

function Presentation() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = iframeRef.current?.parentElement;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const src = isVisible
    ? "https://www.youtube.com/embed/HO9np0LIFn4?autoplay=1&mute=1&rel=0"
    : "https://www.youtube.com/embed/HO9np0LIFn4?rel=0";

  return (
    <section className="py-20 bg-background">
      <div className="container-page">
        <SectionTitle
          eyebrow="Apresentação"
          title={<>Assista à <span className="text-gradient-accent">apresentação completa</span></>}
          sub="Descubra em poucos minutos como o Corra Leve 365™ pode transformar você em corredor."
        />
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant ring-1 ring-border bg-black aspect-video">
            <iframe
              ref={iframeRef}
              src={src}
              title="Apresentação Corra Leve 365"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PILLARS = [
  { n: "01", icon: Target, title: "Diagnosticar", desc: "Entender exatamente seu ponto de partida." },
  { n: "02", icon: TrendingUp, title: "Evoluir", desc: "Construir resistência de forma progressiva." },
  { n: "03", icon: Shield, title: "Fortalecer", desc: "Preparar o corpo para evitar lesões." },
  { n: "04", icon: HeadphonesIcon, title: "Acompanhar", desc: "Receber ajustes e suporte constante." },
  { n: "05", icon: Trophy, title: "Conquistar", desc: "Completar seus primeiros 5km." },
];

function Method() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <SectionTitle
          eyebrow="Método exclusivo"
          title={<>Os <span className="text-gradient-accent">5 pilares</span> do Corra Leve 365™</>}
          sub="Um sistema completo que conduz você do sedentarismo aos seus primeiros 5km, com segurança e clareza em cada etapa."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PILLARS.map(({ n, icon: Icon, title, desc }, i) => (
            <Reveal key={n} variant="zoom" delay={i * 110} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition-all relative overflow-hidden group hover-lift">
              <span className="absolute top-3 right-4 font-display font-extrabold text-5xl text-surface-2 group-hover:text-secondary/20 transition-colors">{n}</span>
              <div className="h-12 w-12 rounded-xl gradient-accent text-secondary-foreground flex items-center justify-center mb-4 relative transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 relative">{title}</h3>
              <p className="text-sm text-muted-foreground relative">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  {
    n: "Fase 1",
    title: "Sair do Zero",
    icon: Footprints,
    items: ["Caminhadas orientadas", "Criação do hábito", "Sem pressão"],
  },
  {
    n: "Fase 2",
    title: "Ganhar Fôlego",
    icon: Activity,
    items: ["Primeiros trotes", "Mais resistência", "Mais confiança"],
  },
  {
    n: "Fase 3",
    title: "Virar Corredor",
    icon: Dumbbell,
    items: ["Corridas contínuas", "Ritmo consistente", "Evolução segura"],
  },
  {
    n: "Fase 4",
    title: "Conquistar os 5km",
    icon: Medal,
    items: ["Sua primeira prova", "Sua primeira medalha", "Sua nova identidade"],
  },
];

function Journey() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[680px] rounded-full bg-secondary/10 blur-3xl" />
      <div className="container-page relative">
        {/* Eyebrow */}
        <p className="text-center text-xs uppercase tracking-[0.25em] font-bold text-secondary mb-4">A jornada</p>

        {/* Title */}
        <h2 className="font-display font-extrabold text-center leading-[1.1] text-3xl sm:text-4xl lg:text-5xl max-w-4xl mx-auto mb-5">
          <span className="text-primary-foreground">De onde você está até </span>
          <span className="text-secondary">a linha de chegada</span>
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
          Um caminho claro, progressivo e seguro para <span className="text-secondary font-semibold">sair do zero</span> e conquistar seus primeiros 5km.
        </p>

        {/* Phases grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-14">
          {PHASES.map(({ n, title, icon: Icon, items }, i) => (
            <div key={n} className="relative">
              {/* Connector */}
              {i < PHASES.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="block w-6 border-t border-dotted border-secondary/50" />
                    <span className="h-6 w-6 rounded-full border border-secondary/60 bg-primary flex items-center justify-center">
                      <ChevronRight className="h-3.5 w-3.5 text-secondary" />
                    </span>
                    <span className="block w-6 border-t border-dotted border-secondary/50" />
                  </div>
                </div>
              )}

              <div
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] px-6 pt-10 pb-7 h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--secondary) 14%, transparent), transparent 60%)",
                }}
              >
                {/* Number badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-secondary text-secondary-foreground font-display font-extrabold flex items-center justify-center shadow-glow ring-4 ring-primary">
                  {i + 1}
                </div>

                {/* Icon ring */}
                <div className="mx-auto mt-2 mb-6 h-20 w-20 rounded-full border-2 border-secondary/60 bg-secondary/10 flex items-center justify-center">
                  <Icon className="h-9 w-9 text-secondary" strokeWidth={2.2} />
                </div>

                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-secondary mb-1.5">{n}</p>
                <h3 className="font-display font-extrabold text-xl text-primary-foreground mb-4">{title}</h3>

                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation CTA card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-stretch">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display font-extrabold leading-tight text-3xl lg:text-4xl mb-5">
                <span className="block text-primary-foreground">Não é só sobre correr.</span>
                <span className="block text-secondary">É sobre transformar sua vida.</span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
                Imagine como será olhar para trás daqui alguns meses e perceber que aquela pessoa que não conseguia correr nem 5 minutos agora completou seus primeiros 5km.
              </p>
              <div className="h-0.5 w-16 bg-secondary mb-6" />
              <CTAButton className="w-full sm:w-auto">
                <Footprints className="h-5 w-5" />
                QUERO COMEÇAR MINHA JORNADA
                <ArrowRight className="h-5 w-5" />
              </CTAButton>
              <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                Método seguro, progressivo e 100% para iniciantes
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0">
              <img
                src={finishImg}
                alt="Cruzando a linha de chegada dos 5km"
                className="absolute inset-0 w-full h-full object-cover"
                width={1280}
                height={800}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const alone = ["Falta de planejamento", "Risco constante de lesão", "Treinos genéricos da internet", "Sem ajustes na rota", "Motivação que vai e volta", "Desistência em poucas semanas"];
  const program = ["Plano sob medida para você", "Evolução segura e progressiva", "Aplicativo exclusivo", "Ajustes semanais", "Suporte direto com o coach", "Você cruza a linha de chegada"];
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <SectionTitle
          eyebrow="Por que a maioria desiste"
          title={<>Treinar sozinho <span className="text-muted-foreground">vs.</span> <span className="text-gradient-accent">Corra Leve 365™</span></>}
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="font-display font-bold text-xl mb-6 text-muted-foreground">Treinar sozinho</h3>
            <ul className="space-y-3">
              {alone.map(i => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 gradient-accent rounded-full blur-3xl opacity-40" />
            <h3 className="font-display font-bold text-xl mb-6 relative">Programa <span className="text-secondary">Corra Leve 365™</span></h3>
            <ul className="space-y-3 relative">
              {program.map(i => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-white/90">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Carla M.", age: 42, text: "Eu jurava que corrida não era pra mim. Em 10 semanas terminei meus primeiros 5km, sem dor e com sorriso no rosto." },
  { name: "Rodrigo P.", age: 38, text: "Pesava 102kg e nunca tinha corrido. Hoje saio 3x por semana e a balança já mostra 12kg a menos." },
  { name: "Juliana S.", age: 47, text: "O acompanhamento muda tudo. Cada semana o Deni ajustava o que precisava. Nunca tive medo de me machucar." },
];

function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Provas sociais"
          title={<>Eles também acreditavam que <span className="text-gradient-accent">não conseguiam</span>.</>}
        />
        <Reveal className="mb-14">
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent>
              {PROOF_PHOTOS.map((p, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-elegant bg-card group">
                    <img
                      src={p.url}
                      alt={`Aluno Corra Leve ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} variant="zoom" delay={i * 120} className="bg-card border border-border rounded-2xl p-7 hover:shadow-elegant transition-all hover-lift">
              <Quote className="h-7 w-7 text-secondary mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full gradient-accent flex items-center justify-center text-secondary-foreground font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.age} anos · Aluno Corra Leve</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const INCLUDED = [
  { icon: Calendar, title: "Treino personalizado", desc: "Plano sob medida pro seu corpo e rotina." },
  { icon: Smartphone, title: "Aplicativo exclusivo", desc: "Treinos, métricas e progresso no seu bolso." },
  { icon: Mountain, title: "Planejamento anual", desc: "Estratégia clara dos 0 aos 5km e além." },
  { icon: Activity, title: "Treinos de fortalecimento", desc: "Prevenção de lesões e ganho de performance." },
  { icon: MessageSquare, title: "Suporte direto", desc: "Tira-dúvidas com o coach, semana a semana." },
  { icon: TrendingUp, title: "Ajustes constantes", desc: "Sua evolução guiada por dados reais." },
  { icon: Users, title: "Comunidade exclusiva", desc: "Conexão com outros corredores iniciantes." },
  { icon: Award, title: "Estratégia de evolução", desc: "Continuidade após os primeiros 5km." },
];

function Included() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <SectionTitle
          eyebrow="O que você recebe"
          title={<>Tudo o que está incluso no <span className="text-gradient-accent">Corra Leve 365™</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INCLUDED.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80} className="bg-card border border-border rounded-2xl p-6 hover:border-secondary transition-colors hover-lift group">
              <div className="h-11 w-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const ideal = ["Sedentários querendo recomeçar", "Iniciantes absolutos na corrida", "Pessoas acima do peso", "Quem sonha com seus primeiros 5km", "Quem quer evoluir com segurança"];
  const not = ["Quem busca milagres em 1 semana", "Quem não pretende seguir orientação", "Quem procura apenas uma planilha genérica"];
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionTitle eyebrow="Para quem é" title={<>Esse programa é <span className="text-gradient-accent">para você?</span></>} />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border-2 border-secondary rounded-3xl p-8 shadow-glow">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold mb-5">
              <CheckCircle2 className="h-5 w-5" /> Ideal para
            </div>
            <ul className="space-y-3">
              {ideal.map(i => (
                <li key={i} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" /><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="inline-flex items-center gap-2 text-muted-foreground font-semibold mb-5">
              <XCircle className="h-5 w-5" /> Não recomendado para
            </div>
            <ul className="space-y-3">
              {not.map(i => (
                <li key={i} className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" /><span className="text-foreground/70">{i}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container-page grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div className="absolute -inset-4 gradient-accent rounded-3xl blur-2xl opacity-30" />
          <img src={deniImg.url} alt="Deni Wesley" className="relative rounded-3xl shadow-elegant w-full object-cover" width={1024} height={1280} loading="lazy" />
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-4">Sobre Deni Wesley</p>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
            "Minha missão é provar que qualquer pessoa pode se tornar corredora quando recebe <span className="text-gradient-accent">orientação correta</span>."
          </h2>
          <p className="text-white/75 leading-relaxed mb-4">
            Há mais de 12 anos transformo iniciantes em corredores. Já acompanhei mais de 500 alunos que pensavam que "correr não era pra eles" — e hoje cruzam linhas de chegada que nunca imaginaram alcançar.
          </p>
          <p className="text-white/75 leading-relaxed">
            O Corra Leve 365™ nasceu pra isso: oferecer o mesmo método premium, personalizado e humano, para quem quer começar do zero — com segurança, leveza e resultado real.
          </p>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Nunca corri na vida. Posso participar?", a: "Sim. O programa foi desenhado exatamente para iniciantes absolutos. Começamos pela caminhada estruturada e evoluímos no seu ritmo." },
  { q: "Estou acima do peso. Funciona para mim?", a: "Funciona. Mais de 60% dos nossos alunos começaram com sobrepeso. O método respeita seu corpo e evolui com segurança." },
  { q: "Preciso correr todos os dias?", a: "Não. O programa trabalha com 3 a 4 sessões semanais, intercalando treinos, descanso e fortalecimento." },
  { q: "Como funciona o suporte?", a: "Você tem contato direto comigo via aplicativo, com ajustes semanais e tira-dúvidas constante." },
  { q: "Quanto tempo dura o programa?", a: "O acompanhamento é anual (365 dias). Os primeiros 5km costumam ser conquistados em até 12 semanas." },
  { q: "Preciso morar na mesma cidade?", a: "Não. Todo o programa é 100% online, com app exclusivo e comunicação direta." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-surface">
      <div className="container-page max-w-3xl">
        <SectionTitle eyebrow="Perguntas frequentes" title={<>Tudo que você precisa <span className="text-gradient-accent">saber</span></>} />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left bg-card border border-border rounded-2xl p-6 hover:border-secondary transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-display font-semibold text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-secondary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-28 gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.72 0.18 48 / 0.5), transparent 50%)" }} />
      <div className="container-page relative text-center max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-5">A decisão começa hoje</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
          Daqui a 90 dias você pode continuar adiando sua mudança — ou estar comemorando seus <span className="text-gradient-accent">primeiros 5km</span>.
        </h2>
        <p className="text-lg text-white/75 mb-10">A diferença está em uma única decisão. Hoje.</p>
        <CTAButton className="!text-lg !px-9 !py-5">Quero fazer parte do Corra Leve 365™ <ArrowRight className="h-5 w-5" /></CTAButton>
        <p className="mt-6 text-xs text-white/50">Conversa direta com o coach via WhatsApp · Sem compromisso</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground/70 border-t border-white/10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logoLightAsset.url} alt="Corra Leve 365" className="h-10 w-auto" width={40} height={40} loading="lazy" />
          <span className="font-display font-bold text-primary-foreground">365<span className="text-secondary">™</span></span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Corra Leve 365™ · Deni Wesley · Todos os direitos reservados.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary transition-colors">WhatsApp</a>
      </div>
    </footer>
  );
}
