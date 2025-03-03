import React, {useState} from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faShareAlt, faHistory, faSave } from '@fortawesome/free-solid-svg-icons';

const Editor: React.FC = () => {
    const [code, setCode] = useState<string>('');
    const [projectName, setProjectName] = useState('My Project');

    const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    return (
        <>
            <Header />
            <div className="flex h-screen">
                <div className="flex-1 border-r border-gray-300 flex">
                    <div className="flex flex-col p-2 border-r border-gray-300">
                        <button className="btn">
                            <FontAwesomeIcon icon={faEdit} className="mr-2" />
                        </button>
                        <button className="btn">
                            <FontAwesomeIcon icon={faHistory} className="mr-2" />
                        </button>
                        <button className="btn">
                            <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b border-gray-300">
                            <div className="flex items-center">
                                <span className="font-semibold">{projectName}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="btn">
                                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                                </button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition">
                                    Run
                                </button>
                            </div>
                        </div>

                        <div className="flex-1">
                            <textarea
                                value={code}
                                onChange={handleCodeChange}
                                placeholder="Write your code here..."
                                className="w-full h-full p-4 text-sm font-mono border-none resize-none focus:outline focus:outline-blue-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 border-l border-gray-300 flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-gray-300">
                        <span className="font-semibold">Output</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition">
                            Clear
                        </button>
                    </div>

                    <iframe
                        title="output"
                        srcDoc={code}
                        sandbox="allow-scripts"
                        className="w-full h-full border-none"
                    />
                </div>
            </div>
        </>
    );
};

export default Editor;