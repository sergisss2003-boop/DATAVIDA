import React from "react";
import "../styles/Recomendaciones.css";

function Recomendaciones() {
  const recomendaciones = [
    {
      numero: "01",
      titulo:
        "Fortalecer programas de acceso a agua potable en zonas rurales",
      descripcion:
        "Implementar sistemas de acueducto comunitario en los 47 municipios del departamento con cobertura inferior al 40%, priorizando las veredas más alejadas de las cabeceras municipales.",
      indicador: "Cobertura en agua potable",
      valor: "34.8%",
      color: "verde",
    },
    {
      numero: "02",
      titulo:
        "Ampliar cobertura de educación básica en población rural dispersa",
      descripcion:
        "Diseñar estrategias de educación flexible y modelos de escuela nueva para reducir la tasa de analfabetismo en adultos mayores de 15 años, actualmente en 18.3%.",
      indicador: "Tasa de analfabetismo",
      valor: "18.3%",
      color: "amarillo",
    },
    {
      numero: "03",
      titulo:
        "Mejorar acceso a servicios de salud primaria en territorios dispersos",
      descripcion:
        "Habilitar brigadas de atención médica itinerante y fortalecer los puntos de atención en zona rural, dado que el 62% de la población no accede oportunamente a servicios de salud.",
      indicador: "Cobertura en salud",
      valor: "38.4%",
      color: "azul",
    },
    {
      numero: "04",
      titulo: "Focalizar inversión en generación de empleo rural",
      descripcion:
        "Articular programas de formación para el trabajo con cadenas productivas agropecuarias locales para reducir la tasa de desempleo en municipios con IPM superior al 50%.",
      indicador: "IPM",
      valor: "62.4%",
      color: "rojo",
    },
  ];

  return (
    <div className="pagina-recomendaciones">

      {/* ENCABEZADO */}
      <header className="encabezado-recomendaciones">
        <span className="etiqueta-seccion">
          ACCIONES SUGERIDAS
        </span>

        <h1>Recomendaciones</h1>

        <p>
          Consulta recomendaciones relacionadas con los resultados obtenidos.
        </p>
      </header>

      {/* RESUMEN DEL ANÁLISIS */}
      <section className="resumen-analisis">
        <div className="linea-resumen"></div>

        <div className="contenido-resumen">
          <h2>Resumen del análisis</h2>

          <div className="datos-resumen">

            <div className="dato-resumen">
              <span>Territorio</span>
              <strong>Chocó</strong>
            </div>

            <div className="dato-resumen">
              <span>Indicador principal</span>
              <strong>IPM</strong>
            </div>

            <div className="dato-resumen">
              <span>Periodo analizado</span>
              <strong>2016–2022</strong>
            </div>

            <div className="dato-resumen resultado">
              <span>Resultado principal</span>
              <strong>62.4% <small>(crítico)</small></strong>
            </div>

          </div>
        </div>
      </section>

      {/* RECOMENDACIONES */}
      <section className="seccion-recomendaciones">
        <div className="titulo-recomendaciones">
          <h2>RECOMENDACIONES</h2>
        </div>

        <div className="lista-recomendaciones">
          {recomendaciones.map((recomendacion) => (
            <article
              className={`tarjeta-recomendacion ${recomendacion.color}`}
              key={recomendacion.numero}
            >
              <div className="numero-recomendacion">
                {recomendacion.numero}
              </div>

              <div className="contenido-recomendacion">
                <h3>{recomendacion.titulo}</h3>

                <p>{recomendacion.descripcion}</p>

                <div className="indicador-recomendacion">
                  <span>
                    {recomendacion.indicador} —{" "}
                    <strong>{recomendacion.valor}</strong>
                  </span>

                  <span className="ubicacion">
                    📍 Chocó
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESULTADOS QUE RESPALDAN */}
      <section className="resultados-respaldo">
        <h2>Resultados que respaldan las recomendaciones</h2>

        <div className="tarjetas-resultados">

          <div className="resultado-card rojo-oscuro">
            <strong>62.4%</strong>
            <span>IPM departamental</span>
            <small>Promedio nacional: 22.3%</small>
          </div>

          <div className="resultado-card rojo">
            <strong>34.8%</strong>
            <span>Cobertura agua potable</span>
            <small>Meta ODS 2030: 90%</small>
          </div>

          <div className="resultado-card rojo-claro">
            <strong>18.3%</strong>
            <span>Tasa de analfabetismo</span>
            <small>Promedio nacional: 5.6%</small>
          </div>

          <div className="resultado-card terracota">
            <strong>38.4%</strong>
            <span>Cobertura en salud</span>
            <small>Meta nacional: 100%</small>
          </div>

        </div>
      </section>

      {/* AVISO */}
      <div className="aviso-recomendaciones">
        Las recomendaciones sirven como apoyo para el análisis y la toma de
        decisiones. No constituyen una política pública formal.
      </div>

    </div>
  );
}

export default Recomendaciones;