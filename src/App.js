import { useEffect } from "react";
import WidgetDisplay from "./Pages/WidgetDisplay";
import FullReview from "./Components/FullReview";


import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App({ domElement }) {

  useEffect(() => {
    const voxclientsecret = domElement.getAttribute("data-voxclientsecret")
    const voxclient = domElement.getAttribute("data-voxclient")

    localStorage.setItem(
      "voxclientsecret",
      voxclientsecret
    );
    localStorage.setItem(
      "voxclient",
      voxclient
    );
  }, [domElement])


  return (
    <Router>

      <Routes>
        <Route path="/review_modal" element={<FullReview />} />
        <Route path="/" element={<WidgetDisplay />} />

      </Routes>


    </Router>

  );
}

export default App;
