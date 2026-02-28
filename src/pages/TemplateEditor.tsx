import { useParams } from "react-router-dom";
import { EditorLayout } from "../components/Editor/EditorLayout";
import { useEffect, useState } from "react";
import { ZarkashaTemplate } from "../components/Templates/zarkashaTemplate/zarkashaTemplate";
import { db } from "../config/firebase";
import { ref, set, get } from "firebase/database";

export const TemplateEditor = () => {
  const INITIAL_DATA = {
    siteSettings: {
      templateId: "zarkasha",
      primaryColor: "#117D97",
      fontFamily: "Cairo",
      language: "ar",
    },
    header: {
      logoName: "زركشة",
      menuLinks: [
        { id: 1, text: "الرئيسية", url: "/" },
        { id: 2, text: "المجموعات", url: "/collections" },
        { id: 3, text: "قصتنا", url: "/about" },
        { id: 4, text: "تواصل معنا", url: "/contact" },
      ],
      actionButton: "اكتشف الآن",
    },
    hero: {
      badge: "فن التطريز الفلسطيني الحديث",
      title: "حيث يلتقي التراث بالفن المعاصر",
      description:
        "ننسج خيوط الماضي بروح المستقبل لتقديم أزياء فلسطينية فريدة تعبر عن هويتك بلمسة عصرية مبتكرة وتفاصيل تروي حكايات الأصالة.",
      primaryBtn: "تسوق المجموعة",
      secondaryBtn: "شاهد الفيديو",
      images: ["hero-1.jpg", "hero-2.jpg"],
    },
    about: {
      title: "إرثٌ يُصاغُ بحب",
      content:
        "في 'زركشة'، نؤمن أن كل غرزة هي كلمة في قصيدة فلسطينية قديمة. بدأت رحلتنا للحفاظ على الهوية الوطنية من خلال تحويل الأثواب التقليدية إلى تصاميم عصرية تناسب امرأة اليوم الواثقة.",
      subContent:
        "نعمل حرفيونا في رام الله وغزة والخليل على حياكة كل قطعة يدوياً، مستلهمين من زهور البرتقال، وأوراق الزيتون، وخرائط المدن التي لا تُنسى.",
      quote: "نحن لا نبيع ملابس، بل نمنحكِ هويةً ترتدينها.",
    },
    collection: {
      title: "مجموعتنا المختارة",
      subtitle:
        "اكتشفي تشكيلة فريدة تمزج بين أصالة الماضي وأناقة الحاضر، صُممت خصيصاً لتناسب ذوقك الرفيع.",
      items: [
        {
          id: 101,
          name: "ثوب ملكي مطرز",
          category: "أثواب تقليدية",
          price: "150$",
          image: "product-1.jpg",
        },
        {
          id: 102,
          name: "سترة عصرية بغرزة الفلاحي",
          category: "ملابس معاصرة",
          price: "85$",
          image: "product-2.jpg",
        },
        {
          id: 103,
          name: "شال حرير يدوي",
          category: "إكسسوارات",
          price: "45$",
          image: "product-3.jpg",
        },
      ],
    },
    footer: {
      description:
        "نحن نؤمن أن التراث ليس مجرد ماضٍ، بل هو روح نسكبها في تصاميمنا لتعبر عن الهوية الفلسطينية بأرقى صورة معاصرة.",
      contact: {
        email: "info@zarkasha.ps",
        phone: "+970 599 000 000",
        address: "فلسطين، رام الله، شارع الإرسال",
      },
      socialLinks: ["facebook", "instagram", "twitter"],
    },
  };
  const { templateId } = useParams();
  const [siteData, setSiteData] = useState(INITIAL_DATA);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const siteRef = ref(db, "user_sites/site_id_123");
        const snapshot = await get(siteRef);
        if (snapshot.exists()) {
          setSiteData(snapshot.val());
        }
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (isLoading || JSON.stringify(siteData) === JSON.stringify(INITIAL_DATA))
      return;

    const timer = setTimeout(async () => {
      setIsSaving(true);
      try {
        const siteRef = ref(db, "user_sites/site_id_123");
        await set(siteRef, siteData); 
      } catch (error) {
        console.error("خطأ في الحفظ:", error);
      } finally {
        setTimeout(() => setIsSaving(false), 800);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [siteData, isLoading]);

  // ثالثاً: شاشة التحميل (تمنع ظهور البيانات القديمة)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-[#117D97]">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 font-medium">جاري استعادة إبداعاتك...</p>
        </div>
      </div>
    );
  }

  // رابعاً: عرض الواجهة بعد انتهاء التحميل
  return (
    <main>
      <EditorLayout
        isSaving={isSaving}
        primaryColor={siteData.siteSettings.primaryColor}
        setPrimaryColor={(newColor) => {
          setSiteData((prev: any) => ({
            ...prev,
            siteSettings: { ...prev.siteSettings, primaryColor: newColor },
          }));
        }}
      >
        {templateId === "zarkasha" ? (
          <ZarkashaTemplate siteData={siteData} setSiteData={setSiteData} />
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-400">
            <p>Select a template from the sidebar</p>
          </div>
        )}
      </EditorLayout>
    </main>
  );
};
