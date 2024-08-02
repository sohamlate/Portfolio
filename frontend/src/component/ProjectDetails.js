// src/components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import huehub from "../assets/huehub.png";
import portfolio from "../assets/portfolio.png";

function ProjectDetails() {
  const { id } = useParams();

  const projectDetails = {
    huehub: {
      title: 'Huehub',
      description: `I have developed a comprehensive platform for artists to sell and purchase their artwork, aimed at fostering a vibrant community of creators and art enthusiasts. Utilizing the MERN stack, this project seamlessly integrates a dynamic user interface with robust backend functionality, enabling artists to showcase their creations, set prices, and handle transactions securely.`,
      img: huehub,
      contributions: `My Contributions:

    - Architected and developed the Huehub platform using the MERN stack, ensuring robust performance and scalability.
    - Implemented secure user authentication with JWT encryption for enhanced security.
    - Leveraged Cloudinary for seamless image uploads and incorporated image optimization techniques to improve performance.
    - Integrated Razorpay to facilitate secure and efficient payment processing.
    - Developed comprehensive user management features including registration, login, logout, and profile management.
    - Implemented SMTP services for password reset functionalities.
    - Deployed the application on Vercel and Render to ensure high availability and reliability.
    - Created a user-friendly interface with React components for smooth and intuitive navigation.
    - Utilized Git for version control, enabling efficient team collaboration and code management.
    - Implemented comprehensive error handling mechanisms to ensure application stability and resilience.`,
      technologies: `Technologies Used:

    - MongoDB
    - Express.js
    - React
    - Node.js
    - JWT Authentication
    - Cloudinary
    - Razorpay
    - SMTP (Nodemailer)
    - Git Version Control
    - JavaScript 
    - HTML
    - CSS
    - Responsiveness`,
      problems: `Problems Faced:

      - Image Upload Performance: Initially faced issues with slow image uploads due to large file sizes. Solved by integrating Cloudinary and applying image compression techniques to optimize performance.
      - Payment Gateway Integration: Encountered challenges integrating Razorpay for seamless payment processing. Overcame this by thoroughly understanding the Razorpay API documentation and conducting extensive testing.
      - State Management: Managing state across various components became complex. Addressed this by incorporating Redux for efficient state management and data flow.
      - Deployment Challenges: Faced difficulties in deploying the application reliably on cloud platforms. Resolved by using a combination of Vercel and Render, ensuring smooth deployment and scalability.
      - Security Concerns: Ensuring secure authentication and data protection was a priority. Implemented JWT encryption and robust error handling mechanisms to enhance security.`,
      unique: `Unique Features:

      Huehub stands out by offering a dedicated platform that not only allows artists to sell their artwork but also fosters a sense of community among artists and art enthusiasts. The platform's emphasis on secure transactions, real-time updates, and image optimization sets it apart from other marketplaces, providing a comprehensive and engaging experience for users.`,
    },
    portfolio: {
      title: 'Portfolio',
      description: `I have developed a professional portfolio website to showcase my skills, projects, and achievements. This project aims to provide a personal space to highlight my technical expertise, work experiences, and educational background. Utilizing the MERN stack, the website offers a seamless user experience with dynamic content and responsive design.`,
      img: portfolio,
      contributions: `My Contributions:
    
      - Designed and developed the portfolio website using the MERN stack, ensuring a modern and responsive design.
      - Implemented a clean and intuitive user interface with React, featuring smooth navigation and interactive elements.
      - Developed the backend with Express.js and Node.js, enabling dynamic content management and API integrations.
      - Utilized MongoDB for efficient data storage and retrieval, ensuring quick access to portfolio content.
      - Incorporated user authentication for secure access to administrative features, allowing easy updates to projects and personal information.
      - Ensured cross-browser compatibility and mobile responsiveness, providing a consistent experience across devices.
      - Implemented animations and transitions using CSS and JavaScript to enhance user engagement.
      - Deployed the website using Vercel for reliable hosting and continuous deployment, ensuring high availability and performance.
      - Leveraged Git for version control, enabling smooth development workflow and collaboration.
      - Conducted extensive testing and debugging to ensure a bug-free and user-friendly website.`,
      technologies: `Technologies Used:
    
      - MongoDB
      - Express.js
      - React
      - Node.js
      - JWT Authentication
      - Git Version Control
      - JavaScript (ES6+)
      - HTML
      - CSS
      - Responsive Design Principles
      - API Development
      - Vercel for Deployment`,
      problems: `Problems Faced:
    
      - **Responsive Design:** Ensuring the website looked great on all devices required extensive testing and tweaking. Solved by using media queries and responsive design principles.
      - **State Management:** Managing state efficiently across various components was challenging. Addressed by using React's Context API and hooks.
      - **SEO Optimization:** Improving the website's visibility on search engines was crucial. Implemented best SEO practices and used tools like Google Analytics to monitor performance.
      - **Performance Optimization:** Ensured the website loaded quickly by optimizing images and using lazy loading techniques.
      - **Security Concerns:** Protecting the website from vulnerabilities was a priority. Implemented secure coding practices and regular security audits.`,
      unique: `Unique Features:
    
      This portfolio website stands out with its sleek and modern design, providing an engaging and interactive experience for visitors. The use of animations, responsive design, and secure user authentication makes it a comprehensive platform to showcase my professional journey and technical skills effectively.`,
    },
    
  };

  const project = projectDetails[id];
  

  return (
    <div className="text-white text-sm p-6">
      <h1 className="text-3xl mt-12 ml-24">{project.title}</h1>
      <div className="bg-white h-[0.2px] w-1/2 ml-24 mr-8 mb-8"></div>
      <div className="flex mx-[10%] mb-8">
        <p className="mr-8 whitespace-pre-line">{project.description}</p>
        <img src={project.img} className="h-40 border-2 border-white" alt={project.title} />
      </div>
      <div className="mx-[10%]">
        <p className="mb-8 whitespace-pre-line">{project.contributions}</p>
        <p className="mb-8 whitespace-pre-line">{project.technologies}</p>
        <p className="mb-8 whitespace-pre-line">{project.problems}</p>
        <p className="whitespace-pre-line">{project.unique}</p>
      </div>
    </div>  
  );
}

export default ProjectDetails;
