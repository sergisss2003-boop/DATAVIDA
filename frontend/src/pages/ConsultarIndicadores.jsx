import { useState } from "react";
import "../styles/Indicadores.css";

/* =========================================
   ICONO DE BÚSQUEDA
   ========================================= */

function IconoBusqueda() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

/* =========================================
   ICONO DE ALERTA
   ========================================= */

function IconoAlerta() {
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
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </svg>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
   ========================================= */

function ConsultarIndicadores() {
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [region, setRegion] = useState("");
  const [indicador, setIndicador] = useState("");
  const [periodo, setPeriodo] = useState("");

  const [estado, setEstado] = useState("vacio");

  /* =========================================
     CONSULTAR

     Actualmente solamente cambia el estado
     visual.

     La conexión con el backend se agregará
     posteriormente.
     ========================================= */

  const consultar = () => {
    setEstado("cargando");

    /*
      AQUÍ SE CONECTARÁ EL BACKEND.

      Ejemplo futuro:

      const respuesta = await fetch(...);

      Por ahora no se agregan datos ficticios.
    */
  };

  /* =========================================
     LIMPIAR FILTROS
     ========================================= */

  const limpiarFiltros = () => {
    setDepartamento("");
    setMunicipio("");
    setRegion("");
    setIndicador("");
    setPeriodo("");

    setEstado("vacio");
  };

  return (
    <div className="pagina-indicadores">

      {/* =====================================
          ENCABEZADO
          ===================================== */}

      <header className="encabezado-indicadores">

        <span className="etiqueta-pagina-indicadores">
          CONSULTA TERRITORIAL
        </span>

        <h1>Indicadores</h1>

        <p>
          Consulta los indicadores territoriales de Colombia
          y analiza información por municipio, región y periodo.
        </p>

      </header>


      {/* =====================================
          PANEL DE FILTROS
          ===================================== */}

      <section className="panel-filtros-indicadores">

        <div className="titulo-panel-indicadores">

          <div className="icono-titulo-filtros">
            <IconoBusqueda />
          </div>

          <div>
            <h2>Filtros de consulta</h2>

            <p>
              Selecciona los criterios para consultar información.
            </p>
          </div>

        </div>


        {/* =====================================
            CAMPOS
            ===================================== */}

        <div className="grid-filtros-indicadores">

          {/* DEPARTAMENTO */}

          <div className="campo-indicadores">

            <label htmlFor="departamento">
              Departamento
            </label>

            <select
              id="departamento"
              value={departamento}
              onChange={(evento) => {
                setDepartamento(evento.target.value);
                setMunicipio("");
              }}
            >
              <option value="">
                Seleccionar...
              </option>
            </select>

          </div>


          {/* MUNICIPIO */}

          <div className="campo-indicadores">

            <label htmlFor="municipio">
              Municipio
            </label>

            <select
              id="municipio"
              value={municipio}
              disabled={!departamento}
              onChange={(evento) =>
                setMunicipio(evento.target.value)
              }
            >
              <option value="">
                Seleccionar...
              </option>
            </select>

          </div>


          {/* REGIÓN */}

          <div className="campo-indicadores">

            <label htmlFor="region">
              Región
            </label>

            <select
              id="region"
              value={region}
              onChange={(evento) =>
                setRegion(evento.target.value)
              }
            >
              <option value="">
                Seleccionar...
              </option>
            </select>

          </div>


          {/* INDICADOR */}

          <div className="campo-indicadores">

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
            </select>

          </div>


          {/* PERIODO */}

          <div className="campo-indicadores">

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
            </select>

          </div>

        </div>


        {/* =====================================
            BOTONES
            ===================================== */}

        <div className="acciones-filtros-indicadores">

          <button
            type="button"
            className="boton-consultar-indicadores"
            onClick={consultar}
          >
            Consultar
          </button>

          <button
            type="button"
            className="boton-limpiar-indicadores"
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </button>

        </div>

      </section>


      {/* =====================================
          ESTADO VACÍO
          ===================================== */}

      {estado === "vacio" && (

        <section
          className="
            estado-indicadores
            estado-vacio-indicadores
          "
        >

          <div className="icono-estado-indicadores">
            <IconoBusqueda />
          </div>

          <h2>
            Selecciona los filtros para consultar
          </h2>

          <p>
            Define los criterios de búsqueda y pulsa{" "}
            <strong>Consultar</strong>.
          </p>

        </section>

      )}


      {/* =====================================
          ESTADO CARGANDO
          ===================================== */}

      {estado === "cargando" && (

        <section
          className="
            estado-indicadores
            estado-cargando-indicadores
          "
        >

          <div className="spinner-indicadores"></div>

          <h2>
            Consultando información
          </h2>

          <p>
            Estamos preparando los resultados de la consulta.
          </p>

        </section>

      )}


      {/* =====================================
          SIN RESULTADOS
          ===================================== */}

      {estado === "sin-resultados" && (

        <section
          className="
            estado-indicadores
            estado-sin-resultados
          "
        >

          <div className="icono-alerta-indicadores">
            <IconoAlerta />
          </div>

          <h2>
            No se encontraron resultados
          </h2>

          <p>
            Intenta modificar los criterios de búsqueda.
          </p>

        </section>

      )}


      {/* =====================================
          RESULTADOS

          Por ahora es solamente un estado
          visual. Los datos reales vendrán
          posteriormente del backend.
          ===================================== */}

      {estado === "resultados" && (

        <section className="estado-indicadores">

          <div className="icono-estado-indicadores">
            <IconoBusqueda />
          </div>

          <h2>
            Resultados de la consulta
          </h2>

          <p>
            Los resultados aparecerán aquí cuando
            el Microservicio de Indicadores esté conectado.
          </p>

        </section>

      )}

    </div>
  );
}

export default ConsultarIndicadores;