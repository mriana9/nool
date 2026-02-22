import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import i18n from "../i18n";

export const Tools = () => {
  const { t } = useTranslation();

  const toolItems = [
    { title: t("tools.item1_title"), desc: t("tools.item1_desc") },
    { title: t("tools.item2_title"), desc: t("tools.item2_desc") },
    { title: t("tools.item3_title"), desc: t("tools.item3_desc") },
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div
        className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="flex-1 text-start order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent leading-tight mb-12">
            {t("tools.title")}
          </h2>

          <div className="space-y-10">
            {toolItems.map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="mt-1">
                  <CheckCircle2
                    className="text-cyan-400 group-hover:scale-110 transition-transform"
                    size={26}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* left side  */}
        <div className="flex-1 order-1 lg:order-2 w-full">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 via-blue-400 to-emerald-400 rounded-[1.5rem] blur-2xl opacity-20 group-hover:opacity-40 animate-gradient-xy transition duration-1000"></div>

            <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.5rem] border border-white shadow-xs p-6 md:p-8 aspect-[4/3] flex flex-col gap-6 transform transition-all duration-500 group-hover:rotate-1 group-hover:-translate-y-2">
              <div className="flex items-center gap-4">
                <div className="h-4 w-32 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200 to-transparent -translate-x-full animate-shimmer"></div>
                </div>
                <div className="h-10 w-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full ms-auto shadow-inner flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-cyan-400 animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 flex flex-col p-4 md:p-6 gap-4 relative">
                <div className="h-32 w-full bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center px-6 gap-4 group/item transition-all hover:border-cyan-200">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <div className="w-6 h-1 bg-current rounded-full"></div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-24 flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col justify-end gap-2 hover:scale-105 transition-transform duration-300">
                    <div className="h-1.5 w-12 bg-emerald-100 rounded-full"></div>
                    <div className="h-1.5 w-8 bg-slate-50 rounded-full"></div>
                  </div>
                  <div className="h-24 flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col justify-end gap-2 hover:scale-105 transition-transform duration-300">
                    <div className="h-1.5 w-12 bg-blue-100 rounded-full"></div>
                    <div className="h-1.5 w-8 bg-slate-50 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 w-6 h-6 text-cyan-500 pointer-events-none animate-float opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M5.65 19.43l4.27-4.27 1.1-1.1 4.27-4.27-1.1-1.1-4.27 4.27-1.1 1.1-4.27 4.27 1.1 1.1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
