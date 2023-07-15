import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home } from "./pages";
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
