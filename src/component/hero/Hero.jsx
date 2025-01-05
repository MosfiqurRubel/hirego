import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="flex md:justify-between max-md:flex-col items-start gap-10 bg-hero max-md:py-16 max-md:px-6 md:pt-32 md:ps-20 md:rounded-bl-[64px] max-md:rounded-b-[32px]">
      <div className="dd">
        <h1 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] font-semibold text-black/85 tracking-[-0.03em]">
          HireGO is your <span className="block">all-in-one</span> Global People
          Platform
        </h1>
      </div>
      <div className="object-contain">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full max-2xl:max-w-[713px] max-2xl:max-h-[536px] max-md:rounded-br-[32px]"
        />
      </div>
    </div>
  );
};

export default Hero;
