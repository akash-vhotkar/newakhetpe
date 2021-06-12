import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {  socket } from './socketconfig';
import "./TambolaRoom.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux'

const Room = () => {
  toast.configure();

  // all selecrots 
  const user = useSelector(state=> state.user);
  console.log("user inside the room data ",user);
    const value = "Generated Number";
    const [randNum , setRandNum] = useState(value);
    const [users , setusers] = useState([]);
    const {roomid, name}  = useParams();
    const [CardData, setcard ] = useState([]);
    const [randomno, setrandomno] = useState(0);
    const [isgamestart , setgamestart ] = useState(false);
    const div_class = isgamestart ? "changebackgr":"";
  useEffect(()=>{
    socket.emit("getusers",roomid);
   
    socket.on("resgetusers",(obj)=>{
      setusers(obj.allusers.data);
    
  })


  socket.emit("tambolaticket", {roomid, name});
  
  socket.on("randomno",(obj)=>{
    if(obj.err==0){
      toast(obj.message);

    }
    else{
      toast("Internal server error")
    }
  })

  
  socket.on("resticket", (obj)=>{
    if(obj.err==0){
      
      setcard(obj.data);
      toast(obj.message)

    }
    else{
      toast(obj.message);
    }
  })
  
  },[])


   
    let i = 0;
    const clickEvent = () => {
      setRandNum(RandNum[i++]);
    }

   
    const RandNum =[72,65,47,89,42,4,61,84,36,22,37,18,9,27,
      12,71,46,15,30,55,17,3,56,25,68,80,43,26,
      50,39,53,38,60,31,28,11,8,62,49,79,51,35,
      14,67,45,41,40,5,44,34,73,32,86,69,70,48,
      21,33,83,13,54,77,78,90,29,6,52,59,58,66,
      76,1,10,24,19,64,85,7,74,2,16,63,88,23,57
      ,87,81,82,20,75
    ];
    socket.once("tambolamessage", (obj)=>{
      toast(obj.message);
    })

    function startgame(){
      const messagedata = {roomid: user.roomid, message:"Admin started game"}
      socket.emit("tambolamessage",messagedata);

      // socket.emit("tambolastartgame", user.roomid);
      // console.log("the tambola uset havinf the draw is ", user.draw);
      // socket.on("tambolastartgameres",(draw)=>{
      //   console.log("the game started called and draw is ", draw);
      //   toast("the game is started")
      // })
      
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto">
              
              {user.usertype== "Admin" ? <button className="btn btn-primary" onClick={ startgame}>Start the game </button> : <h1>Admin not started game yet</h1> }
              { users.map((user)=> <div key={user}>{user}</div> )}
              {/* <h1>{users}</h1> */}
              <h1 className="room-id">Room Id : {roomid}</h1>
              <div className="gernerate-number-btn" onClick={clickEvent}>Gernerate Number</div>
              <div className="gernerated-number">{randNum}</div>
              <div >
                <Table body={CardData} bgcolor={randNum}/>
              </div>
              <ul>
                <li><button className="btn btn-primary mt-2">Jaldi 5</button>
                </li>
                <li><button className="btn btn-primary mt-2">Corners</button>
                </li>
                <li> <button className="btn btn-primary mt-2">Row First</button>
               </li>
                <li> <button className="btn btn-primary mt-2">Row second</button>
               </li>
                <li> <button className="btn btn-primary mt-2">Row Third</button>
               </li>
               <li> <button className="btn btn-primary mt-2">Full Housie</button></li>
                
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
function handelclickno(e){

}

const Table = (props) => {
  return (
    <table className="text-warning mx-auto mb-4">
        <tbody>
            {props.body.map((row,index) => <TableRow key={index} row={row}  bgColor={props.bgcolor} />)}
        </tbody>
    </table>
);
}

const TableRow = (props) => {
    return (
      <tr style={{"width":"10000px"}}>
          {props.row.map((val,index) => <td key={index} style={{ color:"green", background:"yellow" ,"width":"100px", "height":"100px","font-size":"30px", border:"2px solid black"}} onClick={handelclickno(this)}  className={props.bgColor==val?"SelectedCell div_class":" div_class"}>{val}</td>)}
      </tr>
    );
}

export default Room;