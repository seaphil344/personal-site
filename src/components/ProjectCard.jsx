import Image from "next/image";
import web3 from "../../public/web3.png";

export default function ProjectCard() {
    return (
        <div className="basis-1/3 flex-1 bg-slate-400 shadow-lg rounded-lg">
            <div className="rounded-t-lg"><Image src={web3} className="object-cover rounded-t-lg"/></div>
            <div className="text-center"><h4 className="text-2xl">Project Name</h4></div>
            <div><p>Project Description</p></div>
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