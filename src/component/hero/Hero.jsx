import heroImage from "../../assets/images/hero.png";
import bubbleLeft from "../../assets/images/bubble-left.png";
import bubbleGreen from "../../assets/images/Bubble-02.png";
import bubbleBlue from "../../assets/images/Bubble-03.png";
import bubblePurple from "../../assets/images/Bubble-04.png";
import AppSvgIcon from "./../common/appSvgIcon/AppSvgIcon";

const Hero = () => {
  return (
    <div className="flex md:justify-between max-md:flex-col items-start gap-10 bg-hero max-md:py-16 max-md:px-6 md:pt-32 md:ps-20 md:rounded-bl-[64px] max-md:rounded-b-[32px]">
      <div className="space-y-6">
        <h1 className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] font-semibold text-black/85 tracking-[-0.03em]">
          HireGO is your <span className="block">all-in-one</span> Global People
          Platform
        </h1>

        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-x-2">
            <AppSvgIcon
              name="circleCheckYellow"
              className="size-6 text-transparent"
            />
            <span className="text-lg leading-6 text-secondary tracking-[-0.03em]">
              G3s Leader in global employment platforms
            </span>
          </li>
          <li className="flex items-center gap-x-2">
            <AppSvgIcon
              name="circleCheckYellow"
              className="size-6 text-transparent"
            />
            <span className="text-lg leading-6 text-secondary tracking-[-0.03em]">
              90% customer satisfaction rate
            </span>
          </li>
        </ul>

        <button
          type="button"
          className="py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-transparent bg-black/85 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Request a demo{" "}
          <AppSvgIcon
            name="arrowRightWhite"
            className="w-[9px] h-3.5 text-transparent"
          />
        </button>
      </div>
      <div className="object-contain relative max-md:mx-auto">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full max-md:max-w-[298px] max-md:rounded-br-[32px] object-contain"
        />
        <img
          src={bubbleLeft}
          alt="Hero"
          className="w-full h-full md:max-w-[412px] md:max-h-[53px] max-md:max-w-[205px] max-md:h-[25px] absolute top-5 md:right-14 max-md:-right-8"
        />
        <img
          src={bubbleGreen}
          alt="Hero"
          className="w-full h-full md:max-w-[265px] md:max-h-[55px] max-md:max-w-[131px] max-md:h-[26px] absolute top-24 -left-9"
        />
        <img
          src={bubbleBlue}
          alt="Hero"
          className="w-full h-full md:max-w-[364px] md:max-h-[49px] max-md:max-w-[182px] max-md:h-6 absolute md:bottom-[148px] md:-left-16 max-md:-left-12 max-md:bottom-2.5"
        />
        <img
          src={bubblePurple}
          alt="Hero"
          className="w-full h-full md:max-w-[223px] md:max-h-[52px] max-md:max-w-[112px] max-md:h-[26px] absolute md:top-[56%] md:right-9 max-md:-right-8 max-md:bottom-[82px]"
        />
      </div>
    </div>
  );
};

export default Hero;
