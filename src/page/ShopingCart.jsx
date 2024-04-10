import AppBar from "../ui/AppBar";
import CartShop from "../ui/CartShop";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

function ShopingCart() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="bg-stone-100 px-4 md:px-0 pt-11 md:pt-0">
        <div className="hidden md:block px-3 pt-2 sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="container max-w-screen-2xl mx-auto">
          <AppBar title="سبد خرید">
            <div className="h-8 w-8 rounded-md bg-stone-50 flex items-center justify-center">
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </AppBar>

          <div className="main block">
            <div className="sidebar"></div>
            <div className="header__sort"></div>
            <div className="products">
              <CartShop />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopingCart;
