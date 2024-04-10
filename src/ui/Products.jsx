import { CheckIcon } from "@heroicons/react/24/outline";
import { Navigate, useNavigate } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

function Products() {
  const products = [
    {
      id: 1,
      title: "ساعت هوشمند اپل سری ۶",
      compony: "اپل",
      price: "۴۸,۲۵۰,۰۰۰",
      color: [
        {
          id: 1,
          bgColor: "bg-orange-300",
        },
        {
          id: 2,
          bgColor: "bg-indigo-600",
        },
        {
          id: 3,
          bgColor: "bg-yellow-400",
        },
        {
          id: 4,
          bgColor: "bg-orange-400",
        },
      ],
    },
    {
      id: 2,
      title: "ساعت هوشمند اپل سری ۶",
      compony: "اپل",
      price: "۴۸,۲۵۰,۰۰۰",
      color: [
        {
          id: 1,
          bgColor: "bg-orange-300",
        },
        {
          id: 2,
          bgColor: "bg-indigo-600",
        },
        {
          id: 3,
          bgColor: "bg-yellow-400",
        },
        {
          id: 4,
          bgColor: "bg-orange-400",
        },
      ],
    },
    {
      id: 3,
      title: "ساعت هوشمند اپل سری ۶",
      compony: "اپل",
      price: "۴۸,۲۵۰,۰۰۰",
      color: [
        {
          id: 1,
          bgColor: "bg-orange-300",
        },
        {
          id: 2,
          bgColor: "bg-indigo-600",
        },
        {
          id: 3,
          bgColor: "bg-yellow-400",
        },
        {
          id: 4,
          bgColor: "bg-orange-400",
        },
      ],
    },
    {
      id: 4,
      title: "ساعت هوشمند اپل سری ۶",
      compony: "اپل",
      price: "۴۸,۲۵۰,۰۰۰",
      color: [
        {
          id: 1,
          bgColor: "bg-orange-300",
        },
        {
          id: 2,
          bgColor: "bg-indigo-600",
        },
        {
          id: 3,
          bgColor: "bg-yellow-400",
        },
        {
          id: 4,
          bgColor: "bg-orange-400",
        },
      ],
    },
    {
      id: 5,
      title: "ساعت هوشمند اپل سری ۶",
      compony: "اپل",
      price: "۴۸,۲۵۰,۰۰۰",
      color: [
        {
          id: 1,
          bgColor: "bg-orange-300",
        },
        {
          id: 2,
          bgColor: "bg-indigo-600",
        },
        {
          id: 3,
          bgColor: "bg-yellow-400",
        },
        {
          id: 4,
          bgColor: "bg-orange-400",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2 sm:gap-x-4 md:gap-x-5 md:gap-y-10 lg:grid-cols-4 mb-10">
      {products.map((item) => {
        return <Product item={item} />;
      })}
      <BottomNavigation />
    </div>
  );
}

export default Products;

function Product({ item }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/product");
  }

  return (
    <div
      key={item.id}
      onClick={handleClick}
      className="bg-stone-50 rounded-xl shadow-lg p-1"
    >
      <div className="bg-slate-200 rounded-lg flex items-center justify-center p-2">
        <img src="/images/Cart/1.png" alt="cart" className="w-1/3" />
      </div>

      <div className="px-2">
        <div className="flex items-center justify-between mt-5">
          <p className="text-slate-200 text-sm md:text-base">{item.compony}</p>
          <div className="flex">
            {item.color.map((s) => {
              return (
                <button
                  key={s.bgColor}
                  className={`w-5 h-5 lg:w-6 lg:h-6 ${s.bgColor} rounded-full -ml-[2px] z-40 outline outline-2 outline-white flex items-center justify-center`}
                >
                  {s.id == 1 && <CheckIcon className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-slate-900 text-sm md:text-base mt-3 font-bold mb-2">
          {item.title}
        </p>

        <div className="flex items-center text-orange-700 font-bold justify-end text-sm md:text-base">
          <p>{item.price}</p>
          <div>تومان</div>
        </div>

        <div className="w-full h-0.5 bg-slate-100 my-2.5"></div>

        <button className="text-orange-400 font-bold text-center w-full mb-2.5 cursor-pointer text-sm md:text-base">
          مشاهده سفارش
        </button>
      </div>
    </div>
  );
}
