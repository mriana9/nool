import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside
      className="w-[280px] bg-white border-l h-full border-gray-200 flex flex-col shadow-sm z-30"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 text-sm">
          {t("templates.recommendedTemplates")}
        </h3>
      </div>

      <div className="p-4 flex-1 overflow-y-auto space-y-4 b">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder={t("templates.searchPlaceholder")}
            className="w-full bg-gray-50 border border-gray-100 rounded-lg p-2 text-xs pr-8 outline-none focus:border-indigo-300"
          />
          <span className="material-symbols-outlined absolute right-2 top-2 text-gray-400 text-sm">
            search
          </span>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl cursor-pointer hover:ring-2 ring-cyan-500 transition-all">
            <img
                src="/zarkasha1.PNG"
                alt="Template image"
                className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
