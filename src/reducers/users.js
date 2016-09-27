'use strict';

import { FETCH_USERS } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {

        case FETCH_USERS:
            return [...state, ...action.payload];
            break;

        default:
            return state;
    }
}
