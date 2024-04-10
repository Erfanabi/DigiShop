import AppBar from "../ui/AppBar";
import AppSidebar from "../ui/AppSidebar";
import BreadCrumbs from "../ui/BreadCrumbs";
import BuyNavigation from "../ui/BuyNavigation";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProductLScreen from "../ui/ProductLScreen";
import ProductMobile from "../ui/ProductMobile";

function ProductBuy() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="bg-stone-100 px-4 md:px-0 pt-11 md:pt-0">
        <div className="hidden md:block px-3 pt-2 sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="container max-w-screen-2xl mx-auto">
          <AppBar title="گوشی آیفون 13">
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
          <div className="md:hidden">
            <BreadCrumbs />
          </div>

          <div className="main">
            <div className="sidebar">
              <AppSidebar></AppSidebar>
            </div>
            <div className="header__sort">
              <BreadCrumbs />
            </div>
            <div className="products">
              <ProductMobile />
              <ProductLScreen />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductBuy;
