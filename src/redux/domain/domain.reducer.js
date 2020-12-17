import DomainActionTypes from './domain.types';

const INITIAL_STATE = {
    currentUser: null,
};

const domainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case DomainActionTypes.SET_USER_PROGESS:
        return {
            currentUser: action.payload,
        };
    default:
        return state;
    }
};

export default domainReducer;
