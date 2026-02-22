import { useTranslation } from "react-i18next";

export const VisualSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="hidden lg:flex lg:w-[60%] relative items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(45deg, #00d2ff 0%, #3a7bd5 50%, #34e89e 100%)",
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="relative z-10 px-12 text-center text-white">
        <h2 className="text-5xl font-black leading-tight mb-6">
          {t("auth.visualTitle", "ابدأ رحلة النجاح مع نول")}
        </h2>

        <p className="text-xl text-white/80 max-w-lg mx-auto mb-12">
          {t(
            "auth.visualDesc",
            "انضم إلى آلاف المستخدمين وابنِ مستقبلك الرقمي اليوم.",
          )}
        </p>

        {/* (Mockup) */}
        <div className="relative max-w-2xl mx-auto transform transition-transform duration-700">
          <div className="glass-effect rounded-2xl p-6 shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-white/20 rounded"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-white/10 rounded-lg border border-white/5"></div>
                <div className="h-20 bg-white/10 rounded-lg border border-white/5"></div>
                <div className="h-20 bg-white/10 rounded-lg border border-white/5"></div>
              </div>
              <div className="h-32 bg-white/5 rounded-lg border border-white/10 animate-pulse flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl opacity-20">
                  leaderboard
                </span>
              </div>
            </div>
          </div>

          {/* (Floating Badge) */}
          <div className="absolute -right-8 top-1/4 glass-effect p-4 rounded-2xl shadow-xl animate-float bg-white/20 backdrop-blur-lg border border-white/30">
            <div className="flex items-center gap-3">
              <div className="bg-green-400/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-green-400 block">
                  trending_up
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs font-medium opacity-70">Growth</div>
                <div className="text-sm font-bold">+124%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
