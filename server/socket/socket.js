const http = require("http");
const express = require("express");
const app = express();
const {Server} = require("socket.io");
require("dotenv").config();

const allowedOrigins = Array.from(
  new Set([
    "http://localhost:5173",
    ...(process.env.CLIENT_URL
      ? process.env.CLIENT_URL.split(",").map((url) => url.trim().replace(/\/+$/, "")).filter(Boolean)
      : []),
  ])
);

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: allowedOrigins,
        methods:["GET","POST"],
        credentials:true,
    }
});


   const allOnlineUsers = {};

   function getReciverSocketId (receiverUserId){
     return allOnlineUsers[receiverUserId];
   }

   io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;

    if(userId !== undefined){
        allOnlineUsers[userId] = socket.id;
    }

    io.emit("send-all-online-users",Object.keys(allOnlineUsers));


    socket.on("disconnect",()=>{
       delete allOnlineUsers[userId];
        io.emit("send-all-online-users",Object.keys(allOnlineUsers));
    })
    
});

module.exports = {app,server,io,getReciverSocketId,allowedOrigins};
