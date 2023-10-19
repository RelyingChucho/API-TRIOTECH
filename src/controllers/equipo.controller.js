import { pool } from "../db.js";

export const addEquipo = async (req, res) => {
    const { idCliente, procesador, grafica, discoDuro, memoriaRam, reparado } = req.body;

    try {
        const [data] = await pool.query(
            'INSERT INTO EQUIPO (ID_CLIENTE, PROCESADOR, GRAFICA, DISCO_DURO, MEMORIA_RAM, REPARADO) VALUES (?,?,?,?,?,?)',
            [idCliente, procesador, grafica, discoDuro, memoriaRam, reparado]
        );

        console.log(data);

        res.send({
            id: data.insertId,
            idCliente,
            procesador,
            grafica,
            discoDuro,
            memoriaRam,
            reparado
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al insertar el equipo');
    }
};

export const getEquipos = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT ID_EQUIPO, ID_CLIENTE, PROCESADOR, GRAFICA, DISCO_DURO, MEMORIA_RAM, REPARADO FROM EQUIPO'
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los equipos');
    }
};

export const getEquipo = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT ID_EQUIPO, ID_CLIENTE, PROCESADOR, GRAFICA, DISCO_DURO, MEMORIA_RAM, REPARADO FROM EQUIPO WHERE ID_EQUIPO = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Equipo no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el equipo');
    }
};

export const updateEquipo = async (req, res) => {
    const { id } = req.params; // de la URL
    const { idCliente, procesador, grafica, discoDuro, memoriaRam, reparado } = req.body; // datos enviados

    try {
        const [result] = await pool.query(
            `UPDATE EQUIPO 
         SET ID_CLIENTE = IFNULL(?, ID_CLIENTE),
             PROCESADOR = IFNULL(?, PROCESADOR),
             GRAFICA = IFNULL(?, GRAFICA),
             DISCO_DURO = IFNULL(?, DISCO_DURO),
             MEMORIA_RAM = IFNULL(?, MEMORIA_RAM),
             REPARADO = IFNULL(?, REPARADO)
         WHERE ID_EQUIPO = ?`,
            [idCliente, procesador, grafica, discoDuro, memoriaRam, reparado, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Equipo no encontrado'
            });
        }

        const [rows] = await pool.query(
            'SELECT ID_EQUIPO, ID_CLIENTE, PROCESADOR, GRAFICA, DISCO_DURO, MEMORIA_RAM, REPARADO FROM EQUIPO WHERE ID_EQUIPO = ?',
            [id]
        );

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el equipo');
    }
};

export const deleteEquipo = async (req, res) => {
    try {
        const [data] = await pool.query('DELETE FROM EQUIPO WHERE ID_EQUIPO = ?', [req.params.id]);

        if (data.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Equipo no encontrado'
            });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el equipo');
    }
};
