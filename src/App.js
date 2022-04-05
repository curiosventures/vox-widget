import { useEffect } from "react";
import WidgetDisplay from "./Pages/WidgetDisplay";


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
  }, [])


  return (
    <WidgetDisplay />
  );
}

export default App;
