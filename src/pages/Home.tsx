import React, { useState } from 'react';
import FolderList from '../components/FolderList';
import NoteList from '../components/NoteList';
import ThemeSwitcher from '../components/ThemeSwitcher'; // Asegúrate de tener el componente de cambio de tema

const Home: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Función que maneja la selección de categorías
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">Mis Apuntes</h1>
          <ThemeSwitcher /> {/* Agregar el cambio de tema */}
        </div>
      </nav>

      <main className="container mx-auto p-8">
        {/* Sección de Categorías */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Categorías</h2>
          <FolderList onCategorySelect={handleCategorySelect} /> {/* Pasamos la función de selección */}
        </section>

        {/* Sección de Notas */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Notas recientes</h2>
          {selectedCategoryId ? (
            <NoteList categoryId={selectedCategoryId} />
          ) : (
            <p className="text-gray-600">Selecciona una categoría para ver las notas.</p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-12">
        <p>&copy; 2025 Mis Apuntes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;