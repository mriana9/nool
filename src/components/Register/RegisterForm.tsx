import { useTranslation } from "react-i18next";
import { AuthInput } from "./AuthInput";
import { SocialAuth } from "./SocialAuth";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="mb-8 text-start">
        <div className="flex items-center gap-2 mb-2">
          <Link to="/"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12"
            style={{
              background: "linear-gradient(135deg, #00d2ff 0%, #34e89e 100%)",
            }}
          >
            <Sparkles size={20} fill="currentColor" />
          </Link>
          <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent">
            {t("auth.signUp")}
          </h1>
        </div>
        <p className="text-slate-500">{t("auth.subtitle")}</p>
      </div>

      <SocialAuth />

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-slate-400">{t("auth.or")}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <AuthInput
          label={t("auth.fullName", "الاسم الكامل")}
          icon="person"
          type="text"
          placeholder={isAr ? "الاسم الكامل" : "Full Name"}
        />

        <AuthInput
          label={t("auth.phone", "رقم الهاتف")}
          icon="phone"
          type="tel"
          placeholder={isAr ? "رقم الهاتف" : "Phone Number"}
        />

        <AuthInput
          label={t("auth.password", "كلمة المرور")}
          icon="lock"
          type="password"
          placeholder="••••••••"
        />

        <AuthInput
          label={t("auth.confirmPassword", "تأكيد كلمة المرور")}
          icon="lock"
          type="password"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-6"
          style={{
            background:
              "linear-gradient(135deg, #00d2ff 0%, #007bff 50%, #34e89e 100%)",
          }}
        >
          {t("auth.submit", "إنشاء حساب")}
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
          {t("auth.hasAccount", "هل لديك حساب بالفعل؟")}{" "}
          <Link
            to="/login"
            className="bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent  font-black hover:underline transition-all decoration-2 underline-offset-4"
          >
            {t("auth.login", "تسجيل الدخول")}
          </Link>
        </p>
      </div>
    </div>
  );
};
