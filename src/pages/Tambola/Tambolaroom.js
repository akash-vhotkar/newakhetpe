// import React, {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom'
// import { SocketContext, socket } from './socketconfig';
// import "./TambolaRoom.css";

// const Room = () => {
//     const [selectedValues , nextSelectedValue] = useState([]);
//     const [users , setusers] = useState([]);
//     const {roomid}  = useParams();
//     socket.on("getusers",(obj)=>{
//         setusers(obj.data);
//     })
//     useEffect(() => {
//         socket.emit("getusers", roomid);
//     }, [socket, roomid])

//     return (
//         <div className="Room">
//             <h1>{users}</h1>
//             <h1>{roomid}</h1>
//         </div>
//     );
// }

// export default Room;


import React, { Component, useEffect } from 'react';
import { useParams } from 'react-router';
import { socket } from './socketconfig';
import "./TambolaRoom.css";

class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextSelectedValue: null,
      selectedValues: [true].concat([...Array(90).keys()].map(index => false))
    };

    this.onClick = this.onClick.bind(this);
  
    // setInterval(this.onClick,3000);
    
  }
  
  render() {
    return (
      <div className="App">
        <center>
          <button className="GenerateButton mt-4" onClick={this.onClick}>
            Generate Number
          </button>
          <LastValue value={this.state.nextSelectedValue} />
          <table>
            <tbody>
              <Grid selectedValues={this.state.selectedValues} />
            </tbody>
          </table>
            <ol className="mt-4">
                <li className="btn-game"> Jaldi 5</li>
                <li className="btn-game"> Corners</li>
                <li className="btn-game"> First Row</li>
                <li className="btn-game"> Second Row</li>
                <li className="btn-game"> Third Row</li>
                <li className="btn-game"> Full Housie</li>
            </ol>
        </center>
      </div>
    );
  }

  onClick() {
    const oldSelectedValues = this.state.selectedValues;
    const nextSelectedValue = this.getNextSelectedValue(oldSelectedValues);
    const newSelectedValues = oldSelectedValues.map((item, index) => {
      if (index === nextSelectedValue) {
        return true;
      }
      return item;
    });

    this.setState({
      nextSelectedValue,
      selectedValues: newSelectedValues
    });
  }

  getNextSelectedValue(selectedValues) {
    const candidates = selectedValues
      .map((selected, index) => (!selected ? index : null))
      .filter(value => value !== null);

    return candidates[Math.floor(Math.random() * candidates.length)];
  }
}

const Grid = (props) =>
  [...Array(3).keys()].map(rowIndex => (
    <tr key={rowIndex}>
      {[...Array(10).keys()].map(columnIndex => {
        let currentIndex = rowIndex * 10 + columnIndex + 1;
        return (
          <td key={columnIndex}>
            <Cell
              key={currentIndex}
              selected={props.selectedValues[currentIndex]}
              value={currentIndex}
            />
          </td>
        );
      })}
    </tr>
  ));

const Cell = (props) => (
    <div className={props.selected ? 'SelectedCell' : 'UnselectedCell'}>
      {props.value}
    </div>
);

const LastValue = (props) => (
    <p className="NextSelectedValue" onClick={props.onClick}>
      {props.value ? props.value : 'Random Number'}
    </p>
  );

export default Room;