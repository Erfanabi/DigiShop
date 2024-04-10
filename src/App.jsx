import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductBuy from "./page/ProductBuy";
import Main from "./page/Main";
import ShopingCart from "./page/ShopingCart";

function App() {
  return (
    <div className="bg-stone-100 h-screen">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductBuy />} />
        <Route path="/shoping" element={<ShopingCart />} />
      </Routes>
    </div>
  );
}

export default App;

// font-[400] => font-normal
// font-[700] => font-bold

{
  /* <div class="grid grid-cols-1 gap-5 grid-rows-[80px_1fr] h-screen md:grid-cols-[1fr_200px]">
  <div class="bg-slate-200 p-4 rounded-md">header</div>
  <div class="bg-slate-200 p-4 rounded-md col-start-1 col-end-2 row-start-2 row-end-3">
    main
  </div>
  <div class="bg-slate-200 p-4 rounded-md hidden md:block col-start-2 col-end-3 row-start-1 row-end-3">
    sidebar
  </div>
</div>; */
}
