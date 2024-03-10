import React, { useState } from "react";
import LegacyImage from "next/legacy/image";

export default function ProjectCard({ project }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation();
        setIsClicked(!isClicked);
    };

    const handleClose = () => {
        setIsClicked(false);
    };

    const cardClass = `basis-1/3 flex-1 overflow-hidden transition-all duration-300 cursor-pointer ${
        !isClicked ? 'hover:scale-105' : ''
    } rounded-lg shadow-md hover:shadow-lg`;

    const overlayStyles = isClicked
        ? {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.05)',
            zIndex: '1000',
            width: '60vw',
            maxHeight: '80vh',
            overflowY: 'auto',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        }
        : {};
    
    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            {isClicked && (
                <div 
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                    onClick={handleClose}
                />
            )}
            <div
                className={cardClass}
                style={overlayStyles}
                onClick={handleClick}
            >
                <div className="rounded-t-lg overflow-hidden p-2 bg-white">
                    <LegacyImage
                        src={project.picture}
                        width={1200}
                        height={800}
                        layout="responsive"
                        className="object-cover"
                        alt={project.name}
                    />
                </div>
                <div className="p-4">
                    <h4 className="text-2xl font-semibold text-center">{project.name}</h4>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-4 text-center">
                        <p className="text-gray-700 font-semibold">Technologies Used</p>
                        <ul className="mt-1 list-disc list-inside text-gray-600">
                            {project.technologies && project.technologies.map((tech, index) => (
                                tech ? <li key={index}>{tech.label}</li> : null
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 text-center text-gray-600">
                        <p className="font-semibold">Creation Date</p>
                        {formatDate(project.creationDate)}
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
                            Demo
                        </button>
                        <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none">
                            Code
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
