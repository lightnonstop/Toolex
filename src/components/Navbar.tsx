import { NavigationComponent } from "."
import { MdLocalPhone, MdAccountCircle, MdShoppingCart, MdMenu } from 'react-icons/md';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { logo } from "../assets";
import { useState } from "react";
function Navbar() {
  const [toggleCatetory, setToggleCatetory] = useState<boolean>(false);
  
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
      <div className="px-12 max-tablet:px-16 max-mobile:px-4 max-desktop:px-4 pt-5">
        <div>
          <button className="bg-primary" onClick={() => 
            setToggleCatetory(prev => !prev)}>
            <MdMenu className="text-white" />
            <span className="text-white capitalize">all categories</span>
            <div>
              {toggleCatetory
              ? <TbChevronUp className="text-white" />
              : <TbChevronDown className="text-white" />}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Navbar