import { useState } from "react";
import "../styles/Comparar.css";

const territorios = [
  "Bogotá D.C.",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Bucaramanga",
  "Chocó",
  "La Guajira",
  "Nariño",
  "Antioquia",
  "Bolívar",
  "Cundinamarca",
];

const indicadores = [
  "Índice de Pobreza Multidimensional",
  "Necesidades Básicas Insatisfechas",
  "Tasa de analfabetismo",
  "Cobertura en salud",
];

const periodos = ["2022", "2021", "2020", "2019", "2018"];

const datosComparacion = {
  "Bogotá D.C.": {
    ipm: [4.2, 5.1, 6.0, 7.2, 8.5],
  },

  Medellín: {
    ipm: [8.7, 10.2, 11.5, 12.8, 14.6],
  },

  Cali: {
    ipm: [12.1, 13.2, 14.4, 15.3, 16.1],
  },

  Barranquilla: {
    ipm: [17.4, 18.5, 19.2, 20.1, 21.4],
  },

  Cartagena: {
    ipm: [30.4, 31.2, 32.1, 33.5, 35.0],
  },

  Bucaramanga: {
    ipm: [8.9, 9.8, 10.6, 11.7, 12.8],
  },

  Chocó: {
    ipm: [62.4, 63.1, 64.8, 66.2, 68.0],
  },

  "La Guajira": {
    ipm: [65.2, 66.8, 67.4, 68.1, 69.3],
  },

  Nariño: {
    ipm: [30.2, 31.4, 32.7, 34.1, 35.5],
  },

  Antioquia: {
    ipm: [18.3, 19.1, 20.0, 21.2, 22.4],
  },

  Bolívar: {
    ipm: [38.5, 39.4, 40.2, 41.6, 43.0],
  },

  Cundinamarca: {
    ipm: [14.1, 15.0, 15.8, 16.7, 17.6],
  },
};

function obtenerValor(territorio, indicePeriodo) {
  const datos = datosComparacion[territorio];

  if (!datos) {
    return 0;
  }

  return datos.ipm[indicePeriodo] ?? 0;
}

function Comparar() {
  const [territorioA, setTerritorioA] = useState("Bogotá D.C.");
  const [territorioB, setTerritorioB] = useState("Chocó");
  const [indicador, setIndicador] = useState(
    "Índice de Pobreza Multidimensional"
  );
  const [periodo, setPeriodo] = useState("2022");
  const [comparado, setComparado] = useState(false);

  const indicePeriodo = periodos.indexOf(periodo);

  const valorA = obtenerValor(
    territorioA,
    indicePeriodo === -1 ? 0 : indicePeriodo
  );

  const valorB = obtenerValor(
    territorioB,
    indicePeriodo === -1 ? 0 : indicePeriodo
  );

  const diferencia = Math.abs(valorA - valorB).toFixed(1);

  const maxBarra = Math.max(valorA, valorB, 30);

  /*
   * Para el gráfico histórico mostramos los años
   * de 2018 a 2022 de izquierda a derecha.
   */
  const periodosHistoricos = [...periodos].reverse();

  const puntosGrafico = (territorio) => {
    return periodosHistoricos
      .map((_, indice) => {
        const indiceOriginal = periodos.length - 1 - indice;

        const valor = obtenerValor(
          territorio,
          indiceOriginal
        );

        const x = 55 + indice * 82;

        const y = 125 - (valor / 80) * 90;

        return `${x},${y}`;
      })
      .join(" ");
  };

  const intercambiarTerritorios = () => {
    const temporal = territorioA;
    setTerritorioA(territorioB);
    setTerritorioB(temporal);
  };

  return (
    <main className="comparar-pagina">

      {/* =====================================================
          ENCABEZADO
      ===================================================== */}

      <section className="comparar-encabezado">

        <div className="comparar-etiqueta">
          COMPARACIÓN TERRITORIAL
        </div>

        <h1>Comparar territorios</h1>

        <p>
          Compara el comportamiento de los indicadores entre
          diferentes territorios.
        </p>

      </section>

      {/* =====================================================
          CONFIGURACIÓN
      ===================================================== */}

      <section className="comparar-configuracion">

        <div className="configuracion-encabezado">

          <div>
            <span className="configuracion-numero">
              01
            </span>

            <div>
              <h2>Configuración de comparación</h2>

              <p>
                Selecciona los territorios, indicador y periodo.
              </p>
            </div>
          </div>

        </div>

        <div className="comparar-formulario">

          {/* TERRITORIO A */}

          <div className="campo-comparar">

            <label htmlFor="territorio-a">
              <span className="indicador-color color-a"></span>
              Territorio A
            </label>

            <div className="select-con-icono">

              <select
                id="territorio-a"
                value={territorioA}
                onChange={(e) =>
                  setTerritorioA(e.target.value)
                }
              >
                {territorios.map((territorio) => (
                  <option
                    key={territorio}
                    value={territorio}
                  >
                    {territorio}
                  </option>
                ))}
              </select>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

            </div>

          </div>

          {/* INTERCAMBIAR */}

          <button
            type="button"
            className="boton-intercambiar"
            onClick={intercambiarTerritorios}
            title="Intercambiar territorios"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h11l-3-3" />
              <path d="m18 7-3 3" />
              <path d="M17 17H6l3 3" />
              <path d="m6 17 3-3" />
            </svg>
          </button>

          {/* TERRITORIO B */}

          <div className="campo-comparar">

            <label htmlFor="territorio-b">
              <span className="indicador-color color-b"></span>
              Territorio B
            </label>

            <div className="select-con-icono">

              <select
                id="territorio-b"
                value={territorioB}
                onChange={(e) =>
                  setTerritorioB(e.target.value)
                }
              >
                {territorios.map((territorio) => (
                  <option
                    key={territorio}
                    value={territorio}
                  >
                    {territorio}
                  </option>
                ))}
              </select>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

            </div>

          </div>

          {/* INDICADOR */}

          <div className="campo-comparar">

            <label htmlFor="indicador">
              Indicador
            </label>

            <div className="select-con-icono">

              <select
                id="indicador"
                value={indicador}
                onChange={(e) =>
                  setIndicador(e.target.value)
                }
              >
                {indicadores.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

            </div>

          </div>

          {/* PERIODO */}

          <div className="campo-comparar">

            <label htmlFor="periodo">
              Periodo
            </label>

            <div className="select-con-icono">

              <select
                id="periodo"
                value={periodo}
                onChange={(e) =>
                  setPeriodo(e.target.value)
                }
              >
                {periodos.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

            </div>

          </div>

        </div>

        {/* BOTONES */}

        <div className="comparar-acciones">

          <button
            type="button"
            className="boton-comparar"
            onClick={() => setComparado(true)}
          >
            Comparar

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
          </button>

          <button
            type="button"
            className="boton-agregar"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>

            Agregar territorio
          </button>

        </div>

      </section>

      {/* =====================================================
          ESTADO INICIAL
      ===================================================== */}

      {!comparado && (
        <section className="comparar-vacio">

          <div className="vacio-icono">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="20" x2="6" y2="14" />
              <line x1="12" y1="20" x2="12" y2="5" />
              <line x1="18" y1="20" x2="18" y2="9" />
            </svg>

          </div>

          <h3>Selecciona los territorios</h3>

          <p>
            Configura los territorios, indicador y periodo y
            pulsa <strong>Comparar</strong> para visualizar
            los resultados.
          </p>

        </section>
      )}

      {/* =====================================================
          RESULTADOS
      ===================================================== */}

      {comparado && (
        <section className="resultados-comparacion">

          {/* =================================================
              COLUMNA PRINCIPAL
          ================================================= */}

          <div className="resultados-principal">

            {/* COMPARACIÓN VISUAL */}

            <article className="tarjeta-comparacion">

              <div className="tarjeta-titulo">

                <div>
                  <span>RESULTADO ACTUAL</span>
                  <h2>Comparación visual</h2>
                </div>

                <div className="periodo-badge">
                  {periodo}
                </div>

              </div>

              <div className="barras-comparacion">

                {/* TERRITORIO A */}

                <div className="barra-item">

                  <div className="barra-info">
                    <span>
                      <i className="punto-a"></i>
                      {territorioA}
                    </span>

                    <strong className="valor-a">
                      {valorA.toFixed(1)}%
                    </strong>
                  </div>

                  <div className="barra-fondo">

                    <div
                      className="barra-progreso barra-progreso-a"
                      style={{
                        width: `${Math.min(
                          (valorA / maxBarra) * 100,
                          100
                        )}%`,
                      }}
                    ></div>

                  </div>

                </div>

                {/* TERRITORIO B */}

                <div className="barra-item">

                  <div className="barra-info">
                    <span>
                      <i className="punto-b"></i>
                      {territorioB}
                    </span>

                    <strong className="valor-b">
                      {valorB.toFixed(1)}%
                    </strong>
                  </div>

                  <div className="barra-fondo">

                    <div
                      className="barra-progreso barra-progreso-b"
                      style={{
                        width: `${Math.min(
                          (valorB / maxBarra) * 100,
                          100
                        )}%`,
                      }}
                    ></div>

                  </div>

                </div>

              </div>

            </article>

            {/* EVOLUCIÓN HISTÓRICA */}

            <article className="tarjeta-grafico">

              <div className="tarjeta-titulo">

                <div>
                  <span>COMPORTAMIENTO</span>
                  <h2>Evolución histórica</h2>
                </div>

                <div className="leyenda-grafico">

                  <span>
                    <i className="leyenda-a"></i>
                    {territorioA}
                  </span>

                  <span>
                    <i className="leyenda-b"></i>
                    {territorioB}
                  </span>

                </div>

              </div>

              <div className="grafico-contenedor">

                <svg
                  viewBox="0 0 480 165"
                  className="grafico-svg"
                  preserveAspectRatio="none"
                >

                  {/* Líneas horizontales */}

                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={25 + i * 30}
                      x2="455"
                      y2={25 + i * 30}
                      stroke="#e9efeb"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Área A */}

                  <polygon
                    points={`40,130 ${puntosGrafico(
                      territorioA
                    )} 450,130`}
                    fill="url(#degradadoA)"
                  />

                  {/* Área B */}

                  <polygon
                    points={`40,130 ${puntosGrafico(
                      territorioB
                    )} 450,130`}
                    fill="url(#degradadoB)"
                  />

                  {/* Línea A */}

                  <polyline
                    points={puntosGrafico(territorioA)}
                    fill="none"
                    stroke="#245047"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  {/* Línea B */}

                  <polyline
                    points={puntosGrafico(territorioB)}
                    fill="none"
                    stroke="#b5793a"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  {/* Puntos A */}

                  {periodosHistoricos.map((_, indice) => {

                    const indiceOriginal =
                      periodos.length - 1 - indice;

                    const valor = obtenerValor(
                      territorioA,
                      indiceOriginal
                    );

                    const x = 55 + indice * 82;
                    const y = 125 - (valor / 80) * 90;

                    return (
                      <circle
                        key={`a-${indice}`}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#ffffff"
                        stroke="#245047"
                        strokeWidth="2.5"
                      />
                    );
                  })}

                  {/* Puntos B */}

                  {periodosHistoricos.map((_, indice) => {

                    const indiceOriginal =
                      periodos.length - 1 - indice;

                    const valor = obtenerValor(
                      territorioB,
                      indiceOriginal
                    );

                    const x = 55 + indice * 82;
                    const y = 125 - (valor / 80) * 90;

                    return (
                      <circle
                        key={`b-${indice}`}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#ffffff"
                        stroke="#b5793a"
                        strokeWidth="2.5"
                      />
                    );
                  })}

                  {/* Años */}

                  {periodosHistoricos.map((anio, indice) => (
                    <text
                      key={anio}
                      x={55 + indice * 82}
                      y="153"
                      textAnchor="middle"
                      fontSize="9"
                      fill="#89918c"
                    >
                      {anio}
                    </text>
                  ))}

                  {/* Degradados */}

                  <defs>

                    <linearGradient
                      id="degradadoA"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#245047"
                        stopOpacity="0.20"
                      />

                      <stop
                        offset="100%"
                        stopColor="#245047"
                        stopOpacity="0"
                      />
                    </linearGradient>

                    <linearGradient
                      id="degradadoB"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#b5793a"
                        stopOpacity="0.16"
                      />

                      <stop
                        offset="100%"
                        stopColor="#b5793a"
                        stopOpacity="0"
                      />
                    </linearGradient>

                  </defs>

                </svg>

              </div>

            </article>

            {/* TABLA */}

            <article className="tarjeta-tabla">

              <div className="tabla-encabezado">

                <div>
                  <span>DATOS</span>
                  <h2>Tabla comparativa</h2>
                </div>

              </div>

              <div className="tabla-scroll">

                <table>

                  <thead>
                    <tr>
                      <th>Territorio</th>
                      <th>Indicador</th>
                      <th>Periodo</th>
                      <th>Valor</th>
                      <th>Diferencia</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        <strong>{territorioA}</strong>
                      </td>

                      <td>
                        <span className="badge-ipm">
                          IPM
                        </span>
                      </td>

                      <td>{periodo}</td>

                      <td className="valor-tabla-a">
                        {valorA.toFixed(1)}%
                      </td>

                      <td>—</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>{territorioB}</strong>
                      </td>

                      <td>
                        <span className="badge-ipm">
                          IPM
                        </span>
                      </td>

                      <td>{periodo}</td>

                      <td className="valor-tabla-b">
                        {valorB.toFixed(1)}%
                      </td>

                      <td className="diferencia-tabla">
                        {diferencia} pp
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </article>

          </div>

          {/* =================================================
              RESUMEN
          ================================================= */}

          <aside className="resumen-diferencias">

            <div className="resumen-encabezado">

              <span>ANÁLISIS</span>

              <h2>Principales diferencias</h2>

            </div>

            <div className="brecha-card">

              <p>Brecha actual</p>

              <strong>
                {diferencia}
                <small> pp</small>
              </strong>

              <span>
                puntos porcentuales de diferencia
              </span>

            </div>

            <div className="resumen-valores">

              <div className="resumen-valor">

                <span>
                  <i className="punto-a"></i>
                  {territorioA}
                </span>

                <strong>
                  {valorA.toFixed(1)}%
                </strong>

              </div>

              <div className="resumen-valor">

                <span>
                  <i className="punto-b"></i>
                  {territorioB}
                </span>

                <strong>
                  {valorB.toFixed(1)}%
                </strong>

              </div>

            </div>

            <div className="resumen-nota">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />

                <path d="M12 11v5" />
                <path d="M12 8h.01" />
              </svg>

              <p>
                La diferencia observada entre{" "}
                <strong>{territorioA}</strong> y{" "}
                <strong>{territorioB}</strong> es de{" "}
                <strong>{diferencia} puntos porcentuales</strong>{" "}
                para el periodo {periodo}.
              </p>

            </div>

          </aside>

        </section>
      )}

    </main>
  );
}

export default Comparar;