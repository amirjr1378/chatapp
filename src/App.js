import React from "react";
//custom components
import RoomsList from "./components/RoomsList";
import Messages from "./components/Messages";
import Send from "./components/Send";
import CreacteRoom from "./components/CreacteRoom";
import DeleteRoom from "./components/DeleteRoom";
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions'

class App extends React.Component {

  async componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <div className="container">
          <RoomsList rooms={[...this.props.rooms]} />
          <Messages messages={this.props.messages} />
        </div>
        <div className="container forms-container">
          <CreacteRoom userId={"amirjr1378"} createRoom={this.createRoom} />
          <Send roomId={this.props.roomId} />
          <DeleteRoom roomId={this.props.roomId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ rooms, user, messages, roomId }) => ({
  rooms, user, messages, roomId
})
const mapDispathcToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser('amirjr1378'))
})
export default connect(mapStateToProps, mapDispathcToProps)(App)