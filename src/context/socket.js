import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { createContext, useContext } from "react";

const socketContext = createContext(null)


export const SocketProvider = (props) => {
    const [socketConnection, setSocketConnection] = useState(null);

    useEffect(() => {
        const socket = io("http://localhost:4000", {
            transports: ["websocket"]
        });

        socket.on("connect", () => {
            console.log("Connected to server");
            setSocketConnection(socket);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.disconnect();
        };

    }, []);

    return (
        <socketContext.Provider value={socketConnection}>
            {props.children}
        </socketContext.Provider >
    );
};


export const useSocket = () => {
    return useContext(socketContext);
};