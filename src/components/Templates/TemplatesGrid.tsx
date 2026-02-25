import { TemplateCard } from "./TemplateCard";

export const TemplatesGrid = () => {
  const templates = [
    {
      id: "zarkasha",
      title: "زركشة ",
      category: "معرض أعمال إبداعي",
      isPro: true,
      image: "/zarkasha1.PNG",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {templates.map((temp, index) => (
        <TemplateCard key={index} {...temp} />
      ))}
    </div>
  );
};
