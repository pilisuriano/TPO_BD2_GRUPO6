import express from 'express';
import { poolPromise, sql } from '../config/SQLServer.js';

const app = express();
app.use(express.json());
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise;

        // Comprobar si los campos necesarios existen
        if (!req.body.address || !req.body.name || !req.body.postalCode || !req.body.city || !req.body.country || !req.body.email) {
            return res.status(400).send('La solicitud no contiene todos los campos necesarios');
        }

        // Crear la tabla si no existe
        await pool.request()
            .query(`IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Customers' AND type = 'U')
                    CREATE TABLE TPO_BD2_GRUPO6.dbo.Customers (
                        address NVARCHAR(255),
                        name NVARCHAR(255),
                        postalCode NVARCHAR(255),
                        city NVARCHAR(255),
                        country NVARCHAR(255),
                        email NVARCHAR(255)
                    )`);

        // Insertar los datos
        const result = await pool.request()
            .input('address', sql.NVarChar, req.body.address)
            .input('name', sql.NVarChar, req.body.name)
            .input('postalCode', sql.NVarChar, req.body.postalCode)
            .input('city', sql.NVarChar, req.body.city)
            .input('country', sql.NVarChar, req.body.country)
            .input('email', sql.NVarChar, req.body.email)
            .query('INSERT INTO TPO_BD2_GRUPO6.dbo.Customers (address, name, postalCode, city, country, email) VALUES (@address, @name, @postalCode, @city, @country, @email)');

        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

export default router;