import { pool } from "../db.js";

export const addMantenimiento = async (req, res) => {
    const { idEquipo, idTecnico, descripcion, fechaIngreso, fechaSalida, total } = req.body;

    try {
        const [data] = await pool.query(
            'INSERT INTO MANTENIMIENTO (ID_EQUIPO, ID_TECNICO, DESCRIPCION, FECHA_INGRESO, FECHA_SALIDA, TOTAL) VALUES (?,?,?,?,?,?)',
            [idEquipo, idTecnico, descripcion, fechaIngreso, fechaSalida, total]
        );

        console.log(data);

        res.send({
            id: data.insertId,
            idEquipo,
            idTecnico,
            descripcion,
            fechaIngreso,
            fechaSalida,
            total
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al insertar el mantenimiento');
    }
};

export const getMantenimientos = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT ID_MANTENIMIENTO, ID_EQUIPO, ID_TECNICO, DESCRIPCION, FECHA_INGRESO, FECHA_SALIDA, TOTAL FROM MANTENIMIENTO'
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los mantenimientos');
    }
};

export const getMantenimiento = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT ID_MANTENIMIENTO, ID_EQUIPO, ID_TECNICO, DESCRIPCION, FECHA_INGRESO, FECHA_SALIDA, TOTAL FROM MANTENIMIENTO WHERE ID_MANTENIMIENTO = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Mantenimiento no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el mantenimiento');
    }
};

export const updateMantenimiento = async (req, res) => {
    const { id } = req.params; // de la URL
    const { idEquipo, idTecnico, descripcion, fechaIngreso, fechaSalida, total } = req.body; // datos enviados

    try {
        const [result] = await pool.query(
            `UPDATE MANTENIMIENTO 
         SET ID_EQUIPO = IFNULL(?, ID_EQUIPO),
             ID_TECNICO = IFNULL(?, ID_TECNICO),
             DESCRIPCION = IFNULL(?, DESCRIPCION),
             FECHA_INGRESO = IFNULL(?, FECHA_INGRESO),
             FECHA_SALIDA = IFNULL(?, FECHA_SALIDA),
             TOTAL = IFNULL(?, TOTAL)
         WHERE ID_MANTENIMIENTO = ?`,
            [idEquipo, idTecnico, descripcion, fechaIngreso, fechaSalida, total, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Mantenimiento no encontrado'
            });
        }

        const [rows] = await pool.query(
            'SELECT ID_MANTENIMIENTO, ID_EQUIPO, ID_TECNICO, DESCRIPCION, FECHA_INGRESO, FECHA_SALIDA, TOTAL FROM MANTENIMIENTO WHERE ID_MANTENIMIENTO = ?',
            [id]
        );

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el mantenimiento');
    }
};

export const deleteMantenimiento = async (req, res) => {
    try {
        const [data] = await pool.query('DELETE FROM MANTENIMIENTO WHERE ID_MANTENIMIENTO = ?', [req.params.id]);

        if (data.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Mantenimiento no encontrado'
            });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el mantenimiento');
    }
};
