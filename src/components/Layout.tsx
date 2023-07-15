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
        <div className="flex flex-row justify-between">
          <LeftSidebar toggleCategory={toggleCategory} />
          <Outlet />
          <RightSidebar />
        </div>
      <Footer />
    </div>
  )
}
export default Layout