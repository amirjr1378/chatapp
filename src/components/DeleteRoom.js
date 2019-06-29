import React from "react";
import { deleteRoom } from "../redux/actions"
import { connect } from "react-redux";
const foo = ({ dispatch, roomId }) => {
  const handleSumbit = e => {
    e.preventDefault();
    dispatch(deleteRoom(roomId))
  };

  //render method
  return (
    <form onSubmit={handleSumbit} className="create-input container">
      <button type='submit'>delete current room</button>
    </form>
  );
}

export default connect()(foo)