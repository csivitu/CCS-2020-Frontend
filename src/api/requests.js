import api from './api';

const endRoute = async () => {
    const res = await api.post('/quiz/end');
    return res.data;
};

const domainRoute = async () => {
    const res = await api.get('/quiz/domains');
    return res.data;
};

const startRoute = async () => {
    const res = await api.post('/quiz/start');
    return res.data;
};

const respondRoute = async () => {
    const res = await api.post('/quiz/respond');
    return res.data;
};

export default {
    endRoute, domainRoute, startRoute, respondRoute,
};
