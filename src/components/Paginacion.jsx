import React, { useState } from "react";

const Paginacion = ({ datos, elementosPorPagina = 5 }) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(datos.length / elementosPorPagina);

  const indiceInicio = (paginaActual - 1) * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;
  const datosPagina = datos.slice(indiceInicio, indiceFin);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div>
      <ul>
        {datosPagina.map((item, i) => (
          <li key={i}>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span style={{ margin: "0 1rem" }}>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginacion;
