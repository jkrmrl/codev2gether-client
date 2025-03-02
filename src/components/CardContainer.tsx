import React, {useState} from 'react';
import Card from './Card';
import TabButton from './TabButton';

const CardContainer: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Tab 1'); 

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="max-w-screen-lg mx-auto mt-8 border border-gray-300 rounded-lg">
            <div className="bg-white p-4 rounded-t-lg shadow-md">
                <div className="flex">
                    <div className="w-96 flex space-x-4">
                        <TabButton label="My projects" tabName="tab1" activeTab={activeTab} onClick={handleTabClick} />
                        <TabButton label="Shared with me" tabName="tab2" activeTab={activeTab} onClick={handleTabClick} />
                    </div>
                    <div
                        className={`cursor-pointer py-2 px-6 text-sm font-semibold text-center bg-blue-600 text-white w-auto rounded-md ml-auto hover:bg-blue-700`}
                        onClick={() => setActiveTab('tab3')}
                    >
                        Add New Project
                    </div>
                </div>
            </div>
            <div className="p-6 bg-white rounded-b-lg shadow-md">
                {activeTab === 'tab1' && (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card title="Project 1" description="Description for Project 1" />
                    <Card title="Project 2" description="Description for Project 2" />
                    <Card title="Project 3" description="Description for Project 3" />
                    <Card title="Project 4" description="Description for Project 4" />
                    </div>
                </div>
                )}

                {activeTab === 'tab2' && (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card title="Project 5" description="Description for Project 5" />
                    <Card title="Project 6" description="Description for Project 6" />
                    <Card title="Project 7" description="Description for Project 7" />
                    <Card title="Project 8" description="Description for Project 8" />
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default CardContainer;