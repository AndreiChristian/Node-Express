import { Server } from "socket.io";

let io: any;

export const socket = {
  init: (httpServer: any) => {
    io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
      },
    });
    return io;
  },

  getIo: () => {
    if (!io) {
      throw new Error("socket not inittalized");
    }
    return io;
  },
};
