import { useLocation, useNavigate } from "react-router-dom";
import { scenarios } from "@/features/use-cases/content";
export function useScenario() {
  const location = useLocation();
  const navigate = useNavigate();
  const selected =
    scenarios.find((item) => item.id === location.hash.slice(1)) ||
    scenarios[2];
  const select = (id: string) =>
    navigate(
      { pathname: location.pathname, search: location.search, hash: id },
      { replace: true, preventScrollReset: true },
    );
  return { selected, select };
}
