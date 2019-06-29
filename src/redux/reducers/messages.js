export default function (state = [], action) {
    if (action.type === 'ADD_MESSAGE') {
        return [
            ...state,
            action.message
        ]
    } else if (action.type === 'RESET_MESSAGE')
        return []

    return state
}