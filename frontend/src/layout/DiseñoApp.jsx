import { Outlet, useLocation, useNavigate } from "react-router-dom";

import BarraLateral from "./BarraLateral";

export default function DiseñoApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const navegar = (pantalla) => {
    switch (pantalla) {
      case "inicio":
        navigate("/app");
        break;

      case "indicadores":
        navigate("/app/indicadores");
        break;

      case "visualizacion":
        navigate("/app/mapa");
        break;

      case "comparar":
        navigate("/app/comparar");
        break;

      case "estadisticas":
        navigate("/app/estadisticas");
        break;

      case "predicciones":
        navigate("/app/predicciones");
        break;

      case "recomendaciones":
        navigate("/app/recomendaciones");
        break;

      case "reportes":
        navigate("/app/reportes");
        break;

      case "perfil":
        navigate("/app/perfil");
        break;

      case "inicio-sesion":
        navigate("/login");
        break;

      default:
        navigate("/app");
        break;
    }
  };

  const obtenerPantallaActual = () => {
    const ruta = location.pathname;

    if (ruta === "/app" || ruta === "/app/") {
      return "inicio";
    }

    if (ruta.startsWith("/app/indicadores")) {
      return "indicadores";
    }

    if (ruta.startsWith("/app/mapa")) {
      return "visualizacion";
    }

    if (ruta.startsWith("/app/comparar")) {
      return "comparar";
    }

    if (ruta.startsWith("/app/estadisticas")) {
      return "estadisticas";
    }

    if (ruta.startsWith("/app/predicciones")) {
      return "predicciones";
    }

    if (ruta.startsWith("/app/recomendaciones")) {
      return "recomendaciones";
    }

    if (ruta.startsWith("/app/reportes")) {
      return "reportes";
    }

    if (ruta.startsWith("/app/perfil")) {
      return "perfil";
    }

    if (ruta.startsWith("/app/ayuda")) {
      return "ayuda";
    }

    return "inicio";
  };

  return (
    <div className="app-shell">
      <BarraLateral
        pantallaActual={obtenerPantallaActual()}
        navegar={navegar}
      />

      <main className="app-contenido">
        <Outlet />
      </main>
    </div>
  );
}