import { PING, PONG } from './constant';

const action = {
    ping: () => ({type: PING}),
    pong: () => ({type: PONG})
}

module.exports = action;