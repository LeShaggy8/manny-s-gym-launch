import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MGLogo } from "@/components/MGLogo";
import { Dumbbell, Footprints, Bike, Swords } from "lucide-react";
import { useEffect, useState } from "react";

const SPECIALTIES = [
  { label: "Área de Pesas", icon: Dumbbell },
  { label: "Zona de Cardio", icon: Footprints },
  { label: "Área de Boxeo", icon: Swords },
  { label: "Zona de Spinning", icon: Bike },
];

const PHONE = "+524929210227";
const PHONE_DISPLAY = "492 921 0227";
const WHATSAPP = `https://wa.me/524929210227?text=${encodeURIComponent(
  "¡Hola! Quiero información para inscribirme en Manny's Gym.",
)}`;
const MAPS_LINK = "https://maps.app.goo.gl/fbTiT8qzpsAJxiqa9";
const ADDRESS = "B. Lamarck 8, Médicos Veterinarios, 98600 Guadalupe, Zac.";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Manny's Gym, B. Lamarck 8, Medicos Veterinarios, 98600 Guadalupe, Zacatecas",
)}&output=embed`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manny's Gym Guadalupe, Zac. | Tu mejor versión, tu mejor lugar" },
      {
        name: "description",
        content:
          "Gimnasio en Guadalupe, Zacatecas: pesas, cardio y funcional. Mensualidad desde $550 MXN, abierto desde las 5:00 AM. Empieza tu transformación hoy.",
      },
      { property: "og:title", content: "Manny's Gym | Tu mejor versión, tu mejor lugar" },
      {
        property: "og:description",
        content:
          "Pesas, cardio y área funcional en Guadalupe, Zacatecas. 4.6★ en Google Maps. Mensualidades desde $550 MXN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#precios", label: "Precios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border bg-surface p-6 text-center ${className}`}
    >
      <MGLogo className="h-8 w-8 text-primary" />
      <span className="font-display text-sm tracking-wide text-muted-foreground">
        [Subir foto real aquí]
      </span>
      <span className="text-xs text-muted-foreground/70">{label}</span>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <MGLogo className="h-9 w-9 shrink-0 text-primary" />
            <span className="truncate font-display text-xl leading-none tracking-wide">
              Manny&apos;s <span className="text-primary">Gym</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-display text-sm tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="bg-primary px-5 py-2.5 font-display text-sm tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Únete hoy
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          >
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 font-display tracking-widest text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block bg-primary py-3 text-center font-display tracking-widest text-primary-foreground"
            >
              Únete hoy
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="diag-stripes h-6 w-16 opacity-80" />
                <span className="font-display text-xs tracking-[0.35em] text-primary">
                  Guadalupe, Zacatecas
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl leading-[0.92] sm:text-7xl xl:text-8xl">
                Tu mejor versión,
                <br />
                <span className="text-primary">tu mejor lugar</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Pesas, cardio y zona funcional. Aquí no se trata de ser el más fuerte del día uno:
                se trata de volver mañana. <strong className="text-foreground">Que no te gane
                el miedo para empezar.</strong>
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary px-8 py-4 font-display text-lg tracking-widest text-primary-foreground shadow-[var(--shadow-blade)] transition-transform hover:-translate-y-1"
                >
                  Empieza tu transformación
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-foreground/30 px-8 py-4 font-display text-lg tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Google</dt>
                  <dd className="font-display text-3xl text-primary">4.6★</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Reseñas</dt>
                  <dd className="font-display text-3xl">89</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Abrimos</dt>
                  <dd className="font-display text-3xl">5 AM</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <PhotoSlot
              label="Foto real del gimnasio (interior, alto contraste)"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
        <div className="diag-stripes h-3 w-full opacity-90" />
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl">
            Sobre <span className="text-primary">nosotros</span>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Manny&apos;s Gym es un gimnasio de barrio con mentalidad de alto rendimiento. Llevamos
              años entrenando a la gente de Guadalupe, Zacatecas: estudiantes, trabajadores de turno
              temprano, mamás, competidores y personas que nunca habían pisado un gimnasio.
              <br />
              <br />
              Aquí no somos solo pesas y cardio: somos un espacio completo de entrenamiento, con
              zonas dedicadas para fuerza, resistencia, boxeo y spinning. Abrimos a las 5:00 AM
              porque sabemos que la disciplina no espera.{" "}
              <strong className="text-foreground">
                Los límites solo existen si tú los pones.
              </strong>
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <h3 className="mt-12 font-display text-sm tracking-[0.35em] text-primary">
            Lo que encontrarás aquí
          </h3>
        </Reveal>
        <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {SPECIALTIES.map((s, i) => (
            <Reveal key={s.label} delay={180 + i * 70}>
              <li className="group flex h-full flex-col items-center gap-3 border border-border bg-surface p-6 text-center transition-colors hover:border-primary">
                <s.icon className="h-9 w-9 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-display text-lg tracking-wide">{s.label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* INSTALACIONES */}
      <section id="instalaciones" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-6xl">
              Instal<span className="text-primary">aciones</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Fotos reales del gimnasio. Sube tus capturas del interior para reemplazar cada
              espacio.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Área de pesas — peso libre y racks",
              "Zona de cardio — caminadoras y bicicletas",
              "Zona funcional — colchonetas y accesorios",
              "Mancuernas y bancos",
              "Recepción / entrada",
              "Ambiente en clase u hora pico",
            ].map((label, i) => (
              <Reveal key={label} delay={i * 60}>
                <PhotoSlot label={label} className="aspect-[4/3] w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl">
            Precios y <span className="text-primary">membresías</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { t: "Mensualidad Hombres", p: "$600", s: "MXN / mes", hot: false },
            { t: "Mensualidad Mujeres", p: "$550", s: "MXN / mes", hot: true },
            { t: "Visita por día", p: "$60", s: "MXN / día", hot: false },
          ].map((plan, i) => (
            <Reveal key={plan.t} delay={i * 90}>
              <div
                className={`relative h-full border p-8 ${
                  plan.hot
                    ? "border-primary bg-surface shadow-[var(--shadow-blade)]"
                    : "border-border bg-surface"
                }`}
              >
                {plan.hot && (
                  <span className="absolute -top-3 left-8 bg-primary px-3 py-1 font-display text-xs tracking-widest text-primary-foreground">
                    Más popular
                  </span>
                )}
                <h3 className="font-display text-xl text-muted-foreground">{plan.t}</h3>
                <p className="mt-4 font-display text-6xl text-primary">{plan.p}</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  {plan.s}
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block border-2 border-primary py-3 text-center font-display tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Inscríbete
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-6 border border-dashed border-border bg-surface p-5 text-sm text-muted-foreground">
            <strong className="font-display tracking-wide text-foreground">Inscripción:</strong>{" "}
            consultar en recepción o por WhatsApp — pendiente de verificar si continúa siendo
            gratuita. Precios sujetos a cambio sin previo aviso.
          </div>
        </Reveal>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-6xl">
              Hor<span className="text-primary">arios</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <table className="mt-10 w-full border border-border text-left">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 font-display tracking-widest">Día</th>
                  <th className="p-4 font-display tracking-widest">Horario</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lunes", "5:00 AM – 11:00 PM"],
                  ["Martes", "5:00 AM – 11:00 PM"],
                  ["Miércoles", "5:00 AM – 11:00 PM"],
                  ["Jueves", "5:00 AM – 11:00 PM"],
                  ["Viernes", "5:00 AM – 11:00 PM"],
                  ["Sábado", "8:00 AM – 6:00 PM"],
                  ["Domingo", "8:00 AM – 2:00 PM"],
                ].map(([d, h]) => (
                  <tr key={d} className="border-t border-border">
                    <td className="p-4 font-display tracking-wide">{d}</td>
                    <td className="p-4 text-muted-foreground">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl">
            Reseñas <span className="text-primary">reales</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Calificación verificada en Google Maps.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 flex flex-col items-start gap-6 border border-border bg-surface p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-7xl leading-none text-primary">4.6</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                89 reseñas en Google
              </p>
            </div>
            <div className="flex-1 border-dashed border-border sm:border-l sm:pl-8">
              <p className="text-muted-foreground">
                No mostramos testimonios inventados. Las opiniones de nuestros socios se leen
                directamente en Google Maps.
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block bg-primary px-6 py-3 font-display tracking-widest text-primary-foreground"
              >
                Leer reseñas en Google
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-6xl">
              Ubi<span className="text-primary">cación</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{ADDRESS}</p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block bg-primary px-7 py-3.5 font-display tracking-widest text-primary-foreground"
            >
              Cómo llegar
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 border-4 border-primary">
              <iframe
                title="Mapa de Manny's Gym en Guadalupe, Zacatecas"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl">
            Con<span className="text-primary">tacto</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Teléfono", value: PHONE_DISPLAY, href: `tel:${PHONE}` },
            { label: "WhatsApp", value: "Escríbenos ahora", href: WHATSAPP },
            { label: "Instagram", value: "@mannys_gym", href: "https://instagram.com/mannys_gym" },
            {
              label: "Facebook",
              value: "Manny's gym",
              href: "https://facebook.com/Mannys-gym-140287229411882",
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("tel:") ? undefined : "_blank"}
                rel="noreferrer"
                className="block h-full border border-border bg-surface p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{c.label}</p>
                <p className="mt-3 font-display text-2xl">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <MGLogo className="h-10 w-10 shrink-0 text-primary" />
              <span className="font-display text-2xl leading-none">
                Manny&apos;s <span className="text-primary">Gym</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Tu mejor versión, tu mejor lugar.
              <br />
              {ADDRESS}
            </p>
          </div>
          <div>
            <h3 className="font-display tracking-widest text-primary">Links rápidos</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display tracking-widest text-primary">Síguenos</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://instagram.com/mannys_gym" target="_blank" rel="noreferrer" className="hover:text-primary">
                  Instagram @mannys_gym
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/Mannys-gym-140287229411882"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-primary">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="diag-stripes h-2 w-full opacity-80" />
        <p className="px-4 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Manny&apos;s Gym — Guadalupe, Zacatecas. Todos los derechos
          reservados.
        </p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-primary px-5 py-4 font-display tracking-widest text-primary-foreground shadow-[var(--shadow-blade)] transition-transform hover:-translate-y-1"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.31-1.95 1.36-.5.05-1.13.07-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.66.5.24.58.83 2 .9 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.45.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.26.09 1.68.79 1.96.94.29.14.48.22.55.34.07.12.07.7-.17 1.37Z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
