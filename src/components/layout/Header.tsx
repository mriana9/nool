import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages, Sparkles } from "lucide-react";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  // مراقبة السكرول لإضافة تأثير الزجاج
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2 group">
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
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-bold text-slate-600 hover:text-[#007bff] transition-colors"
            >
              {t("nav.features")}
            </a>
            <a
              href="#templates"
              className="text-sm font-bold text-slate-600 hover:text-[#007bff] transition-colors"
            >
              {t("nav.templates")}
            </a>
            <a
              href="#pricing"
              className="text-sm font-bold text-slate-600 hover:text-[#007bff] transition-colors"
            >
              {t("nav.pricing")}
            </a>
            <a
              href="#help"
              className="text-sm font-bold text-slate-600 hover:text-[#007bff] transition-colors"
            >
              {t("nav.help")}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-white/50 rounded-xl transition-all flex items-center gap-2 text-sm font-bold text-slate-700 border border-transparent hover:border-slate-200"
          >
            <Languages size={18} className="text-[#007bff]" />
            <span className="hidden sm:inline">
              {i18n.language === "ar" ? "English" : "العربية"}
            </span>
          </button>

          <button className="text-sm font-bold px-5 py-2 text-slate-700 hover:bg-white/50 rounded-xl transition-all">
            {t("nav.login")}
          </button>

          <button
            className="relative group overflow-hidden px-7 py-2.5 rounded-2xl text-white text-sm font-bold shadow-xl shadow-cyan-100 transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #007bff 0%, #00d2ff 100%)",
            }}
          >
            <span className="relative z-10">{t("nav.start")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#34e89e] to-[#00d2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </header>
  );
};
