import React from "react";
import { connect } from "react-redux"
import { fetchMessages, changeRoomId } from "../redux/actions"
const RoomList = ({ rooms, dispatch }) => (
  <div className="room-list">
    <h1>Rooms👇</h1>
    <ul>
      {rooms.map(room => (
        <li key={room.id}>
          <a
            href={`/`}
            onClick={e => {
              e.preventDefault();
              dispatch(fetchMessages(room.id))
              dispatch(changeRoomId(room.id))
            }}
          >
            <span role="img">👉</span>
            {room.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default connect()(RoomList)