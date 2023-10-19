//Registra 10 MANTENIMIENTOS

-- Registrar 10 mantenimientos en la tabla MANTENIMIENTO
INSERT INTO MANTENIMIENTO (ID_EQUIPO, ID_TECNICO, DESCRIPCION, FECHA_INGRESO, FECHA_SALIDA, TOTAL)
VALUES
    (1, 1, 'Reparación de pantalla', '2023-10-10', '2023-10-12', 200.00),
    (2, 2, 'Actualización de software', '2023-10-11', '2023-10-13', 150.50),
    (3, 3, 'Cambio de batería', '2023-10-12', '2023-10-14', 100.00),
    (4, 4, 'Limpieza interna', '2023-10-13', '2023-10-15', 80.00),
    (5, 5, 'Reparación de teclado', '2023-10-14', '2023-10-16', 120.25),
    (6, 6, 'Diagnóstico de hardware', '2023-10-15', '2023-10-17', 60.75),
    (7, 7, 'Actualización de controladores', '2023-10-16', '2023-10-18', 90.50),
    (8, 8, 'Reparación de disco duro', '2023-10-17', '2023-10-19', 180.00),
    (9, 9, 'Limpieza de ventiladores', '2023-10-18', '2023-10-20', 70.25),
    (10, 10, 'Reemplazo de memoria RAM', '2023-10-19', '2023-10-21', 110.75);

//Para registrar desde TunderClient

[
    {
        "idEquipo": 1,
        "idTecnico": 1,
        "descripcion": "Reparación de pantalla",
        "fechaIngreso": "2023-10-10",
        "fechaSalida": "2023-10-12",
        "total": 200.00
    },
    {
        "idEquipo": 2,
        "idTecnico": 2,
        "descripcion": "Actualización de software",
        "fechaIngreso": "2023-10-11",
        "fechaSalida": "2023-10-13",
        "total": 150.50
    },
    {
        "idEquipo": 3,
        "idTecnico": 3,
        "descripcion": "Cambio de batería",
        "fechaIngreso": "2023-10-12",
        "fechaSalida": "2023-10-14",
        "total": 100.00
    },
    {
        "idEquipo": 4,
        "idTecnico": 4,
        "descripcion": "Limpieza interna",
        "fechaIngreso": "2023-10-13",
        "fechaSalida": "2023-10-15",
        "total": 80.00
    },
    {
        "idEquipo": 5,
        "idTecnico": 5,
        "descripcion": "Reparación de teclado",
        "fechaIngreso": "2023-10-14",
        "fechaSalida": "2023-10-16",
        "total": 120.25
    },
    {
        "idEquipo": 6,
        "idTecnico": 6,
        "descripcion": "Diagnóstico de hardware",
        "fechaIngreso": "2023-10-15",
        "fechaSalida": "2023-10-17",
        "total": 60.75
    },
    {
        "idEquipo": 7,
        "idTecnico": 7,
        "descripcion": "Actualización de controladores",
        "fechaIngreso": "2023-10-16",
        "fechaSalida": "2023-10-18",
        "total": 90.50
    },
    {
        "idEquipo": 8,
        "idTecnico": 8,
        "descripcion": "Reparación de disco duro",
        "fechaIngreso": "2023-10-17",
        "fechaSalida": "2023-10-19",
        "total": 180.00
    },
    {
        "idEquipo": 9,
        "idTecnico": 9,
        "descripcion": "Limpieza de ventiladores",
        "fechaIngreso": "2023-10-18",
        "fechaSalida": "2023-10-20",
        "total": 70.25
    },
    {
        "idEquipo": 10,
        "idTecnico": 10,
        "descripcion": "Reemplazo de memoria RAM",
        "fechaIngreso": "2023-10-19",
        "fechaSalida": "2023-10-21",
        "total": 110.75
    }
]

