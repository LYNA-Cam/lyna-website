import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="relative flex pt-30 py-5 flex-col items-center bg-linear-to-t from-primary to-transparent w-full">
      <div className="relative max-w-[1080px] flex flex-col w-full gap-y-20">
        <div className="flex flex-col items-center tablet:items-start tablet:justify-between tablet:flex-row gap-y-4">
          <div className="flex flex-col gap-y-8">
            <div className="flex items-center gap-x-4 *:bg-white *:text-secondary *:p-3 *:rounded-full">
              <Link
                to={
                  "https://www.instagram.com/lynacam1?igsh=MXJrMDFtYmV4azY1eA%3D%3D&utm_source=qr"
                }
              >
                <SiInstagram />
              </Link>
              <Link
                to={"https://www.tiktok.com/@lyna.cam?_t=ZN-8yFer70eCeM&_r=1"}
              >
                <SiTiktok />
              </Link>
            </div>
            <Link to={"/"}>
              <img src="/logo.svg" className="h-8" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-4 items-center tablet:items-start">
            <span className="font-bold uppercase text-[14px]">Navigation</span>
            <Link to={"/#hero"} className="text-xl opacity-80">
              Home
            </Link>
            <Link to={"/#features"} className="text-xl opacity-80">
              Features
            </Link>
            <Link to={"/#howItWorks"} className="text-xl opacity-80">
              How it works
            </Link>
            <Link to={"/"} className="text-xl opacity-80">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center tablet:flex-row tablet:justify-between w-full text-sm gap-y-5">
          <span>© 2026 – LYNA Cam</span>
          <div className="flex items-center gap-x-4">
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
            <Link to={"/cookies"}>Cookies</Link>
            <Link to={"/terms"}>Terms of Use</Link>
            <Link to={"/data-safety"}>Data Safety</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
