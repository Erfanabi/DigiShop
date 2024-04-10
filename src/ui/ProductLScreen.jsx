import { useState } from "react";
import SelectColor from "./SelectColor";

function ProductLScreen() {
  const [showImg, setShowImg] = useState("2");
  const image = [
    { id: "2", img: "/images/Single Product/Gallery - 2.png" },
    { id: "3", img: "/images/Single Product/Gallery - 3.png" },
    { id: "4", img: "/images/Single Product/Gallery - 4.png" },
  ];
  // console.log(image.filter((item) => item.id == showImg).at(0).img);


  return (
    <div className="hidden md:block bg-white rounded-xl px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-3 items-start">
        {/* ----1---- */}
        <div className="rounded-lg w-full lg:w-2/3">
          <div className="flex">
            <div className="w-2/5 flex flex-col items-center">
              <div className="max-w-80 mb-3">
                <img
                  src="/images/Single Product/Iphone13.png"
                  alt="iphone"
                  className="w-full h-auto"
                />
              </div>

              <div className="flex items-center gap-x-2">
                {image.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="rounded-lg border border-gray-400 p-2 inline-block"
                      onClick={() => setShowImg(item.id)}
                    >
                      <img
                        src={item.img}
                        alt={`mobile-${item.id}`}
                        className="w-20 h-24"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-3/5 py-4 px-8">
              <div className="flex flex-col items-start gap-y-1">
                <p className="font-bold text-slate-800 text-lg lg:text-xl">
                  گوشی آیفون 13 128 گیگابایت
                </p>
                <p className="text-gray-300 text-base">
                  Apple Iphone 13 128 GB
                </p>
              </div>

              <div className="h-[0.5px] w-full bg-slate-200 my-8"></div>

              <div className="flex gap-x-14 mb-8">
                <p className="text-lg lg:text-xl">انتخاب رنگ:</p>
                <div>
                  <SelectColor />
                </div>
              </div>

              <div className="w-full rounded-xl pb-3 text-slate-800">
                <p className="text-base lg:text-lg mb-4 font-bold">
                  ویژگی های کالا:
                </p>
                <div className="flex flex-col gap-y-3">
                  <div className="text-base lg:text-lg space-y-2">
                    <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-2 before:rounded-full">
                      حافظه داخلی:
                    </p>
                    <p className="font-bold pr-4">128 گیگابایت</p>
                  </div>
                  <div className="text-base lg:text-lg space-y-2">
                    <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-2 before:rounded-full">
                      بازه ی اندازه صفحه نمایش:
                    </p>
                    <p className="font-bold pr-4">0.6 اینچ و بزرگتر</p>
                  </div>
                  <div className="text-base lg:text-lg space-y-2">
                    <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-2 before:rounded-full">
                      شبکه های ارتباطی
                    </p>
                    <p className="font-bold pr-4">
                      2G &nbsp; 3G &nbsp; 4G &nbsp; 5G
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----2---- */}
        <div className="w-3/4 lg:w-1/3 pe-3">
          <div className="bg-stone-100 rounded-lg w-full px-3.5 py-5">
            <div className="flex flex-col space-y-4 text-base mb-16">
              <div className="flex items-center gap-x-2">
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
              <div className="flex items-center gap-x-2">
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
              <div className="flex items-center gap-x-2">
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

            <div className="text-orange-600 mb-2 text-left">
              <span className="text-2xl">۲۸,۲۵۰,۰۰۰</span>
              <span className="text-xl">تومان</span>
            </div>

            <button className="text-stone-50 bg-orange-400 rounded-md py-2.5 w-full text-xl">
              اضافه به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLScreen;

{
  /* <div className="flex flex-col items-center gap-y-1">
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
</div> */
}

{
  /* <div className="flex flex-col items-center gap-y-9">
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

        <div className="flex flex-wrap gap-4 sm:text-lg">
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

        <div className="bg-stone-50 w-full rounded-xl pt-7 pb-3 px-3.5 text-slate-800">
          <p className="text-xl mb-5 font-bold">ویژگی های کالا:</p>
          <div className="flex flex-col gap-y-3">
            <div className="text-lg space-y-2">
              <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-1 before:rounded-full">
                حافظه داخلی:
              </p>
              <p className="font-bold pr-2.5">128 گیگابایت</p>
            </div>
            <div className="text-lg space-y-2">
              <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-1 before:rounded-full">
                بازه ی اندازه صفحه نمایش:
              </p>
              <p className="font-bold pr-2.5">0.6 اینچ و بزرگتر</p>
            </div>
            <div className="text-lg space-y-2">
              <p className="before:content-[''] before:w-2.5 before:h-2.5 before:bg-orange-400 before:inline-block before:ml-1 before:rounded-full">
                شبکه های ارتباطی
              </p>
              <p className="font-bold pr-2.5">
                2G &nbsp; 3G &nbsp; 4G &nbsp; 5G
              </p>
            </div>
          </div>
        </div>
      </div> */
}

{
  /* <div className="rounded-lg border border-gray-400 p-2 inline-block">
                  <img
                    src="/images/Single Product/Gallery - 3.png"
                    alt="mobile"
                    className="w-20 h-24"
                  />
                </div>
                <div className="rounded-lg border border-gray-400 p-2 inline-block">
                  <img
                    src="/images/Single Product/Gallery - 4.png"
                    alt="mobile"
                    className="w-20 h-24"
                  />
                </div> */
}
