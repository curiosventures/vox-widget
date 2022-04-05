import { useEffect } from "react";
import WidgetDisplay from "./Pages/WidgetDisplay";


function App({ domElement }) {

  useEffect(() => {
    const voxclientsecret = domElement.getAttribute("data-clientsecret")
    const client = domElement.getAttribute("data-client")

    localStorage.setItem(
      "voxclientsecret",
      voxclientsecret
    );
    localStorage.setItem(
      "client",
      client
    );
  }, [])


  return (
    <WidgetDisplay />
  );
}

export default App;
