import { LoginForm } from "../components/Login/LoginForm";
import { VisualSection } from "../components/Login/VisualSection";

export const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white dark:bg-slate-950">
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8 lg:p-16">
        <LoginForm />
      </div>
      <VisualSection />
    </div>
  );
};
