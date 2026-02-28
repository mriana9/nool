import { useTranslation } from "react-i18next";
import i18n from "../../config/i18n";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

export const Sidebar = ({ primaryColor, setPrimaryColor }: SidebarProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const templates = [
    { id: "zarkasha", name: "Zarkasha", img: "/zarkasha1.PNG" },
  ];

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
          {templates.map((temp) => (
            <div
              key={temp.id}
              onClick={() => navigate(`/nool-builder/${temp.id}`)}
              className="rounded-xl cursor-pointer hover:ring-2 ring-cyan-500 transition-all border border-gray-100 overflow-hidden"
            >
              <img src={temp.img} alt={temp.name} className="w-full h-auto" />
              <p className="p-2 text-xs text-center font-medium bg-gradient-to-l from-[#00d2ff] to-[#007bff] bg-clip-text text-transparent">
                {temp.name}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
            اللون الأساسي للقالب
          </label>
          <div className="flex items-center gap-3 p-2 border rounded-lg hover:border-cyan-500 transition-colors">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-8 h-8 rounded-md cursor-pointer border-none bg-transparent"
            />
            <span className="text-xs font-mono text-gray-600 uppercase">
              {primaryColor}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
