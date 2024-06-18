import sql from 'mssql';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const config = {
    user: 'sa',
    password: 'admin',
    server: 'PILIDELL', // You can use a different server
    database: 'TPO_BD2_GRUPO6',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        encrypt: false // disable SSL
    },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

export { sql, poolPromise };
