import { pool } from "../db.js";

export const addTecnico = async (req, res) => {
    const { nombre, apellidoPaterno, apellidoMaterno, telefono } = req.body;

    try {
        const [data] = await pool.query(
            'INSERT INTO TECNICO (NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO) VALUES (?,?,?,?)',
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
        res.status(500).send('Error al insertar el técnico');
    }
};

export const getTecnicos = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT ID_TECNICO, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO FROM TECNICO'
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los técnicos');
    }
};

export const getTecnico = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT ID_TECNICO, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO FROM TECNICO WHERE ID_TECNICO = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Técnico no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el técnico');
    }
};

export const updateTecnico = async (req, res) => {
    const { id } = req.params; // de la URL
    const { nombre, apellidoPaterno, apellidoMaterno, telefono } = req.body; // datos enviados

    try {
        const [result] = await pool.query(
            `UPDATE TECNICO 
         SET NOMBRE = IFNULL(?, NOMBRE),
             APELLIDO_PATERNO = IFNULL(?, APELLIDO_PATERNO),
             APELLIDO_MATERNO = IFNULL(?, APELLIDO_MATERNO),
             TELEFONO = IFNULL(?, TELEFONO)
         WHERE ID_TECNICO = ?`,
            [nombre, apellidoPaterno, apellidoMaterno, telefono, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Técnico no encontrado'
            });
        }

        const [rows] = await pool.query(
            'SELECT ID_TECNICO, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO FROM TECNICO WHERE ID_TECNICO = ?',
            [id]
        );

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el técnico');
    }
};

export const deleteTecnico = async (req, res) => {
    try {
        const [data] = await pool.query('DELETE FROM TECNICO WHERE ID_TECNICO = ?', [req.params.id]);

        if (data.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Técnico no encontrado'
            });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el técnico');
    }
};
