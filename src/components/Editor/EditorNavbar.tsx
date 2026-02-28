import { useTranslation } from "react-i18next";

export const EditorNavbar = ({ isSaving }: { isSaving: boolean }) => {
  const { t } = useTranslation();

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-3 md:px-6 z-20">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          className="text-white cursor-pointer px-3 md:px-5 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-colors shrink-0"
          style={{
            background: "linear-gradient(135deg, #007bff 0%, #00d2ff 100%)",
          }}
        >
          <span className="material-symbols-outlined text-sm md:text-base">
            rocket_launch
          </span>
          <span>{t("templates.publish")}</span>
        </button>

        <button className="text-gray-600 flex items-center gap-1 text-sm hover:bg-gray-50 px-2 md:px-3 py-1.5 rounded-lg transition-all shrink-0">
          <span className="material-symbols-outlined text-lg">visibility</span>
          <span>{t("templates.preview")}</span>
        </button>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[11px] hidden lg:inline whitespace-nowrap">
            {isSaving ? "جاري الحفظ..." : t("templates.saveAllChanges")}{" "}
          </span>
          <div
            className={`w-2 h-2 bg-green-500 rounded-full shrink-0 transition-all ${
              isSaving
                ? "animate-pulse-green scale-125"
                : "shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            }`}
          ></div>
        </div>

        <div className="h-4 w-[1px] bg-gray-200 hidden xs:block"></div>

        {/* <div className="flex gap-1 md:gap-2">
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <span className="material-symbols-outlined text-xl">redo</span>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <span className="material-symbols-outlined text-xl">undo</span>
          </button>
        </div> */}
      </div>
    </header>
  );
};
