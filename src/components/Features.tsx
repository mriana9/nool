import { useTranslation } from "react-i18next";
import { MousePointer2, Layout, Headset } from "lucide-react";
import i18n from "../i18n";

export const Features = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      title: t("features.f1_title"),
      desc: t("features.f1_desc"),
      icon: <MousePointer2 size={24} />,
      gradient: "from-[#00d2ff] to-[#007bff]",
    },
    {
      title: t("features.f2_title"),
      desc: t("features.f2_desc"),
      icon: <Layout size={24} />,
      gradient: "from-[#007bff] to-[#34e89e]",
    },
    {
      title: t("features.f3_title"),
      desc: t("features.f3_desc"),
      icon: <Headset size={24} />,
      gradient: "from-[#34e89e] to-[#00d2ff]",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-black bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent mb-4">
            {t("features.title")}
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 "
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-[2rem] bg-white border border-slate-100 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity`}
              ></div>

              <div
                className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white shadow-lg shadow-blue-100`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors text-start">
                {feature.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm md:text-base text-start">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
