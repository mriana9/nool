import { useTranslation } from "react-i18next";

export const VisualSection = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex lg:w-[60%] relative items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #00d2ff 0%, #34e89e 100%)",
        }}
      ></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-[80px]"></div>

      <div className="relative z-10 w-full max-w-3xl px-12">
        <div className="relative h-[600px] w-full">
          <div className="absolute top-0 right-10 w-64 h-80 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-2xl rotate-[-5deg] overflow-hidden animate-float">
            <div className="h-1/3 bg-gradient-to-br from-cyan-400 to-blue-500 m-4 rounded-2xl"></div>
            <div className="px-6 space-y-3">
              <div className="h-2 w-full bg-slate-200/50 rounded"></div>
              <div className="h-2 w-3/4 bg-slate-200/50 rounded"></div>
              <div className="pt-4 grid grid-cols-2 gap-2">
                <div className="h-8 bg-slate-100/40 rounded-lg"></div>
                <div className="h-8 bg-slate-100/40 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-48 h-56 bg-white/30 backdrop-blur-lg rounded-[1.5rem] border border-white/40 shadow-xl rotate-[10deg] p-4 animate-float-delayed">
            <div className="h-3 w-1/2 bg-slate-200/60 rounded mb-4"></div>
            <div className="h-20 bg-gradient-to-br from-emerald-200 to-emerald-500 rounded-xl mb-4"></div>
            <div className="h-2 w-full bg-slate-200/60 rounded"></div>
          </div>

          <div className="absolute bottom-10 left-20 w-[450px] h-[300px] bg-white/20 backdrop-blur-2xl rounded-[2.5rem] border border-white/30 shadow-2xl rotate-[-3deg] p-8 animate-float">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <div className="size-20 bg-white/40 rounded-full flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-4xl text-white">
                  brush
                </span>
              </div>
              <div className="space-y-2 w-full">
                <div className="h-1.5 w-1/3 bg-white/40 rounded mx-auto"></div>
                <div className="h-1.5 w-1/2 bg-white/40 rounded mx-auto"></div>
              </div>
              <div className="flex gap-4 w-full justify-center">
                <div className="size-12 rounded-xl border-2 border-white/30"></div>
                <div className="size-12 rounded-xl border-2 border-white/30"></div>
                <div className="size-12 rounded-xl border-2 border-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-right text-white space-y-4">
          <h2 className="text-4xl font-black drop-shadow-md">
            {t("auth.visualTitle", "نول : مساحتك للإبداع الرقمي")}
          </h2>
          <p className="text-lg opacity-90 max-w-md ml-auto leading-relaxed">
            {t(
              "auth.visualDesc",
              "صمم موقعك الاحترافي بلمسة عربية عصرية وبكل سهولة. ابدأ اليوم وانطلق نحو آفاق جديدة.",
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
