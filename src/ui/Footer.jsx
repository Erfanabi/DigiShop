function Footer() {
  return (
    <footer className="hidden md:block bg-white rounded-xl px-9 pb-10 mt-20">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-[3fr,1fr] gap-x-20 gap-y-10 lg:grid-cols-[4fr_1fr_1fr] lg:gap-x-32">
          <div className="">
            <img
              src="/images/دیجی_تایز.png"
              alt="logo"
              className="mb-10"
            />
            <p className="text-base leading-9">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
            </p>
          </div>

          <ul className="text-slate-800 text-base space-y-4">
            <li className="font-bold text-xl">محصولات</li>
            <li>تلفن همراه</li>
            <li>لب تاب</li>
            <li>ساعت هوشمند</li>
          </ul>

          <div className="hidden lg:block">
            <div className="max-w-80">
              <img
                src="/images/Footer.jpg"
                alt="map"
                className="w-full"
              />
            </div>

            <div>
              <span></span>
              <span>۰۲۱-۱۲۳۴۵۶</span>
            </div>

            <div>
              <span></span>
              <span>info@digitize.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
