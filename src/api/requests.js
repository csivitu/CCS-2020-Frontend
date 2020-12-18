import api from './api';

const endQuiz = async (domain) => {
    const res = await api.post('/end', { domain });
    return res.data;
};

const requestDomainStatus = async () => {
    const res = await api.get('/domains');
    return res.data;
};

const startRoute = async () => {
    const res = await api.post('/start');
    return res.data;
};

const sendResponses = async ({ responses, domain }) => {
    const res = await api.post('/respond', { responses, domain });
    return res.data;
};

const startQuiz = async ({ domain }) => {
    const res = await api.post('/start', { domain: domain.toLowerCase() });
    if (!res.data.domain) {
        res.data.domain = domain;
    }
    return res.data;
};

export {
    endQuiz, requestDomainStatus, startRoute, sendResponses, startQuiz,
};
