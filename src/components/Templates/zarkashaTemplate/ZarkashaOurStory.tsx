
export const ZarkashaOurStory = ({
  primaryColor,
}: {
  primaryColor?: string;
}) => {
  return (
    <section
      className="py-24 relative overflow-hidden bg-white dark:bg-slate-900"
      id="story"
      dir="rtl"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 ">
        <div className="grid md:grid-cols-2 gap-16 items-center ">
          <div className="relative group animate-in fade-in slide-in-from-right duration-1000 bg-gray-100 h-full">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                alt="Artisan working"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                src="/artisan-working.jpg"
              />
            </div>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6 dark:text-cyan-200"
              style={{ color: primaryColor }}
            >
              إرثٌ يُصاغُ بحب
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-loose text-lg font-medium">
                في "زركشة"، نؤمن أن كل غرزة هي كلمة في قصيدة فلسطينية قديمة.
                بدأنا رحلتنا للحفاظ على الهوية الوطنية من خلال تحويل الأثواب
                التقليدية إلى تصاميم عصرية تناسب امرأة اليوم الواثقة.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-loose text-lg font-medium">
                يعمل حرفيونا في رام الله وغزة والخليل على حياكة كل قطعة يدوياً،
                مستلهمين من زهور البرتقال، وأوراق الزيتون، وخرائط المدن التي لا
                تنسى.
              </p>
            </div>

            <div
              className="border-r-4 pr-6 py-4 italic font-serif text-xl md:text-2xl mt-8 rounded-l-lg transition-all"
              style={{
                borderRightColor: primaryColor,
                color: primaryColor,
                backgroundColor: `${primaryColor}0D`,
              }}
            >
              "نحن لا نبيع ملابس، بل نمنحكِ هويةً ترتدينها."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
