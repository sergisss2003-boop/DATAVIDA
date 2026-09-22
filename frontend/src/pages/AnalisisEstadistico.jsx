import React, { useState } from "react";
import "../styles/AnalisisEstadistico.css";

function AnalisisEstadistico() {
  const [territorio, setTerritorio] = useState("Antioquia");
  const [indicador, setIndicador] = useState(
    "IPM (Índice de Pobreza Multidimensional)"
  );
  const [periodo, setPeriodo] = useState("2016–2022");
  const [criterio, setCriterio] = useState("Tendencia temporal");

  const ejecutarAnalisis = () => {
    console.log({
      territorio,
      indicador,
      periodo,
      criterio,
    });
  };

  return (
    <div className="pagina-analisis">

      {/* ENCABEZADO */}
      <header className="encabezado-analisis">
        <span className="etiqueta-seccion">
          ANÁLISIS DE DATOS
        </span>

        <h1>Análisis estadístico</h1>

        <p>
          Analiza patrones y comportamientos de los indicadores seleccionados.
        </p>
      </header>

      {/* CONFIGURACIÓN */}
      <section className="configuracion-analisis">

        <div className="linea-configuracion"></div>

        <div className="contenido-configuracion">

          <h2>Configuración del análisis</h2>

          <div className="formulario-analisis">

            {/* TERRITORIO */}
            <div className="campo-analisis">
              <label htmlFor="territorio">
                Territorio
              </label>

              <select
                id="territorio"
                value={territorio}
                onChange={(e) => setTerritorio(e.target.value)}
              >
                <option>Antioquia</option>
                <option>Bogotá D.C.</option>
                <option>Bolívar</option>
                <option>Cauca</option>
                <option>Chocó</option>
                <option>Cundinamarca</option>
                <option>La Guajira</option>
                <option>Valle del Cauca</option>
              </select>
            </div>

            {/* INDICADOR */}
            <div className="campo-analisis">
              <label htmlFor="indicador">
                Indicador
              </label>

              <select
                id="indicador"
                value={indicador}
                onChange={(e) => setIndicador(e.target.value)}
              >
                <option>
                  IPM (Índice de Pobreza Multidimensional)
                </option>
                <option>
                  NBI (Necesidades Básicas Insatisfechas)
                </option>
                <option>
                  Tasa de analfabetismo
                </option>
                <option>
                  Cobertura en salud
                </option>
              </select>
            </div>

            {/* PERIODO */}
            <div className="campo-analisis">
              <label htmlFor="periodo">
                Periodo
              </label>

              <select
                id="periodo"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
              >
                <option>2016–2022</option>
                <option>2018–2022</option>
                <option>2020–2022</option>
                <option>2019–2021</option>
              </select>
            </div>

            {/* CRITERIO */}
            <div className="campo-analisis">
              <label htmlFor="criterio">
                Criterio de análisis
              </label>

              <select
                id="criterio"
                value={criterio}
                onChange={(e) => setCriterio(e.target.value)}
              >
                <option>Tendencia temporal</option>
                <option>Distribución por municipio</option>
                <option>Correlación entre indicadores</option>
                <option>Variabilidad regional</option>
              </select>
            </div>

          </div>

          {/* BOTÓN */}
          <button
            type="button"
            className="boton-ejecutar"
            onClick={ejecutarAnalisis}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>

            Ejecutar análisis
          </button>

        </div>
      </section>

      {/* ESTADO INICIAL */}
      <section className="estado-analisis">
        <div className="icono-estado">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 20V4" />
            <path d="M3 20h18" />
            <path d="m6 15 4-4 3 2 6-7" />
          </svg>
        </div>

        <div>
          <h2>Listo para analizar</h2>

          <p>
            Configura los parámetros y ejecuta el análisis
          </p>
        </div>
      </section>

    </div>
  );
}

export default AnalisisEstadistico;