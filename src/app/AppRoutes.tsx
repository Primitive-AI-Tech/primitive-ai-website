import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageLifecycle from "./PageLifecycle";
import {
  notFoundPage,
  pageRoutes,
  redirects,
  redirectLocation,
  type PageId,
} from "./routes";

const pages = {
  home: lazy(() => import("@/pages/Index")),
  products: lazy(() => import("@/pages/Products")),
  services: lazy(() => import("@/pages/Services")),
  about: lazy(() => import("@/pages/Company")),
  updates: lazy(() => import("@/pages/Updates")),
  contact: lazy(() => import("@/pages/Contact")),
  privacy: lazy(() => import("@/pages/Privacy")),
  terms: lazy(() => import("@/pages/Terms")),
} satisfies Record<PageId, unknown>;
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteRedirect({ destination }: { destination: string }) {
  return <Navigate to={redirectLocation(destination, useLocation())} replace />;
}

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="site-container route-loading" role="status">
          Loading…
        </div>
      }
    >
      <Routes>
        {pageRoutes.map((page) => {
          const Component = pages[page.id];
          return (
            <Route
              key={page.path}
              path={page.path}
              element={
                <PageLifecycle page={page}>
                  <Component />
                </PageLifecycle>
              }
            />
          );
        })}
        {redirects.map((redirect) => (
          <Route
            key={redirect.path}
            path={redirect.path}
            element={<RouteRedirect destination={redirect.destination} />}
          />
        ))}
        <Route
          path="*"
          element={
            <PageLifecycle page={notFoundPage}>
              <NotFound />
            </PageLifecycle>
          }
        />
      </Routes>
    </Suspense>
  );
}
