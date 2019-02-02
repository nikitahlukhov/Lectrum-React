//Core
import io from 'socket.io-client';

export const socket = io('http://lab.lectrum.io', {
    path: '/react/ws',
});