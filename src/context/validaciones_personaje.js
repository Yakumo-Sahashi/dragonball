const validaciones_personaje = { 
    nombre:{
        required: "El nombre es obligatorio",
        pattern: {
            value: /^[a-zA-Z0-9.-\s]+$/,
            message: "El nombre solo puede contener letras,numeros,espacios o puntos",
        },
    },
    nombre_alterno:{
        required: "El nombre alterno es obligatorio",
        pattern: {
            value: /^[a-zA-Z0-9.-\s]+$/,
            message: "El nombre alterno solo puede contener letras,numeros,espacios o puntos",
        },
    },
    nacimiento:{
        required: "El año de nacimiento es obligatorio",
        pattern: {
            value: /^[0-9]+$/,
            message: "El año de nacimiento solo puede contener numeros enteros",
        },
    },
    procedencia:{
        required: "El lugar de procedencia es obligatorio",
    },
    especie:{
        required: "La especie es obligatorio",
    },
    img:{
        required: "La URL de la imagen es obligatoria",
        pattern: {
            value:  /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i,
            message: "La URL de la imagen no es valida",
        },
    }

}

export default validaciones_personaje;