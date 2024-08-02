import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleScrollTo = (sectionId) => {
        navigate("/"); // Navigate to home
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Delay to allow navigation to complete
    };

    return (
        <div className="flex mx-[35%] pt-[0.5rem] justify-evenly text-sm">
            <button onClick={() => handleScrollTo("basic")} className="hover:text-blue-500 cursor-pointer">Home</button>
            <button onClick={() => handleScrollTo("about")} className="hover:text-blue-500 cursor-pointer">About</button>
            <button onClick={() => handleScrollTo("project")} className="hover:text-blue-500 cursor-pointer">Project</button>
            <button onClick={() => handleScrollTo("contact")} className="hover:text-blue-500 cursor-pointer">Contact</button>
        </div>
    );
}

export default Navbar;
