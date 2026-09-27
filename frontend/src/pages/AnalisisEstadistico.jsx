import { useState } from "react";
import "../styles/AnalisisEstadistico.css";

/* =========================================
   ICONO DE ANÁLISIS
   ========================================= */

function IconoAnalisis() {
  return (
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
  );
}

/* =========================================
   ICONO DE INFORMACIÓN
   ========================================= */

function IconoInformacion() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </svg>
  );
}

/* =========================================
   ICONO DE TENDENCIA
   ========================================= */

function IconoTendencia() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 18 10 12l4 3 6-8" />
      <path d="M16 7h4v4" />
    </svg>
  );
}

/* =========================================
   DATOS DEMO
   ========================================= */

const territorios = [
  "Antioquia",
  "Bogotá D.C.",
  "Bolívar",
  "Cauca",
  "Chocó",
  "Cundinamarca",
  "La Guajira",
  "Valle del Cauca",
];

const indicadores = [
  "IPM (Índice de Pobreza Multidimensional)",
  "NBI (Necesidades Básicas Insatisfechas)",
  "Tasa de analfabetismo",
  "Cobertura en salud",
];

const periodos = [
  "2016–2022",
  "2018–2022",
  "2020–2022",
  "2019–2021",
];

const criterios = [
  "Tendencia temporal",
  "Distribución por municipio",
  "Correlación entre indicadores",
  "Variabilidad regional",
];

const histograma = [
  { rango: "0–10%", cantidad: 28 },
  { rango: "10–20%", cantidad: 42 },
  { rango: "20–30%", cantidad: 35 },
  { rango: "30–40%", cantidad: 18 },
  { rango: "40–50%", cantidad: 12 },
  { rango: ">50%", cantidad: 7 },
];

const patrones = [
  "Los municipios presentan diferencias importantes en los valores del indicador seleccionado.",
  "Se observa una tendencia temporal que permite identificar cambios relevantes durante el periodo analizado.",
  "La distribución territorial muestra variabilidad entre los municipios incluidos en el análisis.",
];

/* =========================================
   COMPONENTE PRINCIPAL
   ========================================= */

function AnalisisEstadistico() {
  const [territorio, setTerritorio] = useState("");
  const [indicador, setIndicador] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [criterio, setCriterio] = useState("");

  const [estado, setEstado] = useState("vacio");

  /* =========================================
     EJECUTAR ANÁLISIS
     ========================================= */

  const ejecutarAnalisis = () => {
    if (!territorio || !indicador || !periodo || !criterio) {
      setEstado("incompleto");
      return;
    }

    setEstado("cargando");

    /*
      AQUÍ SE CONECTARÁ POSTERIORMENTE
      EL MICROSERVICIO DE ANÁLISIS ESTADÍSTICO.

      Ejemplo futuro:

      const respuesta = await fetch(...);
      const datos = await respuesta.json();
    */

    setTimeout(() => {
      setEstado("resultados");
    }, 1000);
  };

  /* =========================================
     LIMPIAR
     ========================================= */

  const limpiarAnalisis = () => {
    setTerritorio("");
    setIndicador("");
    setPeriodo("");
    setCriterio("");
    setEstado("vacio");
  };

  const maxCantidad = Math.max(
    ...histograma.map((dato) => dato.cantidad)
  );

  return (
    <div className="pagina-analisis-estadistico">

      {/* =====================================
          ENCABEZADO
          ===================================== */}

      <header className="encabezado-analisis-estadistico">

        <span className="etiqueta-pagina-analisis">
          ANÁLISIS DE DATOS
        </span>

        <h1>Análisis estadístico</h1>

        <p>
          Analiza patrones, tendencias y comportamientos de los
          indicadores territoriales seleccionados.
        </p>

      </header>

      {/* =====================================
          PANEL DE CONFIGURACIÓN
          ===================================== */}

      <section className="panel-configuracion-analisis">

        <div className="titulo-panel-analisis">

          <div className="icono-titulo-analisis">
            <IconoAnalisis />
          </div>

          <div>
            <h2>Configuración del análisis</h2>

            <p>
              Selecciona los criterios para realizar el análisis estadístico.
            </p>
          </div>

        </div>

        {/* =====================================
            FILTROS
            ===================================== */}

        <div className="grid-configuracion-analisis">

          {/* TERRITORIO */}

          <div className="campo-analisis">

            <label htmlFor="territorio">
              Territorio
            </label>

            <select
              id="territorio"
              value={territorio}
              onChange={(evento) =>
                setTerritorio(evento.target.value)
              }
            >
              <option value="">
                Seleccionar...
              </option>

              {territorios.map((territorioActual) => (
                <option
                  key={territorioActual}
                  value={territorioActual}
                >
                  {territorioActual}
                </option>
              ))}
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
              onChange={(evento) =>
                setIndicador(evento.target.value)
              }
            >
              <option value="">
                Seleccionar...
              </option>

              {indicadores.map((indicadorActual) => (
                <option
                  key={indicadorActual}
                  value={indicadorActual}
                >
                  {indicadorActual}
                </option>
              ))}
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
              onChange={(evento) =>
                setPeriodo(evento.target.value)
              }
            >
              <option value="">
                Seleccionar...
              </option>

              {periodos.map((periodoActual) => (
                <option
                  key={periodoActual}
                  value={periodoActual}
                >
                  {periodoActual}
                </option>
              ))}
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
              onChange={(evento) =>
                setCriterio(evento.target.value)
              }
            >
              <option value="">
                Seleccionar...
              </option>

              {criterios.map((criterioActual) => (
                <option
                  key={criterioActual}
                  value={criterioActual}
                >
                  {criterioActual}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* =====================================
            BOTONES
            ===================================== */}

        <div className="acciones-analisis">

          <button
            type="button"
            className="boton-ejecutar-analisis"
            onClick={ejecutarAnalisis}
            disabled={estado === "cargando"}
          >
            {estado === "cargando"
              ? "Ejecutando análisis..."
              : "Ejecutar análisis"}
          </button>

          <button
            type="button"
            className="boton-limpiar-analisis"
            onClick={limpiarAnalisis}
          >
            Limpiar
          </button>

        </div>

      </section>

      {/* =====================================
          CAMPOS INCOMPLETOS
          ===================================== */}

      {estado === "incompleto" && (
        <section className="mensaje-analisis mensaje-incompleto">

          <div className="icono-mensaje-analisis">
            <IconoInformacion />
          </div>

          <div>
            <h2>Completa la configuración</h2>

            <p>
              Selecciona el territorio, indicador, periodo y
              criterio antes de ejecutar el análisis.
            </p>
          </div>

        </section>
      )}

      {/* =====================================
          CARGANDO
          ===================================== */}

      {estado === "cargando" && (
        <section className="mensaje-analisis mensaje-cargando">

          <div className="spinner-analisis"></div>

          <h2>
            Ejecutando análisis estadístico
          </h2>

          <p>
            Estamos procesando la configuración seleccionada.
          </p>

        </section>
      )}

      {/* =====================================
          ESTADO VACÍO
          ===================================== */}

      {estado === "vacio" && (
        <section className="mensaje-analisis mensaje-vacio">

          <div className="icono-mensaje-analisis">
            <IconoAnalisis />
          </div>

          <h2>
            Configura los parámetros del análisis
          </h2>

          <p>
            Selecciona los criterios y pulsa{" "}
            <strong>Ejecutar análisis</strong> para visualizar
            los resultados.
          </p>

        </section>
      )}

      {/* =====================================
          RESULTADOS
          ===================================== */}

      {estado === "resultados" && (
        <>

          {/* =====================================
              RESUMEN ESTADÍSTICO
              ===================================== */}

          <section className="resumen-estadistico">

            <div className="cabecera-resultados">

              <div>
                <span className="etiqueta-resultados">
                  RESULTADOS DEL ANÁLISIS
                </span>

                <h2>
                  {indicador}
                </h2>

                <p>
                  {territorio} · {periodo} · {criterio}
                </p>
              </div>

            </div>

            <div className="tarjetas-estadisticas">

              <article className="tarjeta-estadistica">
                <span>Promedio</span>
                <strong>22.4%</strong>
                <small>Valor medio observado</small>
              </article>

              <article className="tarjeta-estadistica">
                <span>Mínimo</span>
                <strong className="valor-verde">
                  4.2%
                </strong>
                <small>Valor mínimo registrado</small>
              </article>

              <article className="tarjeta-estadistica">
                <span>Máximo</span>
                <strong className="valor-ocre">
                  65.2%
                </strong>
                <small>Valor máximo registrado</small>
              </article>

              <article className="tarjeta-estadistica">
                <span>Mediana</span>
                <strong>
                  18.7%
                </strong>
                <small>Valor central de los datos</small>
              </article>

              <article className="tarjeta-estadistica">
                <span>Variación</span>
                <strong className="valor-verde">
                  -7.4 pp
                </strong>
                <small>Cambio durante el periodo</small>
              </article>

            </div>

          </section>

          {/* =====================================
              GRÁFICOS
              ===================================== */}

          <div className="grid-graficos-analisis">

            {/* HISTOGRAMA */}

            <section className="tarjeta-grafico">

              <div className="titulo-grafico">

                <div>
                  <h2>
                    Distribución de municipios
                  </h2>

                  <p>
                    Distribución por rango del indicador.
                  </p>
                </div>

                <div className="icono-grafico">
                  <IconoAnalisis />
                </div>

              </div>

              <div className="histograma">

                {histograma.map((dato) => (

                  <div
                    key={dato.rango}
                    className="barra-histograma"
                  >

                    <span>
                      {dato.cantidad}
                    </span>

                    <div
                      className="barra-visual"
                      style={{
                        height: `${(
                          dato.cantidad / maxCantidad
                        ) * 100}%`,
                      }}
                    ></div>

                    <small>
                      {dato.rango}
                    </small>

                  </div>

                ))}

              </div>

            </section>

            {/* TENDENCIA */}

            <section className="tarjeta-grafico">

              <div className="titulo-grafico">

                <div>
                  <h2>
                    Tendencia del indicador
                  </h2>

                  <p>
                    Evolución durante el periodo seleccionado.
                  </p>
                </div>

                <div className="icono-grafico">
                  <IconoTendencia />
                </div>

              </div>

              <div className="grafico-tendencia">

                <svg
                  viewBox="0 0 500 220"
                  preserveAspectRatio="none"
                >

                  {[0, 1, 2, 3, 4].map((linea) => (

                    <line
                      key={linea}
                      x1="45"
                      y1={25 + linea * 38}
                      x2="475"
                      y2={25 + linea * 38}
                      stroke="#e4ede9"
                      strokeWidth="1"
                    />

                  ))}

                  <polygon
                    points="
                      50,170
                      120,145
                      190,125
                      260,140
                      330,105
                      400,88
                      470,65
                      470,190
                      50,190
                    "
                    fill="#2f5d52"
                    fillOpacity="0.09"
                  />

                  <polyline
                    points="
                      50,170
                      120,145
                      190,125
                      260,140
                      330,105
                      400,88
                      470,65
                    "
                    fill="none"
                    stroke="#2f5d52"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {[
                    [50, 170],
                    [120, 145],
                    [190, 125],
                    [260, 140],
                    [330, 105],
                    [400, 88],
                    [470, 65],
                  ].map(([x, y], indice) => (

                    <circle
                      key={indice}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#ffffff"
                      stroke="#b5793a"
                      strokeWidth="2"
                    />

                  ))}

                  {[
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022",
                  ].map((anio, indice) => (

                    <text
                      key={anio}
                      x={50 + indice * 70}
                      y="212"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#72817e"
                    >
                      {anio}
                    </text>

                  ))}

                </svg>

              </div>

            </section>

          </div>

          {/* =====================================
              PATRONES
              ===================================== */}

          <section className="panel-patrones">

            <div className="titulo-patrones">

              <div className="icono-patrones">
                <IconoTendencia />
              </div>

              <div>
                <h2>
                  Patrones identificados
                </h2>

                <p>
                  Observaciones generadas a partir del análisis.
                </p>
              </div>

            </div>

            <div className="lista-patrones">

              {patrones.map((patron, indice) => (

                <div
                  key={indice}
                  className="patron"
                >

                  <span className="numero-patron">
                    {indice + 1}
                  </span>

                  <p>
                    {patron}
                  </p>

                </div>

              ))}

            </div>

            <div className="aviso-analisis">

              <IconoInformacion />

              <p>
                El análisis estadístico no modifica los datos
                originales. Los resultados mostrados tienen
                carácter exploratorio y podrán actualizarse
                cuando se conecte el microservicio correspondiente.
              </p>

            </div>

          </section>

        </>

      )}

    </div>
  );
}

export default AnalisisEstadistico;