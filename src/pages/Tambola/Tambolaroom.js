import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { socket } from './socketconfig';
import "./TambolaRoom.css";
import {useDispatch} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'

const Room = () => {
  toast.configure();
// all selecrots 
  const user = useSelector(state => state.user);
  const [donenum , setdonenum ] = useState([]);
  const [users, setusers] = useState([]);
  const { roomid, name } = useParams();
  const [CardData, setcard] = useState([]);
  const [randomno, setrandomno] = useState(0);
  const [isgamestart, setgamestart] = useState(false);


  useEffect(() => {
    socket.emit("getusers", roomid);
    setdonenum(arr=> [...arr, 0]);

    socket.on("resgetusers", (obj) => {
      setusers(obj.allusers.data);

    })
   

    socket.emit("tambolaticket", { roomid, name });



    socket.on("resticket", (obj) => {
      if (obj.err == 0) {
        setcard(obj.data);
        toast(obj.message)
        

      }
      else {
        toast(obj.message);
      }
    })

  }, [])


  function handelfirstrow(){
    let flag = true;
   for(let i =0;i< CardData[0].length;i++){
     if(donenum.includes(CardData[0][i])== false ) {
       flag = false;
       break;
     }
    
   }
   if(flag)  {
     socket.emit("tambolamessage",{message:`${user.name} corner claim sussccssfuly`, roomid: user.roomid})
   toast("claim done")
    }else toast("invalid claim")
  
  }

  function handelsecondrow(){
    let flag = true;
    for(let i =0;i< CardData[1].length;i++){
      if(donenum.includes(CardData[1][i])== false ) {
        flag = false;
        break; 
      }
      
    }
    if(flag) {
      socket.emit("tambolamessage",{message:`${user.name} corner claim sussccssfuly`, roomid:user.roomid})
      toast("claim done")

    } 
    else{
      toast("invalid claim")
    }
   }
   function handelthirdrow(){
     let flag = true;
    for(let i =0;i< CardData[2].length;i++){
      if(donenum.includes(CardData[2][i])== false ) {
        flag = false;
        break; 
      }
      
    }
    if(flag){
      socket.emit("tambolamessage",{message:`${user.name} corner claim sussccssfuly`, roomid: user.roomid})
      toast("claim done")

    } 
    else toast("invalid claim")

   }
 







  socket.once("tambolamessage", (obj) => {
    toast(obj.message);
  })
  socket.on("randomnores", (obj) => {
    setrandomno(obj.no);
  })

  function startgame() {
    const draw = user.draw;
    let i = 0;

    setInterval(() => {
      if (i < draw.length) {
        socket.emit("getrandomno", { no: draw[i], roomid: user.roomid });
        setrandomno(draw[i]);
      }
      else if (i == draw.length) {
        toast(" game  is over ")
      }
      i++;

    }, 3000)

  }
  function handelcorners(){
    for(let i =0;i<CardData.length;i++){
      if(donenum.includes(CardData[i][0])== false || donenum.includes(CardData[i][8])== false){
        toast("invalid claim")
        return;
      }
    }
    toast("claim done")
    socket.emit("tambolamessage",{message:`${user.name} corner claim sussccssfuly`, roomid:user.roomid})
  }
  
function handelfullhouse(){
  let flag = true;
  for(let i =0;i< CardData.length;i++){
    for(let j =0 ; j< CardData[i].length;j++){
      if(donenum.includes(CardData[i][j])== false) {
        flag= false;
        break;
      }
    }
  }
  if(flag){
    socket.emit("tambolamessage",{message:`${user.name} corner claim sussccssfuly`, roomid: user.roomid})
    toast("claim done")

  } 
  else toast("invalid claim")
}

  function handelnoclick(e) {
   
    if (parseInt(e.target.innerHTML) === randomno) {
      e.target.style.background = "red";
      e.target.style.color = "green";
      
      // for(let i =0;i< newcard.length;i++){
      //   if(newcard[i].includes(randomno)){
      //     const index = newcard[i].indexOf(randomno);
      //     newcard[i][index] = -1;
          
      //   }
      // }
      setdonenum(oldarr=> [...oldarr,randomno]);
      

    }
    else {
      toast("please select right number")
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto">
            <h1> Random no is {randomno}</h1>
            {user.usertype == "Admin" ? <button className="btn btn-primary" onClick={startgame}>Start the game </button> : <h1></h1>}
            {(user.usertype == "Player") ? (user.randNum === 0 ? <h1>Admin not started game yet</h1> : <h1>Enjoy tambola</h1>) : <h1></h1>}
            {users.map((user) => <div key={user} className='tmuser'>{user}</div>)}

            <h1 className="room-id tmid">Room Id : {roomid}</h1>
            <div >
              <div className="text-warning mx-auto mb-4">
                <div>
                  {CardData.map(function(row, index) {
                    return (
                    
<div key={index} style={{ "width": "10000px", "display": "flex" }}>
                     { row.map((val, index) => val == 0 ? <div key={index} style={{ color: "red", background: "yellow", width: "60px", "height": "60px", "font-size": "30px", border: "2px solid black" }}></div> : <div key={index} onClick={(e) => handelnoclick(e)} style={{ color: "red", background: "yellow", width: "60px", "height": "60px", "font-size": "30px", border: "2px solid black" }}   >{val}</div>)
}</div>)
                  })}
                </div>
              </div>
            </div>
            <ul className='tamolaul'>
              <li><button className="btn btn-primary mt-2 tmbt" onClick={handelcorners}>Corners</button>
              </li>
              <li> <button className="btn btn-primary mt-2 tmbt" onClick={handelfirstrow}>Row First</button>
              </li>
              <li> <button className="btn btn-primary mt-2 tmbt" onClick={handelsecondrow}>Row second</button>
              </li>
              <li> <button className="btn btn-primary mt-2 tmbt" onClick={handelthirdrow}>Row Third</button>
              </li>
              <li> <button className="btn btn-primary mt-2 tmbt" onClick={handelfullhouse}>Full Housie</button></li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}



export default Room;