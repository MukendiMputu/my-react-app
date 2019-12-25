import {
    INFO_FETCHED,
    NEW_INFO
} from '../actions/actions_info'

const info = (state = [], action) => {
    switch (action.type) {
        case INFO_FETCHED:
            return action.payload;
        case NEW_INFO:
            ;
        default:
            return state
    }
}

export default info