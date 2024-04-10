function AppSidebar({ children }) {
  return (
    <div className="bg-white rounded-xl pt-6 pr-5 pl-9 h-max max-h-[calc(100vh-110px)] overflow-auto sticky top-[90px]">
      <p className="text-orange-400 mb-5 font-bold text-xl">دسته بندی</p>

      <ul>
        <li className="flex items-center text-slate-800 mb-7 gap-x-2 cursor-pointer relative">
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
          <p className="text-lg">تلفن همراه</p>
        </li>

        <li className="flex items-center text-gray-300 mb-7 gap-x-2 cursor-pointer relative">
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
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <p className="text-gray-300 text-lg">لب تاب</p>
        </li>

        <li className="flex items-center text-gray-300 mb-7 gap-x-2 cursor-pointer relative">
          <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center relative bottom-1">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 stroke-gray-300 absolute -bottom-0.5 right-2"
            >
              <path
                d="M5.66646 12.6668H10.3331C11.8865 12.6668 12.6665 11.8868 12.6665 10.3335V5.66683C12.6665 4.1135 11.8865 3.3335 10.3331 3.3335H5.66646C4.11313 3.3335 3.33313 4.1135 3.33313 5.66683V10.3335C3.33313 11.8868 4.11313 12.6668 5.66646 12.6668Z"
                stroke=""
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6665 1.3335H5.33313"
                stroke=""
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6665 14.6665H5.33313"
                stroke=""
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.66687 6.3335V8.3335H9.66687"
                stroke=""
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-lg">ساعت هوشمند</p>
        </li>
      </ul>

      {children}
    </div>
  );
}

export default AppSidebar;

{
  /* <div className="text-slate-800 mb-7 cursor-pointer">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-x-2"
        >
          <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <p className="">برند محصول</p>
          <div className="mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-y-3 mt-4 text-sm pr-3">
            <div className="flex items-center justify-start">
              <input type="radio" id="radio-1" class="h-4 w-4" />
              <label for="radio-1" class="ms-2.5 text-slate-800">
                اپل
              </label>
            </div>
            <div className="flex items-center justify-start">
              <input type="radio" id="radio-2" class="h-4 w-4" />
              <label for="radio-2" class="ms-2.5 text-slate-800">
                سامسونگ
              </label>
            </div>
            <div className="flex items-center justify-start">
              <input type="radio" id="radio-3" class="h-4 w-4" />
              <label for="radio-3" class="ms-2.5 text-slate-800">
                شیامویی
              </label>
            </div>
          </div>
        )}
      </div> */
}
