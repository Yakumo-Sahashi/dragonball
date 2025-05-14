import { useState } from 'react';

const useApi = () => {
    const [respuesta, setRespuesta] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const request = async ({ url, method = 'GET', body = null, headers = {} }) => {
        setCargando(true);
        setError(null);
        try {
            const opciones = {
                method,
                headers: {
                'Content-Type': 'application/json',
                ...headers,
                },
            };

            if (body) {
                opciones.body = JSON.stringify(body);
            }

            const res = await fetch(url, opciones);
            const resultado = await res.json();

            if (!res.ok) throw new Error(resultado.msj ?? res.status);

            setRespuesta(resultado);
            return resultado;
        } catch (err) {
            setError(err.message);
            setRespuesta(null);
        } finally {
            setCargando(false);
        }
    };
    return { respuesta, cargando, error, request };
}

export default useApi;