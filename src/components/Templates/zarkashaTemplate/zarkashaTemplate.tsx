import { ZarkashaFooter } from "./ZarkashaFooter";
import { ZarkashaGallery } from "./ZarkashaGallery";
import { ZarkashaHeader } from "./zarkashaHeader";
import { ZarkashaHero } from "./zarkashaHero";
import { ZarkashaOurStory } from "./ZarkashaOurStory";

interface SiteData {
  siteSettings: {
    primaryColor: string;
  };
  header: Record<string, unknown>;
  hero: Record<string, unknown>;
  about: Record<string, unknown>;
  collection: Record<string, unknown>;
  footer: Record<string, unknown>;
}

export const ZarkashaTemplate = ({
  siteData,
  setSiteData, 
}: {
  siteData: any;
  setSiteData: (data: any) => void;
}) => {
  const primaryColor = siteData.siteSettings.primaryColor;

  return (
    <div className="flex flex-col min-h-screen">
      <ZarkashaHeader
        primaryColor={primaryColor}
        data={siteData.header}
        setSiteData={setSiteData}
      />
      <main>
        <ZarkashaHero primaryColor={primaryColor} data={siteData.hero} />
        <ZarkashaOurStory primaryColor={primaryColor} data={siteData.about} />
        <ZarkashaGallery
          primaryColor={primaryColor}
          data={siteData.collection}
        />
      </main>
      <ZarkashaFooter primaryColor={primaryColor} data={siteData.footer} />
    </div>
  );
};
