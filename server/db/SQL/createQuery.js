import poolPromise from './config/SQLconfig';

const createQuery = async query => {
    const pool = await poolPromise;
    const request = pool.request();
    return request.query(query);
}

export default createQuery;