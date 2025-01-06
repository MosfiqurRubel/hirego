// import Logo from "./../logo/Logo";
import AppSvgIcon from "./../common/appSvgIcon/AppSvgIcon";

const Footer = () => {
  return (
    <footer className="bg-footer md:py-24 md:px-[120px] max-md:px-6 max-md:py-12">
      <div className="space-y-2 md:mb-12 max-md:mb-6 text-center">
        <p className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] font-semibold text-white tracking-[-0.03em]">
          Work easy.
        </p>
        <p className="md:text-[56px] md:leading-[64px] max-sm:text-[40px] max-md:leading-[48px] font-semibold text-white tracking-[-0.03em]">
          Grow further with HireGo.
        </p>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="py-[13px] px-6 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-transparent bg-white text-black/85 hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Request a demo{" "}
          <AppSvgIcon
            name="arrowRight"
            className="w-[9px] h-[15px] text-transparent"
          />
        </button>
      </div>

      <hr className="h-[1px] border-t border-white/[0.16] md:my-20 max-md:my-16" />

      <div className="flex max-md:flex-col gap-4 md:justify-between md:pb-24 max-md:pb-10">
        <div className="flex-none min-w-72 space-y-8">
          <svg
            width="94"
            height="25"
            viewBox="0 0 94 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.16 15.0864H4.848V24.5264H0.624V2.19037H4.848V11.3424H14.16V2.19037H18.384V24.5264H14.16V15.0864ZM24.136 5.39037C23.2827 5.39037 22.664 5.19837 22.28 4.81437C21.9173 4.43037 21.736 3.9397 21.736 3.34237V2.70237C21.736 2.10503 21.9173 1.61437 22.28 1.23037C22.664 0.846366 23.2827 0.654366 24.136 0.654366C24.968 0.654366 25.576 0.846366 25.96 1.23037C26.344 1.61437 26.536 2.10503 26.536 2.70237V3.34237C26.536 3.9397 26.344 4.43037 25.96 4.81437C25.576 5.19837 24.968 5.39037 24.136 5.39037ZM22.088 7.82237H26.184V24.5264H22.088V7.82237ZM29.6518 24.5264V7.82237H33.7478V11.2784H33.9078C34.0144 10.8304 34.1744 10.4037 34.3878 9.99837C34.6224 9.5717 34.9211 9.19837 35.2838 8.87837C35.6464 8.55837 36.0731 8.30237 36.5638 8.11037C37.0758 7.91837 37.6624 7.82237 38.3238 7.82237H39.2198V11.6944H37.9398C36.5531 11.6944 35.5078 11.897 34.8038 12.3024C34.0998 12.7077 33.7478 13.369 33.7478 14.2864V24.5264H29.6518ZM47.53 24.9104C46.2927 24.9104 45.1833 24.7077 44.202 24.3024C43.242 23.8757 42.4207 23.289 41.738 22.5424C41.0767 21.7744 40.5647 20.857 40.202 19.7904C39.8393 18.7024 39.658 17.4864 39.658 16.1424C39.658 14.8197 39.8287 13.625 40.17 12.5584C40.5327 11.4917 41.0447 10.585 41.706 9.83837C42.3673 9.07037 43.178 8.4837 44.138 8.07837C45.098 7.6517 46.186 7.43837 47.402 7.43837C48.7033 7.43837 49.834 7.66237 50.794 8.11037C51.754 8.55837 52.5433 9.16637 53.162 9.93437C53.7807 10.7024 54.2393 11.5984 54.538 12.6224C54.858 13.625 55.018 14.7024 55.018 15.8544V17.1984H43.914V17.6144C43.914 18.8304 44.2553 19.8117 44.938 20.5584C45.6207 21.2837 46.634 21.6464 47.978 21.6464C49.002 21.6464 49.834 21.433 50.474 21.0064C51.1353 20.5797 51.722 20.0357 52.234 19.3744L54.442 21.8384C53.7593 22.7984 52.8207 23.5557 51.626 24.1104C50.4527 24.6437 49.0873 24.9104 47.53 24.9104ZM47.466 10.5104C46.378 10.5104 45.514 10.873 44.874 11.5984C44.234 12.3237 43.914 13.2624 43.914 14.4144V14.6704H50.762V14.3824C50.762 13.2304 50.474 12.3024 49.898 11.5984C49.3433 10.873 48.5327 10.5104 47.466 10.5104ZM71.8378 21.0704H71.7098C71.5178 22.1584 70.9098 23.0757 69.8858 23.8224C68.8831 24.5477 67.5391 24.9104 65.8538 24.9104C64.5311 24.9104 63.3044 24.665 62.1738 24.1744C61.0644 23.6837 60.0938 22.9584 59.2618 21.9984C58.4511 21.017 57.8111 19.8117 57.3418 18.3824C56.8724 16.953 56.6378 15.2997 56.6378 13.4224C56.6378 11.545 56.8724 9.8917 57.3418 8.46237C57.8324 7.0117 58.5151 5.7957 59.3898 4.81437C60.2644 3.83303 61.3098 3.08637 62.5258 2.57437C63.7418 2.06237 65.0964 1.80637 66.5898 1.80637C68.5951 1.80637 70.3018 2.2437 71.7098 3.11837C73.1178 3.99303 74.2271 5.2517 75.0378 6.89437L71.6138 8.91037C71.2084 7.95037 70.6004 7.15037 69.7898 6.51037C69.0004 5.87037 67.9338 5.55037 66.5898 5.55037C64.9258 5.55037 63.5924 6.06237 62.5898 7.08637C61.6084 8.08903 61.1178 9.58237 61.1178 11.5664V15.1504C61.1178 17.113 61.6191 18.6064 62.6218 19.6304C63.6244 20.6544 64.9684 21.1664 66.6538 21.1664C67.3151 21.1664 67.9338 21.0917 68.5098 20.9424C69.0858 20.7717 69.5871 20.5264 70.0138 20.2064C70.4404 19.8864 70.7818 19.4917 71.0378 19.0224C71.2938 18.553 71.4218 17.9984 71.4218 17.3584V15.9184H67.0378V12.3664H75.4858V24.5264H71.8378V21.0704ZM85.467 24.9104C84.2723 24.9104 83.195 24.7077 82.235 24.3024C81.2963 23.897 80.4857 23.3104 79.803 22.5424C79.1417 21.7744 78.6297 20.857 78.267 19.7904C77.9043 18.7024 77.723 17.4864 77.723 16.1424C77.723 14.7984 77.9043 13.593 78.267 12.5264C78.6297 11.4597 79.1417 10.553 79.803 9.80637C80.4857 9.03837 81.2963 8.4517 82.235 8.04637C83.195 7.64103 84.2723 7.43837 85.467 7.43837C86.6617 7.43837 87.739 7.64103 88.699 8.04637C89.659 8.4517 90.4697 9.03837 91.131 9.80637C91.8137 10.553 92.3363 11.4597 92.699 12.5264C93.0617 13.593 93.243 14.7984 93.243 16.1424C93.243 17.4864 93.0617 18.7024 92.699 19.7904C92.3363 20.857 91.8137 21.7744 91.131 22.5424C90.4697 23.3104 89.659 23.897 88.699 24.3024C87.739 24.7077 86.6617 24.9104 85.467 24.9104ZM85.467 21.6144C86.555 21.6144 87.4083 21.2837 88.027 20.6224C88.6457 19.961 88.955 18.9904 88.955 17.7104V14.6064C88.955 13.3477 88.6457 12.3877 88.027 11.7264C87.4083 11.065 86.555 10.7344 85.467 10.7344C84.4003 10.7344 83.5577 11.065 82.939 11.7264C82.3203 12.3877 82.011 13.3477 82.011 14.6064V17.7104C82.011 18.9904 82.3203 19.961 82.939 20.6224C83.5577 21.2837 84.4003 21.6144 85.467 21.6144Z"
              fill="white"
            />
          </svg>

          <div className="flex items-center gap-6">
            <a href="">
              <AppSvgIcon name="xIcon" className="w-[41px] h-[41px]" />
            </a>
            <a href="">
              <AppSvgIcon name="linkedin" className="w-10 h-[41px]" />
            </a>
            <a href="">
              <AppSvgIcon name="facebook" className="w-[41px] h-[41px]" />
            </a>
            <a href="">
              <AppSvgIcon name="twitter" className="w-[41px] h-[41px]" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-md:hidden">
          <div className="min-w-[230px] py-8 space-y-6">
            <h5 className="text-sm leading-6 font-medium text-white">
              How it works
            </h5>
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Hire Employees
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Hire Contractors
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Run Global Payroll
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                App Store
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Open API
              </a>
            </nav>
          </div>
          <div className="min-w-[230px] py-8 space-y-6">
            <h5 className="text-sm leading-6 font-medium text-white">
              Solutions
            </h5>
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Hire Employees
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Hire Contractors
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Run Global Payroll
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                App Store
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Open API
              </a>
            </nav>
          </div>
          <div className="min-w-[230px] py-8 space-y-6">
            <h5 className="text-sm leading-6 font-medium text-white">
              Resources
            </h5>
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Hire Employees
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Hire Contractors
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Run Global Payroll
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                App Store
              </a>
              <a
                href="#"
                className="text-xs font-norma text-white/40 hover:text-white"
              >
                Open API
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-0.5">
        <AppSvgIcon name="language" className="w-[18px] h-[19px]" />
        <span className="text-sm font-medium text-white">English</span>
      </div>

      <div className="flex max-md:flex-col md:justify-between border-t border-white/[0.16] pt-5 mt-6">
        <p className="text-sm text-[#FAF4EE] max-md:mb-4">
          © Copyright 2025. All Rights Reserved.
        </p>

        <nav className="flex gap-4 max-md:flex-col">
          <a
            href="#"
            className="text-xs font-norma text-white/40 hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs font-norma text-white/40 hover:text-white"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs font-norma text-white/40 hover:text-white"
          >
            Whistleblower Policy
          </a>
          <a
            href="#"
            className="text-xs font-norma text-white/40 hover:text-white"
          >
            Cookie policy
          </a>
          <a
            href="#"
            className="text-xs font-norma text-white/40 hover:text-white"
          >
            Cookie Settings
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
