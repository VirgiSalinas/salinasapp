const obrasSociales = ["OSDE", "Swiss Medical", "Prevención Salud", "SanCor Salud"];
const modalidades = ["Presencial", "Virtual"];

const nombres = [
    "Ana López",
    "Carlos Pérez",
    "María González",
    "Juan Rodríguez",
    "Laura Fernández",
    "Martín Suárez",
    "Lucía Romero",
    "Diego Martínez",
    "Sofía Herrera",
    "Pablo Acosta",
    "Valeria Medina",
    "Andrés Ríos",
    "Florencia Vega",
    "Julián Castro",
    "Camila Ortiz",
    "Federico Luna"
];

const randomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

const randomMatricula = () =>
    Math.floor(10000 + Math.random() * 90000);

let idCounter = 1;

// 🔑 CAMBIO CLAVE: Ahora recibe nombreDisplay y slug por separado
const crearMedico = (nombreDisplay, slug) => ({
    id: idCounter++,
    nombre: randomItem(nombres),
    especialidad: nombreDisplay,  // Para mostrar: "Médico Clínico"
    category: slug,                // Para filtrar: "clinico"
    matricula: randomMatricula(),
    obraSocial: [
        randomItem(obrasSociales),
        randomItem(obrasSociales)
    ].filter((v, i, a) => a.indexOf(v) === i),
    modalidad: randomItem(modalidades),
});

const medicos = [
    // Médico Clínico (3)
    crearMedico("Médico Clínico", "clinico"),
    crearMedico("Médico Clínico", "clinico"),
    crearMedico("Médico Clínico", "clinico"),

    // Traumatología (1)
    crearMedico("Traumatología", "traumatologia"),

    // Pediatría (2)
    crearMedico("Pediatría", "pediatria"),
    crearMedico("Pediatría", "pediatria"),

    // Psicología (3)
    crearMedico("Psicología", "psicologia"),
    crearMedico("Psicología", "psicologia"),
    crearMedico("Psicología", "psicologia"),

    // Psiquiatría (2)
    crearMedico("Psiquiatría", "psiquiatria"),
    crearMedico("Psiquiatría", "psiquiatria"),

    // Radiología (1)
    crearMedico("Radiología", "radiologia"),

    // Extracción de sangre (3)
    crearMedico("Extracción de sangre", "extraccion"),
    crearMedico("Extracción de sangre", "extraccion"),
    crearMedico("Extracción de sangre", "extraccion"),

    // Kinesiología (2)
    crearMedico("Kinesiología", "kinesiologia"),
    crearMedico("Kinesiología", "kinesiologia"),

    // Odontología (2)
    crearMedico("Odontología", "odontologia"),
    crearMedico("Odontología", "odontologia"),

    // Dermatología (2)
    crearMedico("Dermatología", "dermatologia"),
    crearMedico("Dermatología", "dermatologia"),

    // Oncología (3)
    crearMedico("Oncología", "oncologia"),
    crearMedico("Oncología", "oncologia"),
    crearMedico("Oncología", "oncologia"),
];

// Listado completo
export const getMedicos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(medicos);
        }, 800);
    });
};

// 🔑 CAMBIO CLAVE: Ahora filtra por medico.category
export const getMedicosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                medicos.filter((medico) => medico.category === categoryId)
            );
        }, 800);
    });
};

// Detalle por ID
export const getMedicoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                medicos.find((medico) => medico.id === Number(id))
            );
        }, 800);
    });
};