import { HomeIcon, SwatchIcon } from "@heroicons/react/24/outline";
import AppBar from "../ui/AppBar";
import AppHeaderSort from "../ui/AppHeaderSort";
import AppSidebar from "../ui/AppSidebar";
import BottomNavigation from "../ui/BottomNavigation";
import FilterSortMobile from "../ui/FilterSortMobile";
import Navbar from "../ui/Navbar";
import Products from "../ui/Products";
import Accordion from "../components/Accordion";
import Footer from "../ui/Footer";

function Main() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="bg-stone-100 px-4 md:px-0 pt-11 md:pt-0">
        <div className="hidden md:block px-3 pt-2 sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="container max-w-screen-2xl mx-auto">
          <AppBar title="ساعت هوشمند">
            <img src="/images/Logo.png" alt="logo" />
          </AppBar>
          <FilterSortMobile />

          <div className="main">
            <div className="sidebar">
              <AppSidebar>
                <div className="h-[0.5px] w-full bg-stone-200 mx-auto"></div>

                <p className="text-orange-400 mb-5 font-bold text-xl mt-7">
                  فیلتر
                </p>

                <Accordion
                  id="1"
                  title="برند محصول"
                  icon={
                    <HomeIcon className="w-5 h-5 absolute -bottom-0.5 right-2" />
                  }
                >
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-1"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-1" className="ms-2.5 text-slate-800">
                      اپل
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-2"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-2" className="ms-2.5 text-slate-800">
                      سامسونگ
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-3"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-3" className="ms-2.5 text-slate-800">
                      شیامویی
                    </label>
                  </div>
                </Accordion>

                <Accordion
                  id="2"
                  title="نام محصول"
                  icon={
                    <SwatchIcon className="w-5 h-5 absolute -bottom-0.5 right-2" />
                  }
                >
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-1"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-1" className="ms-2.5 text-slate-800">
                      اپل
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-2"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-2" className="ms-2.5 text-slate-800">
                      سامسونگ
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-3"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-3" className="ms-2.5 text-slate-800">
                      شیامویی
                    </label>
                  </div>
                </Accordion>

                <Accordion
                  id="2"
                  title="نام محصول"
                  icon={
                    <SwatchIcon className="w-5 h-5 absolute -bottom-0.5 right-2" />
                  }
                >
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-1"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-1" className="ms-2.5 text-slate-800">
                      اپل
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-2"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-2" className="ms-2.5 text-slate-800">
                      سامسونگ
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-3"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-3" className="ms-2.5 text-slate-800">
                      شیامویی
                    </label>
                  </div>
                </Accordion>

                <Accordion
                  id="2"
                  title="نام محصول"
                  icon={
                    <SwatchIcon className="w-5 h-5 absolute -bottom-0.5 right-2" />
                  }
                >
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-1"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-1" className="ms-2.5 text-slate-800">
                      اپل
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-2"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-2" className="ms-2.5 text-slate-800">
                      سامسونگ
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      type="checkbox"
                      id="radio-3"
                      className="form-checkbox h-4 w-4 rounded-sm text-orange-400 checked:ring-transparent focus:ring-offset-2 focus:ring-2 focus:ring-orange-400"
                    />
                    <label htmlFor="radio-3" className="ms-2.5 text-slate-800">
                      شیامویی
                    </label>
                  </div>
                </Accordion>
              </AppSidebar>
            </div>
            <div className="header__sort">
              <AppHeaderSort />
            </div>
            <div className="products">
              <Products />
              {/* <Products /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
