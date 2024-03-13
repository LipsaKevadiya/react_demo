import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import PageNotFound from "./PageNotFound";

function Routing() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
