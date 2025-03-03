import React, {useState} from 'react';
import Header from '../components/Header';

const CreateProject: React.FC = () => {
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [shareWith, setShareWith] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [access, setAccess] = useState("");

    const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
    const accessLevel = ["View Only", "Edit"];
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      console.log({
        projectTitle,
        projectDescription,
        shareWith,
      });
    };


    return (
        <>
            <Header />
            <div className="flex mt-8 mb-8 justify-center items-center min-h-screen">
                <div className="w-full max-w-2xl p-8 bg-white p-4 rounded-t-lg border border-gray-300 shadow-md">
                <h1 className="font-bold text-blue-500 text-center mb-6">Create New Project</h1>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">
                            Project Title
                        </label>
                        <input
                            type="text"
                            id="projectTitle"
                            name="projectTitle"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                            Project Description
                        </label>
                        <textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shareWith" className="block text-sm font-medium text-gray-700">
                            Share With
                        </label>
                        <input
                            type="text"
                            id="shareWith"
                            name="shareWith"
                            value={shareWith}
                            onChange={(e) => setShareWith(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter usernames"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700">
                                Access Level
                        </label>
                        <select
                            id="accessLevel"
                            name="accessLevel"
                            value={access}
                            onChange={(e) => setAccess(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {accessLevel.map((access) => (
                                <option key={access} value={access}>
                                    {access}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="programmingLanguage" className="block text-sm font-medium text-gray-700">
                                Programming Language
                        </label>
                        <select
                            id="programmingLanguage"
                            name="programmingLanguage"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {programmingLanguages.map((language) => (
                                <option key={language} value={language}>
                                    {language}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
                    >
                        Create Project
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default CreateProject;