import { createFileRoute } from "@tanstack/react-router";
import {
  Send,
  ArrowRight,
  FileText,
  Sparkles,
  Power,
  Lock,
  EyeOff,
  Ban,
  ShieldCheck,
  Plus,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Антиподписки — остановите лишние списания" },
      {
        name: "description",
        content:
          "Загрузите PDF-выписку — сервис покажет подписки, комиссии и платные услуги, которые могут списаться снова.",
      },
      { property: "og:title", content: "Антиподписки" },
      {
        property: "og:description",
        content: "AI-помощник, который находит подписки и регулярные списания в банковской выписке.",
      },
    ],
  }),
  component: Page,
});

const TG_URL = "https://t.me/antipodpiski_bot";

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Mesh />
      <Nav />
      <Hero />
      <Flow />
      <Banks />
      <Security />
      <Price />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ============ Background mesh ============ */
function Mesh() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-mesh)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 -z-10 h-[520px] w-[520px] rounded-full blur-3xl opacity-50 animate-drift"
        style={{ background: "var(--gradient-iris)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -right-40 -z-10 h-[480px] w-[480px] rounded-full blur-3xl opacity-30 animate-float-slow"
        style={{ background: "var(--gradient-mint)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </>
  );
}

/* ============ Nav ============ */
function Nav() {
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4">
      <div className="glass flex h-14 items-center justify-between rounded-full px-4 md:px-5">
        <a href="#" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <Logo />
          Антиподписки
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#flow" className="hover:text-foreground transition">Как работает</a>
          <a href="#security" className="hover:text-foreground transition">Безопасность</a>
          <a href="#price" className="hover:text-foreground transition">Цена</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={TG_URL}
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-[color:var(--mint-foreground)] transition hover:opacity-90"
          style={{ background: "var(--gradient-mint)" }}
        >
          <Send className="h-3.5 w-3.5" /> Telegram
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span
      className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg"
      style={{ background: "var(--gradient-iris)" }}
    >
      <span className="absolute inset-[3px] rounded-md bg-background/40" />
      <ShieldCheck className="relative h-3.5 w-3.5 text-white" />
    </span>
  );
}

/* ============ Hero ============ */
function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-mint" />
            AI-разбор банковской выписки
          </span>

          <h1 className="mt-6 text-[42px] md:text-6xl lg:text-[64px] font-semibold leading-[1.02] tracking-[-0.02em]">
            <span className="text-gradient">Остановите</span> <br className="hidden sm:block" />
            лишние списания
            <br />
            до следующей оплаты.
          </h1>

          <p className="mt-6 max-w-md text-[15px] md:text-base text-muted-foreground leading-relaxed">
            Загрузите PDF-выписку — сервис покажет подписки, комиссии и платные услуги,
            которые могут списаться снова.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={TG_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[color:var(--mint-foreground)] transition hover:translate-y-[-1px]"
              style={{ background: "var(--gradient-mint)", boxShadow: "var(--shadow-glow-mint)" }}
            >
              <Send className="h-4 w-4" /> Открыть в Telegram
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#flow"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:bg-white/[0.07]"
            >
              Проверить выписку
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Pill>Без доступа к счёту</Pill>
            <Pill>Только PDF</Pill>
            <Pill>Не храним выписки</Pill>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-dot" />
      {children}
    </span>
  );
}

/* ============ Phone / Telegram Mini App mockup ============ */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* halo */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[60px] blur-3xl opacity-60"
        style={{ background: "var(--gradient-iris)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -right-10 -z-10 h-48 w-48 rounded-full blur-3xl opacity-50"
        style={{ background: "var(--gradient-mint)" }}
      />

      <div
        className="relative rounded-[44px] p-[1.5px] animate-float-slow"
        style={{ background: "linear-gradient(160deg, oklch(1 0 0 / 0.18), oklch(1 0 0 / 0.02) 40%, oklch(0.86 0.13 170 / 0.25))" }}
      >
        <div className="rounded-[42px] bg-[oklch(0.16_0.012_260)] p-3">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3 text-[10px] text-muted-foreground">
            <span>9:41</span>
            <span className="inline-flex h-1 w-16 rounded-full bg-white/20" />
            <span>•••</span>
          </div>

          {/* mini app header */}
          <div className="flex items-center gap-2 px-4 pb-3">
            <Logo />
            <div className="flex-1">
              <p className="text-[11px] text-muted-foreground">Mini App</p>
              <p className="text-xs font-medium">Антиподписки</p>
            </div>
            <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-muted-foreground">beta</span>
          </div>

          {/* content */}
          <div className="space-y-3 px-3 pb-4">
            <StepCard
              tone="iris"
              icon={<FileText className="h-4 w-4" />}
              title="statement.pdf"
              hint="загружено · 12 страниц"
              right={<Check className="h-4 w-4 text-mint" />}
            />

            <ConnectorLine />

            <div className="glass rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-mint" />
                  Анализ
                </span>
                <span className="text-[11px] text-mint">готово</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.86 0.13 170) 50%, transparent)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2.4s linear infinite",
                  }}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <Stat label="Подписки" value="7" />
                <Stat label="Комиссии" value="3" />
                <Stat label="Триалы" value="2" />
              </div>
            </div>

            <ConnectorLine />

            <SubRow name="Яндекс Плюс" meta="ежемес. · 399 ₽" on />
            <SubRow name="VK Музыка" meta="ежемес. · 169 ₽" />
            <SubRow name="СМС-инфо банка" meta="услуга · 79 ₽" />

            <button
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-[color:var(--mint-foreground)]"
              style={{ background: "var(--gradient-mint)", boxShadow: "var(--shadow-glow-mint)" }}
            >
              <Power className="h-4 w-4" /> Отключить выбранные
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({
  tone, icon, title, hint, right,
}: { tone: "iris" | "mint"; icon: React.ReactNode; title: string; hint: string; right?: React.ReactNode }) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl p-3">
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white"
        style={{ background: tone === "iris" ? "var(--gradient-iris)" : "var(--gradient-mint)" }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{title}</p>
        <p className="truncate text-[11px] text-muted-foreground">{hint}</p>
      </div>
      {right}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] py-2">
      <p className="text-base font-semibold tabular-nums">{value}</p>
      <p className="text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}

function SubRow({ name, meta, on }: { name: string; meta: string; on?: boolean }) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl px-3 py-2.5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-mint">
        <Power className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium">{name}</p>
        <p className="truncate text-[10px] text-muted-foreground">{meta}</p>
      </div>
      <span
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition ${
          on ? "" : "bg-white/10"
        }`}
        style={on ? { background: "var(--gradient-mint)" } : undefined}
      >
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition ${on ? "left-[18px]" : "left-0.5"}`} />
      </span>
    </div>
  );
}

function ConnectorLine() {
  return (
    <div className="flex justify-center">
      <span
        className="h-6 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.86 0.13 170 / 0.7), transparent)",
        }}
      />
    </div>
  );
}

/* ============ Flow: PDF → анализ → подписки → OFF ============ */
function Flow() {
  const steps = [
    { icon: <FileText className="h-5 w-5" />, label: "PDF-выписка", tone: "iris" as const },
    { icon: <Sparkles className="h-5 w-5" />, label: "Анализ", tone: "iris" as const },
    { icon: <ShieldCheck className="h-5 w-5" />, label: "Подписки", tone: "mint" as const },
    { icon: <Power className="h-5 w-5" />, label: "OFF", tone: "mint" as const },
  ];
  return (
    <section id="flow" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Как работает</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          От выписки до <span className="text-gradient">отключения</span> — за минуту
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-10">
          <div
            aria-hidden
            className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.18), oklch(0.86 0.13 170 / 0.5), transparent)",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{
                    background: s.tone === "iris" ? "var(--gradient-iris)" : "var(--gradient-mint)",
                    boxShadow: s.tone === "mint" ? "var(--shadow-glow-mint)" : "var(--shadow-glow-iris)",
                  }}
                >
                  {s.icon}
                </span>
                <p className="mt-4 text-sm font-medium">{s.label}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">шаг 0{i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Banks ============ */
function Banks() {
  const banks = ["Т-Банк", "Сбер", "ВТБ", "Альфа-Банк", "Озон Банк", "Яндекс Банк"];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Поддерживаемые банки</p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
          Работаем с PDF-выписками
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {banks.map((b) => (
          <div key={b} className="glass rounded-2xl px-3 py-4 text-center text-sm font-medium">
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ Security ============ */
function Security() {
  const items = [
    { icon: <EyeOff className="h-4 w-4" />, t: "Нет доступа к счёту" },
    { icon: <FileText className="h-4 w-4" />, t: "Только PDF-выписка" },
    { icon: <Ban className="h-4 w-4" />, t: "Бот не хранит выписки" },
    { icon: <Lock className="h-4 w-4" />, t: "Без передачи третьим лицам" },
  ];
  return (
    <section id="security" className="mx-auto max-w-6xl px-5 py-20">
      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--gradient-iris)" }}
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Безопасность</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Видим как <span className="text-gradient">можно меньше</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Никаких подключений к банку и хранения файлов. Только тот PDF, который
              вы прислали сами — и удалили после отчёта.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {items.map((it, i) => (
              <div key={i} className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-mint">
                  {it.icon}
                </span>
                <span className="text-sm">{it.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Price ============ */
function Price() {
  return (
    <section id="price" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Цена</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Прозрачно. <span className="text-gradient">Без подписок на нас.</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
        <div className="glass rounded-3xl p-7">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Первая проверка</p>
          <p className="mt-3 text-4xl font-semibold">Бесплатно</p>
          <p className="mt-3 text-sm text-muted-foreground">Покажем основные подписки и регулярные списания.</p>
          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            <Li>Регулярные списания</Li>
            <Li>Базовая категоризация</Li>
            <Li>Telegram и сайт</Li>
          </ul>
          <a
            href={TG_URL}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold hover:bg-white/[0.07] transition"
          >
            Попробовать
          </a>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl p-7 text-white"
          style={{ background: "var(--gradient-iris)", boxShadow: "var(--shadow-glow-iris)" }}
        >
          <div
            aria-hidden
            className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full blur-3xl opacity-50"
            style={{ background: "var(--gradient-mint)" }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-wider opacity-80">Полный отчёт</p>
            <p className="mt-3 text-4xl font-semibold">
              175 <span className="align-middle text-2xl">⭐</span>
              <span className="ml-2 text-base font-medium opacity-80">≈ 299 ₽</span>
            </p>
            <p className="mt-3 text-sm opacity-85">Все подписки, комиссии и платные услуги с подсказками что делать дальше.</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <Li light>Подписки, комиссии, платные услуги</Li>
              <Li light>Даты и регулярность списаний</Li>
              <Li light>«Можно отключить» и «проверить на возврат»</Li>
              <Li light>Оценка потенциальной экономии</Li>
            </ul>
            <a
              href={TG_URL}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--iris)] hover:opacity-95 transition"
            >
              Получить полный отчёт
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
        Сервис показывает списания и подсказывает, что можно отключить или проверить на возврат.
        Решение принимает банк.
      </p>
    </section>
  );
}

function Li({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check className={`mt-0.5 h-4 w-4 ${light ? "text-white" : "text-mint"}`} />
      <span className={light ? "text-white/90" : ""}>{children}</span>
    </li>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const faqs = [
    { q: "Вы вернёте мне деньги?", a: "Нет. Мы не возвращаем платежи. Сервис показывает, что можно отключить или проверить на возврат — решение принимает банк или сервис, которому вы платили." },
    { q: "Нужен ли доступ к счёту?", a: "Нет. Мы не подключаемся к банку и не запрашиваем пароли. Работаем только с PDF-выпиской." },
    { q: "Где взять PDF-выписку?", a: "В мобильном приложении банка: «Выписка» или «История операций» → PDF за 1–3 месяца." },
    { q: "Что вы храните?", a: "Файл удаляется после формирования отчёта. Данные не передаются третьим лицам." },
    { q: "Чем сайт отличается от Telegram-бота?", a: "Отчёт одинаковый. В Telegram удобнее оплачивать звёздами, на сайте — работать с большими файлами." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Коротко о главном</h2>
      </div>

      <div className="mt-10 space-y-2.5">
        {faqs.map((f, i) => (
          <details key={i} className="glass group rounded-2xl px-5 py-4 transition open:bg-white/[0.06]">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <span className="text-sm font-medium">{f.q}</span>
              <Plus className="h-4 w-4 text-mint transition group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>

      <div
        className="mt-16 overflow-hidden rounded-[32px] p-[1.5px]"
        style={{ background: "linear-gradient(135deg, oklch(0.70 0.16 260 / 0.6), oklch(0.86 0.13 170 / 0.6))" }}
      >
        <div className="glass rounded-[30px] p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Проверьте свою выписку
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">Первый отчёт — бесплатно.</p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={TG_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[color:var(--mint-foreground)]"
              style={{ background: "var(--gradient-mint)", boxShadow: "var(--shadow-glow-mint)" }}
            >
              <Send className="h-4 w-4" /> Открыть в Telegram
            </a>
            <a
              href="#flow"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold hover:bg-white/[0.07] transition"
            >
              Проверить выписку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Footer ============ */
function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-10 text-xs text-muted-foreground md:flex-row">
        <p className="flex items-center gap-2">
          <Logo /> © {new Date().getFullYear()} Антиподписки
        </p>
        <p className="max-w-md text-center md:text-right">
          Сервис не возвращает деньги — показывает, что можно отключить или проверить на возврат.
          Решение принимает банк.
        </p>
      </div>
    </footer>
  );
}
