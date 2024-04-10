import { CheckIcon } from "@heroicons/react/24/outline";

function SelectColor() {
  const color = [
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
  ];

  return (
    <div className="flex">
      {color.map((item) => {
        return (
          <button
            key={item.id}
            className={`w-5 h-5 lg:w-6 lg:h-6 ${item.bgColor} rounded-full -ml-[2px] z-40 outline outline-2 outline-white flex items-center justify-center`}
          >
            {item.id == 1 && <CheckIcon className="w-4 h-4 text-white" />}
          </button>
        );
      })}
    </div>
  );
}

export default SelectColor;
