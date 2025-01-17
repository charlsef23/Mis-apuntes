import React from 'react';
import { useParams } from 'react-router-dom';

const Note: React.FC = () => {
  // Obtenemos el id del apunte desde la URL
  const { noteId } = useParams<{ noteId: string }>();

  // Aquí puedes hacer una solicitud a una API o buscar el apunte en los datos simulados
  // Por ahora, solo mostramos el id del apunte.
  return (
    <div className="note-detail">
      <h2>Detalles del Apunte: {noteId}</h2>
      <p>Este es el contenido del apunte con el id {noteId}.</p>
    </div>
  );
};

export default Note;