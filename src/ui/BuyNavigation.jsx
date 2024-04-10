function BuyNavigation() {
  return (
    <div className="block md:hidden bg-stone-50 h-16 w-full rounded-t-xl shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] fixed bottom-0 z-[100] left-0 right-0 overflow-hidden">
      <div className="flex items-center h-full gap-x-9 px-4">
        <button className="text-stone-50 bg-orange-400 rounded-md py-2.5 text-lg flex-1 whitespace-nowrap">
          اضافه به سبد خرید
        </button>

        <div className="text-slate-800 text-left flex flex-col items-start sm:flex-row sm:items-center w-2/5 sm:justify-center">
          <span className="text-xl sm:text-2xl">۲۸,۲۵۰,۰۰۰</span>
          <span className="text-base sm:texy-lg sm:mr-2">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default BuyNavigation;
