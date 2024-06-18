import express from 'express';
import { poolPromise, sql } from '../config/SQLServer.js';

const app = express();
app.use(express.json());
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise;

        // Comprobar si los campos necesarios existen
        if (!req.body.customerName || !req.body.invoiceDate || !req.body.productCount || !req.body.customerAddress || !req.body.total) {
            return res.status(400).send('La solicitud no contiene todos los campos necesarios');
        }

        // Crear la tabla si no existe
        await pool.request()
            .query(`IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Billings' AND type = 'U')
                    CREATE TABLE TPO_BD2_GRUPO6.dbo.Billings (
                        customerName NVARCHAR(255),
                        invoiceDate DATETIME,
                        productCount INT,
                        customerAddress NVARCHAR(255),
                        total MONEY,
                    )`);

        // Insertar los datos
        const result = await pool.request()
            .input('customerName', sql.NVarChar, req.body.customerName)
            .input('invoiceDate', sql.DateTime, new Date(req.body.invoiceDate))
            .input('productCount', sql.Int, req.body.productCount)
            .input('customerAddress', sql.NVarChar, req.body.customerAddress)
            .input('total', sql.Money, req.body.total)
            .query('INSERT INTO TPO_BD2_GRUPO6.dbo.Billings (customerName, invoiceDate, productCount, customerAddress, total) VALUES (@customerName, @invoiceDate, @productCount, @customerAddress, @total)');

        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

export default router;