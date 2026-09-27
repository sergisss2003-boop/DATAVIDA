import { useState } from "react";
import "../styles/Reportes.css";

function Reportes() {
  const [territorio, setTerritorio] = useState("Chocó");
  const [indicador, setIndicador] = useState("IPM");
  const [periodo, setPeriodo] = useState("2022");

  const [contenido, setContenido] = useState({
    indicadores: true,
    territorial: true,
    graficos: true,
    estadistico: false,
    predicciones: false,
    recomendaciones: true,
  });

  const [generando, setGenerando] = useState(false);
  const [reporteGenerado, setReporteGenerado] = useState(false);

  const cambiarContenido = (campo) => {
    setContenido((actual) => ({
      ...actual,
      [campo]: !actual[campo],
    }));
  };

  const generarReporte = () => {
    setGenerando(true);
    setReporteGenerado(false);

    setTimeout(() => {
      setGenerando(false);
      setReporteGenerado(true);
    }, 1200);
  };

  return (
    <main className="pagina-reportes">
      {/* ENCABEZADO */}
      <header className="encabezado-reportes">
        <p className="etiqueta-pagina-reportes">
          GENERACIÓN DE REPORTES
        </p>

        <h1>Generar reporte</h1>

        <p>
          Selecciona la información que deseas incluir en tu reporte
          territorial.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="contenido-reportes">

        {/* PANEL DE CONFIGURACIÓN */}
        <section className="panel-reportes">

          <div className="titulo-panel-reportes">
            <div>
              <h2>Información del reporte</h2>
              <p>
                Configura los datos que quieres consultar y exportar.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="grid-formulario-reportes">

            <div className="campo-reportes">
              <label htmlFor="territorio">Territorio</label>

              <select
                id="territorio"
                value={territorio}
                onChange={(e) => setTerritorio(e.target.value)}
              >
                <option>Chocó</option>
                <option>Antioquia</option>
                <option>Bogotá D.C.</option>
                <option>La Guajira</option>
                <option>Valle del Cauca</option>
              </select>
            </div>

            <div className="campo-reportes">
              <label htmlFor="indicador">Indicador</label>

              <select
                id="indicador"
                value={indicador}
                onChange={(e) => setIndicador(e.target.value)}
              >
                <option>IPM</option>
                <option>NBI</option>
                <option>Tasa de analfabetismo</option>
              </select>
            </div>

            <div className="campo-reportes">
              <label htmlFor="periodo">Periodo</label>

              <select
                id="periodo"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
              >
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2016–2022</option>
              </select>
            </div>

          </div>

          {/* CONTENIDO DEL REPORTE */}
          <div className="contenido-reporte">
            <h3>Contenido del reporte</h3>

            <div className="opciones-reporte">

              <label>
                <input
                  type="checkbox"
                  checked={contenido.indicadores}
                  onChange={() => cambiarContenido("indicadores")}
                />
                <span>Indicadores</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={contenido.territorial}
                  onChange={() => cambiarContenido("territorial")}
                />
                <span>Datos territoriales</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={contenido.graficos}
                  onChange={() => cambiarContenido("graficos")}
                />
                <span>Gráficos</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={contenido.estadistico}
                  onChange={() => cambiarContenido("estadistico")}
                />
                <span>Análisis estadístico</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={contenido.predicciones}
                  onChange={() => cambiarContenido("predicciones")}
                />
                <span>Predicciones</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={contenido.recomendaciones}
                  onChange={() => cambiarContenido("recomendaciones")}
                />
                <span>Recomendaciones</span>
              </label>

            </div>
          </div>

          {/* ACCIONES */}
          <div className="acciones-reportes">

            <button
              className="boton-generar-reportes"
              onClick={generarReporte}
              disabled={generando}
            >
              {generando ? "Generando..." : "Generar reporte"}
            </button>

            {reporteGenerado && (
              <div className="botones-exportacion-reportes">
                <button className="boton-exportar-reportes boton-pdf-reportes">
                  Exportar PDF
                </button>

                <button className="boton-exportar-reportes boton-excel-reportes">
                  Exportar Excel
                </button>
              </div>
            )}

          </div>

        </section>

        {/* VISTA PREVIA */}
        <section className="vista-reportes">

          <div className="encabezado-vista-reportes">
            <h2>Vista previa</h2>
          </div>

          <div className="documento-reportes">

            <div className="documento-encabezado-reportes">

              <div>
                <span className="marca-reportes">
                  DATAVIDA
                </span>

                <span className="tipo-reportes">
                  Reporte técnico
                </span>
              </div>

              <span>{periodo}</span>

            </div>

            <div className="documento-contenido-reportes">

              <span className="titulo-seccion-reportes">
                TERRITORIO ANALIZADO
              </span>

              <h3>{territorio}</h3>

              <div className="resumen-reportes">

                <div>
                  <span>Indicador</span>
                  <strong>{indicador}</strong>
                </div>

                <div>
                  <span>Periodo</span>
                  <strong>{periodo}</strong>
                </div>

                <div>
                  <span>Valor</span>
                  <strong>62.4%</strong>
                </div>

              </div>

              {contenido.graficos && (
                <div className="bloque-preview-reportes">

                  <span>TENDENCIA HISTÓRICA</span>

                  <div className="grafico-preview-reportes">
                    <div className="linea-grafico-reportes" />
                  </div>

                </div>
              )}

              {contenido.indicadores && (
                <div className="bloque-preview-reportes">

                  <span>INDICADORES PRINCIPALES</span>

                  <div className="indicadores-preview-reportes">

                    <p>
                      <span>Sin acceso a agua potable</span>
                      <strong>65.2%</strong>
                    </p>

                    <p>
                      <span>Sin educación básica completa</span>
                      <strong>42.8%</strong>
                    </p>

                    <p>
                      <span>Sin servicio de salud</span>
                      <strong>61.7%</strong>
                    </p>

                  </div>

                </div>
              )}

              {contenido.recomendaciones && (
                <div className="recomendacion-preview-reportes">

                  <span>RECOMENDACIÓN PRINCIPAL</span>

                  <p>
                    Priorizar inversión en infraestructura y servicios
                    básicos de acuerdo con las necesidades identificadas
                    en el territorio.
                  </p>

                </div>
              )}

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Reportes;