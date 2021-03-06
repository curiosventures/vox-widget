import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { socket, SocketContext } from './Utilities/socket';

// import reportWebVitals from './reportWebVitals';


const voxWidget = document.getElementById("vox-widget")

const root = ReactDOM.createRoot(voxWidget);

root.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <App domElement={voxWidget} />
    </SocketContext.Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
