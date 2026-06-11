import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  instruments,
  lifecyclePhases,
  riskBadge,
  riskBar,
} from "@/lib/mock-data";
import { ArrowUpRight, AlertTriangle, ShieldCheck, TrendingUp, Sparkles, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painel Executivo — PNGI" },
      { name: "description", content: "Visão executiva da governança inteligente de acordos, convênios e parcerias do INSS." },
      { property: "og:title", content: "Painel Executivo — PNGI" },
      { property: "og:description", content: "KPIs, risco e auditoria inteligente em uma única plataforma." },
    ],
  }),
  component: Index,
});

function Index() {
  const topRisks = [...instruments].sort((a, b) => b.riskScore - a.riskScore).slice(0, 4);
  const total = lifecyclePhases.reduce((acc, p) => acc + p.count, 0);

  return (
    <DashboardLayout>
      <header className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-sm font-medium text-gov-blue mb-1">Visão Executiva · INSS</div>
          <h2 className="font-display text-3xl font-bold tracking-tight">Gestão de Acordos e Parcerias</h2>
          <p className="text-sm text-slate-500 mt-1">
            Governança, dados estruturados e inteligência artificial para o ciclo de vida dos instrumentos de cooperação.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-semibold border border-slate-200 rounded-lg hover:bg-white transition-colors">
            Exportar Relatório
          </button>
          <button className="px-4 py-2 text-sm font-semibold bg-gov-navy text-white rounded-lg hover:bg-slate-800 transition-colors">
            Novo Instrumento
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <KpiCard
          label="Instrumentos Ativos"
          value="1.248"
          trend="↑ 12% vs mês anterior"
          trendClass="text-emerald-600"
          icon={<FileCheck2 className="size-4 text-slate-400" />}
        />
        <KpiCard
          label="Valor Total Sob Gestão"
          value="R$ 4,2 Bi"
          trend="Capital social alocado"
          trendClass="text-slate-400"
          icon={<TrendingUp className="size-4 text-slate-400" />}
        />
        <KpiCard
          label="Risco Crítico Detectado"
          value="24"
          valueClass="text-risk-high"
          trend="Atenção imediata requerida"
          trendClass="text-risk-high"
          icon={<AlertTriangle className="size-4 text-risk-high" />}
        />
        <KpiCard
          label="Eficácia da Governança"
          value="94,2%"
          trend="Selo de Integridade Ouro"
          trendClass="text-emerald-600"
          icon={<ShieldCheck className="size-4 text-emerald-600" />}
        />
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <section className="xl:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold">Motor Inteligente de Risco</h3>
            <Link to="/risco" className="text-xs font-medium px-2 py-1 bg-slate-200 rounded text-slate-600 hover:bg-slate-300 transition-colors">
              Ver priorização completa →
            </Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 font-semibold text-slate-600">Parceiro / Instrumento</th>
                  <th className="px-6 py-4 font-semibold text-slate-600">Score de Risco</th>
                  <th className="px-6 py-4 font-semibold text-slate-600">Detecção da IA</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topRisks.map((i) => (
                  <tr key={i.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{i.id} — {i.partner}</div>
                      <div className="text-xs text-slate-400">Vigência: {i.validity}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 bg-slate-100 rounded-full overflow-hidden">
                          <div className={"h-full " + riskBar(i.riskLevel)} style={{ width: `${i.riskScore * 10}%` }} />
                        </div>
                        <span className={
                          "font-bold " +
                          (i.riskLevel === "alto" ? "text-risk-high" : i.riskLevel === "medio" ? "text-risk-mid" : "text-risk-low")
                        }>
                          {i.riskScore.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={"px-2 py-1 rounded-full text-[10px] font-bold uppercase " + riskBadge(i.riskLevel)}>
                        {i.riskLabel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/auditoria" className="text-gov-blue font-medium hover:underline">Auditar</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-display text-xl font-bold">Assistente de Governança</h3>
          <div className="bg-gov-navy rounded-2xl h-[400px] flex flex-col shadow-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="size-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">IA Generativa</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="bg-white/5 rounded-lg p-3 text-sm text-slate-300 leading-relaxed">
                Bom dia, Gestor. Analisei os novos marcos do <strong className="text-white">Decreto 11.531</strong>. Deseja uma sugestão de minuta para o Acordo do INSS?
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/assistente" className="text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors">
                  Gerar Relatório de Integridade
                </Link>
                <Link to="/assistente" className="text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors">
                  Verificar Conformidade Normativa
                </Link>
                <Link to="/assistente" className="text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors">
                  Sugerir minuta de acordo INSS × Município
                </Link>
              </div>
            </div>
            <div className="p-4">
              <Link to="/assistente" className="flex items-center gap-2 w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-slate-400 hover:bg-white/15 transition-colors">
                <Sparkles className="size-4" />
                Abrir Assistente Virtual…
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase tracking-tight text-slate-400">Ciclo de Vida dos Instrumentos</h4>
            <span className="text-xs text-slate-400">{total.toLocaleString("pt-BR")} no ciclo</span>
          </div>
          <div className="space-y-3">
            {lifecyclePhases.map((p) => {
              const pct = (p.count / total) * 100;
              return (
                <div key={p.phase}>
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                    <span className="font-medium">{p.phase}</span>
                    <span className="font-mono text-slate-400">{p.count}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={"h-full " + p.color} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-tight text-slate-400">Aprendizado Institucional</h4>
          <div className="space-y-4">
            <LearningRow
              tone="emerald"
              badge="+14"
              title="Boas Práticas Identificadas"
              desc="Padrões da execução do SIGACT IA INSS em 2023–2024 foram catalogados e estão disponíveis para reuso."
            />
            <LearningRow
              tone="amber"
              badge="!"
              title="Redução de Erros de Cadastro"
              desc="Automação do motor de IA reduziu inconformidades em 32% no último trimestre."
            />
            <LearningRow
              tone="blue"
              badge="IA"
              title="Recomendações Geradas"
              desc="427 recomendações de fiscalização orientada por risco emitidas a gestores no último mês."
            />
          </div>
          <Link to="/auditoria" className="inline-flex items-center gap-1 text-xs font-semibold text-gov-blue hover:underline">
            Explorar auditoria inteligente <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </section>
    </DashboardLayout>
  );
}

function KpiCard({
  label,
  value,
  trend,
  trendClass,
  valueClass,
  icon,
}: {
  label: string;
  value: string;
  trend: string;
  trendClass: string;
  valueClass?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        {icon}
      </div>
      <p className={"text-3xl font-bold mt-2 font-display tracking-tight " + (valueClass ?? "")}>{value}</p>
      <div className={"mt-4 flex items-center gap-2 text-xs font-medium " + trendClass}>
        <span>{trend}</span>
      </div>
    </div>
  );
}

function LearningRow({
  tone,
  badge,
  title,
  desc,
}: {
  tone: "emerald" | "amber" | "blue";
  badge: string;
  title: string;
  desc: string;
}) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    blue: "bg-blue-50 text-gov-blue",
  } as const;
  return (
    <div className="flex items-start gap-4">
      <div className={"size-10 shrink-0 rounded-lg grid place-items-center font-bold text-sm " + tones[tone]}>
        {badge}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
