import React, { useState } from 'react';
import { Folder, Note } from '../types';

interface NoteListProps {
  folder: Folder;
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  folders: Folder[];
}

const NoteList: React.FC<NoteListProps> = ({ folder, setFolders, folders }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      category,
      tags: tags.split(',').map((tag) => tag.trim()),
    };

    const updatedFolder = {
      ...folder,
      notes: [...folder.notes, newNote],
    };

    setFolders(folders.map((f) => (f.id === folder.id ? updatedFolder : f)));
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{folder.name}</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Etiquetas (separadas por comas)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <button onClick={addNote} className="bg-green-500 text-white px-4 py-2 rounded">
        Agregar Nota
      </button>
      <ul className="mt-4">
        {folder.notes.map((note) => (
          <li key={note.id} className="border-b py-2">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
            <p className="text-sm text-gray-500">Categoría: {note.category}</p>
            <p className="text-sm text-gray-500">Etiquetas: {note.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;