import { useState } from "react";

function Accordion({ children, title, id, icon }) {
  const [idAccordion, setIdAccordion] = useState(null);

  return (
    <div className="text-slate-800 mb-7 cursor-pointer relative">
      <div
        onClick={() => setIdAccordion(idAccordion !== id ? id : null)}
        className="flex items-center gap-x-2"
      >
        <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center relative bottom-1">
          {icon}
        </div>
        <p className="text-lg">{title}</p>
        <div className="mr-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 ${
              idAccordion
                ? "rotate-180 transition-transform duration-200"
                : "transition-transform duration-200"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {idAccordion == id && (
        <div className="flex flex-col gap-y-3 mt-4 text-sm pr-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
