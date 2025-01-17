import React, { useState } from 'react';
import { Folder } from '../types';

interface FolderListProps {
  folders: Folder[];
  onAddFolder: (name: string) => void;
  onDeleteFolder: (id: number) => void;
  onSelectFolder: (folder: Folder) => void;
}

const FolderList: React.FC<FolderListProps> = ({
  folders,
  onAddFolder,
  onDeleteFolder,
  onSelectFolder,
}) => {
  const [folderName, setFolderName] = useState('');

  const handleAddFolder = () => {
    if (folderName.trim()) {
      onAddFolder(folderName);
      setFolderName('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Nueva carpeta"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <button onClick={handleAddFolder} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Agregar Carpeta
      </button>
      <ul className="mt-4">
        {folders.map((folder) => (
          <li key={folder.id} className="flex justify-between items-center">
            <span
              onClick={() => onSelectFolder(folder)}
              className="cursor-pointer hover:underline"
            >
              {folder.name}
            </span>
            <button
              onClick={() => onDeleteFolder(folder.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;