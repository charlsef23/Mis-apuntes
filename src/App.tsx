import React, { useState } from 'react';
import NoteList from './components/NoteList';
import FolderList from './components/FolderList';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Folder } from './types';

const App: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const addFolder = (name: string) => {
    const newFolder: Folder = { id: Date.now(), name, notes: [] };
    setFolders([...folders, newFolder]);
  };

  const deleteFolder = (id: number) => {
    setFolders(folders.filter((folder) => folder.id !== id));
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Mis Apuntes</h1>
        <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <FolderList
          folders={folders}
          onAddFolder={addFolder}
          onDeleteFolder={deleteFolder}
          onSelectFolder={setCurrentFolder}
        />
        {currentFolder && (
          <NoteList folder={currentFolder} setFolders={setFolders} folders={folders} />
        )}
      </div>
    </div>
  );
};

export default App;