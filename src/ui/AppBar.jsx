function AppBar({ title, children }) {
  return (
    <div className="flex md:hidden items-center justify-between mb-6">
      <div className="shadow-lg">{children}</div>
      <p className="text-slate-800 text-lg font-bold">{title}</p>
      <div className="h-8 w-8 rounded-md bg-stone-50 flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-slate-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default AppBar;
