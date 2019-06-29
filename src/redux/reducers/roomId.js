export default function (state = '', action) {
    if (action.type === 'CHANGE_ROOMID') {
        return action.roomId
    }
    return state
}