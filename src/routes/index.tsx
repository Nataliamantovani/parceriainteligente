import { createFileRoute, Link } from "@tanstack/react-router";
import { InstitutionalShell } from "@/components/InstitutionalShell";
import {
  ArrowRight,
  Database,
  Shield,
  Brain,
  Eye,
  BookOpen,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Network,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plataforma Nacional de Governança Inteligente de Instrumentos de Cooperação" },
      {
        name: "description",
        content:
          "Infraestrutura digital para gestão de acordos, convênios e parcerias por meio de dados estruturados, riscos, inteligência artificial e aprendizado institucional.",
      },
      { property: "og:title", content: "Plataforma Nacional de Governança Inteligente de Instrumentos de Cooperação" },
      {
        property: "og:description",
        content: "Caso piloto: SIGACT IA do INSS. Reutilizável por toda a Administração Pública Brasileira.",
      },
    ],
  }),
  component: Landing,
});

const pillars = [
  { icon: Database, title: "Dados Estruturados", desc: "Cadastro único de instrumentos, parceiros e vigências com qualidade auditável." },
  { icon: Shield, title: "Gestão de Riscos", desc: "Indicadores de risco e integridade orientam o monitoramento, sem ranqueamento punitivo." },
  { icon: Brain, title: "Inteligência Artificial", desc: "Motor de risco, auditoria inteligente e assistente virtual especializado." },
  { icon: Eye, title: "Fiscalização por Evidências", desc: "Acompanhamento de obrigações baseado em dados e medidas corretivas rastreáveis." },
  { icon: BookOpen, title: "Conhecimento Institucional", desc: "Lições aprendidas, boas práticas e memória organizacional preservadas." },
  { icon: Network, title: "Aprendizado Organizacional", desc: "A plataforma evolui com a prática e devolve recomendações aos gestores." },
];

function Landing() {
  return (
    <InstitutionalShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Governo Digital · Plataforma Nacional
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05]">
              Plataforma Nacional de Governança Inteligente de Instrumentos de Cooperação
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              Transformando a governança dos instrumentos de cooperação de um modelo centrado em documentos para um modelo centrado em <strong className="text-white">dados, evidências e aprendizado institucional</strong>.
            </p>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-2xl">
              A plataforma apoia órgãos públicos na gestão de acordos, convênios e parcerias por meio de dados estruturados, gestão de riscos, inteligência artificial e governança baseada em evidências.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/painel"
                className="inline-flex items-center gap-2 rounded-md bg-gov-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Acessar Painel Executivo <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/implementacao"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Roadmap de Implementação
              </Link>
            </div>

            {/* Pilot badge */}
            <div className="mt-10 inline-flex items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-5 py-4 max-w-2xl">
              <div className="size-10 rounded-lg bg-emerald-400/15 grid place-items-center shrink-0">
                <Sparkles className="size-5 text-emerald-300" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">Caso Piloto</div>
                <div className="font-display text-sm font-bold text-white mt-0.5">
                  SIGACT IA · Sistema Inteligente de Governança de Acordos de Cooperação Técnica
                </div>
                <div className="text-xs text-white/60 mt-1">Instituto Nacional do Seguro Social (INSS)</div>
              </div>
            </div>
          </div>

          {/* Right: command-center mock */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gov-blue/10 blur-2xl -z-10" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/50">
                <span>Centro de Comando · Tempo Real</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Operacional</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: "1.248", l: "Instrumentos ativos" },
                  { k: "R$ 4,2 Bi", l: "Sob gestão" },
                  { k: "94,2%", l: "Conformidade" },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="font-display text-xl font-bold">{s.k}</div>
                    <div className="text-[10px] text-white/50 mt-1 uppercase tracking-wide">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-white/10 bg-gov-navy/60 p-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 mb-3">
                  <BarChart3 className="size-3" /> Recomendações de Acompanhamento
                </div>
                {[
                  { p: "ACT 042/2023 · Fundação Alfa", t: "Atenção alta", c: "bg-rose-500/15 text-rose-300" },
                  { p: "Convênio 027/2022 · SES-RS", t: "Diligência sugerida", c: "bg-amber-500/15 text-amber-300" },
                  { p: "ACT 118/2024 · UnB", t: "Boa prática", c: "bg-emerald-500/15 text-emerald-300" },
                ].map((r) => (
                  <div key={r.p} className="flex items-center justify-between py-2 border-t border-white/5 first:border-0 text-xs">
                    <span className="text-white/80">{r.p}</span>
                    <span className={"px-2 py-0.5 rounded-full text-[10px] font-semibold " + r.c}>{r.t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-gov-blue/30 bg-gov-blue/10 p-3 text-xs text-white/80">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gov-blue mb-1.5">
                  <Sparkles className="size-3" /> Ideobaldo
                </div>
                Detectei um padrão de vigências críticas concentrado no Q4. Sugiro priorizar o monitoramento de 24 instrumentos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-[11px] font-bold uppercase tracking-widest text-gov-blue">Infraestrutura Digital de Governança</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Não apenas um sistema operacional — uma plataforma de Estado.
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              Seis pilares estruturam a forma como acordos, convênios e parcerias são geridos: dados, riscos, inteligência, evidências, conhecimento e aprendizado.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-gov-blue/40 transition-colors">
                  <div className="size-10 rounded-lg bg-gov-blue/15 grid place-items-center text-gov-blue group-hover:bg-gov-blue group-hover:text-white transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reutilizável */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">Plataforma Nacional Reutilizável</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 leading-tight">
              Construída para o Estado brasileiro, não para um único órgão.
            </h2>
            <p className="text-white/60 mt-5 leading-relaxed">
              A PNGI foi concebida como infraestrutura compartilhada: pode ser adotada por qualquer órgão público que celebre instrumentos de cooperação. O SIGACT IA do INSS é a implementação piloto que valida o modelo.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Aderente ao Decreto 11.531/2023 e à Lei 13.019/2014",
                "Interoperável com bases federais (CEIS, CNEP, SIORG, SIAFI)",
                "Governança de dados, LGPD e trilhas de auditoria nativas",
                "Capacidade estatal preservada por meio de memória institucional",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="size-4 mt-0.5 text-emerald-400 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gov-blue/15 via-white/[0.02] to-emerald-400/10 p-8">
            <div className="text-[10px] uppercase tracking-widest text-white/50">Arquitetura Conceitual</div>
            <div className="mt-4 space-y-3">
              {[
                { l: "Camada de Governança", d: "Metodologia, ciclo de vida e normativos" },
                { l: "Camada de Dados", d: "Cadastro único, parceiros, vigências" },
                { l: "Camada de Inteligência", d: "Motor de risco · auditoria · Ideobaldo" },
                { l: "Camada de Evidências", d: "Monitoramento, fiscalização, medidas corretivas" },
                { l: "Camada de Aprendizado", d: "Lições, boas práticas, memória institucional" },
              ].map((c, i) => (
                <div key={c.l} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="size-7 rounded bg-white/5 grid place-items-center text-[10px] font-mono text-white/60">0{i + 1}</div>
                  <div>
                    <div className="text-sm font-semibold">{c.l}</div>
                    <div className="text-[11px] text-white/60">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="rounded-3xl bg-gradient-to-br from-gov-blue to-blue-700 p-10 md:p-14 grid lg:grid-cols-[2fr_1fr] gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Explore o modelo, o painel executivo e o roadmap de implementação progressiva.
              </h3>
              <p className="text-white/80 mt-3 max-w-2xl">
                Seis fases organizam a evolução da plataforma — da metodologia nacional à interoperabilidade governamental.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/painel" className="inline-flex items-center justify-between gap-3 rounded-xl bg-white text-gov-navy px-5 py-3 text-sm font-semibold hover:bg-slate-100">
                Painel Executivo <ArrowRight className="size-4" />
              </Link>
              <Link to="/implementacao" className="inline-flex items-center justify-between gap-3 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/20">
                Implementação Progressiva <ArrowRight className="size-4" />
              </Link>
              <Link to="/ideobaldo" className="inline-flex items-center justify-between gap-3 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/20">
                Conversar com o Ideobaldo <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </InstitutionalShell>
  );
}