import { useTranslation } from "react-i18next";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder?: string;
  icon: string;
  required?: boolean;
}

export const AuthInput = ({
  label,
  type,
  placeholder,
  icon,
  required = true,
}: AuthInputProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="mb-5 text-start">
      <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 transition-colors">
        {label}
      </label>

      <div className="relative group">
        <span
          className={`material-symbols-outlined absolute top-1/2 -translate-y-1/2 text-slate-400 
          ${isAr ? "right-3" : "left-3"}`}
        >
          {icon}
        </span>

        <input
          type={type}
          required={required}
          placeholder={placeholder}
          className={`w-full py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent 
            outline-none transition-all duration-300
            dark:text-white placeholder:text-slate-400
            focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10
            ${isAr ? "pr-11 pl-4" : "pl-11 pr-4"}`}
        />

        <div className="absolute inset-0 rounded-xl pointer-events-none border border-primary opacity-0 group-focus-within:opacity-10 transition-opacity"></div>
      </div>
    </div>
  );
};
