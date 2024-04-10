import BuyNavigation from "./BuyNavigation";
import SelectColor from "./SelectColor";

function ProductMobile() {
  return (
    <div className="md:hidden flex flex-col items-center gap-y-9">
      <div className="w-4/5 max-w-xs">
        <img
          src="/images/Home/Iphone13.png"
          alt="iphone"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center gap-y-1">
        <p className="font-bold text-slate-800 text-xl">
          گوشی آیفون 13 128 گیگ
        </p>
        <p className="text-gray-300 text-base">Apple Iphone 13 128 GB</p>
      </div>

      <div className="flex gap-x-14">
        <p>انتخاب رنگ:</p>
        <div>
          <SelectColor />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 sm:text-base">
        <div className="flex items-center gap-x-2 flex-auto">
          <div className="flex items-center text-slate-800 gap-x-2 relative">
            <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center relative bottom-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute -bottom-0.5 right-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <span className="font-bold">فروشنده:</span>
          </div>
          <div className="text-slate-800">دیجیتایز</div>
        </div>
        <div className="flex items-center gap-x-2 flex-auto">
          <div className="flex items-center text-slate-800 gap-x-2 relative">
            <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center relative bottom-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute -bottom-0.5 right-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <span className="font-bold">گارانتی:</span>
          </div>
          <div className="text-slate-800">18 ماه زرین خدمت</div>
        </div>
        <div className="flex items-center gap-x-2 flex-auto">
          <div className="flex items-center text-slate-800 gap-x-2 relative">
            <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center relative bottom-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute -bottom-0.5 right-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <span className="font-bold">ارسال توسط:</span>
          </div>
          <div className="text-slate-800">انبار مشهد</div>
        </div>
      </div>

      <div className="bg-stone-50 w-full rounded-xl pt-5 pb-3 px-3.5 text-slate-800">
        <p className="text-base mb-5 font-bold">ویژگی های کالا:</p>
        <div className="flex flex-col gap-y-3">
          <div className="text-sm sm:text-base flex items-center">
            <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-1 before:rounded-full">
              حافظه داخلی:
            </p>
            <p className="font-bold pr-2">128 گیگابایت</p>
          </div>
          <div className="text-sm sm:text-base flex items-center">
            <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-1 before:rounded-full">
              بازه ی اندازه صفحه نمایش:
            </p>
            <p className="font-bold pr-2">0.6 اینچ و بزرگتر</p>
          </div>
          <div className="text-sm sm:text-base flex items-center">
            <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-1 before:rounded-full">
              شبکه های ارتباطی
            </p>
            <p className="font-bold pr-2">2G &nbsp; 3G &nbsp; 4G &nbsp; 5G</p>
          </div>
        </div>
      </div>

      <BuyNavigation />
    </div>
  );
}

export default ProductMobile;
