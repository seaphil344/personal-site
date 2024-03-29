import Head from "next/head";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import {
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import camAvatar from "../../public/camAvatar.png";
import code from "../../public/code.png";
import framework from "../../public/framework.png";
import technology from "../../public/technology.png";
import Image from "next/image";
import LegacyImage from "next/legacy/image";

export default function Home({ data }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cameron Philbert</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbycam</h1>
            <ul className="flex items-center">
              <Link href="/">Home</Link>
              <Link href="/projects" className="px-10">Projects</Link>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Cameron Philbert
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Mechanical Engineer and Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Blending Mechanical Engineering Expertise with Cutting-Edge Software Development
              Discover bespoke solutions tailored to your programming and design aspirations with a seasoned freelancer at your service.
            </p>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={camAvatar} fill />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills and Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Greetings! I'm Cameron, your go-to freelance innovator at the nexus of mechanical engineering and web development. 
            Fueled by a relentless passion to transform visions into reality, I merge analytical engineering methodologies with 
            dynamic programming prowess. From sculpting intricate mechanical systems to architecting user-centric websites, my 
            mission is to engineer bespoke solutions that resonate with your objectives, ensuring meticulous attention to detail 
            and unwavering dedication to excellence.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <LegacyImage src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Languages
              </h3>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Matlab</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <LegacyImage src={framework} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Frameworks and Databases
              </h3>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">NodeJS/Express</p>
              <p className="text-gray-800 py-1">Tailwind</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <LegacyImage src={technology} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Technologies and Engineering Skills
              </h3>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Fusion360</p>
              <p className="text-gray-800 py-1">Bubble</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Wordpress</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Featured Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Dive into My Portfolio: A Showcase of Ingenuity and Expertise
            Embark on a journey through a curated selection of my most impactful 
            projects, each a testament to my interdisciplinary approach and commitment 
            to innovation. Discover how I've harnessed the power of engineering and 
            technology to solve real-world challenges and create value.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {data.data.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section>
          <div className="py-5 dark:text-white">
            <h3 className="text-3xl pb-5 dark:text-white">Contact Me</h3>
            <p>Whether you're looking to collaborate on a new project, seeking some expert advice, or just want to drop a friendly "hello," I'm excited to connect with you.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 pb-5 text-gray-600 dark:text-gray-400">
              <a href="mailto:camphildev@gmail.com">
                <AiFillMail />
              </a>
              <a href="https://github.com/seaphil344">
                <AiFillGithub />
              </a>
            </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Replace this URL with the API endpoint you want to fetch data from.
  const apiUrl = 'http://localhost:3000/api/projects';

  const res = await fetch(apiUrl);
  const data = await res.json();

  // If there's an error or the data is empty, return an empty array.
  if (!data || data.error) {
    return { props: { data: [] } };
  }

  //console.log(data.data)
  return { props: { data } };
}