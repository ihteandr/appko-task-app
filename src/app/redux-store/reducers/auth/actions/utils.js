import {
    CHANGE_ENTER_POINT,
} from '../constants';

export function changeEnterPoint(point) {
    return (dispatch) => (
        dispatch({
            type: CHANGE_ENTER_POINT,
            payload: point,
        })
    )
}