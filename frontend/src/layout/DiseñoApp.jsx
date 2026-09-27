import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BarraLateral from "./BarraLateral";

export default function DiseñoApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const navegar = (pantalla) => {
    switch (pantalla) {
      case "home":
        navigate("/app");
        break;

      case "indicators":
        navigate("/app/indicadores");
        break;

      case "visualization":
        navigate("/app/mapa");
        break;

      case "compare":
        navigate("/app/comparar");
        break;

      case "statistics":
        navigate("/app/estadisticas");
        break;

      case "predictions":
        navigate("/app/predicciones");
        break;

      case "recommendations":
        navigate("/app/recomendaciones");
        break;

      case "reports":
        navigate("/app/reportes");
        break;

      case "profile":
        navigate("/app/perfil");
        break;

      case "login":
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
      return "home";
    }

    if (ruta.startsWith("/app/indicadores")) {
      return "indicators";
    }

    if (ruta.startsWith("/app/mapa")) {
      return "visualization";
    }

    if (ruta.startsWith("/app/comparar")) {
      return "compare";
    }

    if (ruta.startsWith("/app/estadisticas")) {
      return "statistics";
    }

    if (ruta.startsWith("/app/predicciones")) {
      return "predictions";
    }

    if (ruta.startsWith("/app/recomendaciones")) {
      return "recommendations";
    }

    if (ruta.startsWith("/app/reportes")) {
      return "reports";
    }

    if (ruta.startsWith("/app/perfil")) {
      return "profile";
    }

    return "home";
  };

  return (
    <div className="app-shell">
      <BarraLateral
        current={obtenerPantallaActual()}
        navigate={navegar}
      />

      <main className="app-contenido">
        <Outlet />
      </main>
    </div>
  );
}