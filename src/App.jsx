import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Footer from "./component/footer/Footer";
import squareImage from "./assets/images/square_image_1.png";
import sliderImage from "./assets/images/slider.png";
import brandImage from "./assets/images/brands.png";
import hireImage from "./assets/images/hire-1.png";
import takeImage from "./assets/images/image-1.png";
import payrolImage from "./assets/images/image-2.png";
import AppSvgIcon from "./component/common/appSvgIcon/AppSvgIcon";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="bg-white max-md:space-y-8 md:space-y-16 md:px-[120px] md:py-24 max-md:py-16 max-md:px-6 md:rounded-[64px]">
        <h2 className="md:text-[40px] md:leading-[48px] max-sm:text-[28px] max-md:leading-[32px] md:max-w-[693px] font-semibold text-black/45 tracking-[-0.03em] text-center mx-auto">
          Trusted by{" "}
          <span className="font-semibold text-black/85">25,000+</span> companies
          from startups to enterprise
        </h2>
        <img
          src={brandImage}
          alt="Brands"
          className="w-full h-auto object-cover"
        />
      </section>
      <section className="bg-[#323232] max-md:space-y-8 md:space-y-16 md:px-[120px] md:py-24 max-md:py-16 max-md:px-6 md:rounded-[64px]">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[32px] max-md:leading-[36px] md:max-w-[693px] font-semibold text-white tracking-[-0.03em] text-center mx-auto">
          You can do it all. With HireGO.
        </h2>
        <div className="flex max-md:flex-col gap-6">
          <div className="bg-white/10 max-md:p-6 md:p-12 space-y-8 rounded-3xl">
            <header className="space-y-4">
              <h2 className="font-semibold md:text-[40px] leading-[48px] max-md:text-[28px] max-md:leading-8 text-white tracking-[-0.04em]">
                Hire international talent
              </h2>
              <p className="md:text-lg max-md:text-base md:leading-6 text-white/65 tracking-[-0.04em]">
                Instead of setting up your own entities, experience the speed of
                HireGOs automated global hiring. Create compliant employment
                agreements and set up payroll and benefits—in a matter of
                clicks.
              </p>
            </header>
            <button
              type="button"
              className="py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-transparent bg-black/85 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Hire international talent{" "}
              <AppSvgIcon
                name="arrowRightWhite"
                className="w-[9px] h-3.5 text-transparent"
              />
            </button>
            <img
              src={hireImage}
              alt="Hero"
              className="w-full h-full max-w-[482px] max-h-[360px] rounded-[28px] object-contain"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-[#3A5C45] max-md:p-6 md:p-12 space-y-4 rounded-3xl">
              <header className="space-y-4">
                <h2 className="font-semibold md:text-[40px] leading-[48px] max-md:text-[28px] max-md:leading-8 text-white tracking-[-0.04em]">
                  Hire contractors
                </h2>
                <p className="md:text-lg max-md:text-base md:leading-6 text-white/65 tracking-[-0.04em]">
                  Generate, edit, and sign compliant contracts in minutes and
                  access management tools to streamline paperwork, onboarding,
                  and payments.
                </p>
              </header>
              <button
                type="button"
                className="py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-transparent bg-black/85 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Hire contractors{" "}
                <AppSvgIcon
                  name="arrowRightWhite"
                  className="w-[9px] h-3.5 text-transparent"
                />
              </button>
            </div>
            <div className="bg-hero max-md:p-6 md:p-12 space-y-4 rounded-3xl">
              <header className="space-y-4">
                <h2 className="font-semibold md:text-[40px] leading-[48px] max-md:text-[28px] max-md:leading-8 text-black/85 tracking-[-0.04em]">
                  Convert contractors to employees
                </h2>
                <p className="md:text-lg max-md:text-base md:leading-6 text-secondary tracking-[-0.04em]">
                  Assess global worker misclassification risks and compliantly
                  convert contractors to full-timers, all under one platform.
                </p>
              </header>
              <button
                type="button"
                className="py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-transparent bg-black/85 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Convert contractors{" "}
                <AppSvgIcon
                  name="arrowRightWhite"
                  className="w-[9px] h-3.5 text-transparent"
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="h-[1px] border-t border-white/[0.16] md:my-20 max-md:my-16" />

        <div className="flex max-md:flex-col md:gap-4">
          <div className="flex flex-col p-6 max-md:pt-0 space-y-4">
            <span className="text-[80px] leading-none font-semibold text-[#B0D9FF] -tracking-[2px]">
              5,000+
            </span>
            <span className="text-lg leading-6 text-white tracking-[0.34px]">
              Loved by 5,000+ Team Members
            </span>
          </div>
          <div className="flex flex-col p-6 max-md:pt-0 space-y-4">
            <span className="text-[80px] leading-none font-semibold text-[#B0D9FF] -tracking-[2px]">
              25,000+
            </span>
            <span className="text-lg leading-6 text-white tracking-[0.34px]">
              Trusted by 25,000+ customers
            </span>
          </div>
          <div className="flex flex-col p-6 max-md:pt-0 space-y-4">
            <span className="text-[80px] leading-none font-semibold text-[#B0D9FF] -tracking-[2px]">
              48 hrs
            </span>
            <span className="text-lg leading-6 text-white tracking-[0.34px]">
              Onboard talent in as little as 48 hours
            </span>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 max-md:space-y-8 md:space-y-16 md:ps-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-black/85 tracking-[-0.03em] text-center mx-auto">
          Take your business to the next level.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-[40px] leading-[48px] font-semibold text-[#FD852F]">
              Culture and performance. <br /> It's up and up.
            </h2>
            <p className="text-black/45">
              Develop feedback loops, set KPIs and design custom performance
              reviews. Quickly build a positive performance culture for your
              business — where everyone is aiming for the same goals.
            </p>
            <a
              href=""
              className="max-w-[292px] py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-secondary bg-white text-black/85 hover:bg-gray-200"
            >
              Performance Management{" "}
              <AppSvgIcon
                name="arrowRightLang"
                className="w-[15px] h-[11px] text-transparent"
              />
            </a>
          </div>

          <div className="p-4 md:pe-0 rounded-3xl md:rounded-r-none">
            <img
              src={takeImage}
              alt="Office Culture"
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-100 p-6 rounded-3xl relative">
            <img
              src={payrolImage}
              alt="Payroll Software"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 md:pe-[140px]">
            <h2 className="text-[40px] leading-[48px] font-semibold text-[#9149ED]">
              It's payroll software. <br /> Just faster.
            </h2>
            <p className="text-gray-600">
              Save your time, pay your people with automated payroll. Enjoy the
              benefits of Real Time Information (RTI) and take care of workforce
              planning – all in one simple place.
            </p>
            <a
              href=""
              className="max-w-[212px] py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-secondary bg-white text-black/85 hover:bg-gray-200"
            >
              Payroll Features{" "}
              <AppSvgIcon
                name="arrowRightLang"
                className="w-[15px] h-[11px] text-transparent"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#323232] space-y-12 md:px-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[32px] max-md:leading-[36px] md:max-w-[693px] font-semibold text-white tracking-[-0.03em] text-center mx-auto">
          We help teams grow faster across borders.
        </h2>
        <div className="slider">
          <img
            src={sliderImage}
            alt="fdsfds"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
      <section className="bg-white md:px-[120px] md:py-24 max-md:py-16 max-md:px-6 space-y-12">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[32px] max-md:leading-[36px] md:max-w-[693px] font-semibold text-black/85 tracking-[-0.03em] text-center mx-auto">
          Get started with HireGo in three easy steps.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl">
            <img
              src={squareImage}
              alt="Slider"
              className="w-full h-full max-2xl:max-w-[592px] max-2xl:max-h-[592px] max-md:rounded-br-[32px] object-contain"
            />
          </div>
          <div className="space-y-2">
            <div className="bg-neutral-100 py-8 md:px-10 max-md:px-6 md:rounded-[32px] max-md:rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="flex-none flex items-center justify-center rounded-full w-10 h-10 text-2xl font-medium bg-badge text-white">
                  1
                </span>
                <div className="grow space-y-3">
                  <h3 className="text-[28px] leading-10 font-semibold text-black/85 tracking-[-0.03em]">
                    Book a call
                  </h3>
                  <p className=" md:max-w-[456px] text-lg leading-6 text-secondary tracking-[-0.03em]">
                    Book a call with our global workforce consultants. Well set
                    you up with a free account ready to suit your teams needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 py-8 md:px-10 max-md:px-6 md:rounded-[32px] max-md:rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="flex-none flex items-center justify-center rounded-full w-10 h-10 text-2xl font-medium bg-badge text-white">
                  2
                </span>
                <div className="grow space-y-3">
                  <h3 className="text-[28px] leading-10 font-semibold text-black/85 tracking-[-0.03em]">
                    Add your people
                  </h3>
                  <p className=" md:max-w-[456px] text-lg leading-6 text-secondary tracking-[-0.03em]">
                    From new hires to your existing workforce, onboard
                    effortlessly with our self-serve platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 py-8 md:px-10 max-md:px-6 md:rounded-[32px] max-md:rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="flex-none flex items-center justify-center rounded-full w-10 h-10 text-2xl font-medium bg-badge text-white">
                  2
                </span>
                <div className="grow space-y-3">
                  <h3 className="text-[28px] leading-10 font-semibold text-black/85 tracking-[-0.03em]">
                    Dedicated onboarding
                  </h3>
                  <p className=" md:max-w-[456px] text-lg leading-6 text-secondary tracking-[-0.03em]">
                    From navigating local laws to support for your team members,
                    our dedicated team will help you get set up seamlessly.
                  </p>
                  <button
                    type="button"
                    className="py-[9px] px-6 inline-flex items-center gap-x-3 text-lg font-medium capitalize rounded-full border border-secondary bg-white text-black/85 hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Start now{" "}
                    <AppSvgIcon
                      name="arrowRightLang"
                      className="w-[15px] h-[11px] text-transparent"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
