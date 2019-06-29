import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

let currentUser;


export function addRoom(room) {
    return {
        type: 'ADD_ROOM',
        room
    }
}

export function removeRoom(roomId) {
    return {
        type: 'REMOVE_ROOM',
        roomId
    }

}
export function deleteRoom(roomId) {
    return async function (dispatch) {
        dispatch(removeRoom(roomId))
        dispatch(resetMessage())
        await currentUser.deleteRoom({ roomId }).catch(error => console.log('cannot delete the room', error))
    }
}
export function createRoom(name) {
    return async function (dispatch) {
        const newRoom = await currentUser.createRoom(
            {
                name,
                private: true,
                addUserIds: [currentUser.id],
            }
        )

    }
}
export function changeRoomId(roomId) {
    return {
        type: 'CHANGE_ROOMID',
        roomId
    }
}

export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        message
    }
}
export function resetMessage() {
    return {
        type: 'RESET_MESSAGE',
    }
}
export function fetchMessages(roomId) {
    return async function (dispatch) {
        let messages = await currentUser
            .fetchMessages({
                roomId,
                limit: 5
            })
        dispatch(resetMessage())
        messages.forEach(message => dispatch(addMessage(message)))
    }
}
export function sendMessage(text, roomId) {
    return async function (dispatch) {
        const message = await currentUser.sendMessage({
            text, roomId
        }).catch(error => console.log('error sending message'))
    }

}
export function changeUser(userId) {
    return {
        type: 'CHANGE_USER',
        userId
    }
}

export function fetchUser(userId) {
    return async function (dispatch) {
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:38f6639e-5eea-4727-a2af-f144a0bef9c5",
            userId,
            tokenProvider: new TokenProvider({
                url:
                    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/38f6639e-5eea-4727-a2af-f144a0bef9c5/token"
            })
        });
        currentUser = await chatManager
            .connect({
                onRoomUpdated: room => {
                    updateMessages(room.id, dispatch);
                },
                onAddedToRoom: room => {
                    dispatch(addRoom(room))
                },
                onRoomDeleted: room => {
                    dispatch(removeRoom(room))
                }
            })
            .catch(err => {
                console.log("Error on connection", err);
            });
        console.log("connected and user is:", currentUser);
        dispatch(changeUser(currentUser.id));
        currentUser.rooms.forEach(room => dispatch(addRoom(room)))


    }
}

//functions
const updateMessages = async (roomId, dispatch) => {
    let messages = await currentUser
        .fetchMessages({
            roomId,
            limit: 5
        })
    let lastMessage = messages[messages.length - 1]
    dispatch(addMessage(lastMessage));
} 