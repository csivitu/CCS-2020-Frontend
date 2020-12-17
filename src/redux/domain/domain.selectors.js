import { createSelector } from 'reselect';

const selectDomainProgress = () => {
    this.state = {
        tech: 'notAttempted',
        design: 'notAttempted',
        management: 'notAttempted',
        video: 'notAttempted',
    };
};

const domainUserProgress = createSelector(
    [selectDomainProgress],
    (domainState) => domainState.currentUser,
);

export default domainUserProgress;
