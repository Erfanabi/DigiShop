function CartShop() {
  return (
    <div className="grid grid-cols-[80px_1fr_70px] bg-white px-3 py-2 rounded-lg shadow-lg md:px-7 md:py-4">
      <div className="w-16">
        <img
          src="/images/Cart/1.png"
          alt="cart"
          className="w-full h-auto"
        />
      </div>

      <div className="self-center">
        <div className="text-slate-900 mb-6 font-bold">
          ساعت هوشمند اپل سری 6
        </div>
        <div className="text-orange-700 font-bold">۲,۲۵۰,۰۰۰ تومان</div>
      </div>

      <div className="flex flex-col items-end self-center gap-y-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-orange-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex gap-x-3">
          <span className="w-5 h-5 bg-gray-300 text-slate-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
          <div className="ring-1 ring-orange-400 ring-offset-4 rounded-sm text-slate-700">
            1
          </div>
          <span className="w-5 h-5 bg-orange-100 text-orange-400 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartShop;
