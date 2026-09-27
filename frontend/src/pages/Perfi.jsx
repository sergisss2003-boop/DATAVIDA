import "../styles/Perfil.css";

function Perfil() {
  const estadisticas = [
    {
      numero: "84",
      titulo: "Consultas realizadas",
      descripcion: "Consultas en DATAVIDA",
      icono: (
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
      ),
    },
    {
      numero: "31",
      titulo: "Análisis completados",
      descripcion: "Análisis territoriales",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-4 3 2 5-6" />
        </svg>
      ),
    },
    {
      numero: "12",
      titulo: "Reportes generados",
      descripcion: "Reportes creados",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h6" />
        </svg>
      ),
    },
  ];

  const informacion = [
    {
      etiqueta: "Nombre completo",
      valor: "Ana Campos García",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      etiqueta: "Correo electrónico",
      valor: "usuario@datavida.co",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      etiqueta: "Rol en la plataforma",
      valor: "Usuario",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3 4 7v5c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V7z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      etiqueta: "Último acceso",
      valor: "9 de septiembre de 2024, 08:14 a.m.",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      etiqueta: "Miembro desde",
      valor: "15 de enero de 2023",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
        </svg>
      ),
    },
  ];

  return (
    <main className="perfil-pagina">

      {/* =====================================================
          ENCABEZADO
      ===================================================== */}

      <section className="perfil-encabezado">
        <div>
          <span className="perfil-etiqueta">CUENTA PERSONAL</span>

          <h1>Mi perfil</h1>

          <p>
            Administra tu información y consulta tu actividad
            dentro de DATAVIDA.
          </p>
        </div>

        <div className="perfil-encabezado-decoracion">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ===================================================== */}

      <section className="perfil-contenido">

        {/* =================================================
            PERFIL PRINCIPAL
        ================================================= */}

        <article className="tarjeta-perfil">

          <div className="perfil-banner">
            <div className="banner-circulo banner-circulo-1"></div>
            <div className="banner-circulo banner-circulo-2"></div>

            <div className="banner-lineas">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="perfil-identidad">

            <div className="avatar-perfil">
              <span>AC</span>

              <div className="avatar-estado"></div>
            </div>

            <div className="identidad-info">
              <div className="identidad-nombre">
                <h2>Ana Campos</h2>

                <span className="estado-activo">
                  <i></i>
                  Activa
                </span>
              </div>

              <p>Usuario de DATAVIDA</p>

              <div className="identidad-meta">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="m4 7 8 5 8-5" />
                  </svg>
                  usuario@datavida.co
                </span>

                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  Miembro desde 2023
                </span>
              </div>
            </div>

          </div>

          <div className="perfil-separador"></div>

          {/* INFORMACIÓN */}

          <div className="informacion-perfil">

            <div className="seccion-titulo">
              <div className="seccion-titulo-icono">
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
              </div>

              <div>
                <h3>Información de la cuenta</h3>
                <p>Datos asociados a tu perfil</p>
              </div>
            </div>

            <div className="datos-perfil">

              {informacion.map((item) => (
                <div className="dato-perfil" key={item.etiqueta}>

                  <div className="dato-icono">
                    {item.icono}
                  </div>

                  <div className="dato-contenido">
                    <span>{item.etiqueta}</span>
                    <strong>{item.valor}</strong>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </article>

        {/* =================================================
            COLUMNA DERECHA
        ================================================= */}

        <aside className="perfil-lateral">

          {/* ACTIVIDAD */}

          <article className="tarjeta-actividad">

            <div className="tarjeta-seccion-header">
              <div>
                <span>ACTIVIDAD</span>
                <h2>Tu actividad</h2>
              </div>

              <div className="actividad-icono">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19V5" />
                  <path d="M4 19h16" />
                  <path d="m7 15 4-4 3 2 5-6" />
                </svg>
              </div>
            </div>

            <div className="estadisticas">

              {estadisticas.map((estadistica) => (
                <div
                  className="estadistica-item"
                  key={estadistica.titulo}
                >
                  <div className="estadistica-icono">
                    {estadistica.icono}
                  </div>

                  <div className="estadistica-texto">
                    <strong>{estadistica.numero}</strong>
                    <span>{estadistica.titulo}</span>
                    <small>{estadistica.descripcion}</small>
                  </div>
                </div>
              ))}

            </div>

          </article>

          {/* ACCESO */}

          <article className="tarjeta-seguridad">

            <div className="seguridad-icono">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 4 7v5c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V7z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <span className="seguridad-label">
                CUENTA SEGURA
              </span>

              <h3>Tu información está protegida</h3>

              <p>
                Tus datos de perfil se mantienen asociados
                únicamente a tu cuenta.
              </p>
            </div>

          </article>

          {/* CERRAR SESIÓN */}

          <button
            type="button"
            className="boton-cerrar-sesion"
          >
            <span className="cerrar-icono">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </span>

            <span>
              <strong>Cerrar sesión</strong>
              <small>Salir de tu cuenta</small>
            </span>

            <svg
              className="cerrar-flecha"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

        </aside>

      </section>

    </main>
  );
}

export default Perfil;