import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Brands, ContactInformation, ContactSiteMap, Home, SpecialProducts } from "./pages";
import Blogs from "./pages/Blogs";
function App() {
  return (
      <>
     <Router>
      <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/product/special" element={<SpecialProducts />} />
            <Route index path="/product/brands" element={<Brands />} />
            <Route index path="/information/contact" element={<ContactInformation />} />
            <Route index path="/information/sitemap" element={<ContactSiteMap />} />
            <Route index path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
     </Router>
      </>
  )
}

export default App
