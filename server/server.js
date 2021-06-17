const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const tambola = require('tambola-generator');

mongoose.connect("mongodb://localhost:27017/hardcipher", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("database connected successfully");
}).catch(err => {
    if (err) console.log(err);
})

const server = http.createServer(app);
const tambolacontroller = require('./controller/tambolaroomcontroller');
const { ScreenLockLandscapeTwoTone, SportsCricketTwoTone } = require('@material-ui/icons');
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
io.on('connection', (socket) => {
    socket.on('tamboladisconnect', () => {
        console.log("disconned is fired ")
    });
    socket.once("tambolamessage", (messagedata)=>{
        socket.to(messagedata.roomid).emit("tambolamessage",{message:messagedata.message})
        })
    socket.on('getusers', async (roomid) => {
        try {
            const allusers = await tambolacontroller().getusers(roomid);
            socket.emit('resgetusers', {allusers})
        }
        catch (err) {
            if (err) console.log(err);
        }
    })
    socket.on('getrandomno', async(data)=>{
        console.log("the data inside the get ranomno method is ", data);
        socket.to(data.roomid).emit("randomnores" , {no : data.no});
    })
    socket.once('tambolajoinroom', async (userdata) => {
        try {
            const res = await tambolacontroller().joinroom(socket.id, userdata);
            socket.join(res.roomid);
            socket.emit("restambolajoinroom", res);
            const allusers = await tambolacontroller().getusers(userdata.roomid);
            console.log("thise is res of the join ",res)
            socket.to(res.roomid).emit('resgetusers',{ allusers, name: userdata.name});
        }
        catch (err) {
            if (err) console.log(err);
        }
    })


    socket.once('tambolacreateroom', async (name, roomtype, roomamount) => {
        try {
            console.log("create roomis fired ");
            const roomadmin = await tambolacontroller().createroom(socket.id, name, roomtype, roomamount);
            socket.join(roomadmin.roomid);
            socket.emit("restambolacreateroom", roomadmin);
        }
        catch (err) {
            if (err) console.log(err);
        }

    })
    socket.on("tambolaticket", async (userdata) => {
      const userticket = await tambolacontroller().getuserticket(userdata.roomid, userdata.name);
        socket.emit("resticket", userticket)

    })
    socket.on('tambolastartgame', async (roomid) => {
        const draw = tambola.getDrawSequence();
        socket.to(roomid).emit("tambolastartgameres", draw)
    })


    socket.on('tambolaplayonline', () => {
        console.log("play online is fired ");

    });


});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));