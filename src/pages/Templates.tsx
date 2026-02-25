import { TemplatesGrid } from "../components/Templates/TemplatesGrid";
import { TemplatesHero } from "../components/Templates/TemplatesHero";
import i18n from "../i18n";

export const Templates = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <TemplatesHero />

      <main
        className="max-w-7xl mx-auto pt-8 px-8"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <TemplatesGrid />
      </main>
    </div>
  );
};
