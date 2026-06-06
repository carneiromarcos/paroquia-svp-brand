import { lazy, Suspense } from "react";
import { Switch, Route, Router } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const HomePage = lazy(() => import("@/pages/home"));
const SobrePage = lazy(() => import("@/pages/sobre"));
const HoráriosPage = lazy(() => import("@/pages/horarios"));
const PastoraisPage = lazy(() => import("@/pages/pastorais"));
const EventosPage = lazy(() => import("@/pages/eventos"));
const DízimoPage = lazy(() => import("@/pages/dizimo"));
const ContatoPage = lazy(() => import("@/pages/contato"));

function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Router base={base}>
      <PageLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/sobre" component={SobrePage} />
            <Route path="/horarios" component={HoráriosPage} />
            <Route path="/pastorais" component={PastoraisPage} />
            <Route path="/eventos" component={EventosPage} />
            <Route path="/dizimo" component={DízimoPage} />
            <Route path="/contato" component={ContatoPage} />
            <Route>
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="font-[var(--font-heading)] text-4xl text-navy mb-4">404</h1>
                <p className="text-dark/60">Página não encontrada.</p>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </PageLayout>
    </Router>
  );
}
