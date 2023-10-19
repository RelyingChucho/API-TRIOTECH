import { pool } from "../db.js";

export const addClient = async (req, res) => {
    const { nombre, apellidoPaterno, apellidoMaterno, telefono } = req.body;

    try {
        const [data] = await pool.query(
            'INSERT INTO CLIENTE (NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO) VALUES (?,?,?,?)',
            [nombre, apellidoPaterno, apellidoMaterno, telefono]
        );

        console.log(data);

        res.send({
            id: data.insertId,
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            telefono
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al insertar el cliente');
    }
};

export const getClients = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM CLIENTE'
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los clientes');
    }
};

export const getClient = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM CLIENTE WHERE ID_CLIENTE = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el cliente');
    }
};

export const deleteClient = async (req, res) => {
    try {
        const [data] = await pool.query('DELETE FROM CLIENTE WHERE ID_CLIENTE = ?', [req.params.id]);

        if (data.affectedRows <= 0) {
            return res.status(404).json({
                message: "Cliente no encontrado"
            });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el cliente');
    }
};

export const updateClient = async (req, res) => {
    const { id } = req.params; // de la URL
    const { nombre, apellidoPaterno, apellidoMaterno, telefono } = req.body; // datos enviados

    try {
        const [result] = await pool.query(
            `UPDATE CLIENTE 
         SET NOMBRE = IFNULL(?, NOMBRE),
             APELLIDO_PATERNO = IFNULL(?, APELLIDO_PATERNO),
             APELLIDO_MATERNO = IFNULL(?, APELLIDO_MATERNO),
             TELEFONO = IFNULL(?, TELEFONO)
         WHERE ID_CLIENTE = ?`,
            [nombre, apellidoPaterno, apellidoMaterno, telefono, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Cliente no encontrado"
            });
        }

        const [rows] = await pool.query(
            'SELECT ID_CLIENTE, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO FROM CLIENTE WHERE ID_CLIENTE = ?',
            [id]
        );

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el cliente');
    }
};
