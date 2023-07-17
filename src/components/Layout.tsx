import { Outlet } from "react-router-dom"
import { Footer, LeftSidebar, Navbar, RightSidebar } from "."
import { useState } from "react";

function Layout() {
  const [toggleCategory, setToggleCategory] = useState<boolean>(true);
  return (
    <div>
        <div className=" bg-secondary">
          <Navbar  toggleCategory={toggleCategory} setToggleCategory={setToggleCategory} />
        </div>
        <div className="flex flex-row justify-between max-tablet:flex-col">
          <div className="max-desktop:order-2">
            <LeftSidebar toggleCategory={toggleCategory} />
          </div>
          <Outlet />
          <div className="max-desktop:order-3">
            <RightSidebar />
          </div>
        </div>
      <Footer />
    </div>
  )
}
export default Layout