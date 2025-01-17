import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage'; // Asegúrate de que esta línea esté incluida correctamente

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página principal */}
        <Route path="/category/:categoryId" element={<CategoryPage />} /> {/* Página de categoría */}
      </Routes>
    </Router>
  );
};

export default App;