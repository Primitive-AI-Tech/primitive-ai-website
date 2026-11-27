import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/marketing/primitives";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation('notFound');

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="site-container not-found-page">
      <div className="not-found-card">
        <h1>{t("title")}</h1>
        <p>{t("message")}</p>
        <Button to="/" arrow>{t("return_home")}</Button>
      </div>
    </div>
  );
};

export default NotFound;
