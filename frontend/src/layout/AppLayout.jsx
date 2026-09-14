import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
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