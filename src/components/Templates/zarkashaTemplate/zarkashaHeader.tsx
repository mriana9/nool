import { useState } from "react";

export const ZarkashaHeader = ({
  primaryColor,
  data,
  setSiteData,
}: {
  primaryColor?: string;
  data: any;
  setSiteData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <nav className="top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 w-full">
      <div
        className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        dir="rtl"
      >
        <div className="flex items-center gap-3">
          <div
            className=" p-2 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: primaryColor }}
          >
            <span className="material-symbols-outlined text-white text-2xl">
              grid_view
            </span>
          </div>
          {isEditing ? (
            <input
              autoFocus
              className="text-2xl font-black bg-transparent border-b-1 outline-none max-w-min"
              style={{
                color: primaryColor,
                borderBottomColor: primaryColor,
                fieldSizing: "content",
              }}
              value={data.logoName}
              onChange={(e) => {
                setSiteData((prev: any) => ({
                  ...prev,
                  header: { ...prev.header, logoName: e.target.value },
                }));
              }}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
            />
          ) : (
            <h1
              className="text-2xl font-black tracking-tight0 cursor-edit hover:opacity-70"
              style={{ color: primaryColor }}
              onClick={() => setIsEditing(true)}
            >
              {data.logoName || "زركشة"}
            </h1>
          )}
        </div>

        <div
          className="hidden md:flex items-center gap-10 "
          style={{ "--hover-color": primaryColor } as React.CSSProperties}
        >
          {data.menuLinks?.map((item: any) => (
            <a
              key={item.id}
              href={item.url}
              className="font-medium cursor-pointer transition-colors text-slate-700 hover:text-[var(--hover-color)]"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            className=" text-white cursor-pointer px-6 py-2.5 rounded-full font-bold shadow-lg hover:scale-105 transition-transform active:scale-95"
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 10px 15px -3px ${primaryColor}80, 0 4px 6px -2px ${primaryColor}40`,
            }}
          >
            {data.actionButton || " اكتشف الان"}
          </button>
        </div>
      </div>
    </nav>
  );
};
