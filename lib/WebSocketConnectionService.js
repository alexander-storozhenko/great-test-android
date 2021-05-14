import {webSocketURL} from "../settings/url";

let socket = new WebSocket(webSocketURL)

export const init = () => {
    socket.onopen = (e) => {
        subscribe('RecommendsChannel', {id: 1}) //TODO id switch to token from backend
    }

    socket.onmessage = (e) => {
        const msg = JSON.parse(e.data)

        if (msg.type === "ping")
            return

        console.log(msg)
    }
}

export const subscribe = (channel, data = null) => {
    send({
        command: 'subscribe',
        identifier: JSON.stringify({
            ...data,
            channel: channel
        }),
    })
}

export const unsubscribe = (channel, data = null) => {
    send({
        command: 'unsubscribe',
        identifier: JSON.stringify({
            ...data,
            channel: channel
        }),
    })
}

export const send = (msg) => {
    socket.send(JSON.stringify(msg))
}


