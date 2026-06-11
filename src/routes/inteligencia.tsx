import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GraduationCap, Sparkles, BookOpen, Archive } from "lucide-react";

export const Route = createFileRoute("/inteligencia")({
  head: () => ({
    meta: [
      { title: "Inteligência Institucional — PNGI" },
      { name: "description", content: "Transformação do conhecimento tácito dos servidores em conhecimento estruturado e reutilizável." },
    ],
  }),
  component: Page,
});

const licoes = [
  { t: "Cláusulas de repasse mensal reduzem inconformidades", area: "Financeiro", fonte: "ACT 042/2023" },
  { t: "Plano de trabalho com indicadores quantitativos melhora monitoramento", area: "Governança", fonte: "Convênio 012/2024" },
  { t: "Diligência preventiva no 1º trimestre antecipa 60% das pendências", area: "Risco", fonte: "Análise consolidada 2023" },
];

const boas = [
  { t: "Modelo UnB de cooperação acadêmica com governança compartilhada", inst: "ACT 118/2024" },
  { t: "Posto INSS digital — replicável a 30 municípios prioritários", inst: "Convênio 012/2024" },
  { t: "Trilha de evidências automatizada via integração SIAFI", inst: "Padrão técnico" },
];

function Page() {
  return (
    <DashboardLayout>
      <header>
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Área Estratégica</div>
        <h2 className="font-display text-3xl font-bold tracking-tight">Inteligência Institucional</h2>
        <p className="text-sm text-slate-500 mt-1 max-w-3xl">
          Transformamos o conhecimento tácito dos servidores em conhecimento estruturado, reutilizável e protegido contra a rotatividade de equipes.
        </p>
      </header>

      <section className="grid md:grid-cols-4 gap-4">
        <Stat icon={<GraduationCap className="size-4" />} l="Lições aprendidas" v="86" />
        <Stat icon={<Sparkles className="size-4" />} l="Boas práticas catalogadas" v="42" />
        <Stat icon={<BookOpen className="size-4" />} l="Itens na base de conhecimento" v="1.214" />
        <Stat icon={<Archive className="size-4" />} l="Registros de memória institucional" v="328" />
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Lições aprendidas</h4>
          <ul className="space-y-4">
            {licoes.map((l) => (
              <li key={l.t} className="border-l-2 border-emerald-400 pl-3">
                <div className="text-sm font-medium">{l.t}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  <span className="font-semibold">{l.area}</span> · {l.fonte}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="boas-praticas" className="p-6 rounded-2xl bg-white border border-slate-200">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Boas práticas</h4>
          <ul className="space-y-4">
            {boas.map((b) => (
              <li key={b.t} className="border-l-2 border-gov-blue pl-3">
                <div className="text-sm font-medium">{b.t}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Fonte: {b.inst}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="base" className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-gov-navy text-white">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Base de conhecimento</h4>
          <p className="text-sm text-white/80 leading-relaxed">
            Repositório estruturado de normativos, modelos, pareceres, FAQs operacionais e roteiros, indexado e consultável pelo Ideobaldo.
          </p>
          <Link to="/ideobaldo" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gov-blue hover:underline">
            Consultar via Ideobaldo →
          </Link>
        </div>
        <div id="memoria" className="p-6 rounded-2xl bg-white border border-slate-200">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Memória institucional</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Histórico de decisões, contextos, pessoas envolvidas e raciocínio que originou cada instrumento. Garante continuidade quando equipes mudam.
          </p>
        </div>
      </section>
    </DashboardLayout>
  );
}

function Stat({ icon, l, v }: { icon: React.ReactNode; l: string; v: string }) {
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-200">
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <span className="text-emerald-600">{icon}</span>{l}
      </div>
      <div className="font-display text-2xl font-bold mt-2">{v}</div>
    </div>
  );
}