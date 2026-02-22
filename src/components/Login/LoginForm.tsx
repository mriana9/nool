import { useTranslation } from "react-i18next";
import { AuthInput } from "../ui/AuthInput";
import { SocialAuth } from "../ui/SocialAuth";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="max-w-md w-full mx-auto" dir={isAr ? "rtl" : "ltr"}>
      <div className="mb-10 text-center lg:text-start">
        <div className="flex gap-2 justify-center items-center lg:justify-start mb-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12"
            style={{
              background: "linear-gradient(135deg, #00d2ff 0%, #34e89e 100%)",
            }}
          >
            <Sparkles size={20} fill="currentColor" />
          </div>
          <h1 className="text-3xl font-black mb-3 bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent">
            {t("auth.welcomeBack", "أهلاً بك مجدداً")}
          </h1>
        </div>
        <p className="text-slate-500">
          {t("auth.loginSubtitle", "سجل دخولك لمتابعة بناء حضورك الرقمي")}
        </p>
      </div>

      <SocialAuth />

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-slate-400">
            {t("auth.orPhone", "أو عبر رقم الهاتف")}
          </span>
        </div>
      </div>

      <form className="space-y-4">
        <AuthInput
          label={t("auth.phone", "رقم الهاتف")}
          icon="phone"
          type="tel"
          placeholder={isAr ? "رقم الهاتف" : "Phone Number"}
        />

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-bold text-slate-700">
              {t("auth.password", "كلمة المرور")}
            </label>
            <Link
              to="/forgot-password"
              className="text-xs font-bold bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent  hover:underline"
            >
              {t("auth.forgotPassword", "نسيت كلمة المرور؟")}
            </Link>
          </div>
          <AuthInput
            label=""
            icon="lock"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <button
          className="w-full cursor-pointer text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-6"
          style={{
            background:
              "linear-gradient(135deg, #00d2ff 0%, #007bff 50%, #34e89e 100%)",
          }}
        >
          {t("auth.loginAction", "تسجيل الدخول")}
        </button>
      </form>

      <p className="mt-10 text-center text-sm text-slate-600">
        {t("auth.noAccount", "ليس لديك حساب؟")}{" "}
        <Link
          to="/register"
          className="bg-gradient-to-r from-[#00d2ff] via-[#007bff] to-[#34e89e] bg-clip-text text-transparent  font-black hover:underline"
        >
          {t("auth.joinFree", "انضم إلينا مجاناً")}
        </Link>
      </p>
    </div>
  );
};
