import { Outlet } from "react-router-dom"
import { Footer, LeftSidebar, Navbar, RightSidebar } from "."

function Layout() {
  return (
    <div>
        <div className=" bg-secondary">
          <Navbar />
        </div>
        <div className="flex flex-row justify-between">
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </div>
      <Footer />
    </div>
  )
}
export default Layout