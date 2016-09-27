'use strict';

export default function ({ dispatch }) {

    return next => action => {

        if (action.payload && action.payload.then) {
            action.payload.then(response => dispatch({ ...action, payload: response.data }))
        }
        else {
            return next(action);
        }

    };
}
