import React from 'react';
import io from 'socket.io-client';


let baseURL = "http://localhost:7000/";
if (process.env.NODE_ENV === "production") {
    // baseURL = "https://vox-express.herokuapp.com/";
    baseURL = "https://express.voxturba.com/"

}

// export const socket = io(baseURL + window.location.host, { reconnect: true });

export const socket = io(baseURL, {
    reconnect: true, query: {
        roomName: document.getElementById('vox-widget').getAttribute('data-voxclient'),
    }
});

// console.log(baseURL + window.location.host)

socket.on('connect', () => console.log(socket.id))


export const SocketContext = React.createContext(socket);

