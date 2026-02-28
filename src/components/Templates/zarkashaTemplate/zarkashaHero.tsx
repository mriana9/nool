import React from "react";

export const ZarkashaHero = ({
  primaryColor,
  data,
}: {
  primaryColor?: string;
  data: Record<string, unknown>;
}) => {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-24 px-6 bg-white dark:bg-slate-900"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-right duration-700">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold border"
            style={{
              color: primaryColor,
              backgroundColor: `${primaryColor}1A`,
              borderColor: `${primaryColor}33`,
            }}
          >
            فن التطريز الفلسطيني الحديث
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.15] text-slate-900 dark:text-white">
            حيث يلتقي{" "}
            <span className="italic" style={{ color: primaryColor }}>
              التراث
            </span>{" "}
            <br />
            بالفن المعاصر
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            ننسج خيوط الماضي بروح المستقبل لتقديم أزياء فلسطينية فريدة تعبر عن
            هويتك بلمسة عصرية مبتكرة وتفاصيل تروي حكايات الأصالة.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 rounded-xl text-white font-bold text-lg flex items-center gap-2 group shadow-xl transition-all hover:shadow-2xl"
              style={{
                backgroundColor: primaryColor,

                boxShadow: `0 10px 15px -3px ${primaryColor}80, 0 4px 6px -2px ${primaryColor}40`,
              }}
            >
              تسوق المجموعة
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
            </button>
            <button className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white">
              شاهد الفيديو
            </button>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000">
          <div
            className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 scale-95 border-8 border-white dark:border-slate-800 bg-slate-200"
            style={{
              backgroundImage: `url('/embroidery-texture.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />
          </div>

          <div
            className="absolute top-[-20px] left-[-20px] z-20 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl -rotate-6 border-4 border-pink-200 bg-slate-300"
            style={{
              backgroundImage: `url('/fashion-model.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-slate-300 dark:bg-slate-600" />
          </div>

          <div className="absolute bottom-[-20px] left-[10%] z-30 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs border border-slate-100 dark:border-slate-700 animate-bounce-slow">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                صناعة يدوية 100%
              </p>
              <p className="text-xs text-slate-500">بكل حب من فلسطين</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
