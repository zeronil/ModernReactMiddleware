import { FETCH_USERS } from './types';

export function fetchUsers () {

    return {
        type: FETCH_USERS,
        payload: [
            { name: 'Jane Doe' },
            { name: 'Jacob Bannon' },
            { name: 'Kurt Ballou' }
        ]
    }
}