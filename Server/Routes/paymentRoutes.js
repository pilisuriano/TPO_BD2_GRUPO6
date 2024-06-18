import express from 'express';
import { poolPromise, sql } from '../config/SQLServer.js';


const app = express();
app.use(express.json());
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise;

        // Crear la tabla si no existe
        await pool.request()
            .query(`
                IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Payments')
                CREATE TABLE TPO_BD2_GRUPO6.dbo.Payments (
                    id INT,
                    status NVARCHAR(50),
                    update_time DATETIME,
                    email_address NVARCHAR(50)
        )
            `);

        // Comprobar si payer y email_address existen
        if (!req.body.payer || !req.body.payer.email_address) {
            return res.status(400).send('La solicitud no contiene un objeto payer con una propiedad email_address o total_paid');
        }

        // Insertar los datos
        const result = await pool.request()
            .input('id', sql.Int, req.body.id)
            .input('status', sql.NVarChar, req.body.status)
            .input('update_time', sql.DateTime, new Date(req.body.update_time))
            .input('email_address', sql.NVarChar, req.body.payer.email_address) // Asegúrate de que el tipo de datos sea correcto
            .query('INSERT INTO TPO_BD2_GRUPO6.dbo.Payments (id, status, update_time, email_address) VALUES (@id, @status, @update_time, @email_address)');

        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
export default router;