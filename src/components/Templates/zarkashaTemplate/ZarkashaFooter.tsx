import React from "react";

export const ZarkashaFooter = ({
  primaryColor,
  data,
}: {
  primaryColor?: string;
  data: Record<string, unknown>;
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="material-symbols-outlined text-white">
                  grid_view
                </span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                زركشة
              </h2>
            </div>
            <p className="leading-relaxed text-sm">
              نحن نؤمن أن التراث ليس مجرد ماضٍ، بل هو روح نسكبها في تصاميمنا
              لتعبر عن الهوية الفلسطينية بأرقى صورة معاصرة.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">روابط هامة</h3>
            <ul className="space-y-4 text-sm">
              {[
                "الرئيسية",
                "المجموعات الجديدة",
                "قصتنا",
                "سياسة الاستبدال",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = primaryColor || "")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined"
                  style={{ color: primaryColor }}
                >
                  mail
                </span>
                info@zarkasha.ps
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined"
                  style={{ color: primaryColor }}
                >
                  call
                </span>
                +970 599 000 000
              </li>
              <li className="flex items-center gap-2 leading-relaxed">
                <span
                  className="material-symbols-outlined"
                  style={{ color: primaryColor }}
                >
                  location_on
                </span>
                فلسطين، رام الله، شارع الإرسال
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 زركشة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
