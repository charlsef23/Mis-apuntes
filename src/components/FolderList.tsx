import React from 'react';

interface FolderListProps {
  onCategorySelect: (categoryId: string) => void;
}

const FolderList: React.FC<FolderListProps> = ({ onCategorySelect }) => {
  // Simulamos las categorías
  const categories = ['Math', 'History', 'Science'];

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className="block p-4 bg-blue-500 text-white rounded mb-4"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FolderList;