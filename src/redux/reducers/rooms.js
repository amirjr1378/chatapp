export default function (state = [], action) {
    if (action.type === 'ADD_ROOM') {
        return [
            ...state,
            action.room
        ]
    } else if (action.type === 'REMOVE_ROOM') {
        return state.filter(room => room.id !== action.roomId)
    }
    return state
}