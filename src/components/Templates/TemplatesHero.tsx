import { useTranslation } from "react-i18next";

export const TemplatesHero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-18 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center p-8 rounded-xl bg-[linear-gradient(135deg,rgba(0,210,255,0.2)_0%,rgba(52,232,158,0.2)_100%)]">
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-l from-[#00d2ff] to-[#007bff] bg-clip-text text-transparent mb-4">
          {t("templates.title")}
        </h1>
        <p className="text-slate-500 text-lg mb-8">
          {t("templates.description")}
        </p>

        <div className="relative max-w-2xl mx-auto group">
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder={t("templates.searchPlaceholder")}
            className="w-full py-4 pr-12 pl-4 bg-white rounded-2xl border-transparent   focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};
