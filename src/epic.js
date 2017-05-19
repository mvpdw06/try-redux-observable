import { PING, PONG } from './constant';
import Rxjs from 'rxjs';

const epic = (action$) =>
    action$.ofType(PING)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: PONG });

module.exports = epic;