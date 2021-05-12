const http = require('http');
const tambolaroommodel = require('../model/Tambolaroom');
const tambolauser = require('../model/Tambolauser');
const io = require('socket.io');
const generator = require('generate-password');
const tambola = require('tambola-generator');
const Tambolaroom = require('../model/Tambolaroom');
const tambolafun = () => {
    return {
        // getusers of the room
        async getusers(roomid) {
            try {
                const roomusers = await tambolauser.find({ roomid: roomid });
                const users = [];
                roomusers.forEach(user => {
                    users.push(user.name);
                })
                return { err: 0, data: users }

            }
            catch (err) {
                if (err) console.log(err);
            }

        },
        // name amount  roomtype
        async createroom(socketid, name, roomtype, roomamount) {
            const roomid = generator.generate({ length: 8, numbers: true });
            const ticket = tambola.getTickets(1);
            const draw = tambola.getDrawSequence();

            const roomadmin = {
                name: name,
                socketid: socketid,
                usertype: "Admin",
                ticket: ticket,
                balanceticket: ticket,
                roomid: roomid,
                useramount: roomamount
            }
            const newroom = {
                roomid: roomid,
                roomtype: roomtype,
                roomamount: roomamount,
                roombalancedraw: draw,
                roomadmin: name
            }
            try {
                const user = await tambolauser.create(roomadmin);
                const room = await tambolaroommodel.create(newroom);
                return { err: 0, message: "Room created successfully", data: user, roomid: roomid };


            } catch (err) {
                if (err) console.log(err);
                return { err: 1, message: "Internal server error " };
            }



        },// name roomid
        async joinroom(socketid, userdata) {
            try {
                console.log("join room is fired ", socketid);
                const roomdata = await tambolaroommodel.find({ roomid: userdata.roomid });
                const roomtype = roomdata[0].roomtype;
                const roomamount = roomdata[0].roomamount;
                const usersinroom = await tambolauser.find({ roomid: userdata.roomid }).count();
                try {
                    if (usersinroom < roomtype) {
                        const ticket = tambola.getTickets(1);
                        const newuser = {
                            name: userdata.name,
                            socketid: socketid,
                            roomid: userdata.roomid,
                            ticket: ticket,
                            usertype: "Player",
                            balanceticket: ticket,
                            useramount: roomamount
                        }
                        const user = await tambolauser.create(newuser);
                        return { err: 1, message: " Room is full ", data: user, roomid: userdata.roomid };
                    }
                    else {

                        s
                        return { err: 0, message: "Room jpined successfully" }
                    }
                } catch (err) {
                    if (err) console.log(err);

                }

            } catch (err) {
                if (err) console.log(err);
                return { err: 1, message: "Internal server error" }
            }
        }
    }
}
module.exports = tambolafun;