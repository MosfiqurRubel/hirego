import Logo from "./../logo/Logo";
import AppSvgIcon from "./../common/appSvgIcon/AppSvgIcon";
const Header = () => {
  return (
    <header className="flex gap-4 md:px-[120px] max-md:px-6 max-md:py-2 md:py-4">
      <div id="logo" className="flex-none">
        <Logo />
      </div>
      <nav className="grow flex gap-2 max-md:hidden">
        <a
          href="#"
          className="flex items-baseline gap-x-3 text-base text-black/85 hover:text-primary px-2 tracking-[-0.03em]"
        >
          Products{" "}
          <AppSvgIcon
            name="arrowDown"
            className="w-3.5 h-[9px] text-transparent"
          />
        </a>
        <a
          href="#"
          className="flex items-baseline gap-x-3 text-base text-black/85 hover:text-primary px-2 tracking-[-0.03em]"
        >
          Why HireGo{" "}
          <AppSvgIcon
            name="arrowDown"
            className="w-3.5 h-[9px] text-transparent"
          />
        </a>
        <a
          href="#"
          className="flex items-baseline gap-x-3 text-base text-black/85 hover:text-primary px-2 tracking-[-0.03em]"
        >
          Pricing{" "}
          <AppSvgIcon
            name="arrowDown"
            className="w-3.5 h-[9px] text-transparent"
          />
        </a>
        <a
          href="#"
          className="flex items-baseline gap-x-3 text-base text-black/85 hover:text-primary px-2 tracking-[-0.03em]"
        >
          Resources{" "}
          <AppSvgIcon
            name="arrowDown"
            className="w-3.5 h-[9px] text-transparent"
          />
        </a>
        <a
          href="#"
          className="flex items-baseline gap-x-3 text-base text-black/85 hover:text-primary px-2 tracking-[-0.03em]"
        >
          Products{" "}
          <AppSvgIcon
            name="arrowDown"
            className="w-3.5 h-[9px] text-transparent"
          />
        </a>
      </nav>
      <div className="grow"></div>
      <div className="max-md:hidden py-[7px] px-4 inline-flex items-center gap-x-2 text-base font-medium rounded-full border border-secondary bg-white text-black/85 hover:bg-gray-200 cursor-pointer">
        <AppSvgIcon name="languageBlack" className="size-6 text-transparent" />
        <span className="text-sm font-medium text-black/85">English</span>
        <AppSvgIcon
          name="arrowDown"
          className="w-3.5 h-[9px] text-transparent"
        />
      </div>
      <a
        href=""
        className="max-md:hidden py-[7px] px-6 inline-flex items-center gap-x-2 text-base font-medium rounded-full border border-secondary bg-white text-black/85 hover:bg-gray-200"
      >
        Log in
      </a>
      <a
        href=""
        className="max-md:hidden py-[7px] px-6 inline-flex items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-black/85 text-white hover:bg-gray-200"
      >
        Request a demo
      </a>
      <button
        type="button"
        className="md:hidden size- inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-transparent bg-transparent hover:bg-slate-200 hover:border-secondary"
      >
        <AppSvgIcon name="hamburger" className="size-8 text-transparent" />
      </button>
    </header>
  );
};

export default Header;
