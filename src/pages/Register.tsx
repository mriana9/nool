import { RegisterForm } from "../components/Register/RegisterForm";
import { VisualSection } from "../components/Register/VisualSection";
import i18n from "../config/i18n";

export const Register = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col lg:flex-row"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full lg:w-[40%] bg-white flex items-center justify-center p-8">
        <RegisterForm />
      </div>
      <VisualSection />
    </div>
  );
};
