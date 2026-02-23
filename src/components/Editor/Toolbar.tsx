export const Toolbar = () => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-full px-5 py-2 flex items-center gap-5 z-40 transition-all hover:bg-white">
    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
      <span className="material-symbols-outlined text-xl">zoom_out</span>
    </button>
    <div className="h-5 w-[1px] bg-gray-200"></div>
    <span className="text-xs font-bold text-gray-700 min-w-[30px] text-center">
      85%
    </span>
    <div className="h-5 w-[1px] bg-gray-200"></div>
    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
      <span className="material-symbols-outlined text-xl">zoom_in</span>
    </button>
    <div className="h-5 w-[1px] bg-gray-200"></div>
    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
      <span className="material-symbols-outlined text-xl">history</span>
    </button>
    <div className="h-5 w-[1px] bg-gray-200"></div>
    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
      <span className="material-symbols-outlined text-xl">layers</span>
    </button>
  </div>
);
