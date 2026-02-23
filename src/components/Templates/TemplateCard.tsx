import { useNavigate } from "react-router-dom";

interface TemplateCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  isPro?: boolean;
}

export const TemplateCard = ({
  id,
  image,
  title,
  category,
  isPro,
}: TemplateCardProps) => {
  const navigate = useNavigate();
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/nool-builder/${id}`);
  };
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 border border-slate-200 shadow-sm transition-transform duration-500 hover:-translate-y-2 group-hover:shadow-xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute bottom-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${isPro ? "bg-purple-100 text-purple-600" : "bg-green-100 text-green-600"}`}
          >
            {isPro ? "PRO" : "مجاني"}
          </span>
        </div>

        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-cyan-600/10 transition-colors" />
      </div>

      <div className="flex justify-between items-start px-2">
        <div>
          <h3 className="font-bold bg-gradient-to-l from-[#00d2ff] to-[#007bff] bg-clip-text text-transparent transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{category}</p>
        </div>
        <button
          onClick={handleEdit}
          className="size-8 rounded-full cursor-pointer bg-slate-100 bg-gradient-to-l from-[#00d2ff] to-[#007bff] bg-clip-text text-transparent  flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-sm">visibility</span>
        </button>
      </div>
    </div>
  );
};
