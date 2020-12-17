import DomainActionTypes from './domain.types';

const setDomainProgress = (user) => ({
    type: DomainActionTypes.SET_USER_PROGESS,
    payload: user,
});

export default setDomainProgress;
