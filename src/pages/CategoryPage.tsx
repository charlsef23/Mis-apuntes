import React from 'react';
import { useParams } from 'react-router-dom';
import NoteList from '../components/NoteList'; // Asegúrate de tener este componente

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams(); // Obtener el categoryId desde la URL

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">Mis Apuntes</h1>
        </div>
      </nav>

      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Notas en la categoría: {categoryId}
        </h2>
        <NoteList categoryId={categoryId || ''} /> {/* Mostramos las notas de la categoría */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-12">
        <p>&copy; 2025 Mis Apuntes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CategoryPage;