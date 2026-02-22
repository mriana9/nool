import { useTranslation } from "react-i18next";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#007bff] via-[#00d2ff] to-[#34e89e] rounded-lg p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xs">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            {t("cta.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#007bff] px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95">
              {t("cta.primary")}
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
              {t("cta.secondary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
