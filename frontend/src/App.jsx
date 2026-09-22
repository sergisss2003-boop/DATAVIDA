import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/DiseñoApp";

import Landing from "./pages/Landing";
import InicioSesion from "./pages/InicioSesion";
import Inicio from "./pages/Inicio";
import ConsultarIndicadores from "./pages/ConsultarIndicadores";
import Mapa from "./pages/Mapa";
import Comparar from "./pages/Comparar";
import AnalisisEstadistico from "./pages/AnalisisEstadistico";
import Recomendaciones from "./pages/Recomendaciones";

import "./App.css";

function App() {
  return (
    <Routes>

      {/* Página principal */}
      <Route path="/" element={<Landing />} />

      {/* Inicio de sesión */}
      <Route path="/login" element={<InicioSesion />} />

      {/* Aplicación */}
      <Route path="/app" element={<AppLayout />}>

        {/* Inicio */}
        <Route index element={<Inicio />} />

        {/* Indicadores */}
        <Route
          path="indicadores"
          element={<ConsultarIndicadores />}
        />

        {/* Visualización */}
        <Route
          path="mapa"
          element={<Mapa />}
        />

        {/* Comparar */}
        <Route
          path="comparar"
          element={<Comparar />}
        />

        {/* Análisis estadístico */}
        <Route
          path="estadisticas"
          element={<AnalisisEstadistico />}
        />

        {/* Recomendaciones */}
        <Route
          path="recomendaciones"
          element={<Recomendaciones />}
        />

      </Route>

    </Routes>
  );
}

export default App;