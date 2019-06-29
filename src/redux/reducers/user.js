export default function (state = 'amirjr1378', action) {
    if (action.type === 'CHANGE_USER') {
        return action.userId
    }
    return state
}