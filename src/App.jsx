import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Footer from "./component/footer/Footer";
import squareImage from "./assets/images/square_image_1.png";
import AppSvgIcon from "./component/common/appSvgIcon/AppSvgIcon";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="bg-white md:px-[120px] md:py-24 max-md:py-16 max-md:px-6 md:rounded-[64px]">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-black/45 tracking-[-0.03em] text-center mx-auto">
          Trusted by 25,000+ companies from startups to enterprise
        </h2>
      </section>
      <section className="bg-[#323232] md:px-[120px] md:py-24 max-md:py-16 max-md:px-6 md:rounded-[64px]">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-white tracking-[-0.03em] text-center mx-auto">
          You can do it all. With HireGO.
        </h2>
      </section>
      <section className="bg-neutral-100 md:px-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-black/85 tracking-[-0.03em] text-center mx-auto">
          Take your business to the next level.
        </h2>
      </section>
      <section className="bg-[#323232] md:px-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-white tracking-[-0.03em] text-center mx-auto">
          We help teams grow faster across borders.
        </h2>
      </section>
      <section className="bg-white md:px-[120px] md:py-24 max-md:py-16 max-md:px-6 space-y-12">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[32px] max-md:leading-[36px] md:max-w-[693px] font-semibold text-black/85 tracking-[-0.03em] text-center mx-auto">
          Get started with HireGo in three easy steps.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="dd">
            <img
              src={squareImage}
              alt="fdsfds"
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
