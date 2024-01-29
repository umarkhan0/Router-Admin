import socketIO from "socket.io-client";
import { getToken } from "./Utils/helpers";
const token = getToken();
const socket = socketIO.connect("http://localhost:3000", {
  autoConnect: false,
});
// Add event listeners to the socket
socket.on("connect", () => {
  console.log("Socket connected");
});
socket.on("disconnect", () => {
  console.log("Socket disconnected");
});
// Export the socket instance for reuse
export default socket;
