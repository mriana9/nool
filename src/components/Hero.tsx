import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  Image,
  LayoutGrid,
  Play,
  Plus,
  Type,
} from "lucide-react";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-100/40 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-100/30 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge  */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
          </span>
          <span className="text-xs font-bold text-cyan-500 tracking-wide uppercase">
            {isAr
              ? "الآن متاح لأصحاب المشاريع في العالم العربي"
              : "Now available for creators worldwide"}
          </span>
        </div>

        {/* Title and Description */}
        <h1 className="text-3xl md:text-8xl font-black text-slate-800 leading-[1.15] mb-8">
          {t("hero.title_top")} <br />
          <span className="bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent">
            {t("hero.title_gradient")}
          </span>
        </h1>

        <p className="mt-6 text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            className="group relative px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #00d2ff 0%, #007bff 50%, #34e89e 100%)",
            }}
          >
            <span className="relative z-10">{t("hero.cta_primary")}</span>
            {isAr ? (
              <ArrowLeft className="relative z-10 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            )}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="px-10 py-4 rounded-2xl text-slate-700 font-bold text-lg bg-white border-2 border-slate-100 shadow-xl shadow-slate-100/50 hover:bg-slate-50 transition-all flex items-center gap-2">
            <Play size={20} className="text-cyan-500 fill-cyan-500" />
            {t("hero.cta_secondary")}
          </button>
        </div>

        {/* Interactive Preview */}
        <div className="mt-12 md:mt-24 relative group mx-auto max-w-5xl px-2 sm:px-0">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-[1.5rem] md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative bg-white/90 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] border border-white shadow-xl overflow-hidden p-2 md:p-4">
            <div className="hidden sm:flex items-center justify-between mb-4 px-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              </div>
              <div className="px-4 py-1 bg-slate-50 rounded-full border border-slate-100 text-[9px] md:text-[10px] text-slate-400 font-mono truncate max-w-[150px] md:max-w-none">
                www.nool-builder.com/editor
              </div>
              <div className="w-8 md:w-10"></div>
            </div>

            <div className="aspect-[4/5] sm:aspect-[16/10] md:aspect-video rounded-xl md:rounded-2xl bg-white border border-slate-100 flex flex-col sm:flex-row overflow-hidden shadow-inner">
              <div className="flex-1 relative p-4 md:p-8 flex flex-col items-center justify-center min-h-0">
                <div className="w-full max-w-xs md:max-w-md space-y-3 md:space-y-4 animate-pulse">
                  <div className="w-full aspect-video sm:w-64 sm:h-40 mx-auto bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl md:rounded-2xl flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg md:rounded-xl flex items-center justify-center text-slate-300">
                      <Plus size={20} />
                    </div>
                  </div>
                  <div className="h-3 md:h-4 w-3/4 bg-slate-100 rounded-full mx-auto"></div>
                  <div className="h-2 md:h-3 w-full bg-slate-50 rounded-full mx-auto"></div>
                  <div className="flex gap-2 md:gap-3 justify-center pt-2 md:pt-4">
                    <div className="h-8 md:h-10 w-20 md:w-24 bg-slate-100 rounded-lg md:rounded-xl"></div>
                    <div className="h-8 md:h-10 w-20 md:w-24 bg-cyan-50 rounded-lg md:rounded-xl border border-cyan-100"></div>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-white/90 backdrop-blur-md border border-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-500 whitespace-nowrap">
                    {i18n.language === "ar"
                      ? "...جاري الحفظ"
                      : "Auto Saving..."}
                  </span>
                </div>
              </div>

              <div className="h-20 hidden md:flex sm:h-auto sm:w-48 md:w-64 bg-slate-50/50 border-t sm:border-t-0 sm:border-s border-slate-100 p-4 md:p-6 sm:flex-col items-center sm:items-stretch gap-4 md:gap-8 overflow-x-auto sm:overflow-visible">
                <div className="flex sm:flex-col gap-3 md:gap-6 flex-1 sm:flex-none">
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm border border-cyan-100 min-w-[100px] sm:min-w-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-cyan-500 text-white flex items-center justify-center shrink-0">
                      <LayoutGrid size={14} />
                    </div>
                    <div className="h-1.5 w-12 md:w-16 bg-cyan-100 rounded-full"></div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 opacity-40 min-w-[100px] sm:min-w-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                      <Type size={14} />
                    </div>
                    <div className="h-1.5 w-12 md:w-20 bg-slate-200 rounded-full"></div>
                  </div>

                  <div className="flex items-center gap-3 p-3 opacity-40">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400">
                      <Image size={16} />
                    </div>
                    <div className="h-2 w-12 bg-slate-200 rounded-full"></div>
                  </div>
                </div>

                <div className="shrink-0 sm:mt-auto px-4 py-2 md:p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg md:rounded-2xl text-white text-[9px] md:text-[10px] font-bold text-center shadow-lg shadow-cyan-200/50 whitespace-nowrap">
                  {i18n.language === "ar" ? "نشر الموقع" : "Publish Site"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
