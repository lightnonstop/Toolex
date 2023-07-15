import { NavigationComponent } from "."
import { MdLocalPhone, MdAccountCircle, MdShoppingCart, MdMenu, MdSearch } from 'react-icons/md';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { logo } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const pageLists: { label: string, link: string }[] =
  [
    { 
      label: "home", 
      link: "/",
    },
    { 
      label: "specials", 
      link: "/product/special",
    },
    { 
      label: "contact", 
      link: "/information/contact",
    },
    { 
      label: "site map", 
      link: "/information/sitemap",
    },
    { 
      label: "brands", 
      link: "/product/brands",
    },
    { 
      label: "blogs", 
      link: "/blogs",
    },
];
function Navbar() {
  const [toggleCategory, setToggleCategory] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>('/');
  
  return (
    <div className="py-5">
      {/* Top Navigation */}
      <div className="flex flex-row items-center justify-between gap-4 px-12 max-tablet:px-16 max-mobile:px-4 max-desktop:px-4 pb-5 border-b border-b-veryDimGrey">
        <div className="w-[35%] max-mobile:hidden">
          <NavigationComponent
            title="customer support"
            subtitle="123-456-7890"
            icon={<MdLocalPhone className="text-white text-2xl max-sm:text-xl" />}
          />
        </div>
        <div className="w-[20%] flex justify-center max-sm:w-24">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-[45%] flex flex-row justify-end gap-8 max-tablet:gap-4">
          <NavigationComponent
            title="my acccount"
            subtitle="register"
            icon={<MdAccountCircle className="text-white text-2xl max-sm:text-xl" />}
          />
          <NavigationComponent
            title="my cart"
            subtitle="0 Items $0.00"
            icon={<MdShoppingCart className="text-white text-2xl max-sm:text-xl" />}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-12 max-tablet:px-16 max-mobile:px-4 max-desktop:px-4 pt-5 flex flex-row justify-between items-center gap-2">
          <div className="hidden max-tablet:block">
            <NavigationComponent
            title=""
            subtitle=""
            icon={<MdMenu className="text-white text-2xl max-sm:text-xl" />}
          />
          </div>
          <button className="bg-primary flex flex-row gap-5 items-center rounded p-3 px-4 cursor-pointer max-tablet:hidden" onClick={() => 
            setToggleCategory(prev => !prev)}>
            <div className="flex flex-row gap-2">
              <MdMenu className="text-white text-2xl" />
            <span className="text-white text-sm capitalize">all categories</span>
            </div>
            <>
              {toggleCategory
              ? <TbChevronUp className="text-white text-[17px]" />
              : <TbChevronDown className="text-white text-[17px]" />}
            </>
          </button>
          <nav className="max-desktop:hidden">
            <ul className="flex flex-row gap-7">
              {pageLists.map((pageList, index) => (
                <li className="text-white capitalize text-xl" key={index}>
                  <Link onClick={() => setActiveLink(pageList.link)} className={`
                  max-[1199px]:text-[1.0rem]
                  after:content-[''] 
                  after:block 
                  after:w-0 
                  after:h-[2px] 
                  after:duration-300 
                  after:transition-all 
                  ${activeLink === pageList.link 
                  ? 'after:w-[30px] after:bg-primary' 
                  : 'hover:after:w-[30px] after:bg-white'}`} to={pageList.link}>{pageList.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-row">
            <input type="search" name="search" id="search" placeholder="Search here..." className="rounded-s border-none focus:outline-none outline-none pl-3 py-2 flex-1 placeholder:text-grey" />
            <button className="bg-primary rounded-e p-2">
              <MdSearch className="text-white text-2xl max-sm:text-xl"/>
            </button>
          </div>
      </div>
    </div>
  )
}
export default Navbar