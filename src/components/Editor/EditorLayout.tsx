import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { EditorNavbar } from "./EditorNavbar";
import i18n from "../../config/i18n";
export const EditorLayout = ({ children,isSaving, primaryColor, setPrimaryColor }: { children: React.ReactNode; isSaving:boolean; primaryColor: string; setPrimaryColor: (color: string) => void }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-[#F3F4F6] mt-20 overflow-hidden relative">
      <div
        className={`
        fixed inset-y-0 right-0 z-[60] w-[280px] h-[100vh] bg-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:z-30
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
      `}
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className={`md:hidden absolute p-2 text-gray-500 ${i18n.language === "ar" ? "left-2" : "right-2"} top-2 rounded-full hover:bg-gray-100 transition-colors`}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <Sidebar
          primaryColor={primaryColor}
          setPrimaryColor={setPrimaryColor}
        />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col relative h-full overflow-hidden">
        <EditorNavbar isSaving ={isSaving}  />

        <main className="flex-1 overflow-y-auto p-4 md:p-12 bg-[#F0F2F5] flex justify-center relative">
          <div className="w-full max-w-full md:max-w-5xl">{children}</div>
        </main>
      </div>

      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed bottom-6 right-6 w-12 h-12 z-50 text-white pt-2 rounded-full transition-transform hover:scale-110 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #007bff 0%, #00d2ff 100%)",
          }}
        >
          <span className="material-symbols-outlined m-auto">menu_open</span>
        </button>
      )}
    </div>
  );
};
