//import Image from "next/image";
import LegacyImage from "next/legacy/image";

export default function ProjectCard({project}) {
    return (
        <div className="basis-1/3 flex-1 bg-slate-400 shadow-lg rounded-lg">
            <div className="rounded-t-lg">
                <LegacyImage src={project.picture} width={"100%"} height={"75%"} layout="responsive" className="object-cover rounded-t-lg"/>
            </div>
            <div className="text-center"><h4 className="text-2xl">{project.name}</h4></div>
            <div><p>{project.description}</p></div>
            <div className="text-center py-2">
                <p>Technologies Used</p>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="text-center">Creation Date</div>
            <div className="flex flex-row justify-center">
                <div className="px-8">Demo</div>
                <div className="px-8">Code</div>
            </div>
        </div>
    );
  }