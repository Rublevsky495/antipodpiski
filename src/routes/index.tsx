import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Upload,
  FileSearch,
  Sparkles,
  Lock,
  FileText,
  Ban,
  EyeOff,
  Send,
  Globe,
  CheckCircle2,
  Repeat,
  CreditCard,
  Receipt,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Антиподписки — остановите лишние списания с карты" },
      {
        name: "description",
        content:
          "Загрузите PDF-выписку банка — Антиподписки покажут регулярные списания, подписки, комиссии и платные услуги. Telegram-бот и веб-сервис.",
      },
      { property: "og:title", content: "Антиподписки — контроль регулярных списаний" },
      {
        property: "og:description",
        content:
          "Сервис анализа банковской PDF-выписки: подписки, комиссии и скрытые платежи в одном отчёте.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const TG_URL = "https://t.me/antipodpiski_bot";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <HowItWorks />
      <ExampleReport />
      <Banks />
      <Security />
      <Price />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "var(--gradient-mint)" }}>
            <ShieldCheck className="h-4 w-4 text-[color:var(--mint-foreground)]" />
          </span>
          Антиподписки
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">Как работает</a>
          <a href="#report" className="hover:text-foreground transition">Отчёт</a>
          <a href="#security" className="hover:text-foreground transition">Безопасность</a>
          <a href="#price" className="hover:text-foreground transition">Цена</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={TG_URL}
          className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1.5 text-sm font-medium text-[color:var(--mint-foreground)] hover:opacity-90 transition"
        >
          <Send className="h-3.5 w-3.5" /> Telegram
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Работает в Telegram и в браузере
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Остановите лишние списания{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-mint)" }}>
              до следующей оплаты
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
            Загрузите PDF-выписку банка — сервис покажет регулярные списания, подписки, комиссии и платные услуги.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={TG_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-[color:var(--mint-foreground)] transition hover:translate-y-[-1px]"
              style={{ background: "var(--gradient-mint)", boxShadow: "var(--shadow-glow)" }}
            >
              <Send className="h-4 w-4" /> Открыть в Telegram
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm font-semibold hover:bg-surface-elevated transition"
            >
              <Globe className="h-4 w-4" /> Проверить выписку на сайте
            </a>
          </div>

          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-mint" /> Только PDF</span>
            <span className="inline-flex items-center gap-1.5"><EyeOff className="h-3.5 w-3.5 text-mint" /> Без доступа к счёту</span>
            <span className="inline-flex items-center gap-1.5"><Ban className="h-3.5 w-3.5 text-mint" /> Не храним выписки</span>
          </div>

          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="mt-14 w-full max-w-2xl">
      <div
        className="rounded-3xl border border-border bg-surface p-2 mx-auto"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="rounded-2xl bg-background/60 p-5 md:p-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
              Отчёт по выписке · апрель
            </span>
            <span>PDF · 12 стр.</span>
          </div>
          <div className="mt-5 grid gap-2.5">
            <ReportRow icon={<Repeat className="h-4 w-4" />} name="Яндекс Плюс" meta="Ежемесячно · 5 числа" amount="−399 ₽" tag="Подписка" />
            <ReportRow icon={<Repeat className="h-4 w-4" />} name="VK Музыка" meta="Ежемесячно · 12 числа" amount="−169 ₽" tag="Подписка" />
            <ReportRow icon={<CreditCard className="h-4 w-4" />} name="СМС-информирование" meta="Ежемесячно · банк" amount="−79 ₽" tag="Платная услуга" />
            <ReportRow icon={<Receipt className="h-4 w-4" />} name="Комиссия за обслуживание" meta="Раз в год" amount="−1 200 ₽" tag="Комиссия" />
          </div>
          <div className="mt-5 flex items-center justify-between rounded-xl border border-border bg-mint-soft px-4 py-3">
            <span className="text-sm text-foreground">Можно отключить или проверить на возврат</span>
            <span className="text-sm font-semibold text-mint">−1 847 ₽ / мес</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportRow({
  icon, name, meta, amount, tag,
}: { icon: React.ReactNode; name: string; meta: string; amount: string; tag: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-mint-soft text-mint">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium">{name}</p>
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">{tag}</span>
        </div>
        <p className="truncate text-xs text-muted-foreground">{meta}</p>
      </div>
      <p className="text-sm font-semibold tabular-nums">{amount}</p>
    </div>
  );
}

function Section({
  id, eyebrow, title, subtitle, children,
}: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        {eyebrow && <p className="text-xs uppercase tracking-[0.18em] text-mint">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: <FileText className="h-5 w-5" />, title: "Скачайте PDF-выписку", text: "В приложении банка — выписка за 1–3 месяца в PDF." },
    { icon: <Upload className="h-5 w-5" />, title: "Загрузите в бот или на сайт", text: "Файл обрабатывается автоматически. Доступ к счёту не нужен." },
    { icon: <FileSearch className="h-5 w-5" />, title: "Получите отчёт", text: "Список подписок, комиссий и регулярных списаний с датами." },
    { icon: <Sparkles className="h-5 w-5" />, title: "Решите, что отключить", text: "Каждую позицию можно отключить или проверить на возврат." },
  ];
  return (
    <Section id="how" eyebrow="Как работает" title="Четыре шага до спокойной карты" subtitle="Без установки приложений и без передачи данных банку.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface p-6 hover:bg-surface-elevated transition">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft text-mint">{s.icon}</span>
              <span className="text-xs tabular-nums text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExampleReport() {
  const items = [
    { icon: <Repeat className="h-4 w-4" />, name: "Подписка на онлайн-кинотеатр", meta: "Списывается каждый месяц 14-го", amount: "−599 ₽", tag: "Подписка", note: "Можно отключить" },
    { icon: <Repeat className="h-4 w-4" />, name: "Музыкальный сервис", meta: "Ежемесячно", amount: "−169 ₽", tag: "Подписка", note: "Можно отключить" },
    { icon: <CreditCard className="h-4 w-4" />, name: "Платное СМС-информирование", meta: "Услуга банка", amount: "−79 ₽", tag: "Платная услуга", note: "Можно проверить на возврат" },
    { icon: <Receipt className="h-4 w-4" />, name: "Комиссия за перевод", meta: "Регулярно, разные суммы", amount: "−250 ₽", tag: "Комиссия", note: "Решение принимает банк" },
    { icon: <AlertTriangle className="h-4 w-4" />, name: "Списание после бесплатного периода", meta: "Сервис доставки", amount: "−499 ₽", tag: "Триал → платно", note: "Можно отключить" },
  ];
  return (
    <Section id="report" eyebrow="Пример отчёта" title="Вот что увидите в выписке" subtitle="Реальная структура отчёта. Каждая строка — повод задать вопрос: нужно ли это вам.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-border bg-surface p-2" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="rounded-2xl bg-background/60 p-5 md:p-6 space-y-2.5">
            {items.map((it, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-mint-soft text-mint">{it.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{it.name}</p>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">{it.tag}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{it.meta} · {it.note}</p>
                </div>
                <p className="text-sm font-semibold tabular-nums">{it.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 content-start">
          <SummaryCard label="Подписок найдено" value="7" hint="из них 3 — давно не используете" />
          <SummaryCard label="Комиссий за месяц" value="−1 529 ₽" hint="часть можно проверить на возврат" />
          <SummaryCard label="Потенциал экономии" value="~ 18 400 ₽ / год" hint="если отключить лишнее" highlight />
        </div>
      </div>
    </Section>
  );
}

function SummaryCard({ label, value, hint, highlight }: { label: string; value: string; hint: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${highlight ? "border-transparent" : "border-border bg-surface"}`}
      style={highlight ? { background: "var(--gradient-mint)", color: "var(--mint-foreground)" } : undefined}
    >
      <p className={`text-xs uppercase tracking-wider ${highlight ? "opacity-80" : "text-muted-foreground"}`}>{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
      <p className={`mt-2 text-sm ${highlight ? "opacity-80" : "text-muted-foreground"}`}>{hint}</p>
    </div>
  );
}

function Banks() {
  const banks = ["Т-Банк", "Сбер", "ВТБ", "Альфа-Банк", "Озон Банк", "Яндекс Банк"];
  return (
    <Section eyebrow="Поддерживаемые банки" title="Работаем с PDF-выписками крупнейших банков" subtitle="Если вашего банка нет в списке — пришлите выписку в бот, постараемся распознать.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {banks.map((b) => (
          <div key={b} className="rounded-xl border border-border bg-surface px-4 py-5 text-center text-sm font-medium hover:bg-surface-elevated transition">
            {b}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Security() {
  const items = [
    { icon: <EyeOff className="h-5 w-5" />, title: "Нет доступа к счёту", text: "Сервис не подключается к банку и не видит ваши пароли." },
    { icon: <FileText className="h-5 w-5" />, title: "Только PDF-выписка", text: "Работаем исключительно с файлом, который вы прислали сами." },
    { icon: <Ban className="h-5 w-5" />, title: "Бот не хранит выписки", text: "Файл удаляется после формирования отчёта." },
    { icon: <Lock className="h-5 w-5" />, title: "Без передачи третьим лицам", text: "Данные не уходят рекламодателям и партнёрам." },
  ];
  return (
    <Section id="security" eyebrow="Безопасность" title="Ваши данные остаются у вас" subtitle="Мы построили сервис так, чтобы видеть как можно меньше.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft text-mint">{s.icon}</span>
            <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Price() {
  return (
    <Section id="price" eyebrow="Цена" title="Прозрачно и без подписок на нас самих">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-surface p-8">
          <p className="text-sm text-muted-foreground">Первая проверка</p>
          <p className="mt-3 text-4xl font-semibold">Бесплатно</p>
          <p className="mt-3 text-sm text-muted-foreground">Покажем найденные подписки и регулярные списания в кратком виде.</p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <Check>Список регулярных списаний</Check>
            <Check>Базовая категоризация</Check>
            <Check>Доступно в Telegram и на сайте</Check>
          </ul>
          <a href={TG_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated px-5 py-3 text-sm font-semibold hover:bg-surface transition">
            <Send className="h-4 w-4" /> Попробовать бесплатно
          </a>
        </div>

        <div
          className="relative rounded-3xl p-8 overflow-hidden"
          style={{ background: "var(--gradient-mint)", color: "var(--mint-foreground)", boxShadow: "var(--shadow-glow)" }}
        >
          <span className="absolute top-5 right-5 rounded-full bg-[color:var(--mint-foreground)]/10 px-2.5 py-1 text-[11px] font-medium">Полный отчёт</span>
          <p className="text-sm opacity-80">Развёрнутый разбор</p>
          <p className="mt-3 text-4xl font-semibold">
            175 <span className="text-2xl align-middle">⭐</span>
            <span className="ml-2 text-base font-medium opacity-70">≈ 299 ₽</span>
          </p>
          <p className="mt-3 text-sm opacity-80">Все подписки, комиссии и платные услуги с датами, суммами и подсказками что делать дальше.</p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <Check dark>Подписки, комиссии, платные услуги</Check>
            <Check dark>Даты и регулярность списаний</Check>
            <Check dark>Метки: «можно отключить», «можно проверить на возврат»</Check>
            <Check dark>Оценка потенциальной экономии в год</Check>
          </ul>
          <a href={TG_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--mint-foreground)] px-5 py-3 text-sm font-semibold text-[color:var(--mint)] hover:opacity-90 transition">
            Получить полный отчёт
          </a>
        </div>
      </div>
      <p className="mt-6 text-xs text-muted-foreground max-w-2xl">
        Сервис показывает списания и подсказывает, что можно отключить или проверить на возврат. Решение о возврате денег во всех случаях принимает банк.
      </p>
    </Section>
  );
}

function Check({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className={`h-4 w-4 mt-0.5 ${dark ? "" : "text-mint"}`} />
      <span>{children}</span>
    </li>
  );
}

function FAQ() {
  const faqs = [
    { q: "Вы вернёте мне деньги?", a: "Нет. Мы не возвращаем платежи и не обещаем возвратов. Сервис показывает списания, которые можно отключить или проверить на возврат — решение во всех случаях принимает банк или сервис, которому вы платили." },
    { q: "Нужен ли доступ к моему счёту?", a: "Нет. Мы не подключаемся к банку и не запрашиваем логины. Работаем только с PDF-выпиской, которую вы скачиваете сами." },
    { q: "Где взять PDF-выписку?", a: "В мобильном приложении или интернет-банке: раздел «Выписка» или «История операций» → формат PDF за 1–3 месяца." },
    { q: "Что вы храните?", a: "Бот не хранит выписки. Файл используется для формирования отчёта и удаляется. Данные не передаются третьим лицам." },
    { q: "Какие банки поддерживаются?", a: "Т-Банк, Сбер, ВТБ, Альфа-Банк, Озон Банк, Яндекс Банк. Если у вас другой банк — пришлите выписку, постараемся распознать." },
    { q: "Чем сайт отличается от Telegram-бота?", a: "Ничем по сути: одинаковый отчёт. В Telegram удобнее получать обновления и оплачивать звёздами, на сайте — работать с большими файлами." },
  ];
  return (
    <Section id="faq" eyebrow="Вопросы" title="Часто спрашивают">
      <div className="grid gap-3 md:grid-cols-2">
        {faqs.map((f, i) => (
          <details key={i} className="group rounded-2xl border border-border bg-surface p-5 open:bg-surface-elevated transition">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <span className="text-sm font-medium">{f.q}</span>
              <span className="text-mint transition group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-surface p-8 md:p-10 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Проверьте, за что вы платите каждый месяц</h3>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Загрузите выписку — первый отчёт бесплатно.</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <a href={TG_URL} className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[color:var(--mint-foreground)]" style={{ background: "var(--gradient-mint)", boxShadow: "var(--shadow-glow)" }}>
            <Send className="h-4 w-4" /> Открыть в Telegram
          </a>
          <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated px-5 py-3 text-sm font-semibold hover:bg-surface transition">
            <Globe className="h-4 w-4" /> Проверить выписку на сайте
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Антиподписки</p>
        <p className="text-xs max-w-md text-center md:text-right">
          Сервис не является банком. Мы не возвращаем деньги — показываем, что можно отключить или проверить на возврат. Решение принимает банк.
        </p>
      </div>
    </footer>
  );
}
