import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";

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

      case "recomendaciones":
        navigate("/app/recomendaciones");
        break;

      case "estadisticas":
        navigate("/app/estadisticas");
        break;

      case "predicciones":
        navigate("/app/predicciones");
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

    if (ruta.startsWith("/app/recomendaciones")) {
      return "recomendaciones";
    }

    if (ruta.startsWith("/app/estadisticas")) {
      return "estadisticas";
    }

    if (ruta.startsWith("/app/predicciones")) {
      return "predicciones";
    }

    if (ruta.startsWith("/app/reportes")) {
      return "reportes";
    }

    if (ruta.startsWith("/app/perfil")) {
      return "perfil";
    }

    return "inicio";
  };

  return (
    <div className="app-shell">

      <Sidebar
        pantallaActual={obtenerPantallaActual()}
        navegar={navegar}
      />

      <div className="app-contenido">
        <Outlet />
      </div>

    </div>
  );
}