import React from 'react';

interface TabButtonProps {
    label: string;
    tabName: string;
    activeTab: string;
    onClick: (tabName: string) => void;
}
  
const TabButton: React.FC<TabButtonProps> = ({ label, tabName, activeTab, onClick }) => {
    return (
      <div
        className={`cursor-pointer py-2 text-sm font-semibold text-center w-full ${
          activeTab === tabName
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-blue-600'
        }`}
        onClick={() => onClick(tabName)}
      >
        {label}
      </div>
    );
};
  
export default TabButton;