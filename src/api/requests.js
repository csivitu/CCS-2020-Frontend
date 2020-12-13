import api from './api';

const endRoute = async () => {
    const res = await api.post('/end');
    return res.data;
};

const domainRoute = async () => {
    const res = await api.get('/domains');
    return res.data;
};

const startRoute = async () => {
    const res = await api.post('/start');
    return res.data;
};

const respondRoute = async () => {
    const res = await api.post('/respond');
    return res.data;
};

export default {
    endRoute, domainRoute, startRoute, respondRoute,
};
