import {webSocketDomain} from "../settings/url";

let socket = new WebSocket("ws://192.168.0.10:3000/cable")

export const init = () => {
    socket.onopen = (e) => {
        subscribe('TestChannel', {id: 1})
    }

    socket.onmessage = (e) => {
        const msg = JSON.parse(e.data)
        console.log(msg)
        if (msg.type === "ping")
            return
    }
}

export const subscribe = (channel, data = null) => {
    send( {
        command: 'subscribe',
        identifier: JSON.stringify({
            ...data,
            channel: 'TestChannel'
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


