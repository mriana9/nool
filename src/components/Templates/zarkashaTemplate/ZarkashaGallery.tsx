import React from "react";

export const ZarkashaGallery = ({
  primaryColor,
  data,
}: {
  primaryColor?: string;
  data: Record<string, unknown>;
}) => {
  const products = [
    {
      id: 1,
      title: "ثوب ملكي مطرز",
      category: "أثواب تقليدية",
      price: "150$",
      image: "/p1.jpg",
      tag: "الأكثر مبيعاً",
    },
    {
      id: 2,
      title: "سترة عصرية بغرزة الفلاحي",
      category: "ملابس معاصرة",
      price: "85$",
      image: "/p2.jpg",
      tag: "جديد",
    },
    {
      id: 3,
      title: "شال حرير يدوي",
      category: "إكسسوارات",
      price: "45$",
      image: "/p3.jpg",
      tag: null,
    },
    {
      id: 4,
      title: "عباءة زهور البرتقال",
      category: "أثواب",
      price: "120$",
      image: "/p4.jpg",
      tag: "إصدار محدود",
    },
  ];

  return (
    <section
      className="py-24 bg-[#F8F9FA] dark:bg-slate-900/50"
      id="gallery"
      dir="rtl"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
              مجموعتنا المختارة
            </h2>
            <p className="text-slate-500 max-w-md text-lg">
              اكتشفي تشكيلة فريدة تمزج بين أصالة الماضي وأناقة الحاضر، صُنعت
              خصيصاً لتناسب ذوقك الرفيع.
            </p>
          </div>
          <button
            className="font-bold flex items-center gap-2 hover:gap-3 transition-all"
            style={{ color: primaryColor }}
          >
            عرض الكل
            <span className="material-symbols-outlined">arrow_left</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[5/5] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {product.tag && (
                  <div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm"
                    style={{ color: primaryColor }}
                  >
                    {product.tag}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:bg-cyan-600 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:bg-cyan-600 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p
                  style={{ color: primaryColor }}
                  className="text-xs font-bold mb-2 uppercase tracking-tighter"
                >
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between border-t pt-4 border-slate-50 dark:border-slate-700">
                  <span className="text-xl font-black text-slate-900 dark:text-slate-100">
                    {product.price}
                  </span>
                  <button className="text-slate-400 hover:text-rose-500 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
