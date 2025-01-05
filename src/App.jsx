import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Footer from "./component/footer/Footer";

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
      <section className="bg-white md:px-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-black/85 tracking-[-0.03em] text-center mx-auto">
          Take your business to the next level.
        </h2>
      </section>
      <section className="bg-[#323232] md:px-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-white tracking-[-0.03em] text-center mx-auto">
          We help teams grow faster across borders.
        </h2>
      </section>
      <section className="bg-white md:px-[120px] md:py-24 max-md:py-16 max-md:px-6">
        <h2 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] md:max-w-[693px] font-semibold text-black/85 tracking-[-0.03em] text-center mx-auto">
          Get started with HireGo in three easy steps.
        </h2>
      </section>
      <Footer />
    </>
  );
}

export default App;
