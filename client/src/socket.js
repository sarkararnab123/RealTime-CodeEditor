import { io } from "socket.io-client";

export const initSocket = async () => {
    const options = {
        transports: ["websocket"],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
    };
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
    return io(backendUrl, options);
};
