import React from "react";
import { sendMessage } from "../redux/actions"
import { connect } from "react-redux";
const foo = ({ dispatch, roomId }) => {
  let input = ''
  const handleSumbit = e => {
    e.preventDefault();
    dispatch(sendMessage(input.value, roomId))
    input.value = ''
  };

  //render method
  return (
    <form onSubmit={handleSumbit} className="create-input container">
      <input
        type="text"
        placeholder="type your message and hit enter"
        ref={ref => input = ref}
        value={input.value}
      />
    </form>
  );
}

export default connect()(foo)