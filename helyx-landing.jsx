import React, { useState } from 'react';
import {
  Flame,
  Copy,
  ChevronRight,
  Key,
  Users,
  Wallet,
  Cpu,
  BarChart3,
  MessageCircle,
  Send,
  Plus,
  Grid3X3,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

/* ─── tiny helpers ─── */
const Badge = ({ children, className = '' }) => (
  <span className={`font-mono text-[10px] uppercase tracking-[0.14em] ${className}`}>
    {children}
  </span>
);

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO / LANDING
   ═══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="min-h-screen bg-[#f9f7f2]">
      {/* ── Header ── */}
      <header className="flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1440px] mx-auto">
        <a href="https://helyxai.space/signup.php?ref=logo" className="flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-[#FA5A28] inline-block" />
          <span className="font-serif text-xl font-bold text-gray-900 tracking-tight">
            Helyx AI
          </span>
          <span className="text-gray-400 text-sm font-sans">/v1</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-sans text-gray-600">
          <a href="https://helyxai.space/signup.php?ref=models" className="hover:text-gray-900 transition-colors">Models</a>
          <a href="https://helyxai.space/signup.php?ref=pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="https://helyxai.space/signup.php?ref=docs" className="hover:text-gray-900 transition-colors">Docs</a>
          <a href="https://helyxai.space/signup.php?ref=topup" className="hover:text-gray-900 transition-colors">Top up</a>
          <a href="https://helyxai.space/signup.php?ref=about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="https://helyxai.space/signup.php?ref=contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a
            href="https://helyxai.space/signup.php?ref=hero_cta"
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-black transition-colors"
          >
            Get an API key
          </a>
        </nav>
      </header>

      {/* ── Hero Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <Badge className="text-gray-400 mb-4 block">// unified api gateway</Badge>

            <h1 className="font-serif text-[clamp(40px,7vw,76px)] leading-[1.05] font-bold text-gray-900 tracking-tight mb-6">
              One endpoint.
              <br />
              Every frontier{' '}
              <em className="text-[#FA5A28] not-italic" style={{ fontStyle: 'italic' }}>
                model.
              </em>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-[52ch] mb-8 font-sans">
              Helyx AI sits in front of 50+ top-tier models — Claude Opus 5,
              Claude Haiku 4.5, GPT, Gemini, Kimi, DeepSeek, Grok — behind a
              single OpenAI-compatible API. No daily caps, no plan throttles:
              you spend exactly what you load.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://helyxai.space/signup.php?ref=hero_cta"
                className="inline-flex items-center gap-2 bg-[#FA5A28] hover:bg-[#e84d1f] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Get an API key <span className="text-lg leading-none">&rarr;</span>
              </a>
              <a
                href="https://helyxai.space/signup.php?ref=browse_models"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm font-medium px-6 py-3 rounded-lg border border-gray-200 transition-colors"
              >
                Browse models
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-gray-200 rounded-xl bg-white divide-x divide-gray-200">
              <div className="px-5 py-4">
                <span className="font-serif text-2xl lg:text-[28px] font-bold text-gray-900 block leading-tight">
                  $10
                </span>
                <Badge className="text-gray-400 mt-1 block leading-tight">
                  free credit
                  <br />
                  on signup
                </Badge>
              </div>
              <div className="px-5 py-4">
                <span className="font-serif text-2xl lg:text-[28px] font-bold text-gray-900 block leading-tight">
                  $5
                </span>
                <Badge className="text-gray-400 mt-1 block leading-tight">
                  per
                  <br />
                  referral
                </Badge>
              </div>
              <div className="px-5 py-4">
                <span className="font-serif text-2xl lg:text-[28px] font-bold text-gray-900 block leading-tight">
                  $100.00
                </span>
                <Badge className="text-gray-400 mt-1 block leading-tight">
                  top reward
                  <br />
                  for a review
                </Badge>
              </div>
              <div className="px-5 py-4">
                <span className="font-serif text-2xl lg:text-[28px] font-bold text-gray-900 block leading-tight">
                  0
                </span>
                <Badge className="text-gray-400 mt-1 block leading-tight">
                  daily caps on
                  <br />
                  every model
                </Badge>
              </div>
            </div>
          </div>

          {/* Right — code terminal */}
          <div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-7 font-mono text-[13px] leading-relaxed overflow-x-auto">
              <code>
                <span className="text-gray-500"># hello, helyx — one key, 50+ models</span>
                <br />
                <span className="text-[#FA5A28]">curl</span>{' '}
                <span className="text-white">https://helyxai.space/v1/chat/completions</span>{' '}
                \<br />
                &nbsp;&nbsp;-H{' '}
                <span className="text-emerald-400">
                  "Authorization: Bearer sk-…"
                </span>{' '}
                \<br />
                &nbsp;&nbsp;-H{' '}
                <span className="text-emerald-400">
                  "Content-Type: application/json"
                </span>{' '}
                \<br />
                &nbsp;&nbsp;-d{' '}
                <span className="text-emerald-400">
                  '({'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;"model": "claude-opus-5",{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;"messages": [{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}"role": "user",{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content": "Ship a
                  rate limiter in Go"{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp]{'\n'}
                  {'}'  )'
                </span>
                <br />
                <span className="text-gray-500">
                  &rarr; 200 OK, streamed from today's free claim first
                </span>
              </code>
            </div>
            <p className="font-mono text-[11px] text-gray-400 mt-4 leading-relaxed">
              [ok] authenticated &nbsp; [ok] quota waterfall engaged &nbsp; [ok] 200
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — DASHBOARD
   ═══════════════════════════════════════════════════════════════ */

function Dashboard() {
  const [inviteCopied, setInviteCopied] = useState(false);

  const handleCopyInvite = () => {
    navigator.clipboard?.writeText('https://helyxai.space/signup.php?ref=invite');
    setInviteCopied(true);
    setTimeout(() => setInviteCopied(false), 2000);
  };

  return (
    <section className="bg-white min-h-screen">
      {/* ── Dark promo banner ── */}
      <div className="bg-gray-900 text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 lg:px-12 py-3 gap-1 sm:gap-4">
          <span className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#FA5A28] animate-pulse" />
            <span className="font-medium text-white">Get $10 free</span>{' '}
            credit on signup — $2 instant, $8 on request
          </span>
          <span className="text-gray-500 hidden sm:inline">
            $5 per referral &middot; no daily caps &middot; crypto accepted
          </span>
        </div>
      </div>

      {/* ── Dashboard header ── */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-12 h-14">
          <a href="https://helyxai.space/signup.php?ref=dashboard_logo" className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-[#FA5A28] inline-block" />
            <span className="font-serif text-lg font-bold text-gray-900 tracking-tight">
              Helyx AI
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-sans">
            <a href="https://helyxai.space/signup.php?ref=dashboard" className="px-3 py-1.5 text-gray-900 font-semibold border-b-2 border-[#FA5A28]">
              Dashboard
            </a>
            {['Chat', 'Models', 'Pricing', 'Docs', 'Earn', 'Top up', 'Contact'].map(
              (link) => (
                <a
                  key={link}
                  href={`https://helyxai.space/signup.php?ref=${link.toLowerCase().replace(' ', '_')}`}
                  className="px-3 py-1.5 text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link}
                </a>
              )
            )}
            <a href="https://helyxai.space/signup.php?ref=signout" className="px-3 py-1.5 text-[#FA5A28] font-medium ml-1">
              Sign out
            </a>
          </nav>
        </div>
      </header>

      {/* ── Dashboard body ── */}
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 lg:py-10 space-y-5">

        {/* ── Green promo card ── */}
        <div className="bg-[#f0fdf4] border border-green-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-sans font-semibold text-gray-900 text-sm">
              Limited time: the free credits won't last
            </h3>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              Sign up and refer friends to earn credits. Get{' '}
              <strong className="text-gray-800">$5.00 credit per friend</strong>{' '}
              who creates an account.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={handleCopyInvite}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                {inviteCopied ? 'Copied!' : 'Copy invite link'}
              </button>
              <a
                href="https://helyxai.space/signup.php?ref=earn_more"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg border border-gray-200 transition-colors"
              >
                Earn more <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Orange action card ── */}
        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-amber-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-sans font-semibold text-gray-900 text-sm">
              Claim your $8 signup bonus
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Contact support to release.
            </p>
          </div>
          <div className="flex gap-2 shrink-0 mt-2 sm:mt-0">
            <a
              href="https://wa.me/923125893198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://t.me/kairalmas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0088cc] hover:bg-[#0077b3] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
          </div>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Balance */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-green-600" />
              </div>
              <Badge className="text-gray-400">current balance</Badge>
            </div>
            <span className="font-serif text-[32px] lg:text-[36px] font-bold text-gray-900 leading-none">
              $2.000000
            </span>
          </div>

          {/* Tokens used */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-gray-600" />
              </div>
              <Badge className="text-gray-400">total used tokens</Badge>
            </div>
            <span className="font-serif text-[32px] lg:text-[36px] font-bold text-gray-900 leading-none">
              0
            </span>
          </div>

          {/* Balance used */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-gray-600" />
              </div>
              <Badge className="text-gray-400">used balance</Badge>
            </div>
            <span className="font-serif text-[32px] lg:text-[36px] font-bold text-gray-900 leading-none">
              $0.0000
            </span>
          </div>
        </div>

        {/* ── Action buttons ── */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://helyxai.space/signup.php?ref=add_credits"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-lg border border-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Credits
          </a>
          <a
            href="https://helyxai.space/signup.php?ref=models"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            <Grid3X3 className="w-4 h-4" />
            Models
          </a>
        </div>

        {/* ── Accordion cards ── */}
        <div className="space-y-3">
          {/* Auth keys */}
          <button className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:border-gray-300 transition-colors text-left group">
            <div className="w-10 h-10 rounded-xl bg-[#FA5A28]/10 flex items-center justify-center shrink-0">
              <Key className="w-5 h-5 text-[#FA5A28]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-sans font-semibold text-gray-900 text-sm">
                Authentication Keys
              </h4>
              <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                Your keys stay visible and copyable here — copy any of them at
                any time.
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
          </button>

          {/* Invite friends */}
          <button className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:border-gray-300 transition-colors text-left group">
            <div className="w-10 h-10 rounded-xl bg-[#FA5A28]/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#FA5A28]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-sans font-semibold text-gray-900 text-sm">
                Invite Friends &amp; Earn $5 Each
              </h4>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING ACTION BUTTONS
   ═══════════════════════════════════════════════════════════════ */

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/923125893198"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        title="WhatsApp"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <a
        href="https://t.me/kairalmas"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#0088cc] hover:bg-[#0077b3] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        title="Telegram"
      >
        <Send className="w-5 h-5" />
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════════ */

export default function HelyxApp() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Dashboard />
      <FloatingActions />
    </div>
  );
}
