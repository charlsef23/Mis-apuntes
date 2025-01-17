import React from 'react';

interface NoteListProps {
  categoryId: string; // Asegúrate de que esta propiedad esté bien definida
}

const NoteList: React.FC<NoteListProps> = ({ categoryId }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Notas de la categoría {categoryId}</h3>
      {/* Aquí puedes agregar la lógica para mostrar las notas basadas en la categoría */}
    </div>
  );
};

export default NoteList;