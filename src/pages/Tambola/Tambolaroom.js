import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {  socket } from './socketconfig';
import "./TambolaRoom.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Room = () => {
  toast.configure();
    const value = "Generated Number";
    const [randNum , setRandNum] = useState(value);
    const [users , setusers] = useState([]);
    const {roomid, name}  = useParams();
    const [CardData, setcard ] = useState([]);
    const [randomno, setrandomno] = useState(0);
    
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
      console.log(obj);
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

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto">
              { users.map((user)=> <div key={user}>{user}</div> )}
              {/* <h1>{users}</h1> */}
              <h1 className="room-id">Room Id : {roomid}</h1>
              <div className="gernerate-number-btn" onClick={clickEvent}>Gernerate Number</div>
              <div className="gernerated-number">{randNum}</div>
              <div >
                <Table body={CardData} bgcolor={randNum}/>
              </div>
              <ul>
                <li>Jaldi 5</li>
                <li>Corners</li>
                <li>Row First</li>
                <li>Row Second</li>
                <li>Row Third</li>
                <li>Full Housie</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
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
      <tr>
          {props.row.map((val,index) => <td className={props.bgColor==val?"SelectedCell":""}>{val}</td>)}
      </tr>
    );
}

export default Room;