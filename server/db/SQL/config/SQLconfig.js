import sql from 'mssql/msnodesqlv8';

const config = {
    driver: 'msnodesqlv8',
    server: 'localhost', 
    database: 'gifsdb',
    options: {
        trustedConnection: true,
        useUTC: true
    }
};

const poolPromise = 
    new sql.ConnectionPool(config)
        .connect()
        .then(pool => {
            console.log('Connected to DB');
            return pool;
        })
        .catch(err => console.error(err));

export default poolPromise;