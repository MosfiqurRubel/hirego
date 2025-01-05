import Logo from "./../logo/Logo";
const Header = () => {
  return (
    <header className="flex gap-4  px-[120px] py-4">
      <div id="logo" className="flex-none">
        <Logo />
      </div>
      <nav className="grow flex">
        <a href="#">Products</a>
      </nav>
    </header>
  );
};

export default Header;
