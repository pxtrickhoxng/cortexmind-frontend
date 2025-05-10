import { Link } from "react-router-dom";

const FAQButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link className="group relative" to="/faq" draggable="false">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white p-1 rounded-md shadow-lg w-24 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          <p className="text-sm text-center">See FAQ</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-950" />
        </div>

        <button className="w-8 h-8 bg-slate-900 border-1 border-slate-500 hover:bg-slate-950/50 text-white rounded-full cursor-pointer">
          ?
        </button>
      </Link>
    </div>
  );
};

export default FAQButton;
