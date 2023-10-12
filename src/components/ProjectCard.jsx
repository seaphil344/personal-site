import React from "react";
import LegacyImage from "next/legacy/image";

export default function ProjectCard({ project }) {
    return (
        <div className="basis-1/3 flex-1 bg-slate-400 shadow-lg rounded-lg overflow-hidden">
            <div className="rounded-t-lg overflow-hidden">
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
                <p className="mt-2">{project.description}</p>
                <div className="mt-4 text-center">
                    <p className="text-gray-700">Technologies Used</p>
                    <ul className="mt-1 list-disc list-inside text-gray-600">
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="mt-4 text-center text-gray-600">
                    <p>Creation Date</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
                        Demo
                    </button>
                    <button className="px-4 py-2 text-blue-500 rounded hover:text-blue-600 focus:outline-none">
                        Code
                    </button>
                </div>
            </div>
        </div>
    );
}
