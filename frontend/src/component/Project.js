import React from "react";
import huehub from "../assets/huehub.png";
import portfolio from "../assets/portfolio.png";
import { useNavigate } from "react-router-dom";

const Project = () => {
    const navigate = useNavigate();

    const navigateToProject = (id) => {
      navigate(`/project/${id}`);
    };
  

    
    return (
        <div className="text-white">
          <p className="text-2xl inline-block mt-[3rem] ml-[6rem]">Contributed in ...</p>
          <div className="bg-white h-[0.2px] w-50% ml-[6rem] mr-[2rem]"></div>
    
          <div className="flex gap-x-[2rem] mt-[3rem] ">
            <div className="relative h-[13rem] w-[30rem]  ml-[6rem]  cursor-pointer"onClick={() => navigateToProject('huehub')} >
              <img
                src={huehub}
                className="text-sm h-[13rem] aspect-square border-2 border-white cursor-pointer"
                onClick={() => navigateToProject('huehub')}
                alt="Huehub"
              />
              <div className="absolute inset-0 flex  items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity">
                  <span className="text-white text-lg">Open Now</span>
              </div>
            </div>
            <div className="mr-[2rem]">
              I have developed a comprehensive platform for artists to sell and purchase their artwork, aimed at fostering a vibrant community of creators and art enthusiasts. Utilizing the MERN stack, this project seamlessly integrates a dynamic user interface with robust backend functionality, enabling artists to showcase their creations, set prices, and handle transactions securely.
              <a href="https://frontend-dusky-rho.vercel.app/" className="text-blue-600" target="_blank" rel="noopener noreferrer">Visit site</a>
            </div>
          </div>
    
          <div className=" relative mt-[5rem] flex gap-x-[2rem]">
            <div className="ml-[6rem]">
              I have created a dynamic portfolio website to showcase my diverse range of projects and technical skills. Built using the MERN stack, this portfolio serves as a comprehensive platform to present my work, from web development projects to complex data structures and algorithms implementations. The website features a sleek and modern design, with sections dedicated to each project, providing detailed descriptions, technologies used, and live demos or source code links.
              <a href="http://localhost:3000/" className="text-blue-600" target="_blank" rel="noopener noreferrer">Visit site</a>
            </div>
            <div className="relative h-[13rem] w-[30rem]  ml-[6rem]  cursor-pointer"onClick={() => navigateToProject('huehub')} >
              <img
                src={portfolio}
                className="h-[13rem] m-[3rem] border-2 border-white cursor-pointer"
                onClick={() => navigateToProject('portfolio')}
                alt="Portfolio"
              />
                <div className="absolute inset-0 flex  items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity">
                    <span className="text-white text-lg">Open Now</span>
                </div>
            </div>
          </div>
      </div>


    );
}

export default Project;