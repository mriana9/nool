import { useTranslation } from "react-i18next";
import { Twitter, Instagram, Linkedin, Globe, Sparkles } from "lucide-react";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <footer className="pt-20 pb-10 border-t border-slate-100">
      <div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-start"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #00d2ff 0%, #34e89e 100%)",
              }}
            >
              <Sparkles size={20} fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-l from-[#00d2ff] to-[#007bff] bg-clip-text text-transparent">
              {i18n.language === "ar" ? "نول" : "NOOL"}
            </span>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed mb-8 text-base">
            {t("footer.description")}
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <div
                key={idx}
                className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-cyan-50 hover:text-cyan-500 transition-all cursor-pointer border border-slate-100"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">
            {t("footer.product")}
          </h4>
          <ul className="space-y-4 text-slate-500 text-sm font-medium">
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.features")}
            </li>
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.templates")}
            </li>
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.updates")}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">
            {t("footer.support")}
          </h4>
          <ul className="space-y-4 text-slate-500 text-sm font-medium">
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.help_center")}
            </li>
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.pricing")}
            </li>
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.customer_support")}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">
            {t("footer.company")}
          </h4>
          <ul className="space-y-4 text-slate-500 text-sm font-medium">
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.about")}
            </li>
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.terms")}
            </li>
            <li className="hover:text-cyan-500 transition-colors cursor-pointer">
              {t("footer.privacy")}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-medium">
          © 2026{" "}
          <span className=" bg-gradient-to-l from-[#00d2ff] to-[#007bff] bg-clip-text text-transparent">
            {" "}
            {i18n.language === "ar" ? "نول" : "NOOL"}
          </span>
          . {t("footer.rights")}
        </p>
        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
          <Globe size={16} className="text-cyan-500" />
          {t("footer.lang")}
        </div>
      </div>
    </footer>
  );
};
