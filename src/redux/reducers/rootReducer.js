import messages from './messages';
import roomId from './roomId';
import user from './user';
import rooms from './rooms.js';
import { combineReducers } from 'redux';

export default combineReducers({
    messages, roomId, user, rooms
})