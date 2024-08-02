import React from "react";
import profilep from "../assets/profilep.jpg";


const About = () => {
    return (
        <div className=" text-white">
            <p className="text-2xl inline-block mt-[3rem] ml-[6rem]">About me</p>
            <div className="bg-white h-[0.2px] w-50% ml-[6rem] mr-[2rem]" ></div>
            <div className="flex mt-[3rem] ">
                <div className="ml-[10%] mr-[2%] ">
                <div class="max-w-8xl mx-auto p-6 bg-slate-300 rounded-lg shadow-lg">

  
                <p class="text-sm text-gray-700 mb-4 ">
                    Hi, I'm <span class="font-semibold">Soham Sanjay Late</span>, a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development began in 2022, and since then, I've delved deep into the MERN stack, mastering HTML, CSS, Tailwindcss, JavaScript, React, Node.js, and Express. Over the past few years, I've developed and deployed several projects, showcasing my ability to turn ideas into live, functional websites.
                </p>

                <p class="text-sm text-gray-700 mb-4">
                    In addition to my web development skills, I have a strong foundation in Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP) using C++. This technical expertise has been instrumental in solving complex problems efficiently and writing clean, maintainable code.
                </p>

                
                <h2 className="text-1xl font-bold mb-4 text-gray-800">Education</h2>

      <div className="relative border-l border-gray-700 ml-4 mb-6">
        <div className="mb-4 ml-6">
          <div className="absolute w-3 h-3 mt-1.5 -left-1.5 border border-white bg-gray-700"></div>
          <h3 className="text-sm font-semibold text-gray-900">Renavikar High School</h3>
          <p className="text-sm font-normal text-gray-700">SSC 91.60%</p>
        </div>
        <div className="mb-4 ml-6">
          <div className="absolute w-3 h-3  mt-1.5 -left-1.5 border border-white  bg-gray-700"></div>
          <h3 className="text-sm font-semibold text-gray-900">Dnyantirth International College</h3>
          <p className="text-sm font-normal text-gray-700">HSC 88.17%</p>
        </div>
        <div className="mb-4 ml-6">
          <div className="absolute w-3 h-3  mt-1.5 -left-1.5 border border-white  bg-gray-700"></div>
          <h3 className="text-sm font-semibold text-gray-900">PICT College</h3>
          <p className="text-sm font-normal text-gray-700">1st year 8.8 CGPA</p>
        </div>
        <div className="mb-4 ml-6">
          <div className="absolute w-3 h-3  mt-1.5 -left-1.5 border border-white  bg-gray-700"></div>
          <h3 className="text-sm font-semibold text-gray-900">PICT College</h3>
          <p className="text-sm font-normal text-gray-700">2nd year 9.25 CGPA</p>
        </div>
      </div>

                    <h2 class="text-1xl font-bold mb-4 text-gray-800">Technical Skills</h2>
                    <ul class="list-disc list-inside text-sm text-gray-700 mb-6">
                        <li>Web Development: HTML, CSS, JavaScript, React, Node.js, Express</li>
                        <li>Programming Languages: C++</li>
                        <li>Core Concepts: Data Structures and Algorithms, Object-Oriented Programming</li>
                    </ul>

                    <h2 class="text-1xl font-bold mb-4 text-gray-800">Hobbies</h2>
                    <p class="text-sm text-gray-700 mb-6">
                        When I'm not coding, you can find me cycling or playing football. These activities not only help me stay physically active but also teach me the importance of teamwork, strategy, and perseverance.
                    </p>

                    <h2 class="text-1xl font-bold mb-4 text-gray-800">Design Skills</h2>
                    <p class="text-sm text-gray-700">
                        For the design of my portfolio site, I prefer using Tailwind CSS. Its utility-first approach allows me to create custom, responsive designs quickly and efficiently. The flexibility of Tailwind CSS ensures that my projects not only function well but also look modern and professional.
                    </p>
                    </div>
                </div>
                <div>
                    <img src={profilep} alt="profile" className="h-[25%]"></img>
                </div>
            </div>
        </div>


    );
}

export default About;