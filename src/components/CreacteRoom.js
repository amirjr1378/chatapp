import React from "react";
import { createRoom } from "../redux/actions"
import { connect } from "react-redux";
const foo = ({ dispatch }) => {
  let input = ''
  const handleSumbit = e => {
    e.preventDefault();
    dispatch(createRoom(input.value))
    input.value = ''

  };

  //render method
  return (
    <form onSubmit={handleSumbit} className="create-input container">
      <input
        type="text"
        placeholder="type name to create room"
        ref={ref => input = ref}
        value={input.value}
      />
    </form>
  );
}

export default connect()(foo)