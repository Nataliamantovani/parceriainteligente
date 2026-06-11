import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LayoutDashboard, FileText, ShieldAlert, Search, Sparkles, Users } from "lucide-react";

const navItems = [
  { to: "/", label: "Painel de Governança", icon: LayoutDashboard },
  { to: "/instrumentos", label: "Instrumentos de Cooperação", icon: FileText },
  { to: "/parceiros", label: "Cadastro de Parceiros", icon: Users },
  { to: "/risco", label: "Motor de Risco IA", icon: ShieldAlert },
  { to: "/auditoria", label: "Auditoria Inteligente", icon: Search },
  { to: "/assistente", label: "Assistente de Governança", icon: Sparkles },
] as const;

export function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gov-navy">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="size-8 rounded bg-gov-navy grid place-items-center text-white font-bold text-[10px] uppercase tracking-tighter">
              PNGI
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <h1 className="font-display text-base md:text-lg font-bold tracking-tight text-gov-navy">
              Plataforma Nacional de Governança Inteligente
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/assistente"
              className="hidden md:block w-64 rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-500 border border-transparent hover:border-gov-blue/30 hover:bg-white transition-all"
            >
              Perguntar ao Assistente Virtual…
            </Link>
            <div className="size-8 rounded-full bg-slate-200 grid place-items-center text-[10px] font-bold">
              JD
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 shrink-0 border-r border-slate-200 bg-white min-h-[calc(100vh-64px)] p-4 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2">
            Caso Piloto: SIGACT IA
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
                  (active
                    ? "bg-gov-blue/5 text-gov-blue"
                    : "text-slate-600 hover:bg-slate-50")
                }
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
          <div className="pt-8 px-1">
            <div className="rounded-xl bg-slate-900 p-4 text-white">
              <p className="text-xs text-slate-400 mb-2">Status do Sistema</p>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium uppercase tracking-tight">
                  IA Ativa (V2.4)
                </span>
              </div>
              <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
                Análise contínua de 1.248 instrumentos em monitoramento.
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 space-y-8 min-w-0">{children}</main>
      </div>
    </div>
  );
}